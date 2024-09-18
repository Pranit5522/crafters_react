import env from "dotenv"
import express from "express"
import bodyParser from "body-parser";
import pg from "pg";
import path from 'path';
import bcrypt from "bcrypt";
import multer from "multer";
import cors from "cors"
import axios from "axios";

env.config()

const port = process.env.WEBSITE_PORT;
const salt_rounds = process.env.SALT_ROUNDS;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

app.use('/images', express.static('upload/images'))

app.post('/upload', upload.array('products', 10), (req, res) => {
    if (!req.files) {
        return res.status(400).json({ success: 0, message: 'No files uploaded' });
    }
    const fileUrls = req.files.map(file => `http://localhost:${port}/images/${file.filename}`);
    console.log(fileUrls)
    res.json({
        success: 1,
    });
});

//Api to get allproducts
app.get("/all_products", async(req, res)=>{
    try{
        const result = await db.query("SELECT * FROM all_products");
        res.json(
            {
                success:1,
                row: result.rows
            }
        )
    } catch(err){
        res.status(500).json(
            {
                success: 0,
                message: "Error in fetching products"
            }
        )
    }
})

//api to get all categories
app.get("/all_categories", async(req, res)=>{
    try{
        const result = await db.query("SELECT * FROM categories");
        res.json(
            {
                success:1,
                row: result.rows
            }
        )
    } catch(err){
        res.status(500).json(
            {
                success: 0,
                message: "Error in fetching products"
            }
        )
    }
})
// API to add new products
app.post('/add_product', upload.array('products', 10), async (req, res) => {
    const { name, category, old_price, new_price } = req.body;
    const files = req.files;

    try {
        await db.query('BEGIN');

        const result = await db.query(
            "INSERT INTO all_products(product_name, category_id, new_price, old_price) VALUES($1, $2, $3, $4) RETURNING *",
            [name, category, new_price, old_price]
        );
        const productId = result.rows[0].id;

        let fileUrls = [];

        await db.query('INSERT INTO images(url, is_thumbnail, product_id) VALUES($1, true, $2)', [fileUrls[0], productId]);
        fileUrls = files.map(file => `http://localhost:${process.env.WEBSITE_PORT}/images/${file.filename}`);

        for(let i=1;i<fileUrls.length;i++) {
            await db.query('INSERT INTO images(url, product_id) VALUES($1, $2)', [fileUrls[i], productId]);
        }

        await db.query('COMMIT');
        res.json({
            success: 1,
            productId,
            fileUrls: files.length > 0 ? fileUrls : []
        });

    } catch (err) {
        await db.query('ROLLBACK');
        console.log(err);
        res.status(500).json({
            success: 0,
            message: "Error in product creation, try again"
        });
    }
});

// API to delete a product
app.delete("/remove_product", async(req, res)=>{
    const id = req.body.id;

    try{
        const result = await db.query("DELETE FROM all_products WHERE id=$1 RETURNING *", [id]);
        console.log(result);
        if(result.rows.length!==0){
            res.json(
                {
                    success:1,
                    row: result.rows[0]
                }
            )
        } else{
            res.status(404).json(
                {
                    success: 0,
                    message: "Product Not Found"
                }
            )
        }

    } catch(err){
        res.status(500).json(
            {
                success: 0,
                message: "Error in product deletion try again"
            }
        )
    }
})

app.listen(port, (error)=>{
    if(error){
        console.log(`Error: ${error}` )
    }else{
        console.log(`Server running`);
    }
})
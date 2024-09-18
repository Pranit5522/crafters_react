-- all_products table creation
CREATE TABLE all_products (
    id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL,
    category_id INT NOT NULL,
    new_price NUMERIC NOT NULL,
    old_price NUMERIC NOT NULL,
    create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    available BOOLEAN DEFAULT TRUE,
    FOREIGN KEY(category_id) REFERENCES categories(id)
);

-- To insert new products
INSERT INTO all_products (product_name, category_id, new_price, old_price)
VALUES ($1, $2, $3, $4)
RETURNING *;

-- To remove products
DELETE FROM all_products WHERE id = $1 RETURNING *;

-- To fetch all products
SELECT * FROM all_products

-- create table categories
CREATE TABLE categories(
	id INT PRIMARY KEY,
	category_name VARCHAR(100) NOT NULL
);
--inserting data
INSERT INTO categories (id, category_name)
VALUES 
    (1, 'Sofas'),
    (2, 'Matresses'),
    (3, 'Home Decor'),
    (4, 'Furnishings'),
    (5, 'Lamps & Lightings'),
    (6, 'Dining Tables'),
    (7, 'Chairs');

-- create table for stored images url
CREATE TABLE images(
	id SERIAL PRIMARY KEY,
	url TEXT NOT NULL,
	is_thumbnail BOOLEAN DEFAULT false,
	product_id INT NOT NULL,
	FOREIGN KEY(product_id) REFERENCES all_products(id)
);
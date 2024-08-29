const products = [
    {
        id:1,
        product_name:"Udine Sheesham Wood 3 Seater Sofa in Scratch Resistant Honey Oak Finish",
        old_price:48499,
        new_price:37499,
        category_id:1 
    },
    {
        id:2,
        product_name:"Niki Fabric 2 Seater Sofa in Coffee Brown Colour",
        old_price:19999,
        new_price:16199,
        category_id:1 
    },
    {
        id:3,
        product_name:"Adalia Leatherette 3 Seater Sofa In Black",
        old_price:54999,
        new_price:38999,
        category_id:1 
    },
    {
        id:4,
        product_name:"Fuego Fabric 1 Seater Sofa In Garnet Red Colour",
        old_price:26499,
        new_price:22999,
        category_id:1 
    },
    {
        id:5,
        product_name:"Java Fabric 3 Seater Sofa In Imperial Green Colour",
        old_price:33499,
        new_price:23399,
        category_id:1 
    },
    {
        id:6,
        product_name:"Platinum Orthopedic Euro Top 10 Inch Memory Foam With Spring King Size Mattress (with 2 Free Pillows)",
        old_price:79799,
        new_price:39899,
        category_id:2
    },
    {
        id:7,
        product_name:"Naturopathy Orthopedic 8 Inches HR & Latex Foam Mattress In King Size (Get 2 Free Pillows)",
        old_price:64399,
        new_price:32174,
        category_id:2
    },
    {
        id:8,
        product_name:"Emerald Plus Euro Top Plush Comfort 10 Inch Pocketed Spring King Size Mattress Get Zero Partner Disturbance (Get 2 Free Pillows)",
        old_price:44499,
        new_price:22249,
        category_id:2 
    },
    {
        id:9,
        product_name:"King of Dreams 10 Inch Pocket Spring & Latex Foam & Memory Foam Mattress In King Size",
        old_price:127998,
        new_price:95999,
        category_id:2
    },
    {
        id:10,
        product_name:"Emerald Reversible Hybrid 8 Inch Pocketed Spring Queen Size Mattress (Get 2 Free Pillows)",
        old_price:35399,
        new_price:17699,
        category_id:2
    },
    {
        id:11,
        product_name:"(Set of 2) Blue Elephant 5 cm Mini Metal Figurine (Blue)",
        old_price:999,
        new_price:339,
        category_id:3
    },
    {
        id:12,
        product_name:"Flying Horse Multicolour Wood Figurines",
        old_price:5359,
        new_price:4019,
        category_id:3 
    },
    {
        id:13,
        product_name:"Aluminium Gold Half Human Face Statue",
        old_price:3999,
        new_price:3499,
        category_id:3
    },
    {
        id:14,
        product_name:"Glass Heaven Desk Pot",
        old_price:699,
        new_price:199,
        category_id:3
    },
    {
        id:15,
        product_name:"Iron Black Stark Iron Timepiece Wall Clock",
        old_price:6999,
        new_price:5699,
        category_id:3
    },
    {
        id:16,
        product_name:"Brown Solid Jute 7 Ft Light Filtering Eyelet Door Curtain",
        old_price:1199,
        new_price:611,
        category_id:4
    },
    {
        id:17,
        product_name:"Grey Shaggy Cotton 3 ft x 5 ft Machine Made Carpet",
        old_price:1999,
        new_price:1424,
        category_id:4
    },
    {
        id:18,
        product_name:"Beige Cotton Striped 7 ft Light Filtering Eyelet Door Curtain",
        old_price:1099,
        new_price:664,
        category_id:4
    },
    {
        id:19,
        product_name:"Beige Geometric Jute 3 ft x 3 ft Hand Woven Round Carpet",
        old_price:2339,
        new_price:1119,
        category_id:4
    },
    {
        id:20,
        product_name:"Black Chenille Vintage 4 x 6 Feet Machine Made Carpet",
        old_price:1017,
        new_price:549,
        category_id:4 
    },
    {
        id:21,
        product_name:"Classic Wooden Floor Lamp",
        old_price:7500,
        new_price:1719,
        category_id:5 
    },
    {
        id:22,
        product_name:"Adriana Off White Cotton Shade Night Lamp With Wood Base",
        old_price:3200,
        new_price:1358,
        category_id:5 
    },
    {
        id:23,
        product_name:"Atlier White Metal Ceiling Flush Mount",
        old_price:1599,
        new_price:692,
        category_id:5 
    },
    {
        id:24,
        product_name:"Beautiful Blue & Chrome Metal Study Lamp",
        old_price:1899,
        new_price:919,
        category_id:5 
    },
    {
        id:25,
        product_name:"Astronaut Moon LED Night Lamp (Warm White)",
        old_price:699,
        new_price:499,
        category_id:5 
    },
    {
        id:26,
        product_name:"Clarion Sheesham Wood 6 Seater Dining Table In Honey Oak Finish",
        old_price:47499,
        new_price:33499,
        category_id:6 
    },
    {
        id:27,
        product_name:"Tides Solid Wood 4 Seater Dining Table In Honey Finish",
        old_price:44499,
        new_price:35300,
        category_id:6 
    },
    {
        id:28,
        product_name:"Segur Sheesham Wood 4 Seater Dining Table In Provincial Teak Finish",
        old_price:26999,
        new_price:16499,
        category_id:6 
    },
    {
        id:29,
        product_name:"Inaaya Sheesham Wood 6 Seater Dining Table Dark Mahogany Finish",
        old_price:40499,
        new_price:24499,
        category_id:6 
    },
    {
        id:30,
        product_name:"Barcelona Solid Wood 6 Seater Foldable Dining Table in Scratch Resistant Honey Oak Finish",
        old_price:28999,
        new_price:21999,
        category_id:6 
    },
    {
        id:31,
        product_name:"Harold Sheesham Wood Rocking Chair in Scratch Resistant Provincial Teak Finish",
        old_price:23999,
        new_price:17999,
        category_id:7
    },
    {
        id:32,
        product_name:"Peshtigo Sheesham Wood Arm Chair In Provincial Teak Finish",
        old_price:13999,
        new_price:10499,
        category_id:7
    },
    {
        id:33,
        product_name:"Amherst Sheesham Wood Arm Chair In Honey Oak Finish",
        old_price:15499,
        new_price:10999,
        category_id:7
    },
    {
        id:34,
        product_name:"Flex Leatherette Ergonomic Chair In Black & white Colour",
        old_price:24122,
        new_price:12999,
        category_id:7 
    },
    {
        id:35,
        product_name:"Sall Mid Fabric Ergonomic Chair in Milan Red Colour",
        old_price:8920,
        new_price:7290,
        category_id:7 
    }
]

export default products
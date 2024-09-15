import React, {useContext} from "react";
import { ShopContext } from "../Context/ShopContext";
import Hero from "../Components/Hero/Hero";
import ItemSlider from "../Components/ItemSlider/ItemSlider";
import About from "../Components/About/About";
import FAQ from "../Components/FAQ/FAQ";
import Newsletter from "../Components/Newsletter/Newsletter";


function Home(){

    const { all_product } = useContext(ShopContext);
    return(
        <div>
            <Hero />
            <div className="favorites">
                <div className="intro">
                    <div>
                        <h2>FAVORITES</h2>
                        <p>We have made a selection of our customers' favorite products</p>
                    </div>
                    <a href="/categories">SEE ALL</a>
                </div>
                <ItemSlider 
                    items={all_product}
                />
            </div>
            <About />
            <h2 className="faq-heading" id="faq">FAQ</h2>
            <FAQ 
                question="How to place an order in an online store?"
                answer="Choose a product on our website. Add it to the cart. Specify your details, method, and address of delivery. Pay for the order (the final price will be indicated on the payment page). Specify the delivery method."
            />

            <FAQ 
                question="What payment methods are available?"
                answer="We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. You can choose your preferred method at checkout."
            />

            <FAQ 
                question="Can I change or cancel my order after it is placed?"
                answer="Yes, you can change or cancel your order within 24 hours of placing it. Please contact our customer service team to assist with this process."
            />

            <FAQ 
                question="What is the estimated delivery time?"
                answer="The estimated delivery time varies based on the product and your location. Typically, it takes 5-7 business days for standard delivery. Expedited options are also available."
            />

            <FAQ 
                question="Do you offer international shipping?"
                answer="Yes, we do offer international shipping to select countries. Additional shipping charges and customs duties may apply. Please check our shipping policy for more details."
            />

            <FAQ 
                question="What is your return policy?"
                answer="We offer a 30-day return policy for unused and undamaged products in their original packaging. Please contact our customer service to initiate a return."
            />
            <Newsletter />
        </div>
    );
}

export default Home;
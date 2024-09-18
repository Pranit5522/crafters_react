import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";
import InputFileUpload from "../UploadButton/UploadButton";
import CategorySelect from "../CategorySelect/CategorySelect";

function AddProduct() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [files, setFiles] = useState([]);

    async function onSubmit(data) {

        if (files.length < 2) {
            alert('Please upload at least 2 images.');
            return;
        }

        const formData = new FormData();
        
        formData.append('name', data.productName);
        formData.append('category', data.category);
        formData.append('old_price', data.price);
        formData.append('new_price', data.offerPrice);
        
        files.forEach(file => formData.append('products', file));
        
        try {
            const response = await fetch('http://localhost:3000/add_product', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            
            if (!result.success) {
                throw new Error('Error adding product');
            }
            
            alert("Product added successfully!");
            window.location.reload();
            
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }
    

    return (
        <div className="add-product">
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="field-name">Product Name</p>
                    <input
                        type="text"
                        placeholder="Type Here"
                        className="text-input"
                        {...register('productName', { required: 'Product Name is required' })}
                    />
                    {errors.productName && <p className="error-message">{errors.productName.message}</p>}

                    <div className="price">
                        <div>
                            <p className="field-name">Price</p>
                            <input
                                type="text"
                                className="text-input"
                                placeholder="Type Here"
                                {...register('price', {
                                    required: 'Price is required',
                                    pattern: {
                                        value: /^[0-9]+(\.[0-9]{1,2})?$/,
                                        message: 'Price must be a valid number'
                                    }
                                })}
                            />
                            {errors.price && <p className="error-message">{errors.price.message}</p>}
                        </div>
                        <div>
                            <p className="field-name">Offer Price</p>
                            <input
                                type="text"
                                className="text-input"
                                placeholder="Type Here"
                                {...register('offerPrice', {
                                    required: 'Offer Price is required',
                                    pattern: {
                                        value: /^[0-9]+(\.[0-9]{1,2})?$/,
                                        message: 'Offer Price must be a valid number'
                                    }
                                })}
                            />
                            {errors.offerPrice && <p className="error-message">{errors.offerPrice.message}</p>}
                        </div>
                    </div>
                    <CategorySelect register={register} errors={errors} />
                    <div className="buttons">
                        <InputFileUpload files={files} setFiles={setFiles} />
                        <input type="submit" className="submit-button"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;


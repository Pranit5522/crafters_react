import React, { useEffect, useState } from 'react';
import './CategorySelect.css'; // Add this file for specific styling

function CategorySelect({ register, errors }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState(false); // To control the dropdown arrow rotation

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3000/all_categories');
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                if (data.success === 1) {
                    setCategories(data.row);
                } else {
                    setError(data.message || "Failed to load categories");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <p>Loading categories...</p>;
    }

    if (error) {
        return <p>Error loading categories: {error}</p>;
    }

    return (
        <div className="category-select">
            <p>Category</p>
            <div className="dropdown-container">
                <select
                    {...register('category', { required: 'Category is required' })}
                    onClick={() => setIsOpen(!isOpen)}
                    onBlur={() => setIsOpen(false)}
                    className={`dropdown ${isOpen ? 'open' : ''}`}
                >
                    {categories.map((category) => (
                        <option key={category.id} value={category.id} className="options">
                            {category.category_name}
                        </option>
                    ))}
                </select>
                <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
            </div>
            {errors.category && <p>{errors.category.message}</p>}
        </div>
    );
}

export default CategorySelect;

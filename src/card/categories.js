import React from "react"
import { useState } from "react";
import dataGenre from "./data";

const Categories = ({ LoadBooks, setSearch }) => {
    const [selectedCategory, setSelectedCategory] = useState(dataGenre[0]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    }

    return (
        <ul className="catalogues">
            {dataGenre.map((category, index) => {
                return (
                    <li key={`category-${index}`}><button key={category.id} onClick={() => { setSearch(category.subject); LoadBooks(category.id); handleCategoryClick(category); }} className={selectedCategory === category ? "active" : ""}>{category.name}</button></li>
                )
            })}
        </ul>
    )
}

export default Categories

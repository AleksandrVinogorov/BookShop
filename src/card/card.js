import React from "react";
import { CardItem } from "./cardItem";

let Card = ({ book, addToCart }) => {
    console.log(book)

    return (
        <>
            {book.map(item => {
                     return <CardItem addToCart={addToCart} key={item.id} book={item}/>;
            })}
        </>
    )
}

export default Card
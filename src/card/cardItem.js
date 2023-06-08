import StarRatings from 'react-star-ratings';
import noImage from "../img/no-image.jpg"
import { useState } from 'react';
export const CardItem = ({ book, addToCart }) => {

    const [isClicked, setIsClicked] = useState(false);

    const handleCartButtonClick = () => {
        if (isClicked) { // если книга уже выбрана
            handleRemoveFromCart(); // вызываем функцию для удаления из корзины
        } else {
            handleBuyNowClick(); // иначе вызываем функцию для добавления в корзину
        }
    };
    const handleBuyNowClick = () => {
        setIsClicked(true);
        const selectedBook = {
            id: book.id,
            title: book.volumeInfo.title,
            thumbnail: thumbnails,
        };

        const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
        cartItems.push(selectedBook);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };
    const handleRemoveFromCart = () => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = savedCart.filter((item) => item.id !== book.id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        setIsClicked(false);
    };

    let thumbnails = book.volumeInfo.imageLinks?.smallThumbnail ?? noImage;

    const ratingsCount = book.volumeInfo.ratingsCount

    return (
        <div className="card">
            <img className="card__image" src={thumbnails} alt="" />
            <div className="card__container-info">
                <p className="card__author">
                    {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : ""}
                </p>
                <h1 className="card__title">{book.volumeInfo.title}</h1>
                <div className="card__reviews">
                    {book.volumeInfo.averageRating ?
                        <div className="card__rating">
                            <StarRatings
                                rating={book.volumeInfo.averageRating}
                                starRatedColor="orange"
                                starDimension="15px"
                                starSpacing="1px"
                            />
                        </div>
                        :
                        <div className="hidden">
                        </div>
                    }
                    {ratingsCount ?
                        <div className="card__amount-review">{ratingsCount} review</div>
                        : <div className="card__amount-review">No reviews yet</div>
                    }
                </div>
                <p className="card__description">
                    {book.volumeInfo.description
                        ? `${book.volumeInfo.description.substring(0, 95)}...`
                        : book.volumeInfo.description}
                </p>
                {book.saleInfo && book.saleInfo.saleability === 'FOR_SALE' ? <p className="card__price">{book.saleInfo.listPrice.amount}₽</p> : <p></p>}
                <button
                    onClick={() => { handleCartButtonClick(); addToCart() }}
                    className={`card__button ${isClicked ? "active-button" : ""}`}
                    disabled={false}
                >
                    {isClicked ? "In the cart" : "Buy now"}
                </button>
            </div>
        </div>
    );
};
import React, { useState, useEffect } from "react";
import Categories from "./categories";
import Card from "./card";
import dataGenre from "./data";
import LoadBooks from "./loadBooks";

const BooksList = (props) => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(dataGenre[0]);
  const [startIndex, setStartIndex] = useState(0);
  const [resultsLimit, setResultsLimit] = useState(6);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setResultsLimit(6);
    setStartIndex(0);
  }
console.log(bookData);


  const handleAddToCart = (book) => {
    setStartIndex(0);
    props.addToCart(book);
  }
  const handleLoadMore = () => {
    setResultsLimit((prev) => prev + 6);
  }
  useEffect(() => {
    LoadBooks({ search, startIndex, resultsLimit, setData });
  }, [search, selectedCategory, startIndex, resultsLimit]);

  return (
    <section className="books-container">
      <div className="books-container__catalogues">
        <Categories setSearch={setSearch} LoadBooks={LoadBooks} handleCategoryClick={handleCategoryClick} selectedCategory={selectedCategory} />
      </div>
      <div className="books-container__list">
        <Card addToCart={handleAddToCart} book={bookData} />
        <button onClick={handleLoadMore} className='load-books'><p>Load more</p></button>
      </div>
    </section>
  )
}
export default BooksList

import Slider from './slider/slider';
import BooksList from './card/booksList';
import React, { useState, useEffect } from "react";


function App() {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    updateCartItems();
  }, []);

  function updateCartItems() {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItemsCount(cartItems.length);
  }

  function addToCart(item) {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

    localStorage.setItem("cart", JSON.stringify(cartItems));
    updateCartItems();
  }


  return (
    <>
      <header className="header">
        <div className="nav-wrapper">
          <h1 className="bookshop-logo">Bookshop</h1>
          <nav className="nav__container">
            <ul className="nav__links">
              <li><a href="/#">books</a></li>
              <li><a href="/#">audiobooks</a></li>
              <li><a href="/#">Stationery & gifts</a></li>
              <li><a href="/#">blog</a></li>
            </ul>
          </nav>
          <div className="header-buttons">
            <button>
              <img src={require('./img/user.svg').default} alt=""></img>
            </button>
            <button>
              <img src={require('./img/search.svg').default} alt=""></img>
            </button>
            <button>
              <img src={require("./img/shop bag.svg").default} alt="" />
              {cartItemsCount ? <div className='value__goods'>{cartItemsCount}</div> : null}
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="slider">
          <Slider />
        </section>
        <BooksList addToCart={addToCart}/>
      </main>
      <footer></footer>
    </>
  );
}

export default App;

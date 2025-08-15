import React from 'react'
import './search.css'
import Card from './card.jsx'

const Search = () => {
  return (
    <>
      <section className='search'>
        <div className='search-container'>
          <p>search for your favorite <span>Cocktail</span></p>
          <form action="">
            <input type="text" />
          </form>
        </div>
      </section>
      <section className='card-section'>
        <div className='card-header'>
          <h1>Cocktails:</h1>
        </div>
        <div className='card-container'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  )
}

export default Search
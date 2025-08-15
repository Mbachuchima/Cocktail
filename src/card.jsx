import React from 'react'
import './card.css'

const Card = () => {
    return (
        <>
            <div className='card'>
                <div className='card-img'>
                    <img src="src/assets/imgg.jpg" alt="cocktail" />

                </div>
                <div className='card-content'>
                    <h1>Smut</h1>
                    <p>
                        <span>Category:</span>
                        Cocktail
                    </p>
                    <p>
                        <span>Serving glass:</span>
                        Cocktail glass
                    </p>
                    <button>More details</button>
                </div>
            </div>
        </>
    )
}

export default Card
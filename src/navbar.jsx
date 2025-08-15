import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <h1>
                    Chima <span>Cocktail</span>

                </h1>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Training</a>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Navbar
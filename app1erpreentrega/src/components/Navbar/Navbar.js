import '/Users/VERONICA/Desktop/Coder Rami/React JS/Primer preentrega/app1erpreentrega/src/components/Navbar/Navbar'

import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className='header'>
            <h1>Guitarras</h1>
            <div className='botonesHeader'>
                <button className='botonInicio'> Inicio</button>
                <button className='botonRegulable'> Gibson</button>
                <button className='botonFija'> Fender</button>
                <button className='botonEspirales'> Custom Shop</button>
            </div>
            <CartWidget />
        </nav>
        )
}

export default NavBar;
import './NavBar.css';
import logo from './assets'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='header'>
            <Link  to={'/'}><img  className='logo' src={logo} alt='logo' /></Link>
            
            <div className='botonesHeader'>
                <Link  to={'/'} className='botonInicio'> Inicio</Link>
                <Link  to={'/category/strato'} className='botonStrato'> Stratocaster</Link>
                <Link  to={'/category/teleca'} className='botonTeleca'> Telecaster</Link>
                <Link  to={'/category/jaguar'} className='botonJaguar'> Jaguar </Link>
            </div>
            <CartWidget />
        </nav>
        )
}

export default NavBar;
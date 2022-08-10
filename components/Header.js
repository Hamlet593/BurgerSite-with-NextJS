import Link from 'next/link';
import { SiBurgerking } from 'react-icons/si';

const Header = () => {
    return (
        <header>
            <div>
                <SiBurgerking />
            </div>
            <nav>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About us</a></Link>
                <Link href='/reviews'><a>Reviews</a></Link>
                <Link href='/burgers'>Burgers</Link>
            </nav>
        </header>
    )
}

export default Header;
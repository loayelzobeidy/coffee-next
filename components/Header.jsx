import Image from 'next/image';
import logo from '@/public/images/coffe-logo.png';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="navbarTemp flex-col items-center justify-between px-4 py-0.025 shadow  bg-transparant font-roboto text-celadon">
      <div className="flex justify-between border-b-2 border-b-celadon">
        <Link href="/"className="flex-1 p-2 -translate-y-3"> 
  
            <Image
              className="border-spacing-1"
              src={logo}
              alt="coffee-logo"
              id="logo"
              width={100}
              height={30}
            />
        </Link>
        <div className="flex-1 mt-12 ml-10">
          <nav className="nav-links flex">
            <Link href="/" className="link ml-4">
              <i className="fa fa-home"> Home</i>
            </Link>
            <Link href="/menu" className="link ml-4">
              <i className="fa fa-car"> Menu</i>
            </Link>
            <Link href="/contact" className="link ml-4">
              <i className="fa fa-car"> Contact us</i>
            </Link>
            <Link href="/signup" className="link ml-4">
              <i className="fa fa-car"> Signup</i>
            </Link>
            <Link href="/cart" className="link ml-4">
              <i className="fa fa-car"> Cart</i>
            </Link>
          </nav>
        </div>
        <div className="flex-1 flex ml-20 mt-12">
          <Link href="/login" className="link ml-4 bg-celadon h-7  rounded-md w-20 text-accent">
            Login
          </Link>
          <form className="link ml-4">
            <select
              name="lang"
              className="language-pick bg-celadon text-accent rounded-md h-7"
            >
              <option value="en" className="language-pick">
                English
              </option>
              <option value="es" className="language-pick">
                Spanish
              </option>
              <option value="fr" className="language-pick">
                French
              </option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
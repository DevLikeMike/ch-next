// React/next imports
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// Components imports
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";

export default function Header() {
  const [sideOpen, setSideOpen] = useState(false);

  const router = useRouter();

  const openHandler = () => {
    setSideOpen(!sideOpen);
  };

  const clickHandler = (location) => {
    router.push(`/${location}`);
  };

  return (
    <nav className='flex'>
      <a href='/' className='logo__container flex ai-c'>
        <h1>Casey Hall Law</h1>
        <div className='logo'></div>
      </a>
      <ul className='main-navigation flex jc-fe'>
        <li className='nav-item'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className='nav-item'>
          <div
            onClick={() => {
              clickHandler("areasofpractice");
            }}
            className='pointer'
          >
            Areas of Practice <i className='fas fa-chevron-down'></i>
          </div>
          <ul className='drop-down-menu'>
            <li className='drop-item'>
              <Link href='/areasofpractice/motor-vehicle-accident'>
                <a>Vehicle Accident</a>
              </Link>
            </li>
            <li className='drop-item'>
              <Link href='/areasofpractice/slip-and-fall'>
                <a>Premises Liability</a>
              </Link>
            </li>
            <li className='drop-item'>
              <Link href='/'>
                <a>Dog Bite</a>
              </Link>
            </li>
            <li className='drop-item'>
              <Link href='/'>
                <a>Birth Injuries</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className='nav-item'>
          <div
            onClick={() => {
              clickHandler("about");
            }}
            className='pointer'
          >
            About <i className='fas fa-chevron-down'></i>
          </div>
          <ul className='drop-down-menu'>
            <li className='drop-item'>
              <Link href='/about'>
                <a>Casey Hall</a>
              </Link>
            </li>
            <li className='drop-item'>
              <Link href='/about/location'>
                <a>Locations</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className='nav-item'>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
        <Hamburger openHandler={openHandler} sideOpen={sideOpen} />
      </ul>
      <SideNav sideOpen={sideOpen} openHandler={openHandler} />
    </nav>
  );
}

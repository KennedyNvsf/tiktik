import React from 'react';
import styles from "../navbar/_navbar.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from "../../utils/tiktik-logo.png"

const Navbar = () => {
  
  return (
    <div className="navbar-container">
      <Link href='/'>
        <div className="logo-container">
          <Image
            className="logo-img"
            src={Logo}
            alt="TIKTIK"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  )
}

export default Navbar;

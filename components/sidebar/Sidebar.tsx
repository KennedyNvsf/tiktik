import React, {useState} from 'react';
import Discover from "../discover/Discover";
import SuggestedAccounts from "../suggested-accounts/SuggestedAccounts";
import Footer from "../footer/Footer";
import styles from "../sidebar/_sidebar.module.scss";
import {NextPage} from "next";
import {useRouter} from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import {ImCancelCircle} from "react-icons/im";

const Sidebar = () => {
  
  const [showSidebar, setshowSidebar] = useState(true);
  const userProfile = false;

  return (
    <div>

      <div 
        className="sidebar-box"
        onClick={() => setshowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle/> : <AiOutlineMenu/>}
      </div>

      {showSidebar && (
        <div className="sidebar-content">
          <div className="home-link-container">
            <Link href="/">
              <div className="normal-link-style">
                <p className="home-icon">
                  <AiFillHome/>
                </p>
                <span className="nav-label">
                  For you
                </span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="login-label-container">
              <p>Log in to like and comment on videos</p>
              <div className="sidebar-login-container">
                <GoogleLogin
                  clientId=''
                  render={(renderProps) => (
                    <button
                      className="sidebar-login-btn"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy="single_host_origin"
                />
              </div>
            </div>
          )}
          <Discover/>
          <SuggestedAccounts/>
          <Footer/>
        </div>
      )}
    </div>
  )
}

export default Sidebar;

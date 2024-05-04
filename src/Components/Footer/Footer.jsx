import React from 'react';
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png"
import {InboxIcon,PhoneIcon,LocationMarkerIcon,LoginIcon,UsersIcon,LinkIcon} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>.Beauty</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111-22 Et-Avenue, Hyderabad, Telangana </span>
                    </span>
                    <span className={css.pngLine}>
                        {" "}
                        <PhoneIcon  className={css.icon}/>
                        <a href="tel:+91 1234567890">+91 1234567890</a>
                    </span>
                    <span className={css.pngLine}>
                        <InboxIcon  className={css.icon}/>
                        <a href="support@beauty.com">support@beauty.com</a>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon}/>
                            Sign In
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <LinkIcon className={css.icon} />
                        <p>Safety Privacy & Terms</p>
                    </div>
                </div>    
        </div>
        <div className={css.copyright}>
            <span>CopyRight @2023 by beauty</span>
            <span>All rights Reserved</span>
        </div>
    </div>
  );
}

export default Footer;

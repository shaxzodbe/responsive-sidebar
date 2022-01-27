import styles from "./Navbar.module.scss";

//  ICONS FROM REACT-ICONS PACKAGE
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlinedFlag,
  MdPeopleOutline,
  MdOutlineMessage,
  MdOutlineLogout,
  MdOutlineFlag,
} from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaReact, FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { VscDashboard } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const NavUrl = ({url, icon, description}) => {
    const checkWindowSize = () => {
      if (window.innerWidth < 1024) setNav(!nav);
    }
    return (
        <li className={styles.li_navlink}>
          <NavLink to={`${url}`} className={({isActive}) =>
              (isActive ? styles.active : undefined)} onClick={() => checkWindowSize()} >
                {icon}
              <span className={styles.description}>{description}</span>
          </NavLink>
        </li>
    )
  }

  return (
    <div className={`${styles.navbar_container} ${nav ? styles.navbar_mobile_active : undefined}`}>
      {/*  TEST  */}
      <div className={styles.test}>
        <button onClick={()=> setNav(!nav)}>PRESS ME</button>
      </div>

      <nav className={nav ? undefined : styles.nav_small}>
        {/*  LOGO */}
        <div className={styles.logo}>
          <VscDashboard className={styles.logo_icon} />
          <FaTimes
            className={styles.mobile_cancel_icon}
            onClick={() => setNav(!nav)}
          />
        </div>
        {/*  SUBMENU */}
        <ul className={styles.menu_container}>
          {/*  FIRST CATEGORY */}
          <span className={styles.categories}>
            {nav ? "Pages" : <BsThreeDots />}
          </span>

          <NavUrl
            url="/"
            icon={<MdOutlineDashboard />}
            description="Dashboard"
          />
          <NavUrl
            url="/analytics"
            icon={<MdOutlineAnalytics />}
            description="Analytics"
          />
          <NavUrl
            url="/campaigns"
            icon={<MdOutlineFlag />}
            description="Campaigns"
          />
          <NavUrl
            url="/messages"
            icon={<MdOutlineMessage />}
            description="Messages"
          />

          {/*  SECOND CATEGORY  */}
          <span className={`${styles.categories} ${styles.second_category}`}>
            {nav ? "More" : <BsThreeDots />}
          </span>

          <NavUrl url="/other1" icon={<IoMdLogIn />} description="Author" />
          <NavUrl url="/other1" icon={<FaReact />} description="ReactJs" />
        </ul>

        {/*  LOGOUT BUTTON */}
        <div
          className={styles.btn_logout}
          onClick={() => {
            setNav(!nav);
          }}
        >
          <MdOutlineLogout />
        </div>

        {/*  ADD BACKGROUND FOR MOBILE */}
      </nav>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Nav.module.scss";
import iconHamburger from "../../public/img/icon-hamburger.svg";
import searchIcon from "../../public/img/search-icon.svg";
import logo from "../../public/img/logo.png";

const Nav = () => {
  const [show, setShow] = useState(false);

  let displayClass = classNames({
    "d-none": show ? false : true,
    "d-block": show
  });

  return (
    <nav className={`${styles.nav} py-8`}>
      <div className="container">
        <div className={`${styles.navbar}`}>
          <div className={styles.logo}>
            <Image src={logo} />
          </div>
          <div className={styles.iconHamburger} onClick={() => setShow(!show)}>
            <Image src={iconHamburger} />
          </div>
          <ul className={`${styles.links} ${displayClass}`}>
            <li>
              <Link href="/">
                <a>Stories</a>
              </Link>
            </li>
            <li>
              <Link href="/post/post">
                <a>Post</a>
              </Link>
            </li>
            <li>
              <a href="/author/author">Author</a>
            </li>
            <li>
              <a href="#">
                <div className={styles.search}>
                  <input placeholder="Search" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TypeWritter from "typewriter-effect";
import HamburgerMenuButton from "components/hamburgerMenuButton";
import { ReactComponent as LogoSmall } from "assets/images/logo_small.svg";
import { ReactComponent as LogoBig } from "assets/images/logo_big.svg";
import donutIcon from "assets/images/donut.svg";
import styles from "./style.module.css";
import clsx from "clsx";
import erc from "../../assets/images/erc.svg";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((state) => !state);
  };

  const menuVariants = {
    initial: {
      top: 48,
      scaleY: 0,
      opacity: 0,
      originY: 0,
    },
    opened: {
      top: 48,
      scaleY: 1,
      opacity: 1,
      originY: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.01,
      },
    },
    closed: {
      originY: 0,
      scaleY: 0,
      opacity: 0,
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 2,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        {/* Navbar start */}
        <nav className={styles.navbar}>
          <div className={styles.navbar_logo + " logo"}>
            <div className="logo">
              <Link to="/">
                <LogoSmall />
              </Link>
            </div>
          </div>

          <ul className={styles.tabNav}>
            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link to="/" className={styles.navbar_link + " hidden sm:block"}>
                Home
              </Link>
            </li>

            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link
                to="/contract"
                className={styles.navbar_link + " hidden lg:block"}
              >
                Contract
              </Link>
            </li>

            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link
                to="/tokenomics"
                className={styles.navbar_link + " hidden sm:block"}
              >
                Tokenomics
              </Link>
            </li>

            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link
                to="/roadmap"
                className={styles.navbar_link + " hidden lg:block"}
              >
                Roadmap
              </Link>
            </li>

            <li className={clsx(styles.navItem, styles.navItemDesktop)}>
              <Link
                to="/platform"
                className={styles.navbar_link + " hidden sm:block"}
              >
                Platform
              </Link>
            </li>

            <li
              className={clsx(
                styles.navItem,
                styles.navItemDesktop,
                "hidden xl:block"
              )}
            >
              <Link
                to="/blog"
                className={styles.navbar_link + " hidden lg:block"}
              >
                Blog
              </Link>
            </li>

            <li
              className={clsx(
                styles.navItem,
                styles.navItemDesktop,
                "hidden xl:block"
              )}
            >
              <Link
                to="/media"
                className={styles.navbar_link + " hidden lg:block"}
              >
                Media
              </Link>
            </li>
          </ul>

          <motion.ul
            className={styles.navbar_nav}
            variants={menuVariants}
            animate={isMobileMenuOpen ? "opened" : "closed"}
            initial="initial"
          >
            <motion.li variants={linkVariants} className="block lg:hidden">
              <Link
                to="/"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Home
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block lg:hidden">
              <Link
                to="/contract"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Contract
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block lg:hidden">
              <Link
                to="/tokenomics"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Tokenomics
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block lg:hidden">
              <Link
                to="/roadmap"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Roadmap
              </Link>
            </motion.li>
            <motion.li variants={linkVariants} className="block lg:hidden">
              <Link
                to="/platform"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Platform
              </Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link
                to="/blog"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Blog
              </Link>
            </motion.li>
            <motion.li variants={linkVariants}>
              <Link
                to="/media"
                className={clsx(styles.navbar_link, styles.navbar_link_mobile)}
              >
                Media
              </Link>
            </motion.li>
          </motion.ul>

          <div className={styles.navbar_subnav + " swap"}>
            <Link
              to="/"
              className={clsx(styles.subnav_link, "flex items-center")}
            >
              <img src={donutIcon} alt="donut" className="mr-1" />
              Swap
            </Link>
            <HamburgerMenuButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
              className="block lg:hidden ml-5 hambur"
            />
          </div>
        </nav>
        {/* Navbar end */}

        {/* Hero start */}
        <div className="py-10 px-8 md:px-24 content text-left xxl:px-4 xxl:max-w-9xl xxl:mx-auto mt-24">
          <div className="w-full flex items-center">
            <div className="mr-1 flex-grow">
              <p className={styles.headerBadge}>
                <div className="block uppercase font-bold">
                  introducing cuminu
                </div>
                <div className="ml-3">
                  <img src={erc} alt="erc" />
                </div>
                {/*  <div className="block ml-3 text-sm border border-pink-800 px-2 py-0.5 rounded-md">
                  ERC-20
                </div> */}
              </p>
              <div>
                <h1 className={styles.headerHeadlineText}>
                  <span className="block">The token that</span>
                  <span className="block">powers the</span>
                  <span
                    className="block text-pink-800"
                    style={{
                      fontFamily: "helveticaExtraBold",
                      fontWeight: "normal",
                      fontStyle: "normal",
                    }}
                  >
                    <TypeWritter
                      options={{
                        strings: ["communiti"],
                        cursor: "_",
                        autoStart: true,
                        loop: true,
                        pauseFor: 500,
                        deleteSpeed: 10,
                        delay: 10,
                      }}
                    />
                  </span>
                  <span className="block">platform</span>
                </h1>
                <div className="md:flex md:justify-between md:items-center md:mt-3">
                  <h2 className={styles.headerSubHeadline}>
                    <span className="block">
                      Join us as we{" "}
                      <span
                        className="text-white"
                        style={{
                          fontFamily: "helveticaExtraBold",
                          fontWeight: "extra bold",
                          fontStyle: "extra bold",
                        }}
                      >
                        revolutionize
                      </span>
                    </span>
                    <span className="block">adult entertainment forever.</span>
                    <button
                      className={clsx(
                        "bg-pink-800 text-gray-900 mt-10 ml-auto mr-auto md:mr-0  rounded-lg text-xl uppercase xl:hidden block",
                        styles.ctaButton
                      )}
                    >
                      {/*  <span className="md:hidden">invest</span> */}
                      <span
                        style={{
                          fontFamily: "BergenMonoBold",
                          fontWeight: "bold",
                          fontStyle: "bold",
                          fontSize: "30px",
                        }}
                      >
                        start investing
                      </span>
                    </button>
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.heroLogoBig}>
                <LogoBig />
              </div>
              <div className="text-center mt-36 self-start">
                <button
                  className={clsx(
                    "bg-pink-800 text-gray-900 rounded-lg text-xl uppercase xl:block hidden",
                    styles.ctaButton
                  )}
                >
                  {/*  <span className="md:hidden">invest</span> */}
                  <span
                    style={{
                      fontFamily: "BergenMonoBold",
                      fontWeight: "bold",
                      fontStyle: "bold",
                      fontSize: "32px",
                    }}
                  >
                    start investing
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
      </header>
    </>
  );
};

export default Home;

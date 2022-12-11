import clsx from "clsx";
import { useState } from "react";
import { NavbarDrawer } from "./NavbarDrawer";
// import ScrollIndicator from "./ScrollIndicator";
// import SocialIcons from "./SocialIcons";
import styles from "./Navbar.module.scss";

const sections = [
  {
    name: "Home",
    id: "home",
  },
  {
    name: "Over mij",
    id: "over",
  },
  {
    name: "Portfolio",
    id: "portfolio",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <button
        className={clsx(
          styles["navbar-menu-button"],
          isOpen && styles["active-menu"]
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles["menu-button-bar"]} />
        <div className={styles["menu-button-bar"]} />
        <div className={styles["menu-button-bar"]} />
      </button>
      {/*<ScrollIndicator sections={sections} />
      <SocialIcons /> */}
      <NavbarDrawer
        sections={sections}
        isOpen={isOpen}
        handleToggleMenu={() => setIsOpen(!isOpen)}
      />
    </header>
  );
};

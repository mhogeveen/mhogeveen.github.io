import clsx from "clsx";
import styles from "./NavbarDrawer.module.scss";

type Props = {
  isOpen: boolean;
  handleToggleMenu: () => void;
  sections: { id: string; name: string }[];
};

export const NavbarDrawer = ({ isOpen, handleToggleMenu, sections }: Props) => {
  return (
    <nav className={clsx(styles.drawer, isOpen && styles["active"])}>
      <div className={styles["drawer-background"]}></div>
      {sections.map((section) => (
        <a
          key={section.id}
          className={styles["drawer-item"]}
          href={`#${section.id}`}
          onClick={handleToggleMenu}
        >
          <span className={styles["drawer-item-title"]}>{section.name}</span>
          <div className={styles["drawer-item-dot"]} />
        </a>
      ))}
    </nav>
  );
};

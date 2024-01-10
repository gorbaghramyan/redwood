import styles from "./MenuButton.module.css";

interface IProps {
    onClick: () => void;
    isMenuOpened: boolean;
}

export default function MenuButton(props: IProps) {
    return (
        <div
            onClick={props.onClick}
            className={`${styles.hamburgerButton} ${props.isMenuOpened ? styles.closeButton : ""}`}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

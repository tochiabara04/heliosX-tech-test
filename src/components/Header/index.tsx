import logo from "../../assets/heliosx-logo.png"
import styles from '../../styles/header.module.scss'

const Header = () => {

return (
<header className={styles.header}>
<img className={styles.logo} src={logo} alt="logo" />
</header>
)

}

export default Header;
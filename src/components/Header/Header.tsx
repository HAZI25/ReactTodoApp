import { FcTodoList } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.root}>
			<div className={`container ${styles.row}`}>
				<div className={styles.logo}>
					<FcTodoList className={styles.icon} />
					<h1 className={styles.title}>TODO LIST</h1>
				</div>
				<nav className={styles.nav}>
					<ul className={styles.nav_list}>
						<li className={styles.nav_item}>
							<Link className={styles.nav_link} to="/">
								Todos
							</Link>
						</li>
						<li className={styles.nav_item}>
							<Link className={styles.nav_link} to="/about">
								About
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

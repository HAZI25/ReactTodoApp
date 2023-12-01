import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: 'primary' | 'secondary';
}

const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
	return (
		<button className={`${styles.root} ${styles[variant]}`} {...props}>
			{children}
		</button>
	);
};

export default Button;

import { ReactNode, SelectHTMLAttributes } from 'react';
import styles from './Select.module.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	children: ReactNode;
	variant?: 'primary' | 'secondary';
}

const Select = ({ children, variant = 'primary', ...props }: SelectProps) => {
	return (
		<select className={`${styles.root} ${styles[variant]}`} {...props}>
			{children}
		</select>
	);
};

export default Select;

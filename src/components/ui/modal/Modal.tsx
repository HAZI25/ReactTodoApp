import { ReactNode } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
	children: ReactNode;
	setVisibility: (visibility: boolean) => void;
}

const Modal = ({ children, setVisibility }: ModalProps) => {
	return (
		<div className={styles.root} onClick={() => setVisibility(false)}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default Modal;

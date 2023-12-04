import styles from './TodoItem.module.css';
import { TiDeleteOutline } from 'react-icons/ti';
import { MdOutlineEdit } from 'react-icons/md';
import { ITodo } from '../models';
import { COMPLETE } from '../../../constants';
import { useAppDispatch } from '../../../hooks/redux';
import { deleteTodo, toggleComplete } from '../../../store/reducers/todoSlice';
import { useState } from 'react';
import AddUpdateTodoModal from '../AddUpdateTodoModal';

interface TodoItemProps {
	todo: ITodo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
	const [modalOpen, setModalOpen] = useState(false);
	const dispatch = useAppDispatch();

	return (
		<>
			<div className={styles.root}>
				<div className={styles.details}>
					<input
						data-testid="checkbox-elem"
						className={styles.checkbox}
						type="checkbox"
						checked={todo.status === COMPLETE}
						onChange={() => dispatch(toggleComplete(todo.id))}
					/>
					<div className={styles.texts}>
						<p data-testid="title-elem"
							className={`${styles.title} ${
								todo.status === COMPLETE ? styles['title--completed'] : ''
							}`}
						>
							{todo.title}
						</p>
						<p data-testid="date-elem" className={styles.date}>{todo.date}</p>
					</div>
				</div>
				<div className={styles.actions}>
					<MdOutlineEdit
						data-testid="edit-elem"
						className={styles.edit}
						onClick={() => setModalOpen(true)}
					/>
					<TiDeleteOutline
						data-testid="delete-elem"
						className={styles.delete}
						onClick={() => {
							dispatch(deleteTodo(todo.id));
						}}
					/>
				</div>
			</div>
			{modalOpen && (
				<AddUpdateTodoModal
					variant="update"
					todo={todo}
					setVisibility={setModalOpen}
				/>
			)}
		</>
	);
};

export default TodoItem;

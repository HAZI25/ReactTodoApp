import { useAppSelector } from '../../../hooks/redux';
import { selectTodosByFilter } from '../../../store/reducers/selectors/selectTodosByFilter';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.css';

const TodoList = () => {
	const todos = useAppSelector(selectTodosByFilter);

	return (
		todos.length > 0 && (
			<div className={styles.root}>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</div>
		)
	);
};

export default TodoList;

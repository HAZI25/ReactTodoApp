import { useAppSelector } from '../../../hooks/redux';
import { selectTodosByFilter } from '../../../store/reducers/selectors/selectTodosByFilter';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.css';

const TodoList = () => {
	const todos = useAppSelector(selectTodosByFilter);

	return (
		todos.length > 0 && (
			<section>
				<div className="container">
					<div className={styles.column}>
						<div data-testid='list-elem' className={styles.root}>
							{todos.map((todo) => (
								<TodoItem key={todo.id} todo={todo} />
							))}
						</div>
					</div>
				</div>
			</section>
		)
	);
};

export default TodoList;

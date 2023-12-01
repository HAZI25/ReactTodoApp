import CreateAndFilter from './CreateAndFilter/CreateAndFilter';
import TodoList from './TodoList/';
import styles from './TodosPage.module.css';

const TodosPage = () => {
	return (
		<>
			<section className={styles.createAndFilter}>
				<div className="container">
					<CreateAndFilter />
				</div>
			</section>
			<section className={styles.todoList}>
				<div className="container">
					<TodoList />
				</div>
			</section>
		</>
	);
};

export default TodosPage;

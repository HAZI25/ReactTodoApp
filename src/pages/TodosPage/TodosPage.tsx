import CreateAndFilter from './CreateAndFilter/CreateAndFilter';
import TodoList from './TodoList/';

const TodosPage = () => {
	return (
		<div data-testid='todos_page'>
			<CreateAndFilter />
			<TodoList />
		</div>
	);
};

export default TodosPage;

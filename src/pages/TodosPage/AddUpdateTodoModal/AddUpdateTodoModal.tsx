import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../components/ui/button';
import Input from '../../../components/ui/input';
import Modal from '../../../components/ui/modal';
import Select from '../../../components/ui/select';
import { COMPLETE, INCOMPLETE } from '../../../constants';
import { useAppDispatch } from '../../../hooks/redux';
import useInput from '../../../hooks/useInput';
import { addTodo, updateTodo } from '../../../store/reducers/todoSlice';
import { formatDate } from '../../../utils/formatDate';
import { ITodo, ITodoStatus } from '../models';
import styles from './AddUpdateTodoModal.module.css';

interface TodoModalBaseProps {
	setVisibility: (visibility: boolean) => void;
}

interface AddTodoModalProps extends TodoModalBaseProps {
	variant: 'add';
}

interface UpdateTodoModalProps extends TodoModalBaseProps {
	variant: 'update';
	todo: ITodo;
}

type AddUpdateTodoModalProps = AddTodoModalProps | UpdateTodoModalProps;

const AddTodoModal = (props: AddUpdateTodoModalProps) => {
	const { variant, setVisibility } = props;
	let todo: ITodo | null = null;

	if (props.variant === 'update') {
		todo = props.todo;
	}

	const title = useInput(`${todo ? todo.title : ''}`);
	const [status, setStatus] = useState<ITodoStatus>(
		`${todo ? todo.status : INCOMPLETE}`
	);

	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();

		const action = todo
			? updateTodo({
					id: todo!.id,
					title: title.value,
					status,
					date: todo!.date,
			  })
			: addTodo({
					id: uuidv4(),
					title: title.value,
					status,
					date: formatDate(new Date()),
			  });

		dispatch(action);
		setVisibility(false);
	};

	return (
		<Modal setVisibility={setVisibility} data-testid="modal-elem">
			<form
				data-testid="form-elem"
				className={styles.form}
				onSubmit={handleSubmit}
			>
				<p className={styles.title}>
					{`${variant === 'add' ? 'Add' : 'Update'}`} todo
				</p>
				<label className={styles.label} htmlFor="title">
					Title
					<Input
						data-testid="input-elem"
						value={title.value}
						onChange={title.onChange}
						id="title"
						placeholder="Todo..."
					/>
				</label>
				<label className={styles.label} htmlFor="status">
					Status
					<Select
						data-testid="select-elem"
						id="status"
						value={status}
						onChange={(e) => {
							setStatus(e.target.value as ITodoStatus);
						}}
					>
						<option value={INCOMPLETE}>Incomplete</option>
						<option value={COMPLETE}>Complete</option>
					</Select>
				</label>
				<div className={styles.btns}>
					<Button data-testid="addUpdate-elem">
						{`${variant === 'add' ? 'Add' : 'Update'}`} task
					</Button>
					<Button
						data-testid="cancel-btn"
						type="button"
						variant="secondary"
						onClick={() => setVisibility(false)}
					>
						Cancel
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default AddTodoModal;

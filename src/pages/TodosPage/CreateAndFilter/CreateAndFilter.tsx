import { useState } from 'react';
import AddUpdateTodoModal from '../AddUpdateTodoModal';
import Button from '../../../components/ui/button';
import Select from '../../../components/ui/select';
import { ALL, COMPLETE, INCOMPLETE } from '../../../constants';
import styles from './CreateAndFilter.module.css';
import { useAppDispatch } from '../../../hooks/redux';
import { IStatus } from '../models';
import { changeFilter } from '../../../store/reducers/filterSlice';

const CreateAndFilter = () => {
	const [modalOpen, setModalOpen] = useState(false);

	const dispatch = useAppDispatch();

	return (
		<section className={styles.root}>
			<div className="container">
				<div className={styles.column}>
					<Button data-testid="add-elem" onClick={() => setModalOpen(true)}>
						Add todo
					</Button>
					<Select
						data-testid="select-elem"
						variant="secondary"
						onChange={(e) => dispatch(changeFilter(e.target.value as IStatus))}
					>
						<option value={ALL}>ALL</option>
						<option value={COMPLETE}>Completed</option>
						<option value={INCOMPLETE}>Incompleted</option>
					</Select>
					{modalOpen && (
						<AddUpdateTodoModal variant="add" setVisibility={setModalOpen} />
					)}
				</div>
			</div>
		</section>
	);
};

export default CreateAndFilter;

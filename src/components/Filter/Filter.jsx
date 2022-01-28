import * as actions from '../../redux/contacts/contactsActions';
import { useDispatch } from 'react-redux';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.mainContainer}>
      <div className={s.inputContainer}>
        <label className={s.labelName} htmlFor="Filter">
          Find contact by name
        </label>
        <input
          className={s.inputName}
          onChange={e => dispatch(actions.setFilter(e.target.value))}
          type="text"
          name="filter"
          placeholder="Filter"
        />
      </div>
    </div>
  );
};

export default Filter;

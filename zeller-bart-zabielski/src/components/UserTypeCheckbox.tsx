import IUserTypeProps from '../interfaces/IUserTypeProps';

export const UserTypeCheckbox = ({label, value, isChecked, callback}: IUserTypeProps) => {
	return (
		<label>
			<input data-testid="user-type-checkbox" type="radio" checked={isChecked == value}
						 onChange={() => callback(value)} />
			<span>{label}</span>
		</label>
	);
};

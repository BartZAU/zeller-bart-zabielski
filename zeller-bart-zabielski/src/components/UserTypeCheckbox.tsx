import IUserTypeProps from '../interfaces/IUserTypeProps';
import { useState, useEffect } from 'react';

export const UserTypeCheckbox = ({label, value, isChecked, callback}: IUserTypeProps) => {
	const [checked, setChecked] = useState(isChecked);
	
	useEffect(() => {
	    setChecked(isChecked);
	  }, [isChecked]);
	
	const handleOnChange = (e: any) => {
	    callback(e.target.checked);
	    setDate(e.target.checked);
	  };
	
	return (
		<label>
			<input data-testid="user-type-checkbox" type="checkbox" checked={checked}
						 onChange={handleOnChange} />
			<span>{label}</span>
		</label>
	);
};

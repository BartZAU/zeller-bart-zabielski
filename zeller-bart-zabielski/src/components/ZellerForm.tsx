import React, { useState, useEffect } from 'react';
import { UserTypeCheckbox } from './UserTypeCheckbox';
import { UserType } from '../types/types';



type Props = {
	setFilterByType: (userType: UserType) => void,
	initialState: UserType
}

export const ZellerForm = ({setFilterByType, initialState}: Props) => {
	const [userTypeSelected, setUserType] = useState<UserType>(initialState);

	const handleSubmit = (	e: React.SyntheticEvent) => {
		console.log(e);
	};

	useEffect(()=>{
		setFilterByType(userTypeSelected);
		console.log("user", userTypeSelected)
	},[userTypeSelected])

	

	return (
		<form data-testid="zeller-form" onSubmit={handleSubmit}>
		<div>
			<label>userType:</label>
			<UserTypeCheckbox label="Admin" value="Admin" isChecked={userTypeSelected} callback={setUserType}  />
			<UserTypeCheckbox label="Manager" value="Manager" isChecked={userTypeSelected} callback={setUserType}  />
		</div>
	</form>
	)
}

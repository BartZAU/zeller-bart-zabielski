import { UserType } from '../types/types';

interface UserTypeProps {
	label: UserType;
	value: UserType;
	isChecked: UserType;
	callback: (value: UserType) => void;
}

export default UserTypeProps;

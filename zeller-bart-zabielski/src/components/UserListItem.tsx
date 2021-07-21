import React from 'react'
import {User} from '../types/types';

type Props = {
	user: User
}

export const UserListItem = ({user}: Props) => {
	function getFirstLetter(){
		return user.name.substring(0,1)
	}

	return (
		<div className="user-item" data-testid="user-list-item">
			<div className="user-avatar">{getFirstLetter()}</div>
			<div className="user-info">
				<div className="user-name">
					<span>{user.name}</span>
				</div>
				<div className="user-role">
					<span>{user.role}</span>
				</div>
			</div>
		</div>
	)
}

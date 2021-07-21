import React from 'react';
import {UserListItem} from './UserListItem';

import {User} from '../types/types';

type Props ={
	users?: User[] 
	filterByType: string
}

export const UserList = ({users, filterByType = "Admin"}: Props) => {
	if (!users && !filterByType) return null;
	return (
		<div>
			<h2 data-testid="filter-type">{`${filterByType} Users`}</h2>	
			<ul >
				{users && users.map((user)=>{
					return(	
						<li key={user.id}>
							<UserListItem user={user} />
						</li>)
				})}
			</ul>		
		</div>
	)
}

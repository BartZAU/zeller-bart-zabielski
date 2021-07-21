export type UserType = "Admin" | "Manager"

export type ListZellerUsers ={
	listZellerUsers: {
		items: User[],
		}
}

export type User = {
	email: string,
	id: string,
	name: string,
	role: string
}
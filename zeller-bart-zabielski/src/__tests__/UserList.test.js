import React from "react";
import { render, cleanup, fireEvent, findByText, findAllByText, screen, toHaveTextContent } from '@testing-library/react';
import {UserList} from "../components/UserList";
import {UserTypeCheckbox} from "../components/UserTypeCheckbox";
global.fetch = require("jest-fetch-mock");

afterEach(cleanup);

const onClick = jest.fn((item)=> item);

const adminUsers = [		
			{	
				email: "jorn@zeller.com",
				id: "42442424fdfd-sdasd-3232",
				name: "John Smith",
				role: "Admin"},
			{	 
				email: "vv@zeller.com",
				id: "22222424fdfd-sdasd-3232",
				name: "John Bob",
				role: "Admin"
			},
		 ]


test('<UserList /> ', async () => {

  const {queryByLabelText, getByLabelText, getByTestId, getByText } = render(
    <UserList users={adminUsers} filterType="Admin"/>,
  );

	const h2Title = await screen.findByText('Admin Users')
	expect(h2Title).toHaveTextContent("Admin Users");
	expect(h2Title).not.toHaveTextContent("Manager Users");
});


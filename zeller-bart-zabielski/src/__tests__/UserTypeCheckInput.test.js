import React from "react";
import { render, cleanup, fireEvent, screen } from '@testing-library/react'
import {UserTypeCheckbox} from "../components/UserTypeCheckbox";

// cleanup removes everything from DOM
afterEach(cleanup);

const onClick = jest.fn((label)=> label);

test('<UserTypeCheckInbox /> label change', () => {
  const {queryByLabelText, getByLabelText, getByTestId} = render(
    <UserTypeCheckbox label="Admin" callback={onClick} />,
  );

	const adminCheckbox = screen.queryByLabelText("Admin");
	expect(adminCheckbox).toBeTruthy();

  fireEvent.click(adminCheckbox);
	// already selected
	expect(onClick).toHaveBeenCalledTimes(0);
});


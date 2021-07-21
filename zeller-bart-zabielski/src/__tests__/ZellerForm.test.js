import React from "react";
import { render, cleanup, fireEvent, screen, findTextBy } from '@testing-library/react'
import {ZellerForm} from "../components/ZellerForm";

afterEach(cleanup);

const onClick = jest.fn((label)=> label);

const setFilterType = jest.fn(()=> "Manager")

test('<ZellerForm /> label change', async () => {
  const {queryByLabelText, getByLabelText, getByTestId} = render(
    <ZellerForm  initialState="Admin" setFilterByType={setFilterType} />,
  );

	const managerCheckbox = screen.queryByLabelText("Manager");
	const adminCheckbox = screen.queryByLabelText("Admin");

	expect(managerCheckbox).toBeTruthy();
	expect(adminCheckbox).toBeTruthy();

	fireEvent.change(getByLabelText("Manager"))
	expect(setFilterType).toHaveBeenCalledTimes(1);
});


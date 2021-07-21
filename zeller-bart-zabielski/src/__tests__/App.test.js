import React from "react";
import { render, cleanup, fireEvent, waitForElement, findAllByText, screen } from '@testing-library/react';

import App from "../App";

afterEach(() => {
  cleanup();
	console.error.mockClear();
});


console.error = jest.fn();

test("<App />", () => {
  render(<App />);
  expect(console.error).not.toHaveBeenCalled();
});


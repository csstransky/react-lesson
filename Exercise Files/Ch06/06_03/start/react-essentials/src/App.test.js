import React from "react"
import { render } from "@testing-library/react"
import App from "./App.js"

test("renders an h1", () => {
    const {getByText} = render(<App />);
    // Those "/.../" slashes are used to check for a regrex
    const h1 = getByText(/Hello React Testing Library lol/)
    expect(h1).toHaveTextContent("Hello React Testing Library lol");
})
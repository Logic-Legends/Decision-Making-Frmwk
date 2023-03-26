import Start from "./Start";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Start", () => {
    test("should link", () => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<Start />} exact />
                </Routes>
            </MemoryRouter>,
        );
        const links = screen.getAllByRole("link");
        expect(links[0].textContent).toEqual("Start");
        expect(links[0].href).toContain("/define-goal");
    });
});

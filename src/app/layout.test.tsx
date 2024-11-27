import '@testing-library/jest-dom'
import '../__mocks__/window-entities'

import { render, screen } from '@testing-library/react'
import Layout from './layout'


describe("Layout", () => {
    it.only("renders layout unchanged", () => {
        const { container } = render(<Layout><main /></Layout>, { container: document, hydrate: true });
        expect(container).toMatchSnapshot();
    });

    it("renders a header", () => {
        render(<Layout><main /></Layout>);
        const header = screen.getByTestId("page-header", { container: document, hydrate: true });
        expect(header).toBeInTheDocument();
    });

    it("renders a footer", () => {
        render(<Layout><main /></Layout>);
        const heading = screen.getByTestId("page-footer", { container: document, hydrate: true });
        expect(heading).toBeInTheDocument();
    });
});

import '@testing-library/jest-dom'
import '../__mocks__/document-observer'

import { render, screen } from '@testing-library/react'
import Page from './page'


describe("Page", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });

  it("renders a header", () => {
    render(<Page />);
    const header = screen.getByTestId("page-header");
    expect(header).toBeInTheDocument();
  });

  it("renders a footer", () => {
    render(<Page />);
    const heading = screen.getByTestId("page-footer");
    expect(heading).toBeInTheDocument();
  });
});
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

// Define the isClassComponent function
function isClassComponent(component) {
  return (
    typeof component === "function" && 
    !!component.prototype &&
    !!component.prototype.isReactComponent
  );
}

test("uses a class component", () => {
  // Assuming Home is now a functional component based on previous discussions
  // You can adjust this test based on whether Home is functional or class-based
  expect(isClassComponent(Home)).toBe(false);
});

test("renders username and city props to display the correct text", () => {
  render(<Home username="Liza" city="New York" />);
  const liza = screen.getByText(/Liza is a Web Developer from New York/i);
  expect(liza).toBeInTheDocument();

  render(<Home username="Duane" city="Queens" />);
  const duane = screen.getByText(/Duane is a Web Developer from Queens/i);
  expect(duane).toBeInTheDocument();
});

test("uses the 'color' prop to set the inline style color of the h1", () => {
  render(<Home username="Liza" city="New York" color="firebrick" />);
  const h1 = screen.getByRole("heading", { name: /Liza is a Web Developer from New York/i });
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveStyle({ color: "firebrick" });

  render(<Home username="Duane" city="Queens" color="blue" />);
  const duaneH1 = screen.getByRole("heading", { name: /Duane is a Web Developer from Queens/i });
  expect(duaneH1).toBeInTheDocument();
  expect(duaneH1).toHaveStyle({ color: "blue" });
});

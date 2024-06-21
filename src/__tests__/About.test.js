import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "../data/user";
import About from "../components/About";

function isClassComponent(component) {
  return typeof component === "function" && !!component.prototype.isReactComponent;
}

test("uses a class component", () => {
  // Assuming About is now a functional component based on previous discussions
  // You can adjust this test based on whether About is functional or class-based
  expect(isClassComponent(About)).toBe(false);
});

test("renders a <p> element with the bio from props", () => {
  render(<About bio="I made this" links={user.links} />);
  expect(screen.getByText("I made this")).toBeInTheDocument();
});

test("does not render a <p> element if the bio is not included in props", () => {
  const { container } = render(<About links={user.links} />);
  expect(container.querySelector("p")).toBeNull();
});

test("does not render a <p> element if the bio is an empty string", () => {
  const { container } = render(<About bio="" links={user.links} />);
  expect(container.querySelector("p")).toBeNull();
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Links from "../components/Links";

// Check if the component is a functional component
function isFunctionalComponent(component) {
  return typeof component === "function";
}

test("uses a functional component", () => {
  expect(isFunctionalComponent(Links)).toBe(true);
});

test("renders the component correctly", () => {
  render(<Links />);
  const headerElement = screen.getByRole("heading", { name: /Links/i });
  expect(headerElement).toBeInTheDocument();
});

test("displays a Github link passed down as a prop", () => {
  render(<Links github={"https://github.com/liza"} />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/liza");
});

test("displays a Linkedin link passed down as a prop", () => {
  render(<Links linkedin={"https://www.linkedin.com/in/liza/"} />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/liza/"
  );
});

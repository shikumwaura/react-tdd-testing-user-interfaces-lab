import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself with alt text", () => {
  // Arrange
  render(<App />);

  // Act
  const image = screen.getByAltText(/profile picture/i);

  // Assert
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text 'About Me'", () => {
  // Arrange
  render(<App />);

  // Act
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  // Assert
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph with biography", () => {
  // Arrange
  render(<App />);

  // Act
  const biography = screen.getByText(/passionate developer/i);

  // Assert
  expect(biography).toBeInTheDocument();
});

test("displays a link to GitHub", () => {
  // Arrange
  render(<App />);

  // Act
  const githubLink = screen.getByRole("link", { name: /github/i });

  // Assert
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("displays a link to LinkedIn", () => {
  // Arrange
  render(<App />);

  // Act
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  // Assert
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Task from "../components/Task"; // make sure this path matches your project

describe("Task Component", () => {
  const sampleTask = { text: "text!", category: "category!", id: 1 };

  test("displays the task text", () => {
    render(<Task task={sampleTask} onDelete={() => {}} />);
    expect(screen.getByText("text!")).toBeInTheDocument();
  });

  test("displays the task category", () => {
    render(<Task task={sampleTask} onDelete={() => {}} />);
    expect(screen.getByText("category!")).toBeInTheDocument();
  });

  test("is removed from the list when the delete button is clicked", () => {
    const mockDelete = jest.fn(); // create a mock function
    render(<Task task={sampleTask} onDelete={mockDelete} />);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(mockDelete).toHaveBeenCalledWith(1); // Expect to be called with task id
  });
});

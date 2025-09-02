/*import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders the main heading and accordion", () => {
    render(<App />);
    expect(screen.getByText("Catherers")).toBeInTheDocument();
    expect(screen.getByText("Safety & basics")).toBeInTheDocument();
  });

  it("renders score after clicking a feature", async () => {
    const user = userEvent.setup();
    render(<App />);

    const maleButton = screen.getByText("Male at birth");
    await user.click(maleButton);

    // Check that the score for male_length is updated
    expect(screen.getByText("male_length: 3")).toBeInTheDocument();
  });

  it("toggles score when clicking the same button twice", async () => {
    const user = userEvent.setup();
    render(<App />);

    const maleButton = screen.getByText("Male at birth");
    await user.click(maleButton);
    expect(screen.getByText("male_length: 3")).toBeInTheDocument();

    await user.click(maleButton);
    // Score should disappear after unclick
    expect(screen.queryByText("male_length: 3")).toBeNull();
  });
});
*/

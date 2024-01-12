import Footer from "../components/Footer";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Footer component test", () => {
  it("should be able to render the component", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Contact us")).toBeInTheDocument();
  });

  it("should be able to send an email", () => {
    const { getByLabelText, getByRole } = render(<Footer />);

    const name = getByLabelText("Name");
    const email = getByLabelText("Email");
    const message = getByLabelText("Add a Message");
    const buttonSubmit = getByRole("button");

    fireEvent.change(name, { target: { value: "john" } });
    fireEvent.change(email, { target: { value: "johndoe@mail.com" } });
    fireEvent.change(message, { target: { value: "a great message" } });
    fireEvent.submit(buttonSubmit);
  });
});

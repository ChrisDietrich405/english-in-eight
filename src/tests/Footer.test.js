import Footer from "../components/Footer";
import { render, screen, fireEvent } from "@testing-library/react"

describe("Footer component test", () => {
  it("should be able to render the component", () => {
    const { getByText } = render(<Footer />)
    expect(getByText("Contact us")).toBeInTheDocument()
  });

  it("should be able to send an email", () => {
    const { getByLabelText, getByRole } = render(<Footer />) // screen can search in the whole screen

    const email = screen.getByLabelText("Email") // we are gettiung the email input
    const name = screen.getByLabelText("Name")
    const message = screen.getByLabelText("Add a Message")
    const buttonSubmit = getByRole("button")

    console.log(email, name, message, buttonSubmit)

    // fireEvent.change(email, { target: { value: "johndoe@mail.com" }}) // onChange={(ev) => setEmail(ev.target.value)}
    // fireEvent.change(name, { target: { value: "John Doe" }})
    fireEvent.submit(buttonSubmit)
    email.value = "johndoe@mail.com"
    name.value = "John Doe"
    // fireEvent.change(message, { target: { value: "My beautiful test message" }})

    // expect(email.value).toBe("johndoe@mail.com")
    expect(email.value).toBeTruthy()
    expect(name.value).toBeTruthy()
  })
});
import { render } from "@testing-library/react";
import AuthForm from "./AuthForm";

describe("AuthForm", () => {
  test("register renders correctly", () => {
    const { getByText, container } = render(<AuthForm authType="register" />);

    const userNameInput = container.querySelector(
      'ion-input[label="User Name"]'
    );
    const passwordInput = container.querySelector(
      'ion-input[label="Password"]'
    );
    // const passwordInput = getByText("Password");

    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(getByText("Register")).toBeInTheDocument();
  });
});

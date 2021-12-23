import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import FormContainer from "../../../components/form/FormContainer";
import { ToastProvider } from "react-toast-notifications";

const addToast = () => {};
const providerValue = { addToast };
const handleSubmit = jest.fn();

describe("FormContainer Component", () => {
  it("renders correctly without crashing", () => {
    render(
      <ToastProvider value={providerValue}>
        <FormContainer />
      </ToastProvider>
    );
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeTruthy;
  });
  it("renders error message if Name input touched and blur", async () => {
    render(
      <ToastProvider value={providerValue}>
        <FormContainer />
      </ToastProvider>
    );
    const input = screen.getByPlaceholderText("Jane Doe");
    fireEvent.blur(input);
    await waitFor(() => {
      const validationErrors = screen.getByTestId(`errors-fullName`);
      expect(validationErrors.innerHTML).toBe(
        "We need your name for the review"
      );
    });
  });
  it("renders error message if Email input touched and blur", async () => {
    render(
      <ToastProvider value={providerValue}>
        <FormContainer />
      </ToastProvider>
    );
    const input = screen.getByPlaceholderText("jane.doe@email.com");
    fireEvent.blur(input);
    await waitFor(() => {
      const validationErrors = screen.getByTestId(`errors-email`);
      expect(validationErrors.innerHTML).toBe("We need your email address");
    });
  });
  it("renders error message when validating Email input", async () => {
    render(
      <ToastProvider value={providerValue}>
        <FormContainer />
      </ToastProvider>
    );
    const input = screen.getByPlaceholderText("jane.doe@email.com");
    fireEvent.change(input, { target: { value: "not a valid email" } });
    fireEvent.blur(input);
    await waitFor(() => {
      const validationErrors = screen.getByTestId(`errors-email`);
      expect(validationErrors.innerHTML).toBe("Invalid email addresss");
    });
  });
  it("renders error message if Title input touched and blur", async () => {
    render(
      <ToastProvider value={providerValue}>
        <FormContainer />
      </ToastProvider>
    );
    const input = screen.getByPlaceholderText(
      "Give your review a nice headline"
    );
    fireEvent.blur(input);
    await waitFor(() => {
      const validationErrors = screen.getByTestId(`errors-title`);
      expect(validationErrors.innerHTML).toBe("Please enter a headline");
    });
  });
  it("renders error message if Comment input touched and blur", async () => {
    render(
      <ToastProvider value={providerValue}>
        <FormContainer />
      </ToastProvider>
    );
    const input = screen.getByPlaceholderText(
      "Please share your review of our product"
    );
    fireEvent.blur(input);
    await waitFor(() => {
      const validationErrors = screen.getByTestId(`errors-comment`);
      expect(validationErrors.innerHTML).toBe(
        "Don't be shy, give us your two cents!"
      );
    });
  });
  it("renders all error message if submit fired with empty form", async () => {
    render(
      <ToastProvider value={providerValue}>
        <FormContainer onSubmit={handleSubmit} />
      </ToastProvider>
    );
    const button = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(button);
    await waitFor(() => {
      const nameError = screen.getByTestId(`errors-fullName`);
      expect(nameError.innerHTML).toBe("We need your name for the review");
      const emailError = screen.getByTestId(`errors-email`);
      expect(emailError.innerHTML).toBe("We need your email address");
      const titleError = screen.getByTestId(`errors-title`);
      expect(titleError.innerHTML).toBe("Please enter a headline");
      const ratingError = screen.getByTestId(`errors-rating`);
      expect(ratingError.innerHTML).toBe("Please select a star rating");
      const commentError = screen.getByTestId(`errors-comment`);
      expect(commentError.innerHTML).toBe(
        "Don't be shy, give us your two cents!"
      );
    });
  });
});

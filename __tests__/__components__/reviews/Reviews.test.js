import { screen, render } from "@testing-library/react";
import React from "react";
import Reviews from "../../../components/reviews/Reviews";
import { ToastProvider } from "react-toast-notifications";

const addToast = () => {};
const providerValue = { addToast };

const mockReviews = [
  {
    comment: "This is a comment",
    email: "rey@email.co.uk",
    fullName: "Rey Reyes",
    rating: 4,
    title: "Not bad value",
    id: 1,
  },
  {
    comment: "different comment",
    email: "not.reynaldo@email.co.uk",
    fullName: "NOT Rey Reyes",
    rating: 5,
    title: "Good Value",
    id: 2,
  },
  {
    comment: "Bad comments.",
    email: "Claire@email.com",
    fullName: "Claire",
    rating: 5,
    title: "Value for money",
    id: 3,
  },
];

describe("Reviews Component", () => {
  it("renders correctly without crashing with no data passed", () => {
    render(
      <ToastProvider value={providerValue}>
        <Reviews />
      </ToastProvider>
    );
    const text = screen.getByText(
      "No reviews in yet, be the first one to review!"
    );
    expect(text).toBeTruthy;
  });
  it("renders correctly without crashing with data passed", () => {
    render(
      <ToastProvider value={providerValue}>
        <Reviews data={mockReviews} />
      </ToastProvider>
    );
    const text = screen.getByText(mockReviews[0].comment);
    expect(text).toBeTruthy;
  });
});

import { screen, render } from "@testing-library/react";
import React from "react";
import ReviewCard from "../../../components/reviews/ReviewCard";
import { ToastProvider } from "react-toast-notifications";

const addToast = () => {};
const providerValue = { addToast };

const mockReviews = {
  comment: "This is a comment",
  email: "rey@email.co.uk",
  fullName: "Rey Reyes",
  rating: 4,
  title: "Not bad value",
  id: 1,
};
describe("ReviewCard Component", () => {
  it("renders correctly without crashing with no data passed", () => {
    render(
      <ToastProvider value={providerValue}>
        <ReviewCard />
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
        <ReviewCard key={mockReviews.id} review={mockReviews} />
      </ToastProvider>
    );
    const text = screen.getByText(mockReviews.comment);
    expect(text).toBeTruthy;
  });
});

import { render, screen } from '@testing-library/react'
import Home from '../app/home/page'


test('renders the correct header title', () => {
  const headerText = <Header />;
  render(<Home />); // ARRANGE

  // Use getByText to find the element containing the header text
  const headerElement = screen.getByElement(headerText); // ACT

  // Assert that the element is in the document
  expect(headerElement).toBeInTheDocument(); //ASSERT
});
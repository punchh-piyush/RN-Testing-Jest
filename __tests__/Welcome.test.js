import Welcome from '../src/Welcome';
import {render, fireEvent, screen} from '@testing-library/react-native';

describe('Welcome', () => {
  test('renders "Test App" as a text', () => {
    // Arrange
    render(<Welcome />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Test App');
    expect(helloWorldElement).toBeTruthy();
  });

  test('renders "Not Changed!" you if the button was NOT clicked', () => {
    render(<Welcome />);

    const outputElement = screen.getByText('Not Changed!');
    expect(outputElement).toBeTruthy();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    render(<Welcome />);

    // Act
    const buttonElement = screen.getByRole('button');
    fireEvent.press(buttonElement);

    // Assert
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeTruthy();
  });

  test('does not render "Not Changed!" if the button was clicked', () => {
    // Arrange
    render(<Welcome />);

    // Act
    const buttonElement = screen.getByRole('button');
    fireEvent.press(buttonElement);

    // Assert
    const outputElement = screen.queryByText('Not Changed!');
    expect(outputElement).toBeNull();
  });
});

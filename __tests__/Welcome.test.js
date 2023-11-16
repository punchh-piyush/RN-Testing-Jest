import Welcome from '../src/Welcome';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {create} from 'react-test-renderer';

describe('Welcome', () => {
  test('renders correctly', () => {
    const tree = create(<Welcome />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders "Test App" as a text', () => {
    // Arrange
    const {getByText} = render(<Welcome />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = getByText('Test App');
    expect(helloWorldElement).toBeTruthy();
  });

  test('renders "Not Changed!" if the button was NOT clicked', () => {
    const {getByText} = render(<Welcome />);

    const outputElement = getByText('Not Changed!');
    expect(outputElement).toBeTruthy();
  });

  test('renders "Changed!" if the button was clicked', () => {
    // Arrange
    const {getByText, getByTestId} = render(<Welcome />);

    // Act
    const buttonElement = getByTestId('btn-primary');
    fireEvent.press(buttonElement);

    // Assert
    const outputElement = getByText('Changed!');
    expect(outputElement).toBeTruthy();
  });

  test('does not render "Not Changed!" if the button was clicked', () => {
    // Arrange
    const {queryByText, getByTestId} = render(<Welcome />);

    // Act
    const buttonElement = getByTestId('btn-primary');
    fireEvent.press(buttonElement);

    // Assert
    const outputElement = queryByText('Not Changed!');
    expect(outputElement).toBeNull();
  });
});

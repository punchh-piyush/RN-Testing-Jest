import {render, fireEvent, screen} from '@testing-library/react-native';
import {create} from 'react-test-renderer';
import MyButton from '../src/MyButton';

describe('Welcome', () => {
  test('does not render "Not Changed!" if the button was clicked', () => {
    // Arrange

    const mockOnPress = jest.fn();

    const {queryByText, getByTestId} = render(
      <MyButton onPress={mockOnPress} />,
    );

    // Act
    const buttonElement = getByTestId('btn-primary');
    fireEvent.press(buttonElement);

    // Assert
    expect(mockOnPress).toHaveBeenCalled();
  });
});

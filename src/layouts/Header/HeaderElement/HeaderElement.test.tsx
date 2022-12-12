import { render, screen } from '@testing-library/react';
import { activeClass, HeaderElement } from './HeaderElement';
import { mockHeaderElementActiveProps, mockHeaderElementInactiveProps } from './HeaderElement.mocks';

describe('HeaderElement', () => {
  function renderBaseComponent(): void {
    render(<HeaderElement {...mockHeaderElementInactiveProps} />);
  }

  it('renders without errors', () => {
    // Arrange
    renderBaseComponent();
    // Act
    // Assert
    expect(screen.getByTestId('headerElement')).toBeInTheDocument();
  });

  it('displays the title', () => {
    // Arrange
    renderBaseComponent();
    // Act
    // Assert
    expect(screen.getByTestId('headerElement')).toHaveTextContent(mockHeaderElementInactiveProps.title);
  });

  it('active value changes className', () => {
    // Arrange
    render(<HeaderElement {...mockHeaderElementActiveProps} />);
    // Act
    // Assert
    expect(screen.getByTestId('headerElement')).toHaveClass(activeClass);
  });
});

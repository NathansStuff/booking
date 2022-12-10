import { act, fireEvent, render, screen } from '@testing-library/react';
import { activeClass, HeaderElement } from './HeaderElement';
import { mockHeaderElementInactiveProps } from './HeaderElement.mocks';

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

  // it('hover state changes ', () => {
  //   // Arrange
  //   renderBaseComponent();
  //   const title = screen.getByText(mockHeaderElementInactiveProps.title);
  //   expect(screen.getByText(mockHeaderElementInactiveProps.title)).not.toHaveClass(activeClass);

  //   // Act
  //   act(() => {
  //     fireEvent.focus(title);
  //   });
  //   // Assert
  //   expect(screen.getByText(mockHeaderElementInactiveProps.title)).toHaveClass(activeClass);
  // });
});

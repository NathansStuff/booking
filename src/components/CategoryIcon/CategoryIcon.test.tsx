import { render, screen } from '@testing-library/react';
import { CategoryIcon } from './CategoryIcon';
import { mockCategoryIconProps } from './CategoryIcon.mocks';

describe('CategoryIcon', () => {
  function renderBase(): void {
    render(<CategoryIcon {...mockCategoryIconProps} />);
  }

  it('renders without errors', () => {
    // Arrange
    renderBase();
    // Act
    // Assert
    expect(screen.getByTestId('categoryIcon')).toBeInTheDocument();
  });

  it('renders the correct image', () => {
    // Arrange
    renderBase();
    // Act
    // Assert
    expect(screen.getByAltText(mockCategoryIconProps.title)).toBeInTheDocument();
  });

  it('renders the correct title', () => {
    // Arrange
    renderBase();
    // Act
    // Assert
    expect(screen.getByText(mockCategoryIconProps.title)).toBeInTheDocument();
  });
});

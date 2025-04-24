# Americold UseCases Dashboard Style Guide

This document outlines the design system and components used in the Americold UseCases Dashboard.

## Colors

- **Primary**: #0056B3 - Used for primary actions, buttons, and highlights
- **Secondary**: #6C757D - Used for secondary text and actions
- **Success**: #28A745 - Used for success states and completed items
- **Danger**: #DC3545 - Used for error states and critical actions
- **Warning**: #FFC107 - Used for warning states and pending items
- **Info**: #17A2B8 - Used for informational states and scheduled items
- **Light**: #F8F9FA - Used for light backgrounds
- **Dark**: #343A40 - Used for dark text and headers
- **Background**: #F5F7FA - Used for page backgrounds
- **Text**: #212529 - Used for body text
- **Border**: #DEE2E6 - Used for borders and dividers
- **Header Background**: #FFFFFF - Used for header backgrounds
- **Card Background**: #FFFFFF - Used for card backgrounds
- **Accordion Background**: #F8F9FA - Used for accordion headers

## Typography

- **Font Family**: Roboto, sans-serif
- **Font Sizes**:
  - xs: 0.75rem (12px)
  - sm: 0.875rem (14px)
  - md: 1rem (16px)
  - lg: 1.125rem (18px)
  - xl: 1.25rem (20px)
  - xxl: 1.5rem (24px)
  - xxxl: 2rem (32px)

## Spacing

- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **xxl**: 3rem (48px)

## Border Radius

- **sm**: 0.25rem (4px)
- **md**: 0.5rem (8px)
- **lg**: 1rem (16px)
- **pill**: 50rem (800px) - Used for badges and pills

## Shadows

- **sm**: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)
- **md**: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)
- **lg**: 0 1rem 3rem rgba(0, 0, 0, 0.175)

## Breakpoints

- **xs**: 0
- **sm**: 576px
- **md**: 768px
- **lg**: 992px
- **xl**: 1200px
- **xxl**: 1400px

## Components

### Button

Buttons are used for actions and navigation.

**Variants**:
- Primary: Blue background with white text
- Secondary: Gray background with white text
- Outline: Transparent background with blue border and text
- Text: Transparent background with blue text

**Sizes**:
- Small: Smaller padding and font size
- Medium: Default size
- Large: Larger padding and font size

### Card

Cards are used to group related content.

**Properties**:
- Padding: Controls the internal spacing
- Margin: Controls the external spacing
- Elevation: Controls the shadow depth (low, medium, high)

### Badge

Badges are used to highlight status or categories.

**Variants**:
- Primary: Blue background with white text
- Success: Green background with white text
- Warning: Yellow background with dark text
- Danger: Red background with white text
- Info: Light blue background with white text
- Secondary: Gray background with white text

### Accordion

Accordions are used to show/hide content.

**States**:
- Closed: Shows only the header with a plus icon
- Open: Shows the header with a rotated plus icon and the content

### Table

Tables are used to display structured data.

**Components**:
- Table: The container for all table elements
- TableHeader: The header section of the table
- TableBody: The body section of the table
- TableRow: A row in the table
- TableCell: A cell in the table
- TableHeaderCell: A header cell in the table

## Usage Guidelines

1. Use consistent spacing and typography throughout the application
2. Use appropriate colors for different states and actions
3. Use cards to group related content
4. Use tables for structured data
5. Use accordions for expandable content
6. Use badges to highlight status or categories

## Accessibility Guidelines

1. Ensure sufficient color contrast for text and interactive elements
2. Provide focus states for interactive elements
3. Use semantic HTML elements
4. Ensure keyboard navigation works for all interactive elements
5. Provide alternative text for images and icons
6. Ensure the application is usable with screen readers

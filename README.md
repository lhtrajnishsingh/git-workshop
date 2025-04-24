# Americold UseCases Dashboard

A React-based dashboard for Americold UseCases, featuring a responsive design with expandable rows and customizable components.

## Features

- Responsive dashboard layout
- Interactive data table with expandable rows
- Status indicators with color-coded badges
- Customizable components based on a design system
- Mock API integration for easy testing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lhtrajnishsingh/git-workshop.git
cd git-workshop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Project Structure

```
├── docs/                 # Documentation
│   └── style-guide.md    # Design system documentation
├── public/               # Public assets
│   └── index.html        # HTML template
├── src/                  # Source code
│   ├── assets/           # Static assets
│   │   └── icons/        # Icon files
│   ├── components/       # React components
│   │   ├── common/       # Reusable components
│   │   ├── Dashboard.tsx # Main dashboard component
│   │   └── DataTable.tsx # Data table component
│   ├── services/         # API services
│   │   └── api.ts        # API integration
│   ├── styles/           # Global styles
│   │   ├── GlobalStyles.tsx # Global style definitions
│   │   └── theme.ts      # Theme configuration
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts      # Type definitions
│   ├── App.tsx           # Main App component
│   └── index.tsx         # Entry point
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Design System

The application follows a comprehensive design system documented in [docs/style-guide.md](docs/style-guide.md). The design system includes:

- Color palette
- Typography
- Spacing
- Border radius
- Shadows
- Breakpoints
- Component specifications

## Components

### Common Components

- **Button**: Customizable button with different variants and sizes
- **Card**: Container for grouping related content
- **Badge**: Status indicators with different colors
- **Accordion**: Expandable content sections
- **Table**: Data display with customizable cells and rows

### Main Components

- **Dashboard**: Main dashboard layout with statistics and data table
- **DataTable**: Interactive table with expandable rows

## API Integration

The application includes a mock API service that simulates fetching data from a backend. In a production environment, this would be replaced with actual API calls.

## Customization

The application is highly customizable through the theme configuration in `src/styles/theme.ts`. You can modify:

- Colors
- Font sizes
- Spacing
- Border radius
- Shadows
- Breakpoints

## Accessibility

The application follows accessibility best practices:

- Semantic HTML
- Sufficient color contrast
- Keyboard navigation
- Screen reader support

## License

This project is licensed under the ISC License.

# Real Estate ProMinds

This project is a real estate web application built with React and Vite. It showcases properties, amenities, image galleries, and other relevant information for a real estate business.

## Technologies Used

- React: Frontend UI library
- Vite: Build tool and development server
- Tailwind CSS: Utility-first CSS framework for styling
- ESLint: Code linting and quality enforcement

## Project Structure

- `src/`: Contains React components, assets, and styles
  - `components/`: Reusable React components such as Navbar, Footer, PropertyCard, Gallery, etc.
  - `assets/`: Static assets like logos and icons
  - `App.jsx`: Main application component
  - `main.jsx`: Entry point for React rendering
  - `index.css` and `App.css`: Styling files
- `public/`: Static public assets like images and icons accessible by the app
- Configuration files for Vite, Tailwind CSS, ESLint, and PostCSS

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd realstste-prominds-main
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or if you use yarn:
   ```bash
   yarn
   ```

### Running the Development Server

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```
or
```bash
yarn dev
```

Open your browser and go to `http://localhost:3000` (or the port shown in the terminal) to view the app.

### Building for Production

To build the app for production deployment:

```bash
npm run build
```
or
```bash
yarn build
```

The build output will be in the `dist/` directory.

### Previewing the Production Build

You can preview the production build locally with:

```bash
npm run preview
```
or
```bash
yarn preview
```

## Additional Information

- Images and other static assets are stored in the `public/` directory.
- Tailwind CSS is configured via `tailwind.config.js`.
- ESLint rules are configured in `eslint.config.js`.
- Vite configuration is in `vite.config.js`.

## License

This project is licensed under the MIT License.

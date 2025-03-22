# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and NextUI. Features smooth animations, interactive elements, and a clean design.

## Features

-   🎨 Modern UI with NextUI components
-   🎭 Smooth animations using Framer Motion
-   🎯 Custom cursor with interactive hover effects
-   📱 Fully responsive design
-   🎨 Dark/Light mode support
-   📊 Scroll progress indicator
-   ⬆️ Smooth scroll-to-top button
-   🎯 Interactive project showcase
-   📝 Dynamic resume section
-   📧 Contact form with email integration
-   🎨 Custom color scheme and typography

## Technologies Used

-   React 18
-   TypeScript
-   Vite
-   NextUI
-   Framer Motion
-   React Router DOM
-   React Icons
-   Tailwind CSS
-   EmailJS

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to the project directory:

```bash
cd portfolio
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── assets/            # Static assets (images, fonts)
├── styles/            # Global styles
└── App.tsx            # Main application component
```

## Customization

### Colors and Theme

The website uses a custom color scheme defined in `tailwind.config.js`. You can modify the colors by updating the theme configuration:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#7C3AED',
        foreground: '#FFFFFF',
      },
      // ... other colors
    }
  }
}
```

### Content

-   Update personal information in the respective page components
-   Modify project details in `src/pages/Projects.tsx`
-   Update resume content in `src/pages/Resume.tsx`
-   Customize contact form in `src/pages/Contact.tsx`

## Deployment

The website is configured for easy deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Deploy with the following settings:
    - Build Command: `npm run build`
    - Output Directory: `dist`
    - Install Command: `npm install`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   [NextUI](https://nextui.org/) for the beautiful UI components
-   [Framer Motion](https://www.framer.com/motion/) for smooth animations
-   [React Icons](https://react-icons.github.io/react-icons/) for the icon set
-   [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

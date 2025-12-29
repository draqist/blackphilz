# Blackp Studio

A premium, dark-themed web experience designed with depth, motion, and elegance. This project features smooth scrolling, parallax animations, and a curated aesthetic.

## Features

- **Immersive Dark Mode**: A deep, rich color palette designed for a premium feel.
- **Smooth Scrolling**: Integrated [Lenis](https://github.com/studio-freight/lenis) for buttery smooth scroll inertia.
- **Advanced Animations**: Powered by [GSAP](https://greensock.com/gsap/) for text reveals and parallax effects.
- **Custom Typography**: beautiful [Satoshi](https://www.fontshare.com/fonts/satoshi) font family for modern readability.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS v4.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: GSAP (GreenSock Animation Platform)
- **Scrolling**: Lenis
- **Language**: TypeScript

## Getting Started

1. **Install dependencies**:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server**:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Page routes and layouts.
- `src/components`:
  - `animation`: GSAP wrappers (`RevealText`, `ParallaxImg`).
  - `layout`: Structural components (`Header`, `Footer`, `SmoothScroller`).
- `src/styles`: Global styles and variables.
- `src/hooks`: Custom hooks (`useScroll`, `useIsomorphicLayoutEffect`).
- `public/fonts`: Local font files.

## License

[MIT](LICENSE)

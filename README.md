# HomeBuyer's Compass

Welcome to **HomeBuyer's Compass**, a Next.js application designed to be a clear and friendly guide for first-time buyers navigating the often-complex process of purchasing a freehold property in England.

This app breaks down the journey into understandable phases, provides essential checklists, demystifies jargon, and offers a curated list of authoritative resources to help users feel confident and prepared.

## Key Features

- **Interactive Timeline**: Visualizes the entire home-buying journey, from initial financial preparation to post-completion admin, with typical durations for each phase.
- **Phase-by-Phase Checklists**: Actionable to-do lists for each stage of the process. Progress is saved in the browser's local storage so users can pick up where they left off.
- **Key Document Library**: A simple guide to the most important documents a buyer will encounter, explaining what they are and why they matter.
- **Professional Directory**: A "Who's Who" of the key professionals involved in a property purchase, outlining their roles and responsibilities.
- **In-Depth Glossary**: A comprehensive glossary of property terms, expanded with "must-know" facts, potential "gotchas," and links to definitive external resources like GOV.UK and RICS.

## Tech Stack

This project is built with a modern, performant, and type-safe stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Component Library**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit) (for potential future AI-powered features)

## Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Install Dependencies**:
    Open your terminal and run the following command to install the necessary packages:
    ```bash
    npm install
    ```

2.  **Run the Development Server**:
    Once the installation is complete, start the Next.js development server:
    ```bash
    npm run dev
    ```

3.  **View the App**:
    Open your browser and navigate to [http://localhost:9002](http://localhost:9002) to see the application in action.

## Project Structure

- `src/app/`: Contains the main pages of the application, following the Next.js App Router structure.
- `src/components/`: Home to reusable React components, including the UI components from ShadCN.
- `src/lib/`: Contains utility functions (`utils.ts`) and the core application data (`data.ts`) that powers the timeline, checklists, glossary, etc.
- `public/`: For static assets that don't need to be processed by the build pipeline.
- `tailwind.config.ts`: The configuration file for Tailwind CSS, where the app's theme and design tokens are defined.
- `next.config.ts`: Configuration for the Next.js framework.

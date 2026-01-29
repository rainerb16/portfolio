export const inventoryFrontendDoc = `
# Inventory Dashboard (UI)

The frontend interface for the Inventory Management System. This dashboard was built with a **"Merchant-First"** mindset, focusing on scannability, data security, and ease of use for non-technical business owners.

## Technical Stack
- **Library:** React.js (Vite)
- **State Management:** React Hooks (\`useState\`, \`useEffect\`)
- **Styling:** Modular Sass (SCSS)
- **CI/CD:** GitHub Actions for automated linting and build verification.

---

## Architecture & Security
Unlike traditional applications that store authentication state in \`localStorage\`, this dashboard utilizes a **stateless frontend** approach to maximize security.

- **Session-Based Auth:** Authentication state is derived entirely from the backend via a \`/me\` endpoint.
- **Secure Cookies:** All API requests automatically include \`httpOnly\` session cookies using the \`credentials: "include"\` fetch policy.
- **Data Protection:** The UI only attempts to fetch protected resources (like inventory items) after the backend confirms a valid user session.

---

## Key Features
* **Real-Time Dashboard:** Provides a high-level overview of stock levels with automatic low-stock highlighting.
* **Inline Management:** Allows merchants to update stock quantities and product details directly from the table view.
* **Responsive Design:** Optimized for desktop and tablet, enabling inventory checks on the warehouse floor.

---

## Component Design
I treated the UI components as both functional tools and training assets:
- **Reusability:** Built with modular SCSS and functional components (Modals, Tables, Input Fields) for easy maintenance.
- **User Feedback:** Implemented clear loading states, empty-data placeholders, and error boundaries to guide users through their tasks.

## Local Setup

**1. Prerequisites**
Ensure the Backend API is running locally at \`http://localhost:3000\`.

**2. Installation & Launch**
\`\`\`bash
# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`
*The dashboard will be accessible at \`http://localhost:5173\`.*
`;
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🛍️ CraftCart - Handmade Product Shopping Site

CraftCart is a modern, responsive shopping web app built using **React.js**, **Tailwind CSS**, and **Context API**. It offers users a seamless shopping experience with features like add to cart, wishlist, category filtering, and order confirmation.

---

## 🌟 Features

- 🔎 Search and Filter Products by Category
- 🛒 Add to Cart / Remove from Cart
- ❤️ Wishlist Management
- 📦 Order Placement with Confirmation Page
- 💾 Cart Persistence using LocalStorage
- 🔔 Toast Notifications (react-hot-toast)
- 📱 Fully Responsive UI using Tailwind CSS
- 🎨 Traditional aesthetic with vibrant colors

---



---

## 🚀 Live Demo

🌐 [CraftCart Live on Netlify](https://unique-paletas-8cb10a.netlify.app/)

---

## 🔧 Tech Stack

- **React.js**
- **Tailwind CSS**
- **Context API** – Global state management for Cart & Wishlist
- **React Router** – Page navigation
- **React Hot Toast** – Smooth alert notifications
- **LocalStorage** – Persistent data for Cart and Wishlist

---

## 📁 Folder Structure
craftcart/
├── public/
│ ├── images/
│ └── order confirm.mp3
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── ProductCardGrid.jsx
│ │ └── CartSidebar.jsx
│ ├── contexts/
│ │ ├── CartContext.jsx
│ │ └── WishlistContext.jsx
│ ├── data/
│ │ └── products.js
│ ├── pages/
│ │ ├── OrderSuccess.jsx
│ │ └── WishlistItems.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx




---

## 🛠️ Getting Started Locally

### Step 1: Clone the repository

```bash
git clone https://github.com/Pooja-2124/craftcart.git
cd craftcart

Step 2: Install dependencies
bash
Copy code
npm install

Step 3: Run the app
bash
Copy code
npm run dev
Open your browser and navigate to: http://localhost:5173


✨ Future Enhancements
🔐 Authentication (Login/Signup)

🧾 Order History Page

📊 Admin Dashboard

💳 Payment Gateway Integration



🙋‍♀️ Author
Pooja Shrirang Gadhave
📍 Amravati, India
🎓 MCA Student at Vidyabharati Mahavidyalaya
🔗 GitHub - Pooja-2124



This project is licensed under the MIT License.

yaml
Copy code

---

### ✅ Next Step:
- Paste this into a new `README.md` file inside your `craftcart/` project root.
- Commit it using:
  ```bash
  git add README.md
  git commit -m "Add detailed project README"
  git push

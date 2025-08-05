# macOS React UI

**macOS React UI** is a modern, interactive desktop-like web interface inspired by the macOS operating system. This project simulates a macOS-like environment in the browser, built entirely with React and Tailwind CSS.

🔗 **Live Demo:** [rdvnui.com](https://rdvnui.com)

## ✨ Features

- 🖥️ macOS-style desktop with draggable windows and dock  
- 📁 Launchable apps and file-like UI elements  
- ⚛️ Fully component-based React architecture  
- 🎨 Styled with Tailwind CSS for rapid customization  
- 🧠 Global state management with Zustand  
- 🧩 Animations and transitions via Framer Motion  

## 🚀 Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)

## 🛠️ Getting Started

```bash
git clone https://github.com/ridvanonal/macos-react.git
cd macos-react
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
macos-react/
├── public/           # Static assets
├── src/
│   ├── apps/         # Simulated apps
│   ├── components/   # Reusable UI components
│   ├── store/        # Global state (Zustand)
│   ├── utils/        # Utility functions
│   └── ...
├── index.html
└── README.md
```

## 🧩 Developer Notes

- All windows, apps, and UI elements are built as modular components.
- You can add new apps by extending the `/apps` folder.
- Zustand is used for managing window states, active apps, and more.

## 🛠️ Ongoing Development

This project is under **active development** and is improved over time as availability allows.  
New features, refinements, and components are added gradually to make the system more polished and dynamic.

If you have suggestions or ideas, feel free to [open an issue](https://github.com/ridvanonal/macos-react/issues) or create a pull request.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create a new branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to your branch (`git push origin feature/your-feature`)  
5. Create a pull request ✅

## 📄 License

MIT License © [Rıdvan Önal](https://github.com/ridvanonal)

---

> This project is a creative UI experiment and is **not** a real operating system. It's built to showcase desktop-like UI behavior on the web.

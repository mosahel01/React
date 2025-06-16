
# 💱 Currency Converter [![Netlify Status](https://api.netlify.com/api/v1/badges/6e1babd7-1f28-4bd7-aca3-a097d8a3cfd8/deploy-status)](https://app.netlify.com/projects/mos-currency-converter/deploys)

A simple and responsive **Currency Converter** built using **React** and **TailwindCSS**,
powered by [Fawaz Ahmed's Free Currency API](https://github.com/fawazahmed0/currency-api).

> Instantly convert between currencies with real-time exchange rates.

---
__*Live Demo*__: [mos-currency-converter.netlify.app](https://mos-currency-converter.netlify.app/) 

## 🚀 Features

- 🌍 Convert any currency to another in real-time
- 🔄 Swap "From" and "To" currencies
- 📈 Auto-updates exchange rates using latest API data
- 💅 Fully responsive UI using TailwindCSS

---

## 🧰 Tech Stack

- **React** – Component-based UI
- **TailwindCSS** – Utility-first styling
- **Fawaz Ahmed's Currency API** – Real-time exchange rates

---

## 📦 Installation

```bash
git clone https://github.com/mosahel01/currency-converter.git
cd currency-converter
npm install
npm run dev
````

Make sure you have **Node.js** and **npm** installed.

---

## 🔗 API Info

This app uses:

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{base}.json
```

Replace `{base}` with your currency code (e.g., `usd`, `inr`, `eur`, etc.)

---

## 🛠️ Customization

* Tailwind classes are used for styling, so feel free to tweak them.
* You can change the default currency or extend functionality (e.g., add charts, history).

---

## 📂 Project Structure

```
src/
├── components/
│   └── InputBox.jsx      # Custom currency input field
├── hooks/
│   └── useCurrencyInfo.js # Custom hook to fetch rates
├── App.jsx
└── main.jsx
```

---

## 🤝 Contributing

Pull requests and issues are welcome! Feel free to fork and contribute.

---

## 👤 Author

**[@mosahel01](https://github.com/mosahel01)** – Creator & Maintainer

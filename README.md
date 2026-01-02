# Redux Toolkit Learning Project 🚀

This project was built to **learn and practice Redux Toolkit** in a real React application.
It focuses on **state management, slices, store configuration, and connecting Redux with React components**.

---

## 📌 Project Overview

This is a React application where:
- Global state is managed using **Redux Toolkit**
- Search and collection data are stored centrally
- Components consume state using `useSelector`
- State updates are triggered using `useDispatch`

The goal of this project was to **understand Redux Toolkit practically instead of just theory**.

---

## 🛠 Tech Stack

- React (Vite)
- Redux Toolkit
- React Redux
- React Router
- Tailwind CSS
- Axios

---

## 📂 Folder Structure

```
src/
├── api/
│   └── mediaApi.js
│
├── components/
│   ├── CollectionCard.jsx
│   ├── NavBar.jsx
│   ├── ResultCard.jsx
│   ├── ResultGrid.jsx
│   ├── SearchBar.jsx
│   └── Tabs.jsx
│
├── pages/
│   ├── CollectionPage.jsx
│   └── HomePage.jsx
│
├── redux/
│   ├── store.js
│   └── features/
│       ├── collectionSlice.js
│       └── searchSlice.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧠 Redux Toolkit Concepts Learned

### 1️⃣ Store Configuration
- Created Redux store using `configureStore`
- Combined multiple slices
- Connected store using `<Provider>`

### 2️⃣ Redux Slices
- Used `createSlice`
- Defined initial state and reducers
- Auto-generated actions

### 3️⃣ Using Redux in Components

```js
const { query } = useSelector((state) => state.search);
const dispatch = useDispatch();
dispatch(setQuery(value));
```

---

## ▶️ How to Run the Project

```bash
npm install
npm run dev
```

---

## 📘 What I Learned

- Practical Redux Toolkit usage
- Cleaner state management
- Proper project structure
- Difference between local and global state

---

## 🚀 Future Improvements

- Add createAsyncThunk
- Handle loading & error states
- Persist Redux state
- Add tests

---

## ✅ Conclusion

This project helped me gain confidence in using **Redux Toolkit** for real-world React applications.

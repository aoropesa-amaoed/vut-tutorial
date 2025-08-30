# fbase

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# Database and Authentication

This project is a Vue.js application demonstrating user authentication and CRUD operations with Firebase.

## Features
- User registration
- Login/logout
- Add, update, and delete articles
- Firebase Firestore integration
- Responsive UI with Bootstrap

## Project Structure
```
database-and-authentication/
├── index.html
├── jsconfig.json
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── favicon.ico
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── assets/
│   │   ├── base.css
│   │   ├── logo.svg
│   │   └── main.css
│   ├── components/
│   │   ├── header.vue
│   │   ├── home.vue
│   │   ├── admin/
│   │   │   ├── add_article.vue
│   │   │   └── update_article.vue
│   │   ├── firebase/
│   │   │   └── config.js
│   │   └── users/
│   │       └── register.vue
│   └── router/
│       └── index.js
```

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the development server:
   ```sh
   npm run dev
   ```
3. Configure your Firebase credentials in `src/components/firebase/config.js`.

## Usage
- Register a new user
- Login and manage articles
- Articles are stored in Firebase Firestore

## License
MIT

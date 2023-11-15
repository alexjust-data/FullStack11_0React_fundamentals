# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# NOTES BOOTCAMP

# Hello React

Basic examples to understand React

## How to run

Este comando lo que hace es levantar un servidor estático en http://localhost:3000/

```
npx browser-sync start --server --files "./*.html" --no-notify --directory
```


Vamos hacer una aplicacion con React, en esta página encontramos toda la informacion https://create-react-app.dev/docs/getting-started


Con Vite sería similar  https://vitejs.dev/guide/  

Si lo instalaras con `vite`, está muy de moda esta empaquetador y podemos usarlo para construir nuestra app tbn

```sh
nmp create vite@latest
```

### Creamos aplicacion

Arranco el servidor `sparres.js` para conectar con el `front` lo usaremos como apoyo al backenk porque haremos un clon de twetter apoyado en este servidor.

```sh
➜  sparrest.js git:(main) ✗ npm start

> sparrest@1.0.0 start
> node index.js

JSON Server is running on port 8001
```

Ejecutams de manera global desde mi carpeta raiz de la app, la app la llamaré `twitter-react`

```sh
npx create-react-app twitter-react
cd twitter-react
npm start
```


veamos **twitter-react/package.json**

```js
  "scripts": {
    "start": "react-scripts start", // arranca el entorno de desarrollo
    "build": "react-scripts build", // hace la compilacion
    "test": "react-scripts test", // arranca el entronde testing preparado y herramientas actuales
    "eject": "react-scripts eject" // todo lo que hace react está encondido en este paquete "react-scripts"
    // Si yo quiero tocar la config de webpack no podemos, pero en algún caso si queremos
    // "eject" este comando lo ejecuto y react saca a la luz toda la configuracion para modificarla
```

Arrancamos con el comando de desarrollo y arranca en e puerto 3000, lo puedes cambiar si quieres,busca en la doc

```sh
npm run start
```

nos ha creado las carpetas del proyecto, si nos metemos en public veremos `twitter-react/public/index.html` vacío 

```sh
public
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
└── robots.txt
```

donde en la linea 31 `<div id="root"></div>` se va a enganchar el fichero de `js` codigo que vayamos generando

```html
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>

```

nosotros en principio no hemos de tocar nada. Con el codigo que tiene de punto de entrada en `twitter-react/scr/index.js` generará el codigo que engancha en el html.

```sh
scr
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
└── setupTests.js
```
El punto de entrada en el `index,js` tenemos un componente principal que es lo que va a renderizar, está importándose desde el fichero `./App` el componenete `app` y es lo que vamos a renderizar. Está **envuelto** en un componenete de React que se llama `<React.StrictMode>`; este un un componenete d ela librería React que hace unos ciertos chequeos para ver si estamos utilizando react como debemos, nos lanzará si usamos metodos deprecados, warnings si nos dejamos algo, etc Si es un incordio lo puedes quitar.Cuando estés modo produccion desaparece.

```html
  <React.StrictMode>
    <App />
  </React.StrictMode>
```

Si nos metemos en el componente principal `App.js` está importando un logo `.svg`
```js
import logo from './logo.svg';

<img src={logo} className="App-logo" alt="logo" />
```
que se la pasa al `src` le pasa una url. Si lo hicieras a mano sería vastante complejo pero lo hace webpack por debajo. Lo mismo para el `App.css` . Por lo demás el **componente** App() es bastante sencillo, si modificas cosas las verás en el browser al momento.

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
```
---

Voy a quitar `App.css` porque vamos a crearnos nuestro fichero nosotros. Voy a modificar ahora `App.js` dejando sólo lo siguiente dentro:

```js
function App() {
  return (
    <div className="App">
        <h1>
          Keepcoder´s! Don´t forget to learn React!
        </h1>
    </div>
  );
}

export default App;
```

elimino `reportWebVitals.js` y quito el `import reportWebVitals from './reportWebVitals';` de `index.js`
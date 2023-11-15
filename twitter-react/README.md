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

### Listas

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


---

Vamos a crear un listado de tweets

Vamos al componente `App.js`

Creo carpet `scr/pages` que iremos almacendao nuestras paginas, dividiremos las páginas por concepto de productos `scr/pages/tweets` y me creo un `tweets.js`para meter el componente de listado de tweets, un componente solo es una funcion:

```js
// listado de tweets
const tweets = [
  {
    content:
      "Nos hace mucha ilusión anunciar la fecha del ESTRENO de 'Eso que tu me das', documental con la última entrevista a Pau Donés. 30 DE SEPTIEMBRE, en cines de toda España. @WarnerBrosSpain Y este es el cartel definitivo, con algunas frases de críticas que ya se han publicado.",
    userId: 1,
    updatedAt: '2021-03-15T18:23:57.579Z',
    id: 1,
  },
  {
    content:
      "'Soy muy fan tuya, pero ahora no me acuerdo cómo te llamas' (Una desconocida, en la calle).",
    userId: 1,
    updatedAt: '2021-03-15T18:24:56.773Z',
    id: 2,
  },
];

// con esto ya me saca los tweets por pantalla
function TweetsPage() {
    return (
    <div>
      <ul>
          <li>{tweets[0].content}</li>
          <li>{tweets[1].content}</li>
      </ul>
    </div>
  );
}

// lo exporto
export default TweetsPage;
```


Me voy al componente `src/App.js` y me importo `tweets.js` colocando el componente para que lo pinte `<TweetsPage></TweetsPage>`

```js
import TweetsPage from './pages/tweets/TweetsPage';

function App() {
  return (
    <div className="App">
          <TweetsPage></TweetsPage>
    </div>
  );
}

export default App;
```

Pero esta no es la manera 

```js
        <li>{tweets[0].content}</li>
        <li>{tweets[1].content}</li>
```

Vamos a mirar como se renderizan listas. Si tienes un array de datos como el array `const tweets` y quieres transformarlo en un array de elementos. Com map vamos a randerizar listas:

```js
function TweetsPage() {
    return (
    <div>
      <ul>
        {
            tweets.map(tweet => (<li>{tweet.content}</li>))
        }
      </ul>
    </div>
  );
}
```

Ahora bien, cuando estas haciendo listas y cambios y millones de lineas, si le pones un identificados React no te dará problemas. Siempre que tengas un map o listas, el elemento revuelto ha de tener una `key id`.

```js
function TweetsPage() {
    return (
    <div>
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```

### Aplicando estilos

Vamos hacer un stylo básico en la lista con atributo `className` simplememnte definiendo dentro de `<div className="tweetsPage">` el atributo con el nombre ya vale, luego lo definimos el css y listo


```js
function TweetsPage() {
    return (
    <div className="tweetsPage">
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```
Defino `scr/TweetsPage.css`

```css
.tweetsPage {
    color: red
}
```

para incorporar el estilo css lo importas en la página `TweetsPage.js` así `import './TweetsPage.css'` . En ese momento se ha incorporado en la página porque coincide la clase. Esto lo permite Webpacj, no React.

Podríamos complicar este css y le podríasmos aplicar **condicionalmente** que si la clase es `dark` (añado variable booleana `dark`) si no aplica `light` --> lo podemos hacer porque tenemos acceso a JS `<div className={'tweetsPage'${dark ? 'dark' : 'light'}'}>`

```js
const dark = true;

function TweetsPage() {
    return (
    <div className={`tweetsPage'${dark ? 'dark' : 'light'}`}>
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```

te vas `` y le aplicas un estile nuevo

```css
.tweetsPage {
    color: red
}

.dark {
    background-color: aliceblue;
    color:aqua;
}
```

por cada valor se aplicará un estilo u otra . Imagínate que en vez de llegar por una variable llega por una propiedad.  `function TweetsPage({ dark }) {}`

```js
const dark = true;

function TweetsPage({ dark }) {
    return (
    <div className={`tweetsPage'${dark ? 'dark' : 'light'}`}>
      <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
      </ul>
    </div>
  );
}
```

Si llega desde una prop imaginate que yo la puedo pasar desde `Àpp.js` desde el componente lo podemos controlar `<TweetsPage dark={false}>`. Le quitas la variable `const dark = true;` y se la pasas por el coponente

```js
import TweetsPage from './pages/tweets/TweetsPage';

function App() {
  return (
    <div className="App">
          <TweetsPage dark={false}/>
    </div>
  );
}

export default App;
```

cuando son atributos bool¡anos puedes escribirlo así `<TweetsPage dark={false}>` o así `<TweetsPage dark/>`. Esto `<div className={'tweetsPage'${dark ? 'dark' : 'light'}'}>` se podría complicar mucho, por esto es bueno que te mires estas librerías

https://github.com/JedWatson/classnames

https://github.com/lukeed/clsx

Estas librerías permiten construir string pero con clases complejas podemos usar las utilidades `usage` de git


```sh
npm install --save clsx
```
`import clsx from 'clsx';` en `TweetPAge.js`

creas la variable `const className = clsx("tweetsPage", {dark: dark, light: !dark})` y se la pasas así `<div className={className}> `


```js
import clsx from 'clsx';

function TweetsPage({ dark }) {
const className = clsx("tweetsPage", {dark: dark, light: !dark})
return (
    <div className={className}> 
    <ul>
        {
            tweets.map(tweet => (
                <li key={tweet.id}>{tweet.content}</li>
                ))
        }
    </ul>
    </div>
);
}
```

Entonces desde `App.js` en `<TweetsPage dark={false}/>` lo que le pases debe fucncionar igual. 

Has de tener cuidado porque hemos puesto en `TweetsPage.css` por ejemplo nada me impide que otro componente tuviera una clase que se llamara igual que `.tweetsPage` en el css y sobreescriba. Webpack lo que hace es meterlo todo en un css general y gana el ultimo. 

```css
.tweetsPage {
    color: red
}

.dark {
    background-color: aliceblue;
    color:aqua;
}
```

Para evitar colisiones hay una tecnica que se llama `module.css` que por cada clase que definas en ese fichero de aplicará un hashunico que te evitará colisiones de clases. Simplemente te creas un nuevo fichero `TweetsPage.module.css` y metes tus calses. Y ahora la aplicas:


```js
import clsx from 'clsx';

function TweetsPage({ dark }) {
    //const className = clsx("tweetsPage", {dark: dark, light: !dark})
    const className = clsx(styles.tweetsPage, {[styles.dark] : dark})
    return (
        <div className={className}> 
        <ul>
            {
                tweets.map(tweet => (
                    <li key={tweet.id}>{tweet.content}</li>
                    ))
            }
        </ul>
        </div>
    );
}
```
fíjate que estmos sacando de `styles` los nombres de las clases que etsamos importanto `import styles from './TweetsPage.module.css'` yo se que está dentro de styles y crea un atributo con o que tenga dentro la varibale.



**estilos inline**
`<ul style={{ listStyle: 'none' }}>`

```js
import clsx from 'clsx';

function TweetsPage({ dark }) {
    //const className = clsx("tweetsPage", {dark: dark, light: !dark})
    const className = clsx(styles.tweetsPage, {[styles.dark] : dark})
    return (
        <div className={className}> 
        <ul style={{ listStyle: 'none' }}>
            {
                tweets.map(tweet => (
                    <li key={tweet.id}>{tweet.content}</li>
                    ))
            }
        </ul>
        </div>
    );
}
```


1:17'
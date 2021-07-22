# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the project

El presente documento - proyecto se está llevando a cabo en el marco de realización de prácticas del curso ReactJS, de la carrera de Desarrollo FrontEnd, de CoderHouse, por lo que su uso es meramente con fines académicos.
Para el desarrollo de este proyecto, fue necesario la instalación de las siguientes librerías y frameworks:
- framework de Bootstrap, optimizado para React (https://react-bootstrap.github.io/).
- librería de íconos FontAwesome, optimizada para React en las siguientes secciones (https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react): cart widget, agregar al carrito, eliminar del carrito e ir a confirmación de carrito.
- extensión de estilos CSS, SASS (https://create-react-app.dev/docs/adding-a-sass-stylesheet/).
- package de "accounting" para manejar el formato de precios (https://www.npmjs.com/package/accounting).
- ruteo a fin de obtener navegabilidad en el proyecto mediante la implementación de React Router DOM (https://reactrouter.com/web/guides/quick-start).

{2021-07-21} 
El proyecto consiste en la realización de un sitio e-commerce, denominado Marina Bordados, mediante el cual se ponen a prueba las aplicaciones de los conocimientos y las técnicas adquiridas para implementar las principales funcionalidades de la dicho sitio.
Los productos, al igual que las categorías, son obtienen a través del uso del método "await fetch", simulando un request al servidor e incorporando un setTimeout.

Asimismo, se definieron cuatro contenedores, llamados desde la App.jsx:
- NavBarContainer: se encuentra durante toda la navegación, posee el logo, las categorías (public/assets/categories.json) y el carrito de compras. Los componentes dentro de éste son el "NavBar" y el "CartWidget".
- ItemListContianer: incluido en la ruta "/" y en "/category/:id", con el fin de mostrar los productos disponibles (public/assets/products.json), y su agrupación por categoría. Lo conforma el componente: "ItemList" que recibe los productos del container e itera por cada uno de ellos, invocando los "Item".
- ItemDetailContainer: incluido en la ruta "/item/:id" donde se puede visualizar en detalle el producto que se haya seleccionado. Los componentes que lo conforman son: "ItemDetail", que muestra  título, descripción, precio, stock e imagen, e "ItemCounter" que permite agregar un producto al carrito en caso de haber stock (y en caso de no haber disponibilidad se indica la situación), para al final, mostrar el botón de "Terminar mi compra" y así acceder al detalle de los productos incluidos dentro del carrito.
- ItemCheckoutContainer: incluido en la ruta "/cart" donde se puede ver el detalle de los productos agregados al carrito y el costo total a pagar. Es necesario aclarar que, al momento, el funcionamiento de este contenedor se encuentra aún en desarrollo. Los componentes que lo conforman son: "ItemListCheckout" que recibe los productos que se encuentran en el carrito e itera cada uno de ellos, invocando los "ItemCheckout" que muestra los producto incluidos y el total, y el botón de confirmación de carrito.

Adicionalmente, se crearon dos componentes como ayuda: "Button" para personalizar el botón nativo de React Bootstrap, y "TextOnlyXs", que se utiliza como propiedad para definir que el texto que allí se encuentra se vea solo en resoluciones "xs".

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

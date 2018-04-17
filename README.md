[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![NPM Version](https://img.shields.io/npm/v/@jaspero/pix.svg)](https://www.npmjs.com/package/@jaspero/pix)

# Pix
A modern css/scss boilerplate framework. Pix is dead simple and completely modular,
designed to get projects of the ground quickly.

## Features

- Minimalistic
- Modern
- Modular
- AMP Ready

## Installation

Pix is available on npm

```
npm i --save @jaspero/pix
```

You can import the entire library as css or scss.

```html
 <link rel="stylesheet" type="text/css" href="node_modules/@jaspero/pix/dist/index.min.css" />
```

```scss
@import "node_modules/@jaspero/pix/index.css";
```

Each component can also be imported separately as scss or css.

```html
 <link rel="stylesheet" type="text/css" href="node_modules/@jaspero/pix/dist/components/buttons.css" />
 <link rel="stylesheet" type="text/css" href="node_modules/@jaspero/pix/dist/components/dropdown.css" />
```

```scss
@import "node_modules/@jaspero/pix/components/buttons.scss";
@import "node_modules/@jaspero/pix/components/dropdown.scss";
```

### Javascript

Some components like tabs and dropdown for example, require javascript to run. Generally speaking this is very simple js
mostly adding and removing active classes. Examples for each of the components can be found in this repo.

However, we don't publish the js along with styles because our personal preference is having a consistent stlye sheet
and using what ever freamework or vanilla javascript in a particular project for manipulating the components.

#### Components dependent on javascript

- Accordion
- Dropdown
- Modal
- Tabs

## Documentation

For a detailed breakdown please visit:

https://pix-css.firebaseapp.com/

## Frequently Asked Questions

### Can every component be used independently of one another?

CSS files are independent. Some SCSS files aren't - those that use variables and functions.

### Why aren't tools and variables published as css?

`_tools.scss` and `_variables.scss` are purely scss constructs and would produce no output as css files.

## Showcase

Nothing to showcase just yet.

## License

MIT © [Jaspero co.](mailto:info@jaspero.co)

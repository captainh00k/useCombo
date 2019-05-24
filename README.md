# useKeycombo

## install

```
npm install use-keycombo
```
or
```
yarn add use-keycombo
```

## usage

`useKeycombo` will add a listener to the `document`, which listens for a certain key combination. Once all keys have been pressed, the callback will be fired.

Simple example, using default key combo (up, up, down, down, left, right, left, right, b, a, enter):

```js
import React from 'react';
import ReactDOM from 'react-dom';
import useKeycombo from 'useKeycombo'

function App() {
  useKeycombo(() => alert('entered God mode.'))
  return (
    <h1>Hello world!</h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

With a string representing the keycombo:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import useKeycombo from 'useKeycombo'

function App() {
  const cheatCode = '{up}{up}{down}{down}{left}{right}{left}{right}ba{enter}'
  useKeycombo(() => alert('entered God mode.'), cheatCode)
  return (
    <h1>Hello world!</h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Valid codes:
- {alt}: alt
- {altr}: right alt
- {backspace}: backspace
- {ctrl}: control
- {delete}: delete
- {down}: down arrow
- {end}: end
- {enter}: enter/return
- {esc}: escape
- {home}: home
- {left}: left arrow
- {return}: enter/return
- {right}: right arrow
- {shift}: shift
- {tab}: tab
- {up}: up arrow

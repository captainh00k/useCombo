# useCheat

## install

```
npm install use-cheat
```
or
```
yarn add use-cheat
```

## usage

`useCheat` will add a listener to the `document`, which listens for a certain key combination. Once all keys have been pressed, the callback will be fired.

Simple example, using default cheat code (up, up, down, down, left, right, left, right, b, a, enter):

```js
import React from 'react';
import ReactDOM from 'react-dom';
import useCheat from 'useCheat'

function App() {
  useCheat(() => alert('entered God mode.'))
  return (
    <h1>Hello world!</h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

With a string representing the cheat code:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import useCheat from 'useCheat'

function App() {
  const cheatCode = '{up}{up}{down}{down}{left}{right}{left}{right}ba{enter}'
  useCheat(() => alert('entered God mode.'), cheatCode)
  return (
    <h1>Hello world!</h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Valid codes:
{alt}: alt
{altr}: right alt
{backspace}: backspace
{ctrl}: control
{delete}: delete
{down}: down arrow
{end}: end
{enter}: enter/return
{esc}: escape
{home}: home
{left}: left arrow
{return}: enter/return
{right}: right arrow
{shift}: shift
{tab}: tab
{up}: up arrow

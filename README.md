# useCombo

## install

```
npm install use-combo
```
or
```
yarn add use-combo
```

## usage

`useCombo` will add a listener to the `document`, which listens for a certain key combination. Once all keys have been pressed, the callback will be fired.

Simple example, using default key combo (up, up, down, down, left, right, left, right, b, a, enter):

```js
import React from 'react'
import ReactDOM from 'react-dom'
import useCombo from 'useCombo'

function App() {
  useCombo(() => alert('entered God mode.'))
  return (
    <h1>Hello world!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

With a string representing the combo:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import useCombo from 'useCombo'

function App() {
  const cheatCode = '{up}{up}{down}{down}{left}{right}{left}{right}ba{enter}'
  useCombo(() => alert('entered God mode.'), cheatCode)
  return (
    <h1>Hello world!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
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

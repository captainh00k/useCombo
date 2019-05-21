import { useState, useEffect } from 'react'

const defaultCode = '{up}{up}{down}{down}{left}{right}{left}{right}ba{enter}'

const codes = {
    'up': 38,
    'down': 40,
    'left': 37,
    'right': 39,
    'enter': 13,
    'return': 13
}

function parseCode (code) {
    const keyCodes = []
    while (code.length) {
        if (code[0] === '{') {
            const closingBracketIndex = code.indexOf('}')
            if (closingBracketIndex === -1) {
                throw new Error('no matching bracket found')
            }
            const key = code.slice(1, closingBracketIndex)
            if (codes[key]) {
                keyCodes.push(codes[key])
            } else {
                throw new Error(`unsupported key ${key}`)
            }
            code = code.slice(closingBracketIndex + 1)
        } else {
            // toUpperCase is needed, because keyCode of event is the uppercased keycode
            keyCodes.push(code[0].toUpperCase().charCodeAt(0))
            code = code.slice(1)
        }
    }
    return keyCodes
}

export default function useCheat (callback, cheatCode = defaultCode) {
    const parsedCode = parseCode(defaultCode)
    const [remainingCharacters, setRemainingCharacters] = useState(parsedCode)

    const handleKeypress = (e) => {
        const [ current, ...rest ] = remainingCharacters
        if (e.keyCode === current) {
            setRemainingCharacters(rest)
            if (rest.length === 0) {
                callback()
                setRemainingCharacters(parsedCode)
            }
        } else {
            setRemainingCharacters(parsedCode)
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', handleKeypress)
        return () => {
            document.removeEventListener('keyup', handleKeypress)
        }
    })
}

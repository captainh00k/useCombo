import { useState, useEffect } from 'react'
import parseCode from './parseCode'

const defaultCode = '{up}{up}{down}{down}{left}{right}{left}{right}ba{enter}'

export default function useCheat (callback, cheatCode = defaultCode) {
    const parsedCode = parseCode(cheatCode)
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

const codes = {
    'up': 38,
    'down': 40,
    'left': 37,
    'right': 39,
    'enter': 13,
    'return': 13
}

export default function parseCode (code) {
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

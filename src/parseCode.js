const codes = {
    'alt': 18,
    'altr': 225,
    'backspace': 8,
    'ctrl': 17,
    'delete': 46,
    'down': 40,
    'end': 35,
    'enter': 13,
    'esc': 27,
    'home': 36,
    'left': 37,
    'return': 13,
    'right': 39,
    'shift': 16,
    'tab': 9,
    'up': 38,
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

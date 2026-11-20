function getFullName(name, lastName) {
    return ${name} ${lastName}
}

function greet(name, language) {
    if(language === 'en'){
        return `Hello, I'm ${name}`
    }else if(language === 'es'){
        return `Hola, soy ${name}`
    }else if(language === 'fr'){
        return `Bonjour, je m'apelle ${name}`
    }else if(language === 'it'){
        return `Salve, io sono ${name}`
    }else if(language === 'jp'){
        return `Watashi wa, ${name} desu`
    }else if(language === 'kr'){
        return `Nae ireumeun, ${name}`
    } else {
        return `Hola, soy ${name}`
    }
}
console.log(getFullName('Godofredo', 'Pérez'))
console.log(greet('Maria', 'krn'))
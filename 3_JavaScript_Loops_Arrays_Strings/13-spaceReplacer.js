function replaceSpaces(input) {
    return input.split(' ').join('&nbsp;')
}
console.log(replaceSpaces("But you were living in another world tryin' to get your message through"));
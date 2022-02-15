"use strict"
function wrapTags(text, p){
    return `<${p}>${text}</${p}>`
}
var res = wrapTags("Hello world", "p")
console.log(res)

const input = document.getElementById("word");

const btn = document.getElementById("btn");

const result = document.getElementById("result");

function palindrome(str) {
    let strTrim = str.trim();
    let finalStr = [...strTrim].reverse().toString().replace(/(,)|\s/g, "");
    let orgStr = strTrim.replace(/(,)|\s/g, "");
    
    if (finalStr === orgStr) {
        return true
    } else {
        return false
    }
}

function show() {
    if (palindrome(input.value)) {
        result.innerText = "'" + input.value + "'" + " is a palindrome"
    } else {
        result.innerText = "'" + input.value + "'" + " is not a palindrome"
    }
}
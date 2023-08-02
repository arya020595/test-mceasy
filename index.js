// Jawaban No 1
function processNumber(n) {
    const result = []

    for (let i = 1; i <= n; i++) {        
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('McEasy')
        } else if (i % 3 === 0) {
            result.push('Mc')
        } else if (i % 5 === 0) {
            result.push('Easy')
        } else {
            result.push(i)
        }
    }

    return result
}

let arrayProcessNumber = processNumber(17)
console.log("Jawaban No 1 =>", processNumber(17));


// Jawaban No 2
function filterArray(array) {
    let result = array.filter(data => data == "Mc" || data == "Easy")
    return result
}

let resultFilterArray = filterArray(arrayProcessNumber)
console.log("Jawaban No 2 =>", filterArray(arrayProcessNumber));


// Jawaban No 3
function countPairs(array) {
    let num = 0
    let string = ""
    let string_final = ""

    array.forEach(element => {
        if (element == "Mc") {
            string = element
        }

        if (string == "Mc" && element == "Easy") {
            string_final = `${string} ${element}`
            string = element
        }

        if (string_final == "Mc Easy") {
            num++
            string_final = ""
        }
    });

    return num 
}

console.log("Jawaban No 3 =>", countPairs(["Mc","Easy","Mc","Mc","Easy","Mc","Easy","Mc","Mc","Easy","Mc","Easy","Easy"]));

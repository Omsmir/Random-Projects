
let generator = document.querySelector("#generate").addEventListener("click",() => {
    generate()
})

let generate = () => { 
    let quotes = {
        "Forrest Gump": "Life is like a box of chocolates. You never know what you're gonna get.",
        "Albert Einstein": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "Woody Allen":" Eighty percent of success is showing up.",
        "Thomas Edison":" Genius is one percent inspiration and ninety-nine percent perspiration.",
        " Robert Frost":" Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference."
    }
let authors = Object.keys(quotes)

let author = authors[Math.trunc(Math.random() * authors.length)]

let quote = quotes[author]




document.querySelector("#quote").innerHTML = "- " + quote
document.querySelector(".author").textContent = "-" + author

}


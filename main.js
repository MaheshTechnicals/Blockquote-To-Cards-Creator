let btn = document.querySelector("#btn")
let container = document.querySelector(".container")


const darkColors = [
  'linear-gradient(to right, #00F260, #0575E6)',
  'linear-gradient(to right, #2193b0, #6dd5ed)',
  'linear-gradient(to right, #1e3c72, #2a5298)',
  'linear-gradient(to right, #ff5f6d, #ffc371)',
  'linear-gradient(to right, #f12711, #f5af19)',
  'linear-gradient(to right, #5f2c82, #49a09d)',
  'linear-gradient(to right, #f12711, #f5af19, #f5af19, #f12711)',
  'linear-gradient(to right, #bdc3c7, #2c3e50)',
  'linear-gradient(to right, #ff0084, #33001b)',
  'linear-gradient(to right, #00416a, #799f0c)',
  'linear-gradient(to right, #fc00ff, #00dbde)',
  'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
  'linear-gradient(to right, #6441A5, #2a0845)',
  'linear-gradient(to right, #00c3ff, #ffff1c)',
  'linear-gradient(to right, #1d2b64, #f8cdda)',
  'linear-gradient(to right, #f12711, #f5af19, #f12711)',
  'linear-gradient(to right, #7f00ff, #e100ff)'
]


btn.addEventListener("click", () => {
  extractBlockquoteText()

  let cards = document.querySelectorAll(".card")
  cards.forEach((each) => {

    each.addEventListener("click", (e) => {







    })






  })

})









function extractBlockquoteText() {
  const input = document.getElementById("blockquote-input").value;
  const blockquoteRegex = /<blockquote>(.*?)<\/blockquote>/g;
  const blockquoteMatches = input.match(blockquoteRegex);
  const blockquoteTextArray = blockquoteMatches.map(match => {
    return match.replace(/<\/?blockquote>/g, "");
  });
  let tenvalue = blockquoteTextArray.slice(0, 10)


  Array.from(tenvalue).forEach((each) => {

    let div = document.createElement("div")

    div.className = "card"

    div.style.background = darkColors[Math.floor(Math.random() * 17)]

    let ptag = document.createElement("p")
    ptag.innerHTML = `${each}`

    div.append(ptag)

    container.append(div)





  })






}
let btn = document.querySelector("#btn")
let container = document.querySelector(".container")


btn.addEventListener("click", () => {

  extractBlockquoteText()



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
    let ptag = document.createElement("p")
    ptag.innerHTML = `${each}`

    div.append(ptag)

    container.append(div)





  })






}
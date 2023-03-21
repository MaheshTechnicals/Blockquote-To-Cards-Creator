let btn = document.querySelector("#btn")


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
  console.log(blockquoteTextArray);
}
let card = document.querySelector("#card")


card.innerHTML = `"Maine toh sabko mauka diya tha, Apne saath chalne ka, Par koi mere sath nahi chalna chahta, Toh main khud hi akele kaafi hu"`


function extractBlockquoteText() {
  const input = document.getElementById("blockquote-input").value;
  const blockquoteRegex = /<blockquote>(.*?)<\/blockquote>/g;
  const blockquoteMatches = input.match(blockquoteRegex);
  const blockquoteTextArray = blockquoteMatches.map(match => {
    return match.replace(/<\/?blockquote>/g, "");
  });
  console.log(blockquoteTextArray);
}
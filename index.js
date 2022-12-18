async function makeBookmarklet() {
  const code = document.querySelector("#bookmarklet");
  const subject = document.querySelector("#parent");

  // Use template literals to create the bookmarklet code
  const bookmarklet = `(function(){${code}})()`;
  const final = encodeURIComponent(bookmarklet);

  // Use template literals to create the HTML elements
  subject.innerHTML = `
    <p>Your bookmarklet code: <code>javascript:${final}</code></p>
    <a href="javascript:${final}">Click here to use your bookmarklet</a>
  `;
}

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#parent").innerHTML = "";
});

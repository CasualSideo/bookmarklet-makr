async function makeBookmarklet() {
  const code = document.querySelector("#bookmarklet").value;
  const subject = document.querySelector("#parent");

  // Use template literals to create the bookmarklet code
  const bookmarklet = `(function(){${code}})()`;
  const encodedBookmarklet = encodeURIComponent(bookmarklet);

  // Use template literals to create the HTML elements
  const html = `
    <p>Your bookmarklet code: <code>javascript:${encodedBookmarklet}</code></p>
    <a href="javascript:${encodedBookmarklet}">Click here to use your bookmarklet</a>
  `;
  subject.innerHTML = html;
}

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#parent").innerHTML = "";
});

function makeBookmarklet() {
  const bookmarkletCode = document.querySelector("#bookmarklet").value;
  const subject = document.querySelector("#parent");
  const bookmarklet = `javascript:(function(){${bookmarkletCode}})()`;
  const [prefix, code] = bookmarklet.split(":");
  const final = `${prefix}:${encodeURIComponent(code)}`;
  console.log(final);
  subject.insertAdjacentHTML(
    "afterbegin",
    `<p>Your bookmarklet code: <code>${final}</code></p>`
  );
}
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function() {
  const parentDiv = document.querySelector("#parent");
  parentDiv.innerHTML = "";
});

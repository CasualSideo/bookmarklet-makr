function makeBookmarklet() {
  const code = document.querySelector("#bookmarklet").value;
  const subject = document.querySelector("#parent");
  const bookmarklet = `javascript:(function(){${code}})()`;
  const final = `javascript:${encodeURIComponent(bookmarklet)}`;
  subject.innerHTML = `<p>Your bookmarklet code: <code>${final}</code></p>
                      <a href="${final}">Click here to use your bookmarklet</a>`;
}

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#parent").innerHTML = "";
});

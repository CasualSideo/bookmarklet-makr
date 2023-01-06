function makeBookmarklet() {
  const textBox = document.getElementById("script-src");
  const code2 =
    textBox.value.trim().length > 0
      ? `const script=document.createElement('script');script.src='${textBox.value}';`
      : "";
  const code = document.querySelector("#bookmarklet").value;
  const subject = document.querySelector("#parent");
  const bookmarklet = `javascript:(function(){${code}${code2}})()`;
  const encodedBookmarklet = encodeURIComponent(bookmarklet);
  subject.innerHTML = `
    <p>Your bookmarklet code: <code>${encodedBookmarklet}</code></p>
    <a href="${encodedBookmarklet}">Click here to use your bookmarklet</a>
  `;
}

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#parent").innerHTML = "";
});

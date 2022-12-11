function makeBookmarklet() {
  const bookmarkletCode = document.getElementById("bookmarklet").value;
  const subject = document.querySelector("#parent");
  const bookmarklet = `(function(){${bookmarkletCode}})()`;
  const final = encodeURI(bookmarklet);
  console.log(final);
  subject.insertAdjacentHTML(
    "afterend",
    "<p>Your bookmarklet code: <code>" + final + "</code></p>"
  );
}


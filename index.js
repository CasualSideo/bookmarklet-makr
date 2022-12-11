function makeBookmarklet() {
const bookmarkletCode = document.getElementById("bookmarklet").value;  
bookmarklet = `(function(){${bookmarkletCode}})()`;
const final = encodeURI(bookmarklet);
console.log(final);
document.write("<p>Your bookmarklet code: <code>" + final + "</code></p>");
}


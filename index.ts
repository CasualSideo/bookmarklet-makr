function makeBookmarklet(): void {
  const code = document.querySelector("#bookmarklet").value;
  const subject = document.querySelector("#parent") as HTMLElement;
  const bookmarklet = `javascript:(function(){${code}})()`;
  const final = `javascript:${encodeURIComponent(bookmarklet)}`;
  subject.innerHTML = `<p>Your bookmarklet code: <code>${final}</code></p>
                      <a href="${final}">Click here to use your bookmarklet</a>`;
}

document.querySelector("#reset").addEventListener("click", () => {
  const subject = document.querySelector("#parent") as HTMLElement;
  subject.innerHTML = "";
});

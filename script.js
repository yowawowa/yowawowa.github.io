const copyBtn = document.getElementById("copy-btn");
const popup = document.getElementById("popup");

copyBtn.addEventListener("click", () => {
  const textToCopy = "irm https://get.activated.win | iex"; // replace with the text you want to copy
  navigator.clipboard.writeText(textToCopy).then(() => {
    console.log("Text copied to clipboard");
    popup.classList.add("show");
    setTimeout(() => {
      popup.classList.remove("show");
    }, 2000);
  });
});
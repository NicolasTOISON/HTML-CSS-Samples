if (document.querySelector("button")) {
  const button = document
    .querySelector("button")
    .addEventListener("click", () => {
      document.querySelector("dialog").showModal();
    });
} else {
  console.log("There is no button inside this page");
}

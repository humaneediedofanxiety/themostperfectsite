const elements = document.querySelectorAll("ol > li");

elements.forEach((element) => {
  let lastTap = 0;

  element.addEventListener("click", (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;

    if (tapLength < 300 && tapLength > 0) {
      element.classList.remove("line-through"); // double-tap
    } else {
      element.classList.add("line-through"); // single-tap
    }

    lastTap = currentTime;
  });
});

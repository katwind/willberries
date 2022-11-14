const search = function () {
  const input = document.querySelector(".search-block > input");
  const inputBtn = document.querySelector(".search-block > button");

  inputBtn.addEventListener("click", (event) => {
    console.log(input.value);
  });
};
search();

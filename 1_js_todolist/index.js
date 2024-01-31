document.addEventListener("DOMContentLoaded", function () {
  test();
});

function test() {
  const tg_button = document.querySelector(".inputBox button");
  let tg_remove = document.querySelectorAll("ul li button");
  const tg_ul = document.querySelector(".wrap ul");
  let tg_ul_li = document.querySelectorAll(".wrap ul li");

  tg_button.addEventListener("click", function () {
    const tg_input = document.querySelector(".inputBox input").value;
    // console.log(tg_input);
    let li = document.createElement("li");

    li.innerHTML = `
          <input type="checkbox" name="test" id="test1">
          <label for="test1">${tg_input}</label>
          <button>삭제</button>
        `;
    tg_ul.prepend(li);

    tg_remove = document.querySelectorAll("ul li button");
    tg_ul_li = document.querySelectorAll(".wrap ul li");
  });

  tg_remove.forEach((item, index) => {
    tg_remove[index].addEventListener("click", function () {
      tg_ul_li.forEach(() => {
        tg_ul_li[index].innerHTML = "";
      });
    });
  });
}

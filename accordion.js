(() => {
  const $elm = document.querySelector("#js-accordion");
  const $trigger = $elm.getElementsByTagName("a");

  const triggerLen = $trigger.length;
  for (let index = 0; index < triggerLen; index++) {
    $trigger[index].addEventListener("click", (e) => clickHandler(e));
  }

  //クリックしたら実行される処理
  const clickHandler = (e) => {
    e.preventDefault();

    const $target = e.currentTarget;
    const $content = $target.nextElementSibling;

    if ($content.style.display === "block") {
      $content.style.display = "none";
    } else {
      $content.style.display = "block";
    }
    console.log("Clicked!");
  };
})();

// const firstQuestion = e.target;
// const $content = $elm.getElementsByClassName("accordion-contents");
// $content[0].style.display = "none";

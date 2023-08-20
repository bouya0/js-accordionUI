(() => {
  class Accordion {
    constructor(obj) {
      console.log("obj", obj.hookName);

      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);

      const triggerLen = $trigger.length;
      for (let index = 0; index < triggerLen; index++) {
        $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
      }
    }

    //クリックしたら実行される処理
    clickHandler = (e) => {
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
  }

  const mangaAccordion = new Accordion({
    hookName: "#js-manga",
    tagName: "p",
  });
  const dummyAccordion = new Accordion({
    hookName: "#js-accordion",
    tagName: "a",
  });
  const miniAccordion = new Accordion({
    hookName: "#js-accordion-mini",
    tagName: "dt",
  });
})();

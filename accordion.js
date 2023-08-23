(() => {
  class Accordion {
    constructor(obj) {
      // console.log("obj", obj.hookName);

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

      if ($content.style.maxHeight && $content.style.maxHeight !== "0px") {
        $content.style.maxHeight = "0";
        $content.style.opacity = "0";
      } else {
        $content.style.maxHeight = $content.scrollHeight + "px"; // contentの高さに合わせてmaxHeightを設定
        $content.style.opacity = "1";
      }
      console.log("Clicked!");
    };
  }

  const twitterAccordion = new Accordion({
    hookName: "#js-twitter",
    tagName: "p",
  });
  const instagramAccordion = new Accordion({
    hookName: "#js-instagram",
    tagName: "a",
  });
  const facebookAccordion = new Accordion({
    hookName: "#js-facebook",
    tagName: "p",
  });
  const youtubeAccordion = new Accordion({
    hookName: "#js-youtube",
    tagName: "a",
  });
  const tiktokAccordion = new Accordion({
    hookName: "#js-tiktok",
    tagName: "a",
  });
})();

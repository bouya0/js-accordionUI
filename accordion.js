(() => {
  document.cookie =
    "key=value; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/; SameSite=Lax";
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
    return null;
  }

  // 使い方:
  let value = getCookie("expires");
  if (value) {
    console.log("keyのCookieの値は" + value + "です。");
  } else {
    console.log("keyのCookieは存在しません。");
  }

  class Accordion {
    constructor(obj) {
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
      const platform = $target.parentNode.id.replace("js-", "");

      if ($content.style.maxHeight && $content.style.maxHeight !== "0px") {
        $content.style.maxHeight = "0";
        $content.style.opacity = "0";
        $target.classList.remove(`${platform}-open`);
      } else {
        $content.style.maxHeight = $content.scrollHeight + "px"; // contentの高さに合わせてmaxHeightを設定
        $content.style.opacity = "1";
        $target.classList.add(`${platform}-open`);
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

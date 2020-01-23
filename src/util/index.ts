interface metaType {
  name: string;
  content: string;
}

export const addMeta = (metaTags: metaType[]) => {
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  );
  metaTags
    .map((tagDef: any) => {
      const tag: any = document.createElement("meta");
      Object.keys(tagDef).forEach(key => tag.setAttribute(key, tagDef[key]));
      tag.setAttribute("data-vue-router-controlled", "");
      return tag;
    })
    .forEach((tag: any) => document.head.appendChild(tag));
};

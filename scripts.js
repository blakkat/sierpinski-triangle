const htmlValue = `<div class="triangle top fill"></div>
  <div class="triangle left fill"></div>
  <div class="triangle right fill"></div>
  <div class="triangle middle"></div>`;

const addDivs = () => {
  const emptyDivs = [...document.querySelectorAll(".fill:empty")];
  emptyDivs.map((div) => {
    div.innerHTML = htmlValue;
  });
};

const howDeep = (x) => (f) => {
  if (x > 0) {
    f();
    howDeep(x - 1)(f);
  }
};

howDeep(7)(() => addDivs());

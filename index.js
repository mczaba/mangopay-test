const button = document.querySelector("#addButton");
const boxList = document.querySelector(".boxList");

let marketBox = false

const handleButtonClick = () => {
  //create new box
  const box = document.createElement("div");
  box.classList = "box";
  boxList.insertBefore(box, button);

  //create header
  const header = document.createElement("div");
  header.classList = "header";
  box.appendChild(header);
  const headerIcon = marketBox ? createShopSvg() : createCrowdSvg()
  header.appendChild(headerIcon);
  const title = document.createElement("h2");
  title.textContent = `QUICKSTART ${marketBox ? 'MARKEPLACE' : 'CROWDFUNDING'}`;
  header.appendChild(title);

  //create body
  const body = document.createElement("p");
  body.textContent = `Launching your ${marketBox ? 'marketplace' : 'crowdfunding'} ? Use this guide to understand the workflow
  and basics.`;
  box.appendChild(body);

  //create footer
  const footer = document.createElement("div");
  footer.classList = "footer";
  box.appendChild(footer);
  const arrow = createArrowSvg();
  footer.appendChild(arrow);
  const footerContent = document.createElement("h2");
  footerContent.textContent = `Qickstart ${marketBox ? 'marketplace' : 'crowdfunding'}`;
  footer.appendChild(footerContent);

  marketBox = !marketBox
};

const createShopSvg = () => {
  const pathArray = [
    {
      d: "M15.6 1.6H8.4c-.4 0-.7.3-.7.7v2.5h8.5V2.3c.1-.4-.2-.7-.6-.7z",
      fill: "var(--color-dark)"
    },
    {
      d:
        "M19.8 10.2H4.2c-.6 0-1 .4-1 1v10.2c0 .6.4 1 1 1l15.7.1c.6 0 1-.4 1-1V11.3c-.1-.7-.5-1.1-1.1-1.1z",
      fill: "var(--color-dark)"
    },
    {
      d:
        "M9.2 13.6c-1.2 0-2.3-.7-2.9-1.8-.5 1.1-1.6 1.8-2.9 1.8h-.2C1.1 13.5-.1 11.2.8 9.3l3-5.1c.3-.6.8-1 1.5-1h13.5c.6 0 1.2.4 1.5 1l3 5.1c.8 1.9-.4 4.1-2.5 4.2h-.2c-1.2 0-2.3-.7-2.9-1.8-.7 1.6-2.6 2.2-4.2 1.5-.7-.3-1.2-.8-1.5-1.5-.5 1.2-1.6 1.9-2.8 1.9z",
      fill: "var(--color-default)"
    },
    {
      d: "M13.3 22.4v-5.1c0-.3.1-.5.3-.5h4c.1 0 .3.2.3.5v5.1",
      fill: "var(--color-default)"
    }
  ];
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "viewBox", "0 0 24 24");

  pathArray.forEach(element => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "d", element.d);
    path.setAttributeNS(null, "fill", element.fill);
    svg.appendChild(path);
  });
  return svg;
};

const createArrowSvg = () => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "viewBox", "0 0 24 24");
  svg.setAttributeNS(null, "fill", "var(--color-button)");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttributeNS(
    null,
    "d",
    "M23.6 12.9l-7 7.4c-.5.4-1.4.6-1.9.1s-.5-1.4 0-1.9l4.9-5.2H1.3C.6 13.3 0 12.7 0 12c0-.7.6-1.3 1.3-1.3h18.3l-4.9-5.2c-.4-.4-.5-1.4 0-1.9s1.5-.3 1.9.1l7 7.4c.5.6.4 1.2 0 1.8"
  );
  svg.appendChild(path);
  return svg;
};

const createCrowdSvg = () => {
  const pathArray = [
    {
      d:
        "M22.5 15.4H1.5c-.7 0-1.4.6-1.4 1.3V18c0 .7.6 1.4 1.4 1.4l21 .1c.7 0 1.4-.6 1.4-1.3v-1.3c0-.8-.6-1.5-1.4-1.5z",
      fill: "var(--color-dark)"
    },
    {
      d: "M.1 16.5c0-2 2.1-3.6 4.7-3.6s4.7 1.6 4.7 3.6",
      fill: "var(--color-dark)"
    },
    {
      d: "M14.5 16.5c0-2 2.1-3.6 4.7-3.6s4.7 1.6 4.7 3.6",
      fill: "var(--color-dark"
    },
    {
      d: "M5.2 17.9c0-2.9 3.1-5.3 6.8-5.3 3.7 0 6.8 2.4 6.8 5.3",
      fill: "var(--color-default)"
    },
    {
      d: "M5.2 17.9h13.5v1.4H5.2z",
      fill: "var(--color-default)",
      transform: "matrix(1 .00338 -.00338 1 .063 -.04)"
    }
  ];
  const circles = [
    { cx: "4.8", cy: "9.6", r: "2.4", fill: "var(--color-dark)" },
    { cx: "12", cy: "8", r: "3.5", fill: "var(--color-default)" },
    { cx: "19.2", cy: "9.7", r: "2.4", fill: "var(--color-dark" }
  ];
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "viewBox", "0 0 24 24");

  pathArray.forEach(element => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "d", element.d);
    path.setAttributeNS(null, "fill", element.fill);
    if (element.transform) path.setAttributeNS(null, "transform", element.transform);
    svg.appendChild(path);
  });
  circles.forEach(element => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttributeNS(null, "cx", element.cx);
    circle.setAttributeNS(null, "cy", element.cy);
    circle.setAttributeNS(null, "r", element.r);
    circle.setAttributeNS(null, "fill", element.fill);
    svg.appendChild(circle);
  });
  return svg
};

button.addEventListener("click", handleButtonClick);

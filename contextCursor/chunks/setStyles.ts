const styles = `
:root {
  --main-cursor-clr: rgb(255, 255, 255, 0.2);
  --main-cursor-hover-clr: rgb(255, 255, 255, 0.07);
  --ghost-shadow: 0 7px 15px rgba(255, 255, 255, 0.14); }

body {
  margin: 0;
  padding: 0; }

.c-cursor {
  position: fixed;
  z-index: 2;
  pointer-events: none;
  border-radius: 200px;
  background-color: #fff9;
  transition: background-color 0.2s ease-in-out;
}

.c-cursor_active {
  background-color: var(--main-cursor-hover-clr);
}

.c-cursor-lift_active {
  background-color: rgba(0,0,0,0);
}
`;

const setStyles = () => {
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
};

export default setStyles;

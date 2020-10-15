export const createElement = (tagName, props) => {
  const element = document.createElement(tagName);
  element.className = props.className;
  element.innerText = props.innerText;
  return element;
};

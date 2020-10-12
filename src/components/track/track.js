export function createTrackElement() {
  const divElement = document.createElement("div"); // creates a <div></div>

  const h3Element = document.createElement("h3"); // creates a <h3></h3>
  h3Element.innerText = "Billie Jean"; // <h3>Billie Jean</h3>

  const h4Element = document.createElement("h4"); // creates a <h4></h4>
  h4Element.innerText = "Michael Jackson"; // <h4>Michael Jackson</h4>

  divElement.append(h3Element); // inserts the h3 Element into the div
  divElement.append(h4Element); // inserts the h4 Element into the div
  return divElement;
}

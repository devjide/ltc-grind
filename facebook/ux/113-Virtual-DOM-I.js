/* (https://bigfrontend.dev/problem/Virtual-DOM-I) */

/**
 * @param {HTMLElement}
 * @return {object} object literal presentation
 */
function virtualize(element) {
  // base case
  if (element.nodeType === 3) {
    return element.textContent;
  }

  // create return ocbjet
  const obj = {
    type: element.tagName.toLowerCase(),
    props: {},
  };

  // check for attributes
  for (let index = 0; index < element.attributes.length; index++) {
    const attr = element.attributes[index];
    if (attr.name === "class") {
      obj.props.className = attr.value;
    } else {
      obj.props[attr.name] = attr.value;
    }
  }

  // check for children
  const children = [];
  for (const child of element.childNodes) {
    children.push(virtualize(child));
  }

  if (children.length === 1) {
    obj.props.children = children[0];
  } else if (children.length > 1) {
    obj.props.children = children;
  }

  return obj;
}

/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement}
 */
function render(obj) {
  if (typeof obj === "string") {
    return document.createTextNode(obj);
  }

  const element = document.createElement(obj.type);

  // Add attributes
  for (const [key, value] of Object.entries(obj.props)) {
    if (key === "className") {
      element.setAttribute("class", value);
    } else if (key !== "children") {
      element.setAttribute(key, value);
    }
  }

  // Add children
  const children = obj.props.children;
  if (Array.isArray(children)) {
    for (const child of children) {
      element.appendChild(render(child));
    }
  } else if (children) {
    element.appendChild(render(children));
  }

  return element;
}




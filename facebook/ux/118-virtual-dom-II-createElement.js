/* https://bigfrontend.dev/problem/virtual-dom-II-createElement */

/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */

/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.length === 1 ? children[0] : children,
    },
  };
}

/**
 * @param { MyElement }
 * @returns { HTMLElement }
 */
function render(json) {
  if (typeof json === "string") {
    return document.createTextNode(json);
  }

  const element = document.createElement(json.type);

  // Add attributes
  for (const [key, value] of Object.entries(json.props)) {
    if (key === "className") {
      element.setAttribute("class", value);
    } else if (key !== "children") {
      element.setAttribute(key, value);
    }
  }

  // Add children
  const children = json.props.children;
  if (Array.isArray(children)) {
    for (const child of children) {
      element.appendChild(render(child));
    }
  } else if (children) {
    element.appendChild(render(children));
  }

  return element;
}

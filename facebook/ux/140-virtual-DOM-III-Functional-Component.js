/* (https://bigfrontend.dev/problem/virtual-DOM-III-Functional-Component) */

/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 * type FunctionComponent = (props: object) => MyElement
 */

/**
 * @param { string | FunctionComponent } type - valid HTML tag name or Function Component
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
  if (typeof type === "function") {
    return type({ ...props, children });
  }

  return {
    type,
    props: {
      ...props,
      children,
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

  const domElement = document.createElement(json.type);

  for (const [key, value] of Object.entries(json.props)) {
    if (key === "children") continue;
    if (key === "className") {
      domElement.setAttribute("class", value);
    } else {
      domElement.setAttribute(key, value);
    }
  }

  if (Array.isArray(json.props.children)) {
    json.props.children.forEach((child) =>
      domElement.appendChild(render(child))
    );
  } else if (json.props.children) {
    domElement.appendChild(render(json.props.children));
  }

  return domElement;
}

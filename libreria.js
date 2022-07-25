//let header = document.createElement("header")
//header.id = "mainHeader"
//header.classList.add("main-header")

//let root = document.getElementById("root")
//root.appendChild(header)

//export function createElement(element, attributes = {}) {
//    let elementToCreate = document.createElement(element)
//    elementToCreate.id = attributes.id
//    elementToCreate.classList.add(attributes.className)
//
//    return elementToCreate
//}

//export function render(element, DOMelement) {
//    DOMelement.appendChild(element)
//}


export function createElement(type, attrList = {}, children = []) {
    let element = document.createElement(type)
    let keys = Object.keys(attrList)
    keys.map(k => element.setAttribute(k, attrList[k]))

    children.map(child => renderChild(element, child))
    return element
}

function renderChild(element, child) {
    if(typeof child === "string") {
        element.innerHTML += child

        return
    }
    element.appendChild(child)
}

export function render(element, DOMElement) {
    DOMElement.appendChild(element)
}
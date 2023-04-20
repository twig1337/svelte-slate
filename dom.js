var DOMNode = globalThis.Node;
var DOMComment = globalThis.Comment;
var DOMElement = globalThis.Element;
var DOMText = globalThis.Text;
var DOMRange = globalThis.Range;
var DOMSelection = globalThis.Selection;
var DOMStaticRange = globalThis.StaticRange;
export { DOMNode, DOMComment, DOMElement, DOMText, DOMRange, DOMSelection, DOMStaticRange };
export function getDefaultView(value) {
    const node = value;
    return (node && node.ownerDocument && node.ownerDocument.defaultView) || null;
}
export function isDOMComment(value) {
    return isDOMNode(value) && value.nodeType === 8;
}
export function isDOMElement(value) {
    return isDOMNode(value) && value.nodeType === 1;
}
export function isDOMNode(value) {
    const window = getDefaultView(value);
    return !!window && value instanceof window.Node;
}
export function isDOMSelection(value) {
    const selection = value;
    const window = selection && selection.anchorNode && getDefaultView(selection.anchorNode);
    return !!window && value instanceof window.Selection;
}
export function isDOMText(value) {
    return isDOMNode(value) && value.nodeType === 3;
}
export function isPlainTextOnlyPaste(event) {
    return (event.clipboardData &&
        event.clipboardData.getData('text/plain') !== '' &&
        event.clipboardData.types.length === 1);
}
export function normalizeDOMPoint(domPoint) {
    let [node, offset] = domPoint;
    if (isDOMElement(node) && node.childNodes.length) {
        let isLast = offset === node.childNodes.length;
        let index = isLast ? offset - 1 : offset;
        [node, index] = getEditableChildAndIndex(node, index, isLast ? 'backward' : 'forward');
        isLast = index < offset;
        while (isDOMElement(node) && node.childNodes.length) {
            const i = isLast ? node.childNodes.length - 1 : 0;
            node = getEditableChild(node, i, isLast ? 'backward' : 'forward');
        }
        offset = isLast && node.textContent != null ? node.textContent.length : 0;
    }
    return [node, offset];
}
export function hasShadowRoot() {
    return !!(window.document.activeElement && window.document.activeElement.shadowRoot);
}
export function getEditableChildAndIndex(parent, index, direction) {
    const { childNodes } = parent;
    let child = childNodes[index];
    let i = index;
    let triedForward = false;
    let triedBackward = false;
    while (isDOMComment(child) ||
        (isDOMElement(child) && child.childNodes.length === 0) ||
        (isDOMElement(child) && child.getAttribute('contenteditable') === 'false')) {
        if (triedForward && triedBackward) {
            break;
        }
        if (i >= childNodes.length) {
            triedForward = true;
            i = index - 1;
            direction = 'backward';
            continue;
        }
        if (i < 0) {
            triedBackward = true;
            i = index + 1;
            direction = 'forward';
            continue;
        }
        child = childNodes[i];
        index = i;
        i += direction === 'forward' ? 1 : -1;
    }
    return [child, index];
}
export function getEditableChild(parent, index, direction) {
    const [child] = getEditableChildAndIndex(parent, index, direction);
    return child;
}
export function getPlainText(domNode) {
    let text = '';
    if (isDOMText(domNode) && domNode.nodeValue) {
        return domNode.nodeValue;
    }
    if (isDOMElement(domNode)) {
        for (const childNode of Array.from(domNode.childNodes)) {
            text += getPlainText(childNode);
        }
        const display = getComputedStyle(domNode).getPropertyValue('display');
        if (display === 'block' || display === 'list' || domNode.tagName === 'BR') {
            text += '\n';
        }
    }
    return text;
}
const catchSlateFragment = /data-slate-fragment="(.+?)"/m;
export function getSlateFragmentAttribute(dataTransfer) {
    const htmlData = dataTransfer.getData('text/html');
    const [, fragment] = htmlData.match(catchSlateFragment) || [];
    return fragment;
}
export function getClipboardData(dataTransfer) {
    if (!dataTransfer.getData('application/x-slate-fragment')) {
        const fragment = getSlateFragmentAttribute(dataTransfer);
        if (fragment) {
            const clipboardData = new DataTransfer();
            dataTransfer.types.forEach((type) => {
                clipboardData.setData(type, dataTransfer.getData(type));
            });
            clipboardData.setData('application/x-slate-fragment', fragment);
            return clipboardData;
        }
    }
    return dataTransfer;
}

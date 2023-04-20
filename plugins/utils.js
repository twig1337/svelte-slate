import { Editor, Transforms, Element as SlateElement } from 'slate';
import { BULLETED_LIST_TYPE } from './BulletedListElement.svelte';
import { LIST_ITEM_TYPE } from './ListItemElement.svelte';
import { NUMBERED_LIST_TYPE } from './NumberedListElement.svelte';
import { PARAGRAPH_TYPE } from './ParagraphElement.svelte';
export function isMarkActive(editor, format) {
    if (!editor.selection) {
        return false;
    }
    else {
        const marks = Editor.marks(editor);
        return marks ? marks[format] === true : false;
    }
}
export function toggleMark(editor, format) {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
        Editor.removeMark(editor, format);
    }
    else {
        Editor.addMark(editor, format, true);
    }
}
export function isBlockActive(editor, format) {
    if (!editor.selection) {
        return false;
    }
    else {
        const [match] = Array.from(Editor.nodes(editor, {
            at: Editor.unhangRange(editor, editor.selection),
            match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n['type'] === format
        }));
        return !!match;
    }
}
const LIST_TYPES = [NUMBERED_LIST_TYPE, BULLETED_LIST_TYPE];
export function toggleBlock(editor, format) {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);
    Transforms.unwrapNodes(editor, {
        match: (n) => !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            LIST_TYPES.includes(n['type']),
        split: true
    });
    const newProperties = {
        type: isActive ? PARAGRAPH_TYPE : isList ? LIST_ITEM_TYPE : format
    };
    Transforms.setNodes(editor, newProperties);
    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
}
export function setSelection(node) {
    const selection = window.getSelection();
    if (!selection) {
        return;
    }
    selection.removeAllRanges();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.addRange(range);
}

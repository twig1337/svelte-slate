<svelte:options immutable /><script context="module">export const CHECK_LIST_ITEM_TYPE = 'check-list-item';
export function isCheckListItemElement(element) {
    return element.type === CHECK_LIST_ITEM_TYPE;
}
export function withCheckListItem(editor) {
    const { deleteBackward } = editor;
    editor.deleteBackward = (unit) => {
        if (editor.selection && Range.isCollapsed(editor.selection)) {
            const [match] = Array.from(Editor.nodes(editor, {
                match: (n) => isCheckListItemElement(n) && Editor.isEmpty(editor, n),
                at: editor.selection
            }));
            if (match) {
                const [_node, path] = match;
                Transforms.setNodes(editor, {
                    type: PARAGRAPH_TYPE
                }, { at: path });
                return;
            }
        }
        deleteBackward(unit);
    };
    return editor;
}
export function insertCheckListItem(editor) {
    const isActive = isBlockActive(editor, CHECK_LIST_ITEM_TYPE);
    if (isActive) {
        Transforms.unwrapNodes(editor, {
            match: isCheckListItemElement,
            split: true
        });
    }
    else {
        const block = { type: CHECK_LIST_ITEM_TYPE, checked: false, children: [] };
        Transforms.wrapNodes(editor, block);
    }
}
</script><script>import { getEditor } from '../components/Slate.svelte';
import { findPath } from '../utils';
import { Editor, Transforms, Element as SlateElement, Range } from 'slate';
import { isBlockActive } from './utils';
import { PARAGRAPH_TYPE } from './ParagraphElement.svelte';
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
const editor = getEditor();
function onChange(event) {
    if (contenteditable) {
        Transforms.setNodes(editor, {
            checked: event.target.checked
        }, { at: findPath(element) });
    }
}
</script><div
	class="check-list-item"
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><span class="checkbox" contenteditable={false}><input
			type="checkbox"
			checked={element.checked}
			disabled={!contenteditable}
			on:change={onChange}
		/></span><span class="content" class:checked={element.checked} {contenteditable}><slot /></span></div><style>
	.check-list-item {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.checkbox {
		margin-right: 0.75rem;
	}
	.content {
		flex: 1;
		opacity: 1;
	}
	.content.checked {
		opacity: 0.666;
		text-decoration: line-through;
	}
	.content:focus {
		outline: none;
	}</style>

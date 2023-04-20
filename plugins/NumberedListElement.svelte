<svelte:options immutable /><script context="module">export const NUMBERED_LIST_TYPE = 'numbered-list';
export function isNumberedListItemElement(element) {
    return element.type === NUMBERED_LIST_TYPE;
}
</script><script>import { Editor, Transforms } from 'slate';
import { addEventListener, getEditor } from '../components/Slate.svelte';
import { PARAGRAPH_TYPE } from './ParagraphElement.svelte';
// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
const editor = getEditor();
addEventListener('onKeyDown', (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
        const [match] = Editor.nodes(editor, {
            match: isNumberedListItemElement
        });
        if (match) {
            e.preventDefault();
            e.stopPropagation();
            const [_, [index]] = match;
            const at = [index + 1];
            Transforms.insertNodes(editor, { type: PARAGRAPH_TYPE, children: [{ text: '' }] }, {
                at
            });
            Transforms.select(editor, at);
        }
    }
});
</script><ul
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></ul><style>
	ul {
		position: relative;
		margin: 0;
		padding-inline-start: 1.5rem;
		list-style-type: decimal;
	}</style>

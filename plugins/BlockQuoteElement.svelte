<svelte:options immutable /><script context="module">export const BLOCK_QUOTE_TYPE = 'block-quote';
export function isBlockQuoteElement(element) {
    return element.type === BLOCK_QUOTE_TYPE;
}
</script><script>import { addEventListener, getEditor } from '../components/Slate.svelte';
import { Editor, Transforms } from 'slate';
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
            match: isBlockQuoteElement
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
</script><blockquote
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></blockquote><style>
	blockquote {
		border-left: 2px solid #ddd;
		position: relative;
		margin: 0;
		padding-left: 10px;
		color: #aaa;
		font-style: italic;
	}</style>

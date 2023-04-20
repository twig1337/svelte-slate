<svelte:options immutable /><script context="module">export const PARAGRAPH_TYPE = 'paragraph';
export function isParagraphElement(element) {
    return element.type === PARAGRAPH_TYPE;
}
</script><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script><p
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></p><style>
	p {
		position: relative;
		margin: 0;
	}</style>

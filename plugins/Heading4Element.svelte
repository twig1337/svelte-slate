<svelte:options immutable /><script context="module">export const HEADING4_TYPE = 'heading4';
export function isHeading4Element(element) {
    return element.type === HEADING4_TYPE;
}
</script><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script><h4
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></h4><style>
	h4 {
		position: relative;
		margin: 0;
	}</style>

<svelte:options immutable /><script context="module">export const HEADING3_TYPE = 'heading3';
export function isHeading3Element(element) {
    return element.type === HEADING3_TYPE;
}
</script><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script><h3
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></h3><style>
	h3 {
		position: relative;
		margin: 0;
	}</style>

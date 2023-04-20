<svelte:options immutable /><script context="module">export const HEADING1_TYPE = 'heading1';
export function isHeading1Element(element) {
    return element.type === HEADING1_TYPE;
}
</script><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script><h1
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></h1><style>
	h1 {
		position: relative;
		margin: 0;
	}</style>

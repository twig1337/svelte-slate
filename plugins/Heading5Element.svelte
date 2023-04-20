<svelte:options immutable /><script context="module">export const HEADING5_TYPE = 'heading5';
export function isHeading5Element(element) {
    return element.type === HEADING5_TYPE;
}
</script><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script><h5
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></h5><style>
	h5 {
		position: relative;
		margin: 0;
	}</style>

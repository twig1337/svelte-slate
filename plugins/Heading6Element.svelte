<svelte:options immutable /><script context="module">export const HEADING6_TYPE = 'heading6';
export function isHeading6Element(element) {
    return element.type === HEADING6_TYPE;
}
</script><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script><h6
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></h6><style>
	h6 {
		position: relative;
		margin: 0;
	}</style>

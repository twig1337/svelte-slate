<svelte:options immutable /><script context="module">export const TABLE_HEADER_TYPE = 'table-row-header';
export function isTableHeaderElement(element) {
    return element.type === TABLE_HEADER_TYPE;
}
</script><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script><th
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></th><style>
	th {
		border: 1px solid;
		text-align: left;
	}</style>

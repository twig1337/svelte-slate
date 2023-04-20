<svelte:options immutable /><script context="module">export const TABLE_DATA_TYPE = 'table-row-data';
export function isTableDataElement(element) {
    return element.type === TABLE_DATA_TYPE;
}
</script><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script><td
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></td><style>
	td {
		border: 1px solid;
	}</style>

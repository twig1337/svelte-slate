<svelte:options immutable /><script context="module">export const TABLE_ROW_TYPE = 'table-row';
export function isTableRowElement(element) {
    return element.type === TABLE_ROW_TYPE;
}
</script><script>import { ELEMENT_CONTEXT_KEY } from '../components/Editable.svelte';
import { createContext } from '../utils';
import TableRowChildElement from './TableRowChildElement.svelte';
// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
createContext(ELEMENT_CONTEXT_KEY, TableRowChildElement);
</script><tr
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></tr><style>
	tr {
		border: 1px solid;
	}</style>

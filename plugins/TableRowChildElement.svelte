<svelte:options immutable /><script>import { ELEMENT_CONTEXT_KEY } from '../components/Editable.svelte';
import { getFromContext, setInContext } from '../utils';
import TableDataElement, { isTableDataElement } from './TableDataElement.svelte';
import { TABLE_ELEMENT_CONTEXT_KEY } from './TableElement.svelte';
import TableHeaderElement, { isTableHeaderElement } from './TableHeaderElement.svelte';
// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
const Element = getFromContext(TABLE_ELEMENT_CONTEXT_KEY);
setInContext(ELEMENT_CONTEXT_KEY, Element);
</script>{#if isTableDataElement(element)}<TableDataElement
		bind:ref
		{element}
		{isInline}
		{isVoid}
		{dir}
		{contenteditable}><slot /></TableDataElement
	>{:else if isTableHeaderElement(element)}<TableHeaderElement
		bind:ref
		{element}
		{isInline}
		{isVoid}
		{dir}
		{contenteditable}><slot /></TableHeaderElement
	>{/if}

<svelte:options immutable /><script>import DefaultPlaceholder from '../components/DefaultPlaceholder.svelte';
import Editable, { defaultScrollSelectionIntoView } from '../components/Editable.svelte';
import Element from './Element.svelte';
import Leaf from './Leaf.svelte';
export let Placeholder = DefaultPlaceholder;
export let placeholder = undefined;
export let readOnly = false;
export let autoFocus = false;
export let decorate = undefined;
export let scrollSelectionIntoView = undefined;
export let ref = undefined;
export let spellcheck = true;
export let autocorrect = 'true';
export let autocapitalize = 'true';
export let onKeyDown = () => undefined;
</script><Editable
	{...$$restProps}
	{Element}
	{Leaf}
	{Placeholder}
	bind:ref
	{placeholder}
	{readOnly}
	{autoFocus}
	bind:decorate
	bind:scrollSelectionIntoView
	{spellcheck}
	{autocorrect}
	{autocapitalize}
	{onKeyDown}
/>

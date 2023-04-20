<svelte:options immutable /><script context="module">export {};
</script><script>import { CAN_USE_DOM } from '../environment';
import { PLACEHOLDER_SYMBOL } from '../weakMaps';
import { onDestroy } from 'svelte';
import String from './String.svelte';
import { getFromContext } from '../utils';
import { LEAF_CONTEXT_KEY, PLACEHOLDER_CONTEXT_KEY } from './Editable.svelte';
export let isLast;
export let leaf;
export let parent;
export let text;
const LeafContext = getFromContext(LEAF_CONTEXT_KEY);
const PlaceholderContext = getFromContext(PLACEHOLDER_CONTEXT_KEY);
$: Leaf = $LeafContext;
$: Placeholder = $PlaceholderContext;
let clientHeight;
let currentClientHeight;
$: if (currentClientHeight !== clientHeight && CAN_USE_DOM) {
    const editorEl = document.querySelector('[data-svelte-editor="true"]');
    if (editorEl) {
        editorEl.style.minHeight = `${clientHeight}px`;
    }
    currentClientHeight = clientHeight;
}
onDestroy(() => {
    if (CAN_USE_DOM) {
        const editorEl = document.querySelector('[data-svelte-editor="true"]');
        if (editorEl) {
            editorEl.style.minHeight = 'auto';
        }
    }
});
</script><svelte:component this={Leaf} {leaf}
	>{#if PLACEHOLDER_SYMBOL in leaf}<svelte:component this={Placeholder} bind:clientHeight
			>{leaf.placeholder}</svelte:component
		>{/if}<String {isLast} {leaf} {parent} {text} /></svelte:component
>

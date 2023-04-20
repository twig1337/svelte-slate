<svelte:options immutable /><script context="module">export {};
</script><script>import DefaultElement from '../components/DefaultElement.svelte';
import { getPluginsContext } from './Slate.svelte';
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
const pluginsContext = getPluginsContext();
$: plugins = $pluginsContext;
$: Element = plugins[element.type] || DefaultElement;
</script><svelte:component this={Element} bind:ref bind:dir {element} {isInline} {isVoid} {contenteditable}><slot /></svelte:component>

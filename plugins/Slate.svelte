<svelte:options immutable /><script context="module">export const PLUGINS_CONTEXT_KEY = createContextKey();
export function getPluginsContext() {
    return getFromContext(PLUGINS_CONTEXT_KEY);
}
export function isPluginWithFn(plugin) {
    return 'component' in plugin;
}
function getCurrentEditor(originalEditor, plugins) {
    return Object.values(plugins).reduce((editor, plugin) => isPluginWithFn(plugin) && plugin.withFn ? plugin.withFn(editor, plugin.options) : editor, originalEditor);
}
function getCurrentPlugins(plugins) {
    return Object.entries(plugins).reduce((plugins, [type, plugin]) => {
        plugins[type] = isPluginWithFn(plugin) ? plugin.component : plugin;
        return plugins;
    }, {});
}
</script><script>import Slate from '../components/Slate.svelte';
import { createContext, createContextKey, getFromContext } from '../utils';
import { createEventDispatcher } from 'svelte';
import { DEFAULT_PLUGINS } from './DEFAULT_PLUGINS';
export let plugins = DEFAULT_PLUGINS;
export let editor;
export let value = editor.children;
export let selection = editor.selection;
const dispatch = createEventDispatcher();
function onValue(e) {
    dispatch('value', e.detail);
}
function onSelection(e) {
    dispatch('selection', e.detail);
}
let originalEditor = editor;
$: editor = getCurrentEditor(originalEditor, plugins);
$: currentPlugins = getCurrentPlugins(plugins);
const pluginsContext = createContext(PLUGINS_CONTEXT_KEY, currentPlugins);
$: pluginsContext.set(currentPlugins);
</script><Slate bind:editor bind:value bind:selection on:value={onValue} on:selection={onSelection}><slot /></Slate>

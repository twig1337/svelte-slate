<svelte:options immutable /><script context="module">import { get } from 'svelte/store';
import { getFromContext, createContextKey, isSelectionEqual, createContext } from '../utils';
import { onMount, createEventDispatcher } from 'svelte';
import { EDITOR_TO_ON_CHANGE } from '../weakMaps';
export const EDITOR_CONTEXT_KEY = createContextKey();
export const READ_ONLY_CONTEXT_KEY = createContextKey();
export const FOCUSED_CONTEXT_KEY = createContextKey();
export const DECORATE_CONTEXT_KEY = createContextKey();
export const SELECTION_CONTEXT_KEY = createContextKey();
export const VALUE_CONTEXT_KEY = createContextKey();
export const EVENTS_CONTEXT_KEY = createContextKey();
export const CONTAINER_CONTEXT_KEY = createContextKey();
export function addEventListener(name, handler, onRemove) {
    const eventsContext = getEventsContext();
    onMount(() => {
        eventsContext.update((state) => {
            const handlers = state[name] || [];
            return { ...state, [name]: [...handlers, handler] };
        });
        return () => {
            eventsContext.update((state) => {
                const handlers = state[name] || [];
                const index = handlers.indexOf(handler);
                if (index === -1) {
                    return state;
                }
                else {
                    const newHandlers = handlers.slice();
                    newHandlers.splice(index, 1);
                    return { ...state, [name]: newHandlers };
                }
            });
            if (onRemove) {
                onRemove();
            }
        };
    });
}
export function handleEvent(eventsContext, name, event) {
    const events = get(eventsContext);
    const handlers = events[name] || [];
    for (const handler of handlers) {
        const returnValue = handler(event);
        if (returnValue === false || event.cancelBubble) {
            return returnValue;
        }
    }
}
export function getEditorContext() {
    return getFromContext(EDITOR_CONTEXT_KEY);
}
export function getEditor() {
    return get(getEditorContext());
}
export function getReadOnlyContext() {
    return getFromContext(READ_ONLY_CONTEXT_KEY);
}
export function getFocusedContext() {
    return getFromContext(FOCUSED_CONTEXT_KEY);
}
export function getDecorateContext() {
    return getFromContext(DECORATE_CONTEXT_KEY);
}
export function getSelectionContext() {
    return getFromContext(SELECTION_CONTEXT_KEY);
}
export function getValueContext() {
    return getFromContext(VALUE_CONTEXT_KEY);
}
export function getEventsContext() {
    return getFromContext(EVENTS_CONTEXT_KEY);
}
export function getContainerContext() {
    return getFromContext(CONTAINER_CONTEXT_KEY);
}
export function defaultDecorate(_entry) {
    return [];
}
</script><script>export let editor;
export let value = editor.children;
export let selection = editor.selection;
const dispatch = createEventDispatcher();
const editorContext = createContext(EDITOR_CONTEXT_KEY, editor);
const selectionContext = createContext(SELECTION_CONTEXT_KEY, editor.selection);
const valueContext = createContext(VALUE_CONTEXT_KEY, editor.children);
createContext(READ_ONLY_CONTEXT_KEY, true);
createContext(FOCUSED_CONTEXT_KEY, false);
createContext(DECORATE_CONTEXT_KEY, defaultDecorate);
createContext(EVENTS_CONTEXT_KEY, {});
createContext(CONTAINER_CONTEXT_KEY, undefined);
function onChange() {
    selection = editor.selection;
    value = editor.children;
    const isValueChange = editor.operations.some(op => 'set_selection' !== op.type);
    if (isValueChange) {
        dispatch('value', value);
    }
    dispatch('selection', selection);
}
EDITOR_TO_ON_CHANGE.set(editor, onChange);
let currentEditor = editor;
$: if (currentEditor !== editor) {
    currentEditor = editor;
    EDITOR_TO_ON_CHANGE.set(editor, onChange);
    editorContext.set(editor);
}
let currentValue;
$: if (currentValue !== value) {
    editorContext.update((editor) => {
        editor.children = value;
        return editor;
    });
    currentValue = value;
    valueContext.set(value);
    dispatch('value', value);
}
let currentSelection;
$: if (!isSelectionEqual(currentSelection, selection)) {
    selectionContext.set(selection);
    editorContext.set(editor);
    currentSelection = selection;
    dispatch('selection', selection);
}
</script><slot />

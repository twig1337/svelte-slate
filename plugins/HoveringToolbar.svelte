<svelte:options immutable /><script context="module">export function addLongPress(node, threshold = 500, callback) {
    let timeoutId = null;
    function onDown() {
        timeoutId = setTimeout(callback, threshold);
    }
    function onUp() {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }
    node.addEventListener('mousedown', onDown);
    node.addEventListener('touchstart', onDown);
    node.addEventListener('mouseup', onUp);
    node.addEventListener('mousemove', onUp);
    node.addEventListener('mouseleave', onUp);
    node.addEventListener('touchend', onUp);
    node.addEventListener('touchmove', onUp);
    return () => {
        onUp();
        node.removeEventListener('mousedown', onDown);
        node.removeEventListener('touchstart', onDown);
        node.removeEventListener('mouseup', onUp);
        node.removeEventListener('mousemove', onUp);
        node.removeEventListener('mouseleave', onUp);
        node.removeEventListener('touchend', onUp);
        node.removeEventListener('touchmove', onUp);
    };
}
</script><script>import { getEditorContext, getFocusedContext, getReadOnlyContext, getSelectionContext } from '../components/Slate.svelte';
import { Editor, Range } from 'slate';
import Hovering from './Hovering.svelte';
export let container = undefined;
export let threshold = 500;
const editorContext = getEditorContext();
const selectionContext = getSelectionContext();
const focusContext = getFocusedContext();
const readOnlyContext = getReadOnlyContext();
$: editor = $editorContext;
$: selection = $selectionContext;
$: focus = $focusContext;
$: readOnly = $readOnlyContext;
let ref;
let open = false;
$: if (ref) {
    if (!selection ||
        !focus ||
        Range.isCollapsed(selection) ||
        Editor.string(editor, selection) === '') {
        open = false;
    }
    else {
        checkCanOpen();
    }
}
function checkCanOpen() {
    if (!readOnly && editor.selection) {
        const [match] = Editor.nodes(editor, {
            at: Editor.unhangRange(editor, editor.selection),
            match: (e) => !editor.hasOwnContext(e)
        });
        if (!match) {
            open = Date.now();
        }
    }
}
let prevContainer;
let removeLongpress;
$: if (container && container !== prevContainer) {
    if (removeLongpress) {
        removeLongpress();
    }
    removeLongpress = addLongPress(container, threshold, checkCanOpen);
    prevContainer = container;
}
</script><Hovering bind:open bind:ref {container}><slot /></Hovering>

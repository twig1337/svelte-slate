<svelte:options immutable /><script>import { findPath } from '../utils';
import { Node, Editor, Path } from 'slate';
import TextString from './TextString.svelte';
import ZeroWidthString from './ZeroWidthString.svelte';
import { getEditor } from './Slate.svelte';
export let isLast;
export let leaf;
export let parent;
export let text;
const editor = getEditor();
$: isTrailing = isLast && leaf.text.slice(-1) === '\n';
$: path = findPath(text);
$: parentPath = Path.parent(path);
$: isVoid = editor.isVoid(parent);
$: isEmpty = leaf.text === '';
$: isLineBreak =
    isEmpty &&
        parent.children[parent.children.length - 1] === text &&
        !editor.isInline(parent) &&
        Editor.string(editor, parentPath) === '';
</script>{#if isVoid}<ZeroWidthString
		length={Node.string(parent).length}
	/>{:else if isLineBreak}<ZeroWidthString isLineBreak />{:else if isEmpty}<ZeroWidthString
	/>{:else}<TextString {isTrailing} {leaf} />{/if}

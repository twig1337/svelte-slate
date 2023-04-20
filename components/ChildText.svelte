<script>import { Editor } from 'slate';
import Text from './Text.svelte';
import { NODE_TO_INDEX, NODE_TO_PARENT } from '../weakMaps';
import { getChildDecorations } from './Children.svelte';
import { isDecoratorRangeListEqual } from '../utils';
import { getDecorateContext, getEditor } from './Slate.svelte';
export let parent;
export let text;
export let path;
export let index;
export let isLeafBlock;
export let decorations;
const decorateContext = getDecorateContext();
const editor = getEditor();
let currentIndex = index;
$: if (currentIndex !== index) {
    currentIndex = index;
}
let currentText = text;
$: if (currentText !== text) {
    currentText = text;
}
let currentPath = path;
$: if (currentPath !== path) {
    currentPath = path;
}
let currentParent = parent;
$: if (currentParent !== parent) {
    currentParent = parent;
}
let currentDecorations = decorations;
$: if (!isDecoratorRangeListEqual(currentDecorations, decorations)) {
    currentDecorations = decorations;
}
$: NODE_TO_INDEX.set(currentText, currentIndex);
$: NODE_TO_PARENT.set(currentText, currentParent);
$: childPath = currentPath.concat(currentIndex);
$: isLast = isLeafBlock && currentIndex === currentParent.children.length - 1;
$: range = Editor.range(editor, childPath);
$: decorate = $decorateContext;
$: childDecorations = getChildDecorations(decorate([currentText, childPath]), range, currentDecorations);
</script><Text decorations={childDecorations} {isLast} parent={currentParent} text={currentText} />

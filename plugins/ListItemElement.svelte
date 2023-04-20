<svelte:options immutable /><script context="module">import { Editor, Range, Transforms } from 'slate';
import { PARAGRAPH_TYPE } from './ParagraphElement.svelte';
export const LIST_ITEM_TYPE = 'list-item';
export function isListItemElement(element) {
    return element.type === LIST_ITEM_TYPE;
}
export function withListItem(editor) {
    const { deleteBackward } = editor;
    editor.deleteBackward = (unit) => {
        // TODO: only insert paragraph if is last item in list
        if (editor.selection && Range.isCollapsed(editor.selection)) {
            const [listItemMatch] = Array.from(Editor.nodes(editor, {
                match: (n) => isListItemElement(n) && Editor.isEmpty(editor, n),
                at: editor.selection
            }));
            if (listItemMatch) {
                const [listItem, listItemPath] = listItemMatch;
                const [parent, parentPath] = Editor.parent(editor, listItemPath);
                if (parent.children[parent.children.length - 1] === listItem) {
                    parentPath[parentPath.length - 1] += 1;
                    Transforms.removeNodes(editor, {
                        at: listItemPath
                    });
                    Transforms.insertNodes(editor, {
                        type: PARAGRAPH_TYPE,
                        children: [{ text: '' }]
                    }, {
                        at: parentPath
                    });
                    Transforms.setSelection(editor, {
                        anchor: { path: [...parentPath, 0], offset: 0 },
                        focus: { path: [...parentPath, 0], offset: 0 }
                    });
                    return;
                }
            }
        }
        deleteBackward(unit);
    };
    return editor;
}
</script><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script><li
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></li><style>
	li {
		position: relative;
		margin: 0;
	}</style>

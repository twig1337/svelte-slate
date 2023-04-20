<svelte:options immutable /><script context="module">import { Transforms, Range, Editor, Node } from 'slate';
export const TABLE_TYPE = 'table';
export function isTableElement(element) {
    return element.type === TABLE_TYPE;
}
export function withTable(editor) {
    const { deleteBackward } = editor;
    editor.deleteBackward = (...args) => {
        if (editor.selection && Range.isCollapsed(editor.selection)) {
            const [dataMatch] = Editor.nodes(editor, {
                match: isTableDataElement
            });
            if (dataMatch) {
                const [node, path] = dataMatch;
                if (path[0] === editor.selection.focus.path[0] &&
                    path[1] === editor.selection.focus.path[1] &&
                    editor.selection.focus.path[2] === 0 &&
                    Editor.isEmpty(editor, node)) {
                    Transforms.delete(editor, {
                        at: [path[0], path[1]]
                    });
                    return;
                }
            }
            const [headerMatch] = Editor.nodes(editor, {
                match: isTableHeaderElement
            });
            if (headerMatch) {
                const [node] = headerMatch;
                if (Editor.isEmpty(editor, node)) {
                    const [tableMatch] = Editor.nodes(editor, {
                        match: isTableElement
                    });
                    const [node, [index]] = tableMatch;
                    const table = node;
                    for (let i = table.children.length - 1; i >= 0; i--) {
                        const row = table.children[i];
                        Transforms.delete(editor, {
                            at: [index, i, row.children.length - 1]
                        });
                    }
                    return;
                }
            }
        }
        deleteBackward(...args);
    };
    return editor;
}
export function insertTable(editor) {
    const node = {
        type: TABLE_TYPE,
        children: [
            {
                type: TABLE_ROW_TYPE,
                children: [
                    {
                        type: TABLE_HEADER_TYPE,
                        children: [{ text: '' }]
                    }
                ]
            }
        ]
    };
    Transforms.insertNodes(editor, node);
}
export const TABLE_ELEMENT_CONTEXT_KEY = createContextKey();
function createNRows(length) {
    return [...new Array(length)].map(() => ({
        type: TABLE_DATA_TYPE,
        children: [{ text: '' }]
    }));
}
</script><script>import { ELEMENT_CONTEXT_KEY } from '../components/Editable.svelte';
import { setInContext, createContext, createContextKey, getFromContext } from '../utils';
import TableRowElement, { TABLE_ROW_TYPE } from './TableRowElement.svelte';
import { isTableHeaderElement, TABLE_HEADER_TYPE } from './TableHeaderElement.svelte';
import { addEventListener, getEditor } from '../components/Slate.svelte';
import { isTableDataElement, TABLE_DATA_TYPE } from './TableDataElement.svelte';
import { PARAGRAPH_TYPE } from './ParagraphElement.svelte';
const editor = getEditor();
// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
setInContext(TABLE_ELEMENT_CONTEXT_KEY, getFromContext(ELEMENT_CONTEXT_KEY));
createContext(ELEMENT_CONTEXT_KEY, TableRowElement);
addEventListener('onKeyDown', (e) => {
    if (editor.selection) {
        if (e.key === 'Enter') {
            const [match] = Editor.nodes(editor, {
                match: isTableElement
            });
            if (match) {
                e.preventDefault();
                e.stopPropagation();
                const [node, [index]] = match;
                const table = node;
                if (e.shiftKey) {
                    const [headerMatch] = Editor.nodes(editor, {
                        match: isTableHeaderElement
                    });
                    if (headerMatch) {
                        table.children.forEach((row, rowIndex) => {
                            Transforms.insertNodes(editor, {
                                type: rowIndex !== 0 ? TABLE_DATA_TYPE : TABLE_HEADER_TYPE,
                                children: [{ text: '' }]
                            }, {
                                at: [index, rowIndex, row.children.length]
                            });
                        });
                        Transforms.select(editor, [index, 0, table.children[0].children.length]);
                    }
                    else {
                        const at = [index + 1];
                        Transforms.insertNodes(editor, { type: PARAGRAPH_TYPE, children: [{ text: '' }] }, {
                            at
                        });
                        Transforms.select(editor, at);
                    }
                }
                else {
                    const at = [index, editor.selection.focus.path[1] + 1];
                    Transforms.insertNodes(editor, {
                        type: TABLE_ROW_TYPE,
                        children: createNRows(table.children[0].children.length)
                    }, {
                        at
                    });
                    Transforms.select(editor, at);
                }
            }
        }
        else if (e.key === 'Tab') {
            const [match] = Editor.nodes(editor, {
                match: (e) => isTableDataElement(e) || isTableHeaderElement(e)
            });
            if (match) {
                e.preventDefault();
                e.stopPropagation();
                const [_node, path] = match;
                const [_rowNode, rowPath] = Editor.parent(editor, path);
                const [tableNode, _tablePath] = Editor.parent(editor, rowPath);
                const table = tableNode;
                const rows = table.children.length;
                const columns = table.children[0].children.length;
                const nextColumnIndex = (path[2] + 1) % columns;
                const nextRowIndex = (path[1] + (nextColumnIndex === 0 ? 1 : 0)) % rows;
                Transforms.select(editor, [path[0], nextRowIndex, nextColumnIndex]);
            }
        }
    }
});
</script><table
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><slot /></table><style>
	table {
		border: 1px solid;
		width: 100%;
		border-collapse: collapse;
	}</style>

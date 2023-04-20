<svelte:options immutable /><script context="module">import { languages } from './prismjs';
import { createContext, createContextKey, findPath, getFromContext, isReadOnly } from '../utils';
export const LANGUAGE_CONTEXT_KEY = createContextKey();
export const CODE_TYPE = 'code';
export function getLanguageContext() {
    return getFromContext(LANGUAGE_CONTEXT_KEY);
}
const LANG_LOADING = {};
const LANG_LOADED = {};
async function loadLanguage(id) {
    if (!LANG_LOADING[id] && !LANG_LOADED[id]) {
        LANG_LOADING[id] = true;
        const loader = languages[id].loader;
        if (loader) {
            return loader()
                .then(() => {
                LANG_LOADED[id] = true;
                return window.Prism.languages[id];
            })
                .finally(() => {
                LANG_LOADING[id] = false;
            });
        }
    }
    LANG_LOADING[id] = false;
    LANG_LOADED[id] = true;
    return window.Prism.languages[id];
}
function getLength(token) {
    if (typeof token === 'string') {
        return token.length;
    }
    else if (typeof token.content === 'string') {
        return token.content.length;
    }
    else {
        return token.content.reduce((l, t) => l + getLength(t), 0);
    }
}
export function isCodeElement(element) {
    return element.type === CODE_TYPE;
}
export function withCode(editor) {
    const { hasOwnContext } = editor;
    editor.hasOwnContext = (e) => isCodeElement(e) || isCodeEditorElement(e)
        ? false
        : hasOwnContext(e);
    return editor;
}
export function insertCode(editor) {
    const node = {
        type: CODE_TYPE,
        language: 'javascript',
        children: [{ type: CODE_LINE_TYPE, children: [{ text: '' }] }]
    };
    Transforms.insertNodes(editor, node);
}
</script><script>import { Editor, Range, Transforms, Text } from 'slate';
import { CODE_LINE_TYPE, isCodeEditorElement } from './CodeEditorElement.svelte';
import CodeEditorElement from './CodeEditorElement.svelte';
import CodeEditorLeaf from './CodeEditorLeaf.svelte';
import { ELEMENT_CONTEXT_KEY, LEAF_CONTEXT_KEY } from '../components/Editable.svelte';
import { addEventListener, DECORATE_CONTEXT_KEY, getEditor } from '../components/Slate.svelte';
import { PARAGRAPH_TYPE } from './ParagraphElement.svelte';
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
const editor = getEditor();
createContext(ELEMENT_CONTEXT_KEY, CodeEditorElement);
createContext(LEAF_CONTEXT_KEY, CodeEditorLeaf);
const languageNames = Object.entries(languages)
    .map(([id, lang]) => [id, lang.name])
    .sort(([a], [b]) => (a < b ? -1 : a === b ? 0 : 1));
const languageContext = createContext(LANGUAGE_CONTEXT_KEY, element.language);
let prismLanguage;
$: if (typeof window !== 'undefined') {
    loadLanguage($languageContext).then((lang) => {
        prismLanguage = lang;
    });
}
function onSelect(e) {
    const language = e.currentTarget.value;
    languageContext.set(language);
    Transforms.setNodes(editor, { language }, { at: findPath(element) });
}
addEventListener('onKeyDown', (e) => {
    if (editor.selection && e.key === 'Enter' && e.shiftKey) {
        const [match] = Editor.nodes(editor, {
            match: isCodeElement
        });
        if (match) {
            e.preventDefault();
            e.stopPropagation();
            const [_, [index]] = match;
            const at = [index + 1];
            Transforms.insertNodes(editor, { type: PARAGRAPH_TYPE, children: [{ text: '' }] }, {
                at
            });
            Transforms.select(editor, at);
        }
    }
});
$: decorate = ([node, path]) => {
    const ranges = [];
    if (!Text.isText(node) || !prismLanguage) {
        return ranges;
    }
    else {
        const tokens = window.Prism.tokenize(node.text, prismLanguage);
        let start = 0;
        for (const token of tokens) {
            const length = getLength(token);
            const end = start + length;
            if (typeof token !== 'string') {
                ranges.push({
                    [token.type]: true,
                    anchor: { path, offset: start },
                    focus: { path, offset: end }
                });
            }
            start = end;
        }
        return ranges;
    }
};
const decorateContext = createContext(DECORATE_CONTEXT_KEY, decorate);
$: decorateContext.set(decorate);
let codeElement;
$: if (codeElement) {
    if (element.maxHeight) {
        codeElement.style.maxHeight = `${element.maxHeight}px`;
    }
    else {
        codeElement.style.maxHeight = '';
    }
}
function onMaxHeightChange(e) {
    const maxHeight = parseInt(e.currentTarget.value);
    Transforms.setNodes(editor, { maxHeight: isNaN(maxHeight) ? undefined : maxHeight }, {
        at: findPath(element)
    });
}
</script><div
	class="code-element"
	bind:this={ref}
	data-slate-node="element"
	data-slate-inline={isInline}
	data-slate-void={isVoid}
	{dir}
	{contenteditable}
><div
		class="language-select"
		class:hidden={!contenteditable}
		contenteditable={false}
		on:mousedown|stopPropagation
		on:touchstart|stopPropagation
	><select value={element.language} on:change={onSelect}>{#each languageNames as [id, language]}<option value={id}>{language}</option>{/each}</select><input
			type="number"
			placeholder="Max Height (Pixels)"
			value={element.maxHeight}
			on:input={onMaxHeightChange}
		/></div><ol {contenteditable} bind:this={codeElement}><slot /></ol></div><style>
	.code-element {
		position: relative;
		font-family: monospace;
		background: #f1f1f1;
		padding: 0.25rem;
		border: 1px solid #ccc;
	}
	.language-select {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 0.25rem;
		border-bottom: 1px solid #ccc;
	}
	.language-select.hidden {
		display: none;
	}
	ol {
		list-style-type: decimal;
		padding-left: 2.5rem;
		margin: 0;
		overflow: auto;
	}</style>

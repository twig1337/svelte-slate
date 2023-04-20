<svelte:options immutable /><script context="module">export const CODE_LINE_TYPE = 'code-line';
export function isCodeEditorElement(element) {
    return element.type === CODE_LINE_TYPE;
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
><slot /></li>

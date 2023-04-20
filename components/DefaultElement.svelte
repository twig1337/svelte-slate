<svelte:options immutable /><script>// svelte-ignore unused-export-let
export let element;
export let isInline;
export let isVoid;
export let contenteditable;
export let ref = undefined;
export let dir = undefined;
</script>{#if isInline}<span
		bind:this={ref}
		data-slate-node="element"
		data-slate-inline={isInline}
		data-slate-void={isVoid}
		{dir}
		{contenteditable}><slot /></span
	>{:else}<div
		bind:this={ref}
		data-slate-node="element"
		data-slate-void={isVoid}
		{dir}
		{contenteditable}
	><slot /></div>{/if}<style>
	span,
	div {
		position: relative;
	}</style>

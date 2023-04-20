<svelte:options immutable /><script context="module">export {};
</script><script>export let leaf;
</script><span
	data-slate-leaf="true"
	class:bold={leaf.bold}
	class:italic={leaf.italic}
	class:code={leaf.code}
	class:underline={leaf.underline}
><slot /></span><style>
	.bold {
		font-weight: 900;
	}
	.italic {
		font-style: italic;
	}
	.code {
		font-family: monospace;
		background-color: #eee;
		padding: 3px;
	}
	.underline {
		text-decoration: underline;
	}</style>

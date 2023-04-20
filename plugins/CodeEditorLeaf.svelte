<svelte:options immutable /><script context="module">export {};
</script><script>export let leaf;
</script><span
	data-slate-leaf="true"
	class:comment={leaf.comment}
	class:url={leaf.operator || leaf.url}
	class:keyword={leaf.keyword}
	class:variable={leaf.variable || leaf.regex}
	class:primitive={leaf.number ||
		leaf.boolean ||
		leaf.tag ||
		leaf.constant ||
		leaf.symbol ||
		leaf['attr-name'] ||
		leaf.selector}
	class:punctuation={leaf.punctuation}
	class:string={leaf.string || leaf.char}
	class:function={leaf.function || leaf['class-name']}
><slot /></span><style>
	.comment {
		color: slategray;
	}
	.url {
		color: #9a6e3a;
	}
	.keyword {
		color: #07a;
	}
	.variable {
		color: #e90;
	}
	.primitive {
		color: #905;
	}
	.punctuation {
		color: #999;
	}
	.string {
		color: #690;
	}
	.function {
		color: #dd4a68;
	}</style>

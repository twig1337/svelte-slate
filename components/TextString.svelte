<svelte:options immutable /><script>import { beforeUpdate } from 'svelte';
export let leaf;
export let isTrailing = false;
let ref;
beforeUpdate(() => {
    if (ref) {
        ref.textContent = leaf.text;
    }
});
</script><span bind:this={ref} data-slate-string="true"
	>{leaf.text}{#if isTrailing}{'\n'}{/if}</span
>

<svelte:options immutable /><script context="module">"use strict";
function repositionElement(ref, container, retires) {
    const domSelection = window.getSelection();
    if (!domSelection || domSelection.type.toLowerCase() === 'none') {
        if (retires > 0) {
            setTimeout(() => {
                repositionElement(ref, container, retires - 1);
            }, 100);
        }
        return;
    }
    const domRange = domSelection.getRangeAt(0);
    if (domRange.startContainer === container || domRange.endContainer === container) {
        if (retires > 0) {
            setTimeout(() => {
                repositionElement(ref, container, retires - 1);
            }, 0);
        }
        return;
    }
    const rect = domRange.getBoundingClientRect();
    const viewRect = container.getBoundingClientRect();
    let x = rect.left - viewRect.left - (ref.offsetWidth - rect.width) / 2;
    let y = rect.top - viewRect.top - ref.offsetHeight;
    const top = y;
    const right = x + ref.offsetWidth;
    const bottom = y + ref.offsetHeight;
    const left = x;
    if (left < 0) {
        x = 0;
    }
    else if (right > viewRect.width) {
        x = viewRect.width - ref.offsetWidth;
    }
    if (top < 0) {
        y = rect.bottom - viewRect.top;
    }
    else if (bottom > viewRect.height) {
        y = viewRect.height - ref.offsetHeight;
    }
    ref.style.left = `${x}px`;
    ref.style.top = `${y}px`;
    ref.style.opacity = '1';
}
</script><script>import { portal } from 'svelte-portal/src/Portal.svelte';
export let container = undefined;
export let ref = undefined;
export let open = false;
export let retires = 2;
$: if (container === undefined && ref) {
    container = ref.ownerDocument.body;
}
$: if (ref) {
    if (open) {
        repositionElement(ref, container, retires);
    }
    else {
        ref.removeAttribute('style');
    }
}
</script><div bind:this={ref} class="hovering-menu" contenteditable={false} use:portal={container}><slot /></div><style>
	.hovering-menu {
		background: transparent;
		position: absolute;
		z-index: 10000;
		top: -10000px;
		left: -10000px;
		opacity: 0;
	}</style>

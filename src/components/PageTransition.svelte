<script>
    import { blur, fly } from 'svelte/transition';
    export let refresh = '';
</script>

{#key refresh}
  <div
    in:fly="{{y: -30, duration: 300, delay: 0 }}"
    out:blur="{{ duration: 0}}" 
    >
    <slot/>
  </div>
{/key}
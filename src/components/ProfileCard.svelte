
<script lang="ts">
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    export let name : string;
    export let image : string;
    export let description : string;
    export let githubURL : string;
    export let linkedinURL : string;
</script>

<div class="card w-96 bg-base-100 shadow-xl m-4">
  <figure class=""><img src={image} alt={name} /></figure>
  <div class="card-body">
    <div class="flex flex-row justify-between">
        <h2 class="card-title">{name}</h2>
        <div class="h-6 flex flex-row">
            <a href={githubURL} class="mx-4"><FaGithub /></a>
            <a href={linkedinURL}><FaLinkedin /></a>
        </div>
    </div>
    <p>{description}</p>
    <div class="card-actions justify-end" />
  </div>
</div>

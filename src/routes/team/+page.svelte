<script lang="ts">
  import type { ComponentProps } from "svelte";
  import ProfileCard from "../../components/ProfileCard.svelte";

  const profiles: ComponentProps<ProfileCard>[] = [
    {
      name: "Andrew Lee",
      image: "/andrew.webp",
      description: "Andrew made the team learn Rust for no good reason.",
      githubURL: "https://github.com/candrewlee14",
      linkedinURL: "https://www.linkedin.com/in/c-andrew-lee/",
      websiteURL: "https://candrewlee14.github.io/",
    },
    {
      name: "Seth Gunsay",
      image: "/seth.jpeg",
      description: "Seth is a TDD devotee.",
      githubURL: "",
      linkedinURL: "",
      websiteURL: "",
    },
    {
      name: "Daniel Israelsen",
      image: "/daniel.webp",
      description: "Daniel knows worms genetics.",
      githubURL: "",
      linkedinURL: "",
      websiteURL: "",
    },
    {
      name: "Will Bradshaw",
      image: "/will.jpeg",
      description: "Will likes memes and schedulers.",
      githubURL: "",
      linkedinURL: "",
      websiteURL: "",
    },
  ];
</script>

<div class="flex flex-wrap justify-center items-center">
  {#each profiles as profile}
    <ProfileCard {...profile} />
  {/each}
</div>

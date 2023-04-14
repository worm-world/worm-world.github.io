<script>
  import DiApple from "svelte-icons/di/DiApple.svelte";
  import DiWindows from "svelte-icons/di/DiWindows.svelte";
  import DataDownload from "svelte-icons/fa/FaArchive.svelte";
</script>

<div class="flex flex-col">
  <div class="flex w-full pt-1">
    <div class="grid flex-grow card place-items-center p-4">
      <a
        href="https://github.com/worm-world/worm-world/releases/latest/download/worm-world-macos.zip"
      >
        <div
          class="flex flex-col bg-base-200 px-8 py-4 w-32 rounded-lg items-center"
        >
          <span>MacOS</span>
          <div class="h-12">
            <DiApple />
          </div>
        </div>
      </a>
    </div>
    <div class="divider divider-horizontal" />
    <div class="grid flex-grow card place-items-center p-4">
      <a
        href="https://github.com/worm-world/worm-world/releases/latest/download/worm-world-windows.zip"
      >
        <div
          class="flex flex-col items-center bg-base-200 px-8 py-4 rounded-lg w-32"
        >
          <span>Windows</span>
          <div class="h-12">
            <DiWindows />
          </div>
        </div>
      </a>
    </div>
    <div />
  </div>
  <div class="divider divider-vertical" />

  <!-- <div class="divider divider-vertical" /> -->
  <div class="flex flex-col justify-center mt-2 max-w-md">
    <p>To bypass Apple Codesigning, run:</p>
    <p class="bg-base-200 p-1 mt-2 rounded-md text-xs">
      <code
        >xattr -d com.apple.quarantine <span class="text-primary"
          >[YOUR PATH TO worm-world.app]</span
        ></code
      >
    </p>
    <br />
    <p>
      The app doesn't come pre-populated with <i>C. Elegans</i> genetic data, so
      to get started, you'll likely want to download some test data.
    </p>
    <a
      class="mt-4 pr-6"
      href="https://github.com/worm-world/worm-world/releases/latest/download/wormworld-test-data.zip"
    >
      <div class="flex flex-row justify-center p-4">
        <span class="mr-4">Starting Dataset: </span>
        <div class="h-7">
          <DataDownload />
        </div>
      </div>
    </a>
    <br/>
    <p>The unzipped CSV/TSV files can be uploaded to the app's database using the "Import" button on the corresponding Data Manager page.</p>
  </div>
</div>

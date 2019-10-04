<script>
  import Router from "svelte-spa-router";
  import Upload from "./Upload.svelte";
  //   import Preview from "../fragments/Preview.svelte";
  //   import Generate from "../fragments/Generate.svelte";
  // Routes for the "inner router"
  // Note that the path is still the absolute one!
  //   export const routes = new Map();
  //   routes.set("/taxreport/upload", Upload);
  //   routes.set("/taxreport/preview", Preview);
  //   routes.set("/taxreport/generate", Generate);
  export const routes = {
    "/taxreport/upload": Upload
  };
</script>

<h1>Tax report</h1>

<nav>
  <ul>
    <li>
      <a href="/taxreport/upload">Upload</a>
    </li>
    <!-- <li>
      <a href="/taxreport/preview">Preview</a>
    </li>
    <li>
      <a href="/taxreport/generate">Generate</a>
    </li> -->
  </ul>
</nav>

<Router {routes} />
<p>load this</p>

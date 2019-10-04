<script>
  import PageContainer from "./components/PageContainer.svelte";
  // Import the router component
  // Normally, this would be import: `import Router from 'svelte-spa-router'`
  import Router from "svelte-spa-router";
  // Import the "link" action and the methods to control history programmatically from the same module, as well as the location store
  import {
    link,
    push,
    pop,
    replace,
    location,
    querystring
  } from "svelte-spa-router";

  import routes from "./routes";
  export let name;
</script>

<style>
  .top-bar {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;

    background: #ffffff;
    /* Shadow-Light-Small */

    box-shadow: 0px 4px 8px rgba(62, 67, 73, 0.15);
  }

  .team-name {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height, or 150% */

    margin-top: 38px;
    margin-bottom: 24px;

    text-transform: uppercase;
  }

  .header-nav-item {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height, or 150% */

    /* Dark Grey */

    background: #687079;
    text-transform: capitalize;
  }

  .user-icon {
    width: 32px;
    height: 32px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  .left-well {
    padding-left: 32px;
  }

  .right-well {
    padding-right: 32px;
  }
</style>

<header class="top-bar">
  <h1 class="team-name left-well">the taxidermist</h1>
  <nav>
    <ul>
      <li class="header-nav-item">
        <a href="/taxreport" use:link>tax report</a>
      </li>
    </ul>
  </nav>
  <img class="user-icon" src="/image.png" alt="the user image" />
</header>

<PageContainer>
  <Router {routes} />
</PageContainer>

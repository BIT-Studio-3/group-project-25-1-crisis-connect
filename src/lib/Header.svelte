  import { onMount } from 'svelte';

  let sidebarOpen = false;

  let sidebar;
  let hamburger;

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }

  function closeSidebar() {
    sidebarOpen = false;
  }

  function onSelectChange(event) {
    const url = event.target.value;
    if (url) {
      window.location.href = url;
      closeSidebar();
    }
  }

  function handleClickOutside(event) {
    if (
      sidebarOpen &&
      sidebar &&
      hamburger &&
      !sidebar.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      closeSidebar();
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<div class="layout">
  <button 
  class="hamburger"
  class:hidden={sidebarOpen}
  aria-label="Toggle menu"
    on:click={toggleSidebar}
    bind:this={hamburger}
  >
    ☰
  </button>

  <aside class="sidebar" class:open={sidebarOpen} bind:this={sidebar}>
    <img src="/Images/logo.png" alt="Crisis Connect logo" class="logo" />

    <h2>Live Data</h2>
    <select class="dropdown" on:change={onSelectChange}>
      <option value="" disabled selected>Select Live Data</option>
      <option value="/weather_reports_page">Weather Reports</option>
      <option value="/seismic_reports_page">Seismic Activity</option>
      <option value="/road_conditions_page">Road Conditions</option>
      <option value="/volcanic_activity_page">Volcanic Activity</option>
      <option value="/rss">RSS Feed</option>
    </select>
    

    <h2>Reports</h2>
    <ul>
      <li><a href="/hazards" class="sidebar-link" on:click={closeSidebar}>Hazard Form</a></li>
      <li><a href="/damage_form" class="sidebar-link" on:click={closeSidebar}>Damage Form</a></li>
      <li><a href="/alert_system" class="sidebar-link" on:click={closeSidebar}>Post an Alert</a></li>
    </ul>

    <h2>Contact</h2>
    <ul>
      <li><a href="/contact_page" class="sidebar-link" on:click={closeSidebar}>Contact Services</a></li>
      <li><a href="/task_cards" class="sidebar-link" on:click={closeSidebar}>Task Cards</a></li>
    </ul>
  </aside>

  <main class="main-content">
    <slot />
  </main>
</div>

<style>
  .layout {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  .sidebar {
    width: 300px;
    padding: 1rem;
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.192);
    background-color: #070707b7;
    overflow-y: auto;
    transition: transform rgba(141, 19, 19, 0)0.3s ease;
  }

  .logo {
    width: 80px;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: white;
  }

  .dropdown {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    color: rgb(0, 0, 0);
  }
  .dropdown option:checked {
  background-color: #e0e0e0;
  color: #333;
}

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
  }

  li {
    margin: 0.5rem 0;
  }
  .hidden {
    display: none;
  }

  a {
    display: block;
    padding: 0.5rem;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  .main-content {
    flex-grow: 1;
    padding: 2rem;
    overflow-y: auto;
  }

  /* Hamburger button */
  .hamburger {
    display: none;
    position: fixed;
    top: 1rem;
    left: 1rem;
    font-size: 2rem;
    background: none;
    border: none;
    color: black;
    cursor: pointer;
    z-index: 1100;
  }

  /* Mobile styles */
  @media (max-width: 768px) {
    .layout {
      flex-direction: row;
    }

    .sidebar {
      width: 100%;
      height: auto;
    }
  }
</style>
<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@2.11.0/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<script>
  //import './global.css'; 
  import { slide } from "svelte/transition";
  let isSidebarOpen = false;
  const toggleSidebar = () => isSidebarOpen = !isSidebarOpen;
</script>

<section>

   <!-- Sidebar Container -->
   <img src = "/Images/logo.png" alt = "Connect Criss logo"/>
    <div class="relative">
      <!-- Sidebar Toggle Button -->
    <button 
    class="w-10 h-10 m-1 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white  flex items-center justify-center overflow-hidden"
    on:click={toggleSidebar}
    aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
    >
    {#if isSidebarOpen}
    <!-- Close Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current sidebar-button open">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
    {:else}
    <!-- Menu Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current sidebar-button">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    {/if}
  </button>
  
  <!-- Sidebar Content with Slide Transition -->
  {#if isSidebarOpen}
  <div transition:slide class="sidebar">
    <button class="text-2xl cursor-pointer closebtn" on:click={toggleSidebar}>&times;</button>
    <h2 class="text-xl font-semibold mb-4">Live Data</h2>
    <ul class="space-y-2">
      <!--<div class="container">-->
        <select class="container" onchange="if(this.value) window.location.href=this.value">
          <option value="/weather_reports_page">Weather Reports</option>
          <option value="/seismic_reports_page">Seismic Activity</option>
          <option value="/road_conditions_page">Road Conditions</option>
          <option value="/volcanic_activity_page">Volcanic Activity</option>
          <option value="/fire_and_emergency_page">Fire and Emergency Reports</option>
          <option value="/rss">RSS Feed</option>
          <option value="/alert_system">⚠️ Post an Alert</option>
          <option value="/damage_form">Damage reports (temporary link)</option>
          <option value="/hazards">Local Hazards (temporary link)</option>
        </select>      
    </ul>
    <h2 class="text-xl font-semibold mt-6 mb-4">Report Forms</h2>
    <ul class="space-y-2">
      <li><a class="btn btn-outline btn-secondary w-full" href="/contact_page">Hazard Form</a></li>
      <li><a class="btn btn-outline btn-secondary w-full" href="/developer_contact">Damage Form</a></li>
    </ul>

    <h2 class="text-xl font-semibold mt-6 mb-4">Contact</h2>
    <ul class="space-y-2">
      <li><a class="btn btn-outline btn-secondary w-full" href="/contact_page">Contact Services</a></li>
      <li><a class="btn btn-outline btn-secondary w-full" href="/developer_contact">Contact us "the developers"</a></li>
    </ul>
  </div>
  {/if}
</div>
  
</section>


<style>
  select{
    color: black;
  }

  section
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#b1d4e0;
    padding: 0.5em;
    flex-direction:row-reverse;
    border: 2px solid #2e8bc0  ;
  }@media only screen and (max-width: 400px) {
    section {
      flex-direction:row-reverse;
      justify-content: space-between;
      align-items : center;
      padding: 0.2 em;
    }
  }

  img { /* image float right side */
    width: 80px;
    height: auto;
  
    text-align: center;
  }
  /* Sidebar styles */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 16rem; /* w-64 */
    background-color: #b1d4e0; /* Darker base color */
    color: white;
    padding: 1rem;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    z-index: 9999;
  }

  /* Sidebar button */
  .sidebar-button {
    transition: transform 0.3s ease-in-out;
  }

  .sidebar-button.open {
    transform: rotate(180deg);
  }
  .container {
        padding-left: 20px;
        padding-right: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        height:  40px;
       
    }
  </style>

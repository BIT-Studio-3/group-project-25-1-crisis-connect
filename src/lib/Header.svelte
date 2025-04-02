<svelte:head>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@2.11.0/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<script>
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
    class="btn p-2 m-1 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-primary text-white rounded-full"
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
      <li><a class="btn btn-outline btn-primary w-full" href="/weather_reports_page">Weather Reports</a></li>
      <li><a class="btn btn-outline btn-primary w-full" href="/seismic_reports_page">Seismic Activity</a></li>
      <li><a class="btn btn-outline btn-primary w-full" href="/road_conditions_page">Road Conditions</a></li>
      <li><a class="btn btn-outline btn-primary w-full" href="/volcanic_activity_page">Volcanic Activity</a></li>
      <li><a class="btn btn-outline btn-primary w-full" href="/fire_and_emergency_page">Fire and Emergency Reports</a></li>
      <li><a class="btn btn-outline btn-primary w-full" href="/rss">RSS Feed</a></li>
      <li><a class="btn btn-outline btn-error w-full" href="/alert_system">⚠️ Post an Alert</a></li>
      <li><a class="btn btn-outline btn-primary w-full" href="/damage_form">Damage reports(temporary link)</a></li>
    </ul>
    
    <h2 class="text-xl font-semibold mt-6 mb-4">Contact</h2>
    <ul class="space-y-2">
      <li><a class="btn btn-outline btn-secondary w-full" href="/contact_page">Contact Services</a></li>
      <li><a class="btn btn-outline btn-secondary w-full" href="/developer_contact">Contact us "the developers"</a></li>
      <li><a class="btn btn-outline btn-secondary w-full" href="/group_chat">Group Communication</a></li>
      <li><a class="btn btn-outline btn-secondary w-full disabled" href = "/live_chat">Location-based Live Chat (Coming Soon)</a></li>
    </ul>
  </div>
  {/if}
</div>

</section>


<style>
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
  </style>


<di class="layout">
  <aside class="sidebar">
    <img src="/Images/logo.png" alt="Crisis Connect logo" class="logo"/>

    <h2>Live Data</h2>
    <select class="dropdown" on:change={(e) => window.location.href = e.target.value}>
      <option value="" disabled selected>Select Live Data</option>
      <option value="/weather_reports_page">Weather Reports</option>
      <option value="/seismic_reports_page">Seismic Activity</option>
      <option value="/road_conditions_page">Road Conditions</option>
      <option value="/volcanic_activity_page">Volcanic Activity</option>
      <option value="/rss">RSS Feed</option>
    </select>
    

    <h2>Reports</h2>
    <ul>
      <li><a href="/hazards">Hazard Form</a></li>
      <li><a href="/damage_form">Damage Form</a></li>
      <li><a href="/alert_system">Post an Alert</a></li>
    </ul>

    <h2>Contact</h2>
    <ul>
      <li><a href="/contact_page">Contact Services</a></li>
      <li><a href="/task_cards">Task Cards</a></li>
    </ul>
  </aside>

  <main class="main-content">
    <slot />
  </main>
</di>

<style>
  h2{
    font-size: 30px;
  }
  select{
    color: black;
  }

  section
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#678994;
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
    height: auto;
    min-height: 100%;
    overflow-y: auto;
    width: 20rem; /* w-64 */
    background-color: #74a7d5; /* Darker base color */
    background: linear-gradient(to right, #73a5f7, #5e6c84); /* blue → purple → pink */
    color: rgb(118, 5, 5);
    padding-left: 0rem;
    border-radius: 0px;
    box-shadow: 10px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  /* Sidebar button */
  .sidebar-button {
    transition: transform 0.3s ease-in-out;
  }

  .main-content {
    flex-grow: 1;
    padding: 2rem;
    overflow-y: auto;
  }

  @media (max-width: 768px) {
    .layout {
      flex-direction: column;
    }
    .sidebar {
      width: 100%;
      height: auto;
    }
  }

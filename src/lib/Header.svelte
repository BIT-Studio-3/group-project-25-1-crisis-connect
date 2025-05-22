
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

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
  }

  li {
    margin: 0.5rem 0;
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

  @media (max-width: 768px) {
    .layout {
      flex-direction: column;
    }
    .sidebar {
      width: 100%;
      height: auto;
    }
  }

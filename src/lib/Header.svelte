<script>
  function openNav() {
  document.getElementById("Sidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
}
</script>

<section>
  <nav id ="Sidenav">
    <a href="javascript:void(0)" class="closebtn" on:click={closeNav}>&times;</a>
    <li><a href="/weather_reports_page">Weather Reports</a></li>
    <li><a href="/seismic_reports_page">Seismic Activity</a></li>
    <li><a href="/road_conditions_page"> Road Conditions</a></li>
    <li><a href="/volcanic_activity_page">Volcanic Activity</a></li>
    <li><a href="/fire_and_emergency_page">Fire and Emergency Reports</a></li>
    <li><a href="/rss">RSS Feed</a></li>
    <li><a href="/alert_system">Post an Alert!!!</a></li>
    <li><a href="/contact_page">Contact services</a></li>
    <li>Contact us "the developers"</li>
    <li>Group communication</li>
    <li>Location based live chat</li>
  </nav>
</section>

<style>

    nav {
        margin: 0;
        padding: 0;
        width : 200px;
        background-color: #f1f1f1;
        position: fixed;
        height : 100%;
       overflow: auto; 
    }
    li {
      list-style: none;
    }
    /*.box{
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        align-items: center;
    }
    a {
        text-decoration: none;
    }
    */
</style>

<script>
    import Cards from '$lib/Cards.svelte';
</script>

<section>

    <h2>Task Allocation</h2><br>


    <h3>Recent Activity: </h3>


<Cards />

<div class="container">
    <img src="/Images/Add_icon.png" alt="Hazard sign" class="hazard_icon" width="32" />
    <h3>Add New Card<h3>
</div>


</section>


<style>
    h2 {
    color: rgb(52, 131, 200);
    font-family: "Trebuchet MS";
    font-size: 50px;
    font-weight: 650;
    text-shadow: 2px 2px 2px #000;
  }
    h3 {
        font-size: large;
    }

    .container {
        border-radius: 5px;
        background-color: rgb(52, 131, 200, 0.5);
        display: flex;
        align-items:flex-start;
        gap: 1rem;
        flex-wrap: no-wrap;
        padding: 1rem;
        justify-content: left;
        text-align: center;
  }
</style>
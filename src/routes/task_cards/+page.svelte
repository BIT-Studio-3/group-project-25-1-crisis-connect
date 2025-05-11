<script>
    import Cards from '$lib/Cards.svelte';
    let title = '';
    let titles = [];
    let postDate = '';
    let postDates = [];
    let location = '';
    let locations = [];
    let skill = '';
    let skills = [];
    let showAddCard = false;

    function addCard() {
    console.log("New Card");
    showAddCard = true;

  }
</script>

<section>

    <h2>Task Allocation</h2><br>

    <h3>Recent Activity: </h3>

<Cards />

<div class="container">
    <form on:submit|preventDefault={addCard}>
        <button class="button1" type="submit">
            <img src="/Images/Add_icon.png" alt="Hazard sign" class="hazard_icon" width="32" />
        </button>
    </form>    
    <h3>Add New Card<h3>
</div><br>

{#if showAddCard}
    <div class="container2">
        <form on:submit|preventDefault={addCard}>
        <table class="table" style width="100%">       
            <tr class="form-group">
                <label for="date">Title: </label>
                <input type="text" id="date" required bind:value={title} />
            </tr>       
            <tr class="form-group">
                <label for="date">Date: </label>
                <input type="date" id="date" required bind:value={postDate} />
            </tr>
            <tr>
                <td>location: </td>
                <td>{location}</td>
            </tr>
            <tr>
                <td>Requirements: </td> <!--Field does not need to be filled to submit-->
                <td>{skill}</td>
            </tr>
        </table>
        </form>
    </div>
{/if}


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

  .container2 {
        border-radius: 5px;
        background-color: rgb(52, 131, 200, 0.5);
        display: flex;
        align-items:flex-start;
        gap: 1rem;
        flex-wrap: no-wrap;
        padding: 1rem;
        justify-content: left;
        text-align: left;
  }
  form {
    display: grid;
    gap: 20px;
    border: 2px;
  }

  .form-group {
    display: grid;
    grid-template-columns: 2fr 2fr;
    align-items: center;
  }

  label {
    color: #000;
  }

  input {
    color: #000;
  }
</style>
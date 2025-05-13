<script>
    import Card from '$lib/Cards.svelte';

    let title = '';
    let postDate = '';
    let location = '';
    let skill = '';
    let showAddCard = false;

    let cards = [];
    
    function addCard() {
    console.log("New Card");
    showAddCard = true;
     }
</script>

<section>

    <h2>Task Allocation</h2><br>

    <h3>Recent Activity: </h3>

<div class="container">
    <form on:submit|preventDefault={addCard}>
        <button class="button1" type="submit">
            <img src="/Images/Add_icon.png" alt="Hazard sign" class="hazard_icon" width="32" />
        </button>
    </form>    
    <h3>Add New Card<h3>
</div><br>

{#if showAddCard}
    <div class="container">
        <form on:submit|preventDefault={addCard}>
            <table class="table" style width="100%">                      
                <label for="title">Title: </label>
                <input type="text" id="title" required bind:value={title} />
                                    
                <label for="date">Date: </label>
                <input type="date" id="date" required bind:value={postDate} />                
                
                <label for="location">Location: </label>
                <input type="address" id="location" required bind:value={location} />                
                
                <label for="skill">Requirements: </label> <!--Field does not need to be filled to submit-->
                <input type="text" id="requirements" required bind:value={skill} />               
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
        font-size: px;
        font-weight: bold;
    }

    .container {
        border-radius: 5px;
        background-color: rgb(52, 131, 200, 0.5);
        display: flex;
        align-items:flex-start;
        gap: 1rem;     
        padding: 1rem;
        justify-content: left;        
        text-align: center;
  }

  form {
    display: grid;
    gap: 20px;
    border: 2px;
  }
  .form-group {
    display: grid;
    grid-template-columns: 5fr 5fr;
    align-items: center;
  }

  label {
    color: #ffffff;
  }

  input {
    color: #000;
    border-radius: 5px;
    padding: 1;
    
  }

  .table {
    display: flex;
    flex-direction: column;
    align-items:normal;
    align-content: flex-start;
    justify-content: space-around;
    table-layout: auto;
    width:fit-content;
    height: 300px;
  }
</style>
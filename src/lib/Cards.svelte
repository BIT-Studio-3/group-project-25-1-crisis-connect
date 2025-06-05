<script>
    export let id = "";
    export let title = "";
    export let postDate = "";
    export let location = "";
    export let requirements = "";
    export let urgency = "";
    export let status = ""; 
    export let updateStatus = () => {};
    export let onRemove = () => {}; // add this   
</script>

<div class="card_container">
    <ul>
        <div class="card_header">       
        <p class="card_title">{title}</p>
        <p class="id-box {urgency}">Id: {id}</p>
        </div>               
        <p>Date: {postDate}</p>
        <p>Location: {location}</p> 
        <p>Requirements: {requirements}</p>
        <p>Urgency: {urgency}</p>
       <label>
        Status:
          <select bind:value={status} on:change={() => updateStatus(id, status)}>
            <option value="Not Assigned">Not Assigned</option>
            <option value="Task Allocated">Task Allocated</option>
            <option value="In Progress">In Progress</option>
            <option value="Task Completed">Task Completed</option>
          </select>
        </label><br><br>
        <button class="button3" on:click={() => onRemove(id)} title="Delete Card?"><h3>X</h3></button>   
    </ul>
</div>

<style>

.card_container {
    display: grid;
    text-align: left;
    grid-template-columns: repeat(1, 350px);
    grid-template-rows: auto;
    gap: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 1em;
    margin-right: 1em;
}
 
.card_title {
    color: rgb(255, 255, 255);
    display: flex;
    font-size: 20px;
    padding-bottom: 5px;
    text-overflow: initial;
    text-shadow: 2px 2px 2px #000;
}

.card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.id-box {
    background-color: #C0C0C0;
    color: rgb(0, 0, 0);
    font-weight: bold;
    padding: 2px;
    margin-bottom: 50px;
    border-radius: 4px;
    font-size: 0.75em;
}

.Low {
  background-color: white;
}

.Moderate {
  background-color: yellow;
}

.High {
  background-color: orange;
}

.Critical {
  background-color: red;
  color: white;
}

.button3 {
    background-color: #727272;
    size: 2.5px;
    width: 20px;
    height: 25px;
    color: rgb(0, 0, 0);   
    border-radius: 2px;
    padding: 2px;
  }

  .title {
    background-color: #c0c0c0;
    color: #c0c0c0;
  }

  select{
    color: #ffffff;
    background-color: #00000000;
  }

  option {
    color: #000;
    background-color: #ffffff00;
  }
</style>
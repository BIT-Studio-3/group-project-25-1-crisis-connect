<script>
    export let id = "";
    export let title = "";
    export let postDate = "";
    export let location = "";
    export let requirements = "";
    export let urgency = "";
    export let status = "";
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
        <p>Status: {status}</p>   
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
    color: rgb(200, 200, 52);
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
    font-size: 0.7em;
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
</style>
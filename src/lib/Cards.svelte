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
        <p class="id-box">Id: {id}</p>
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
    color: rgb(52, 131, 200);
    display: flex;
    font-size: larger;
    padding: 3px;
    text-overflow: initial;
}

.card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.id-box {
    background-color: #d49c02;
    color: white;
    font-weight: bold;
    padding: 0.2em 0.6em;
    border-radius: 5px;
    font-size: 0.8em;
}
</style>
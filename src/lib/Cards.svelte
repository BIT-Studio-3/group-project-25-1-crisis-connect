<script>
    export let id = "";
    export let title = "";
    export let postDate = "";
    export let location = "";
    export let requirements = "";
    export let urgency = "";
    export let status = "";
</script>

<div class="cardcontainer">
    <ul>
        <p>Id: {id}</p>
        <h3>{title}</h3>
        <p>Date: {postDate}</p>
        <p>Location: {location}</p> 
        <p>Requirements: {requirements}</p>
        <p>Urgency: {urgency}</p>
        <p>Status: {status}</p>   
    </ul>
</div>

<style>
h3 {
    color: rgb(52, 131, 200, 0.5); 
    font-size: 1.5rem;
    text-align: center;
    padding-top: 20px;
}
.cardcontainer {
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
 
</style>
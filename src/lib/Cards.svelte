<script>
    export let title = "";
    export let postDate = "";
    export let location = "";
    export let requirements = "";
    export let urgency = "";
</script>

<div class="cardcontainer">
    <ul>
        <h3>{title}</h3>
        <p>Date: {postDate}</p>
        <p>Location: {location}</p> 
        <p>Requirements: {requirements}</p>
        <p>Urgency: {urgency}</p>   
    </ul>
</div>

<style>

.cardcontainer {
    display: grid;
    grid-template-columns: repeat(1, 350px);
    grid-template-rows: auto;
    gap: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 1em;
    margin-right: 1em;
}
 
</style>
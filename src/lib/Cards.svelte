<script>
    export let title = "Title";
    export let postDate = "";
    export let location = "";
</script>

<div class="cardcontainer">
    <ul>
        <h3>{title}</h3>
        <p>Date: {postDate}</p>
        <p>Location: {location}</p>    
    </ul>
</div>

<style>

.cardcontainer {
    display: grid;
    grid-template-columns: repeat(1, 325px);
    grid-template-rows: auto;
    gap: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 1em;
    margin-right: 1em;
}
 
</style>
<script>
    let address = "";
    let area = "";
    let type = "";
</script>

<section>

<h2>Post local hazards here</h2>

<p>Let us know below if you come accross any hazards during distasters to help avoid accidents</p>

<div class="container">
    <form>
        <div>
            <label for="address">Address</label>
            <input type="text" id="address" bind:value={address}>
        </div><br>
        <div>
            <label for="address">Area</label>
            <input type="text" id="area" bind:value={area}>
        </div><br>
        <div>
            <label for="type">Hazard</label>
            <input type="text" id="type" bind:value={type}>
        </div><br>
        <button>Submit</button>
    </form>
</div>

<p>Address: {address}</p>
<p>Area: {area}</p>
<p>Hazard: {type}</p>

</section>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height:  20em;
    }
    input {
        font-size: small;
        color: rgb(0, 0, 0);
    }
</style>



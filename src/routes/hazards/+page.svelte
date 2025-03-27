<script>
    let streetNumber = "";
    let streetName = "";
    let region = "";
    let hazardType = "";

    function onSubmit(){
        console.log("Submitted!");
    }

</script>

<section>

<h2>Post local hazards here</h2>

<p>Let us know below if you come accross any hazards during distasters to help avoid accidents</p>

<div class="container">
    <form on:submit|preventDefault={onsubmit}>
        <div>    
            <label for="address">Street</label>
            <input type="text" id="streetName" bind:value={streetName}><br>
            <label for="address">Number</label>      
            <input type="number" id="streetNumber" bind:value={streetNumber}><br>
        </div><br>
        <div>
            <label for="region">Region</label>
            <select bind:value={region}>
                <option value="Otago">Otago</option>
                <option value="Cantebury">Cantebury</option>
                <option value="Southland">Southland</option>
        </div><br>
        <div>
            <label for="hazardType">Hazard type</label>
            <input type="text" id="hazardType" bind:value={hazardType}>
        </div><br>
        <button on:submit={onSubmit}>Submit</button>
    </form>
</div>

<p>Street: {streetName}</p>
<p>Number: {streetNumber}</p>
<p>Region: {region}</p>
<p>Hazard: {hazardType}</p>

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
    select {
        color:rgb(0, 0, 0);
    }
</style>

<!--References below-->

<!--https://www.thisdot.co/blog/handling-forms-in-svelte-->

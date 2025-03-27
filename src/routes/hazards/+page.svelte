<script>
    let date = "";
    let streetNumber = "";
    let streetName = "";
    let region = "";
    let towncity = "";
    let hazardType = "";
    let description = "";

    function onSubmit(){
        console.log("Submitted!");
    }

</script>

<section>

<h2>Post local hazards here</h2>

<p><em>Let us know below if you come across any hazards during disasters to help avoid accidents</em></p><br>

<div class="bo">

<div class="container">
    <form on:submit|preventDefault={onsubmit}>
        <div class="form-group">
            <label for="date">Date: </label>
            <input type="date" id="date" bind:value={date}>
        </div>    
        <div class="form-group">    
            <label for="address">Street name: </label>
            <input type="text" id="streetName" bind:value={streetName}>
        </div>
        <div class="form-group">
            <label for="address">House number: </label>    
            <input type="number" id="streetNumber" bind:value={streetNumber}>
        </div>
        
        <div class="form-group">
            <label for="region">Region: </label>
            <select bind:value={region}>
                <option value="Southland">Southland</option>
                <option value="Otago">Otago</option>
                <option value="Cantebury">Cantebury</option>
                <option value="Malborough">Malborough</option>
                <option value="Nelson">Nelson</option>
                <option value="Tasman">Tasman</option>
                <option value="Westcoast">Westcoast</option>
        </div>

        <div class="form-group">
            <label for="town/city">Town/City: </label>
            <select bind:value={towncity}>
                <option value="Dunedin">Duniden</option>
        </div>

        <div class="form-group">
            <label for="hazardType">Hazard type: </label>
            <select bind:value={hazardType}>
                <option value="Physical">Physical</option>
                <option value="Psychosocial">Psychosocial</option>
                <option value="Electrical ">Electrical</option>
                <option value="Other">Other</option>
        </div>

        
        <div class="description">
            <label for="description">Description: </label>
            <input type="textarea" id="description" rows="5" column="3" bind:value={description}>
        </div>

        <div class="form-group">
            <button on:submit={onSubmit}>Submit</button>
        </div>
        
    </form>
</div>
</div>
<p>Date: {date}</p>
<p>Street: {streetName}</p>
<p>Number: {streetNumber}</p>
<p>Region: {region}</p>
<p>Hazard: {hazardType}</p>
<p>Description: {description}</p>

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
        background-color: antiquewhite;
        color: rgb(0, 0, 0);
        border: 3px solid;
    }
    select {
        background-color: antiquewhite;
        color:rgb(0, 0, 0);
        color: rgb(0, 0, 0);
        border: 3px solid;
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
    
    .description {
        display: grid;
        grid-template-columns: 5fr 5fr;
        align-items: center;
    }

</style>

<!--References below-->



<script>
    let date = "";
    let streetNumber = "";
    let streetName = "";
    let region = "";
    let townCity = "";
    let hazardType = "";
    let description = "";
    let submitted = false;

    function onSubmit(){
        console.log("Submitted!");
        submitted = true;
    }

</script>

<section>

<div class="container2">
    <img src="/Images/hazard_sign2.png" alt="Hazard sign" width="5%"/>
    <h2>Post local hazards here</h2>
    <img src="/Images/hazard_sign2.png" alt="Hazard sign" width="5%"/>
</div>

<p><em>Let us know below if you come across any hazards during disasters to help avoid accidents</em></p><br>

<div class="container">
    <form on:submit|preventDefault={onSubmit}>
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
                <option value="Canterbury">Canterbury</option>
                <option value="Marlborough">Marlborough</option>
                <option value="Nelson">Nelson</option>
                <option value="Tasman">Tasman</option>
                <option value="West_coast">West coast</option>
        </div>

        <div class="form-group">
            <label for="town/city">Town/City: </label>
            <select bind:value={townCity}>
                <option value="Dunedin">Dunedin</option>
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

        <div>
            <button class="button1" on:submit={onSubmit}>Submit</button>
            
        </div>
        
    </form>
</div>

{#if submitted}
    <table class="table" style width="100%">
        <tr>
            <td>Date: </td>
            <td>{date}</td>
        </tr>
        <tr>
            <td>Street: </td>
            <td>{streetName}</td>
        </tr>
        <tr>
            <td>Number: </td>
            <td>{streetNumber}</td>
        </tr>    
        <tr>
            <td>Region: </td>
            <td>{region}</td>
        </tr>
        <tr>
            <td>Hazard: </td>
            <td>{hazardType}</td>
        </tr>
        <tr>
            <td>Description: </td>
            <td>{description}</td>
        </tr>
    </table>
{/if}
</section>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height:  400px;
       
    }
    .container2 {
        display: flex;
        justify-content: center;
        align-items: center;
        height:  100px;
    }
    input {
        font-size: small;
        background-color: aliceblue;
        color: rgb(0, 0, 0);
        border: 3px solid;
    }
    select {
        background-color: aliceblue;
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
    .table {
        table-layout: auto;
        width: 150px;
    }
    h2 {
        color:blue;
        font-family:'Trebuchet MS';
        font-size: 50px;
        font-weight: 650;
        text-shadow: 2px 2px 2px #000;       
    }
    .button1 {
        background-color: blue;
        size: 5px;
        width:5rem;
        height: 2.5rem;
        color: rgb(255, 255, 255);
        text-shadow: 1px 1px 1px #000;
        border-radius: 10px;
    }
</style>

<!--References below-->



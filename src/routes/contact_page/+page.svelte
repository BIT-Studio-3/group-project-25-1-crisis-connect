<script>
    let region = '';
    let regions = [];
    let name = '';
    let names = [];
    let role = '';
    let roles = [];
    
    function addDetails(event){
        event.preventDefault();
        if (region.trim())
        regions = [...regions, region];
    }
        if (name.trim()){
        names = [...names, name];
        name = '';
    }
        if (role.trim()){
        roles = [...roles, role];
        role = '';
    }

</script>

<div class="box">
    <h1>Emergency Services</h1><br>
    <h3>Verify your account to become a listee and see "Hidden" contact info</h3>
    <div class="box2">
        <h4>Click here to register</h4>
    </div>
    <div class="box3">
        <a href="/C:/Users/ayys/Desktop/project-24-2-JayDos89.pdf" download="my_document.pdf">Download PDF</a> 
    </div>
</div>
<section>
    <br>

    <p>Enter details below</p><br>
    <form on:submit={addDetails}>
        
        <label for="type">Region:</label>

        <select bind:value={region} id="region">   
            <option value="otago">Otago</option>
            <option value="cantebury">Cantebury</option>
            <option value="southland">Southland</option>
        </select><br>
        
        <label for="name">Name
            <input type="text" bind:value={name} id="name">
        </label><br>

        <label for="role">Role
            <input type="text" bind:value={role} id="role">
        </label>
        
        <button type="submit">Save</button>

    </form>

<div class="container">
    <h2>The Police</h2><br>
    <ul>
        {#each regions as newRegion}
        <li>Region: {region}</li>
        {/each}
        {#each names as newName}
        <li>Name:  {newName}</li>
        {/each}
        {#each roles as newRole}
        <li>Role: {newRole}</li>
        {/each}
        <li>Email: *********</li>
        <li>Work phone: ********</li>
        <li>Cell phone: ********</li>
        <li>Address: *******</li>
        
        
    </ul><br>
</div>

<div class="container">
    <h2>Fire and Emergency</h2><br>
    <ul>
        <li>Region: Otago</li>
        <li>Name: Spencer Williams</li>
        <li>Role: Rescue Fire and Safety Officer</li>
        <li>Email: </li>
        <li>Work phone: 03777555</li>
        <li>Cell phone: "Hidden"</li>
        <li>Address: "Hidden"</li>
        <li>Radio channel: *****</li>
    </ul><br>
    <ul>
        <li>Name: Spencer Williams</li>
        <li>Role: Rescue Fire and Safety Officer</li>
        <li>Email: </li>
        <li>Work phone: 03777555</li>
        <li>Cell phone: "Hidden"</li>
        <li>Address: "Hidden"</li>
    </ul><br>
    <ul>
        <li>Name: Spencer Williams</li>
        <li>Role: Rescue Fire and Safety Officer</li>
        <li>Email: </li>
        <li>Work phone: 03777555</li>
        <li>Cell phone: "Hidden"</li>
        <li>Address: "Hidden"</li>
    </ul>
</div>

<div class="container">
    <h2>Civil defence</h2><br>
    <ul>
        <li>Region: Cantabury</li>
        <li>Name: Lois Parker</li>
        <li>Role: Team Leader</li>
        <li>Email: </li>
        <li>Work phone: "Hidden"</li>
        <li>Cell phone: 025 787 989</li>
        <li>Address: "Hidden"</li>
        <li>Radio channel: *****</li>
    </ul><br>
    <ul>
        <li>Name: Lois Parker</li>
        <li>Role: Team Leader</li>
        <li>Email: </li>
        <li>Work phone: "Hidden"</li>
        <li>Cell phone: 025 787 989</li>
        <li>Address: "Hidden"</li>
    </ul><br>
    <ul>
        <li>Name: Lois Parker</li>
        <li>Role: Team Leader</li>
        <li>Email: </li>
        <li>Work phone: "Hidden"</li>
        <li>Cell phone: 025 787 989</li>
        <li>Address: "Hidden"</li>
    </ul>
</div>

<div class="container">
    <h2>Saint Johns</h2><br>
    <ul>
        <li>Region: Southland</li>
        <li>Name: Sally Duns</li>
        <li>Role: Nurse</li>
        <li>Email: Sally.Duns@mailfence.com</li>
        <li>Work phone: "Hidden"</li>
        <li>Cell phone: "Hidden"</li>
        <li>Address: "Hidden"</li>
        <li>Radio channel: *****</li> 
    </ul><br>
    <ul>
        <li>Name: Sally Duns</li>
        <li>Role: Nurse</li>
        <li>Email: Sally.Duns@mailfence.com</li>
        <li>Work phone: "Hidden"</li>
        <li>Cell phone: "Hidden"</li>
        <li>Address: "Hidden"</li>
    </ul><br>
    <ul>
        <li>Name: Sally Duns</li>
        <li>Role: Nurse</li>
        <li>Email: Sally.Duns@mailfence.com</li>
        <li>Work phone: "Hidden"</li>
        <li>Cell phone: "Hidden"</li>
        <li>Address: "Hidden"</li>
    </ul>
</div>
</section>
<style>
    .container{
        border: 2px solid #2fd6ce;
        border-radius: 8px;
        padding: 20px;
        width: 300px;
        overflow-y: auto;
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 10px;
        float: left;
    }
    .box{
        padding: 15px;
        margin: 15px;
    }
    .box2{
        border: 2px solid #6c6c6c;
        border-radius: 8px;
        padding: 5px;
        width: 80px;
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 5px;
    }
    .box3{
        border: 2px solid #6c6c6c;
        border-radius: 8px;
        padding: 5px;
        width: 80px;
        background-color: #f9f9f9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin: 5px;
    }
</style>
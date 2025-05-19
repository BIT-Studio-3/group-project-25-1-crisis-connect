<script>
    import { onMount } from "svelte";
    let region = '';
    let regions = [];
    let name = '';
    let names = [];
    let role = '';
    let roles = [];
    let workPhone= '';
    let workPhones =[];
    
    function addDetails(event){
        event.preventDefault();
        
            if (region.trim()){
            regions = [...regions, region];
            region= '';
        }
            if (name.trim()){
            names = [...names, name];
            name = '';
        }
            if (role.trim()){
            roles = [...roles, role];
            role = '';
        }

        if (workPhone.trim()) {
           workPhones = [...workPhones, workPhone];
           workPhone = '';
        }

    }
</script>

<section>

        <h2>Emergency Services</h2>
    
    <!--
    <h3>Verify your account to become a listee and see "Hidden" contact info</h3>
    <div class="box2">
        <h4>Click here to register</h4>
    </div>

    <div class="box3">
        <a href="/C:/Users/ayys/Desktop/project-24-2-JayDos89.pdf" download="my_document.pdf">Download PDF</a>
</div>
<div class="box2">
    <h4>Download an offline safe copy</h4> 
    
</div>
<p>Enter details below :</p>
<div  class ="container">
    

<form on:submit={addDetails}>
    <div class="form-group">
        <label for="type">Region:</label>
        <select bind:value={region} id="region">   
            <option value="otago">Otago</option>
            <option value="canterbury">Canterbury</option>
            <option value="southland">Southland</option>
        </select><br>
    </div>
    
    <div class="form-group">
        <label for="name">Name
            <input type="text" bind:value={name} id="name">
        </label><br>
    </div>
    
    <div class="form-group">
        
    <label for="role">Role
        <input type="text" bind:value={role} id="role">
    </label>
</div>

<div class="form-group">
    <label for="workPhone">Work Phone
        <input type="text" bind:value={workPhone} id="workPhone">
    </label>
</div>

<button type="submit">Save</button>


</form>
</div>


<div class="container">
    <h2>The Police</h2><br>
    <ul>
        {#each regions as newRegion}
        <li>Region: {newRegion}</li>
        {/each}
        {#each names as newName}
        <li>Name:  {newName}</li>
        {/each}
        {#each roles as newRole}
        <li>Role: {newRole}</li>
        {/each}
        
        
    </ul><br>
</div>

-->

<div class="container">
    <h2>Fire and Emergency</h2><br>
    <ul>
        Region: Otago
        <h3>Spencer Williams</h3>
        <p><strong>Role:</strong> Rescue Fire and Safety Officer</p>
        <p><strong>Email:</strong> N/A</p>
        <p><strong>Work Phone:</strong> 03777555</p>
        <p><strong>Cell Phone:</strong> Hidden</p>
        <p><strong>Address:</strong> Hidden</p>
        <p><strong>Radio Channel:</strong> *****</p>
    </ul><br>
    <ul>
        <h3>Sarah Johnson</h3>
        <p><strong>Region:</strong> Auckland</p>
        <p><strong>Role:</strong> Emergency Medical Technician</p>
        <p><strong>Email:</strong> sarah.johnson@example.com</p>
        <p><strong>Work Phone:</strong> 04 11223344</p>
        <p><strong>Cell Phone:</strong> Hidden</p>
        <p><strong>Address:</strong> Hidden</p>
        <p><strong>Radio Channel:</strong> 102.3</p>
    </ul><br>
    <ul>
        <h3>Mark Davis</h3>
        <p><strong>Region:</strong> Wellington</p>
        <p><strong>Role:</strong> Search and Rescue Coordinator</p>
        <p><strong>Email:</strong> mark.davis@example.com</p>
        <p><strong>Work Phone:</strong> 03 9876543</p>
        <p><strong>Cell Phone:</strong> Hidden</p>
        <p><strong>Address:</strong> Hidden</p>
        <p><strong>Radio Channel:</strong> 94.7</p>
    </ul>
</div>

<div class="container">
    <h2>Civil defence</h2><br>
    <ul>
        <h3>Lois Parker</h3>
        <p><strong>Region:</strong> Canterbury</p>
        <p><strong>Role:</strong> Team Leader</p>
        <p><strong>Email:</strong> N/A</p>
        <p><strong>Work Phone:</strong> Hidden</p>
        <p><strong>Cell Phone:</strong> 025 787 989</p>
        <p><strong>Address:</strong> Hidden</p>
        <p><strong>Radio Channel:</strong> *****</p>
    </ul><br>
    <ul>
        <h3>Johnathan Smith</h3>
        <p><strong>Region:</strong> Auckland</p>
        <p><strong>Role:</strong> Project Manager</p>
        <p><strong>Email:</strong> john.smith@example.com</p>
        <p><strong>Work Phone:</strong> 09 123 4567</p>
        <p><strong>Cell Phone:</strong> 021 234 5678</p>
        <p><strong>Address:</strong> 123 Main St, Auckland</p>
        <p><strong>Radio Channel:</strong> 101.1</p>
    </ul><br>
    <ul>
        <h3>Emily Carter</h3>
        <p><strong>Region:</strong> Wellington</p>
        <p><strong>Role:</strong> Operations Coordinator</p>
        <p><strong>Email:</strong> emily.carter@example.com</p>
        <p><strong>Work Phone:</strong> 04 987 6543</p>
        <p><strong>Cell Phone:</strong> 022 345 6789</p>
        <p><strong>Address:</strong> 456 Beach Rd, Wellington</p>
        <p><strong>Radio Channel:</strong> 99.9</p>
    </ul>
</div>

<div class="container">
    <h2>Saint Johns</h2><br>
    <ul>
        <h3>Sally Duns</h3>
        <p><strong>Region:</strong> Southland</p>
        <p><strong>Role:</strong> Nurse</p>
        <p><strong>Email:</strong> Sally.Duns@mailfence.com</p>
        <p><strong>Work Phone:</strong> Hidden</p>
        <p><strong>Cell Phone:</strong> Hidden</p>
        <p><strong>Address:</strong> Hidden</p>
        <p><strong>Radio Channel:</strong> *****</p>
    </ul><br>
    <ul>
        <h3>James Carter</h3>
        <p><strong>Region:</strong> Otago</p>
        <p><strong>Role:</strong> Paramedic</p>
        <p><strong>Email:</strong> james.carter@example.com</p>
        <p><strong>Work Phone:</strong> Hidden</p>
        <p><strong>Cell Phone:</strong> Hidden</p>
        <p><strong>Address:</strong> Hidden</p>
        <p><strong>Radio Channel:</strong> 102.5</p>
    </ul><br>
    <ul>
        <h3>Olivia Green</h3>
        <p><strong>Region:</strong> Waikato</p>
        <p><strong>Role:</strong> Emergency Nurse</p>
        <p><strong>Email:</strong> olivia.green@example.com</p>
        <p><strong>Work Phone:</strong> Hidden</p>
        <p><strong>Cell Phone:</strong> Hidden</p>
        <p><strong>Address:</strong> Hidden</p>
        <p><strong>Radio Channel:</strong> 98.7</p>
    </ul>
</div>
</section>

<style>
   
  .container2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: no-wrap;
    padding: 1rem;
    justify-content: center;
    text-align: center;
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
</style>
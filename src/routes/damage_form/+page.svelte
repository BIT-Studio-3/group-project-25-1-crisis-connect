<script>
  let date = "";
  let streetNumber = "";
  let streetName = "";
  let region = "";
  let townCity = "";
  let damageType = "";
  let description = "";
  let submitted = false;

  function onSubmit() {
    console.log("Submitted!");
    submitted = true;
  }
</script>

<section>
  <div class="container2">
    <h2>Damage report</h2>
    <img
      src="/Images/Damage_report_icon.png"
      alt="Damage report icon"
      class="Damage_report_icon"
    />
  </div>

  <div id="p">
    <p>
      <em
        >Please file any damage reports to us directly so we can aid you in
        future with your insurance claims</em
      >
    </p>
  </div>

  <div class="container">
    <form on:submit|preventDefault={onSubmit}>
      <div class="form-group">
        <label for="date">Date: </label>
        <input type="date" id="date" required bind:value={date} />
      </div>
      <div class="form-group">
        <label for="address">Street name: </label>
        <input type="text" id="streetName" required bind:value={streetName} />
      </div>
      <div class="form-group">
        <label for="address">House number: </label>
        <input type="number"  id="streetNumber" required  bind:value={streetNumber} />
      </div>

      <div class="form-group">
        <label for="region">Region: </label>
        <select bind:value={region} required>
          <option value="Southland">Southland</option>
          <option value="Otago">Otago</option>
          <option value="Canterbury">Canterbury</option>
          <option value="Marlborough">Marlborough</option>
          <option value="Nelson">Nelson</option>
          <option value="Tasman">Tasman</option>
          <option value="West_coast">West coast</option>
        </select>
      </div>

      <div class="form-group">
        <label for="town/city">Town/City: </label>
        <select bind:value={townCity} required>
          <option value="Dunedin">Dunedin</option>
        </select>
      </div>

      <div class="form-group">
        <label for="damageType">Damage type: </label>
        <select required bind:value={damageType}>
          <option value="water damage">Water damage</option>
          <option value="electrical damage">Electrical damage</option>
        </select>
      </div>

      <div class="description">
        <label for="description">Description: </label>
        <input
    
          type="textarea"
          id="description"
          rows="5"
          column="3"
          required
          bind:value={description}
        />
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
        <td>Town/City: </td>
        <td>{townCity}</td>
      </tr>
      <tr>
        <td>Damage: </td>
        <td>{damageType}</td>
      </tr>
      <tr>
        <td>Description: </td>
        <td>{description}</td>
      </tr>
    </table>
  {/if}
</section>

<!--References below-->

<style>
  .Damage_report_icon {
    padding-top: 30px;
    width: 80px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }
  .container2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: no-wrap;
    padding: 1rem;
    justify-content: center;
    text-align: center;
  }
  .container2 h2 {
    font-size: 1.5rem;
    margin: 0;
  }
  #p {
    padding: 0 1em;
    text-align: center;
  }
  @media (min-width: 600px) {
    .container2 {
      justify-content: flex-start;
      text-align: left;
    
    }
    #p {
      text-align: left;
      padding: 1rem 2rem;
    }
    .Damage_report_icon {
      width: 60px;
    }
  }
  input {
    font-size: small;
    background-color: aliceblue;
    color: rgb(0, 0, 0);
    border: 3px solid;
  }
input:invalid:required {
    border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
  select {
    background-color: aliceblue;
    color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    border: 3px solid;
  }

select:invalid:required {
    border: 2px dashed red;
}

select:valid {
  border: 2px solid black;
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
    color: rgb(255, 0, 0);
    font-family: "Trebuchet MS";
    font-size: 50px;
    font-weight: 650;
    text-shadow: 2px 2px 2px #000;
  }
  .button1 {
    background-color: rgb(255, 0, 0);
    size: 5px;
    width: 5rem;
    height: 2.5rem;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
  }
</style>

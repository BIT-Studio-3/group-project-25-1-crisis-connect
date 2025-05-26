<script>
  import Card from "$lib/Cards.svelte";
  let id = "";
  let title = "";
  let postDate = "";
  let location = "";
  let requirements = "";
  let urgency = "";
  let status = "";
  let displayForm = false;
  let displayCard = false;

  let cards = [];

  function showForm() {
    displayForm = true;
  }

  function showCard() {
    displayCard = true;
  }

  function submit() {
    cards = [
      ...cards,
      { id, title, postDate, location, requirements, urgency, status },
    ];
    clearForm();
  }

  function clearForm() {
    id = "";
    title = "";
    postDate = "";
    location = "";
    requirements = "";
    urgency = "";
    status = "";
  }
</script>

<section>
  <h2>Task Allocation</h2>
  <br />
  <h3>Recent Activity:</h3>

  <div class="container2">
    {#each cards as card}
      <Card
        title={card.title}
        id={card.id}
        postDate={card.postDate}
        location={card.location}
        requirements={card.requirements}
        urgency={card.urgency}
        status={card.status}
      />
    {/each}
  </div>

  <div class="container">
    <form on:submit|preventDefault={showForm}>
      <button class="button1" type="submit">
        <img
          src="/Images/Add_icon.png"
          alt="Hazard sign"
          class="hazard_icon"
          width="32"
        />
      </button>
    </form>
    <h4>
      Add New Card
      <h4></h4>
    </h4>
  </div>
  <br />

  {#if displayForm}
    <div class="display_form_container">
      <div class="form_box">
        <form on:submit|preventDefault={submit}>
          <div class="table">
            <label for="title">Title</label>
            <input type="text" id="title" required bind:value={title} />

            <label for="id">Id</label>
            <input type="number" id="id" required bind:value={id} />

            <label for="date">Date</label>
            <input type="date" id="date" required bind:value={postDate} />

            <label for="location">Location</label>
            <input
              type="address"
              id="location"
              required
              bind:value={location}
            />

            <label for="requirements">Requirements (optional)</label>
            <!--Field does not need to be filled to submit-->
            <input type="text" id="requirements" bind:value={requirements} />

            <label for="urgency">Urgency</label>
            <select required bind:value={urgency}>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>

            <label for="status">Status</label>
            <select required bind:value={status}>
              <option value="Not Assigned">Not Assigned</option>
              <option value="Task Allocated">Task Allocated</option>
              <option value="In Progress">In Progress</option>
              <option value="Task Completed">Task Completed</option>
            </select>
          </div>

          <div class="preview">
            <h3>Preview</h3>
            <Card
              {id}
              {title}
              {postDate}
              {location}
              {requirements}
              {urgency}
              {status}
            />
            <div>
              <button class="button2" type="submit">Submit</button>
              <button class="button3" type="submit">Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  {/if}
</section>

<style>
  h2 {
    color: rgb(52, 131, 200);
    font-family: "Trebuchet MS";
    font-size: 50px;
    font-weight: 650;
    text-shadow: 2px 2px 2px #000;
  }
  h3 {
    font-size: 30px;
    font-weight: 400;
    border: #000;
    font-family: Serif, "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial;
  }
  h4 {
    font-size: 20px;
    font-weight: lighter;
    font-style: italic;
  }
  .container {
    border-radius: 1px;
    background-color: rgb(52, 131, 200, 0.5);
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    justify-content: left;
    text-align: center;
  }
  form {
    display: flex;
    gap: 20px;
    border: 2px;
  }
  .display_form_container {
    display: grid;
    grid-template-columns: repeat(1, 350px);
    grid-template-rows: auto;
    gap: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 1em;
    margin-right: 1em;
  }
  .preview {
    display: grid;
    /*max-width: 300;*/
    align-items: center;
    justify-content: flex-end;
  }
  .form_box {
    display: flex;
    /* max-width: 600;*/
  }
  label {
    color: #ffffff;
  }
  input {
    color: #000;
    border-radius: 5px;
    padding: 1;
  }
  .table {
    display: flex;
    flex-direction: column;
    align-items: normal;
    align-content: flex-start;
    justify-content: space-around;
    table-layout: auto;
    width: fit-content;
    height: 300px;
  }
  .button2 {
    background-color: #d49c02;
    size: 5px;
    width: 5rem;
    height: 2.5rem;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
  }

  .button3 {
    background-color: #d42102;
    size: 5px;
    width: 5rem;
    height: 2.5rem;
    color: rgb(255, 255, 255);
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
  }

  .container2 {
    display: grid;
    grid-template-columns: repeat(2, 325px);
    grid-template-rows: auto;
    gap: 1em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 2em;
    margin-right: 1em;
  }

  select {
    background-color: aliceblue;
    color: rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    border: 3px solid;
  }
  input {
    font-size: small;
    background-color: aliceblue;
    color: rgb(0, 0, 0);
    border: 3px solid;
  }
</style>

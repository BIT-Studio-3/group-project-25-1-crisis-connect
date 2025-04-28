<section>
  <h1>Alerts</h1>
  <p>
    This is where users will be able to post alerts. They will be able to choose
     the emergency type, level, and region.
  </p>
  <p>
    Alerts will show up in a feed on another page. This form currently does
     nothing. Once we learn more about logins, this page will be functional.
  </p>

  <form>
    <h2>Post Alert:</h2>
    <div class="form-container">
      <label for="title">Title:</label>
      <input type="text" id="title" name="alert-title" />

      <label for="type">Emergency type:</label>
      <select id="type" name="type" class="select_color">
        <option value="">Please select an emergency type</option>
        <option value="fire">Fire</option>
        <option value="flood">Flooding</option>
        <option value="quake">Earthquake damage</option>
      </select>

      <label for="level">Select alert level:</label>
      <select name="level" id="level" class="select_color">
        <option value="one">1</option>
        <option value="two">2</option>
        <option value="three">3</option>
        <option value="four">4</option>
        <option value="five">5</option>
      </select>

      <label for="region">Choose Region:</label>
      <select name="region" id="region" class="select_color">
        <option value="">Please select a region</option>
        <option value="otago">Otago</option>
        <option value="canterbury">Canterbury</option>
        <option value="southland">Southland</option>
      </select>

      <label for="description">Description:</label>
      <textarea id="description" name="description" class="select_color"></textarea>
    </div>
    <div class="submit-container">
      <button type="submit">Submit</button>
    </div>
  </form>
</section>

<style>
  p {
    margin-bottom: 1.5em;
    font-size: larger;
  }
  h1{
    font-size: 2.5em;
    color: #003d7a;
  }
  h2{
    color: #ffffff;
  }
  .select_color {
    color: #333;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .form-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
  }

  label {
    color: #b1d4e0;
    align-self: center;
    font-size: larger;
    font-weight: bold;
  }

  input, select, textarea {
    padding: 0.8em;
    font-size: 1em;
    border-radius: 4px;
    border: 1px solid #ccc;
    transition: border-color 0.3s ease;
  }

  input:focus, select:focus, textarea:focus {
    border-color: #007bff;
    outline: none;
  }

  textarea {
    height: 150px;
    width: 100%;
    resize: vertical;
  }

  .submit-container {
    display: flex;
    justify-content: center;
  }

  button {
    padding: 0.8em 2em;
    font-size: 1.1em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:active {
    background-color: #003d7a;
  }

  @media (max-width: 1281px) {
    .form-container {
      grid-template-columns: 1fr;
    }

    label {
      text-align: left;
    }

    input, select, textarea {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    section {
      padding: 10px;
    }

    input, select, textarea {
      font-size: 0.9em;
    }

    button {
      width: 100%;
      padding: 1em;
    }
  }
</style>

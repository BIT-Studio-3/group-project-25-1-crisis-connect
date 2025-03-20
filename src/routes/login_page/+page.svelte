<script>

</script>

<!-- Wrapper div to handle centering -->
<div class="container">
    <form>
        <p>
            <label for="name">Name:</label>
            <input type="text" id="name" />
        </p>
        <p>
            <label for="password">Password:</label>
            <input type="password" id="password" />
        </p>
        <p class="button">
            <button type="submit">Login</button>
        </p>      
    </form>
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height:  50em;
    }

    form {
        display: inline-block;
        padding: 2em;
        border: 2px solid #0c2d48;
        border-radius: 2em;
        background:  #2e8bc0;
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
    }

    p + p {
        margin-top: 2em;
    }

    label {
        display: inline-block;
        min-width: 180px;
        text-align: left;
        background-color: #b1d4e0;
    }
    input{
        background-color: #b1d4e0;
    }
    button{
        background-color: #b1d4e0;
    }
    p{
        background-color: #b1d4e0;
    }

    .button {
        text-align: center;
    }

    button {
        margin-left: 1em;
    }
</style>

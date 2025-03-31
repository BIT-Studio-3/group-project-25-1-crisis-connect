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
        flex-direction: column;
        align-items: center;
        gap: 1em;
        margin:auto;
        margin-bottom: 26em;
    }

    form {
        display: inline-block;
        padding: 1em;
        border: 1px solid #0c2d48;
        border-radius: 1em;
        background:  #2e8bc0;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    }

    p + p {
        margin-top: 1em;
    }

    label {
        display: inline-block;
        min-width: 90px;
        text-align: left;
        background-color: #b1d4e0;
        color: #333;
    }
    input{
        background-color: #ffffff;
        color: #333;
    }
    button{
        background-color: #b1d4e0;
        color: #333;
    }
    p{
        background-color: #b1d4e0;
    }

    .button {
        padding-left: 90px;
    }

    button {
        margin-left: 0.5em;
    }


</style>
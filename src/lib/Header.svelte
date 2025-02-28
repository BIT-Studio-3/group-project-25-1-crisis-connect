<script>
    import Navigation from "$lib/Navigation.svelte";
</script>

<header>
    <div class="box">
        <h1><a href="/">Crisis Connect</a></h1>
    </div>
    

    <Navigation />
   
</header>

<style>

    a {
        text-decoration: none;
        background-color: inherit;
        border-right: 1px solid grey;
        align-self: center;
    }

    a:last-child {
        border-right: 0px;
    }

    h1 a {
        border-right: 0px;
    }

    header {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        max-width: 100%;
        position: relative;
        top: 0;
        box-shadow: 0 4px 5px #333;
        padding: 2em;
        margin-bottom: 0.5em;
        box-sizing: border-box;
    }
    .box{
        display: flex;
        justify-content: left;
        flex-direction: row;
        text-align: right;
    }

    /*nav {
        display: flex;
        flex-direction: row;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
    }

    li {
        list-style: none;
        padding: 0.5em;
        font-size: 120%;
        text-align: center;
    }

    nav ul li:hover {
        background-color: lightgrey;
    }

    .active {
        background-color: #689FD4;
        font-weight: bold;
    }

    @media (max-width: 800px) {

        header {
            padding: 1em;
        }

        ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-content: stretch;
        }
        a:last-child {
            border-right: 1px solid grey;
        }
    }

    @media (max-width: 600px) {
        h1 {
            display: none;
        }

        header {
            font-size: 70%;
        }
    }
*/

</style>
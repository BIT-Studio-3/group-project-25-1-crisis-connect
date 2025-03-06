<script>
    import logo from "$lib/routes/contact_page/page.svelte";
</script>

<nav>    
   <ul>
       <li> 
           <!--<img src={} alt="" class="" >-->           
           <a href="/contact_page"> Contact services</a>   
       </li>
   </ul>
</nav>

<style>
   a {
       text-decoration: none;
       color: #d7e427;
       font-weight: bold;
       font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
       font-size:x-large;
   }
   li {
       display: flex;
       align-items: center;
       list-style: none;
       padding: 0.5em 1em;
       margin: 0.5em 1em;
   }
   ul {
       display: flex;
       margin-right: 300px;
       gap: 0px;
       flex-direction: row;     
       background-color: #000000;
   }
   
</style>

<script>
export let id;
export let streetNumber;
export let streetName;
export let city;
export let region;
export let type;
export let description;
</script>

<section>
    <article >
        <header>
          <h1>Property Details</h1>
          <p class="property-id">ID: {id}</p>
        </header>
      
        <section class="address">
          <h2>Address :</h2>
          <p>{streetNumber} {streetName}, {city}, {region}</p>
        </section>
      
        <section class="type">
          <h2>Type :</h2>
          <p>{type}</p>
        </section>
      
        <section class="description">
          <h2>Description</h2>
          <p>{description}</p>
        </section>
</section>

<style>

</style>
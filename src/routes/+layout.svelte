<script>
  import Header from '../lib/Header.svelte';
  import Footer from '../lib/Footer.svelte';
  import '../routes/global.css';
</script>

<div class="layout-container">
  <div class="center">
    <div class="left">
      <Header />
    </div>

    <div class="right">
      <main class="main-content">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</div>

<style>
  .layout-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .center {
    flex: 1;
    display: flex;
    height: 100%;
  }

  .left {
    flex: 0 0 200px;
    border-right: 1px solid #dddddd00;
    padding: 1rem;
    box-sizing: border-box;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .main-content {
    flex: 1;
    overflow-y: auto;
  }
</style>

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
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  
    .content {
      flex: 1;
    }
  </style>
  
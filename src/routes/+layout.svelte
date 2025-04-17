<script>
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';
    import '../routes/global.css';
  </script>
  
  <div class="layout-container">
    <Header />
  
    <main class="content">
      <slot />
    </main>
  
    <Footer />
  </div>
  
  <style>
    .layout-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  
    .content {
      flex: 1;
    }
  </style>
  
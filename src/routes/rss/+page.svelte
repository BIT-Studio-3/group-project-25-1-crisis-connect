<script>
</script>

<section>
  <div id="loading">Loading RSS feed...</div>
  <iframe
    title="rss"
    class="rss"
    src="https://rss.app/embed/v1/wall/LgTbpx1cNjP0QQF4"
    frameborder="0"
    onload="document.getElementById('loading').style.display='none';"
  ></iframe>
</section>

<style>
  #loading {
  text-align: center;
  font-size: 1.2em;
  color: #fff;
  margin-bottom: 10px;
}
.rss {
  width: 100%;
  height: 70vh;
  max-height: 600px;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .rss {
    height: 50vh;
  }
}

</style>

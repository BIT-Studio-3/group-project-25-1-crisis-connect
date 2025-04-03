<script>
    
</script>
<section>
    <div class="slideshow-container">
        <div class="mySlides fade">
          <iframe src="/weather_reports_page" title="weather_report"></iframe>
          <div class="text">Page 1</div>
        </div>
      
        <div class="mySlides fade">
          <iframe src="/seismic_reports_page" title="earthquake"></iframe>
          <div class="text">Page 2</div>
        </div>
      
        <div class="mySlides fade">
          <iframe src="rss/" title="rss"></iframe>
          <div class="text">Page 3</div>
        </div>
    </div>
      
<div class="PageContentContainer">
    <h2>Welcome to Crisis Connect</h2>
    <h5>Haere Mai! Welcome!</h5>
    <p>
        In Aotearoa New Zealand, our landscape is both beautiful and dynamic, with natural hazards ranging from earthquakes
        and floods to wildfires and storms. At Crisis Connect, we aim to empower individuals and communities with the tools 
        and knowledge to navigate the challenges these hazards pose.
    </p>
    <h5>Your Comprehensive Resource for Natural Hazards</h5>
    <p>Whether you're a homeowner, a business owner, or simply a concerned citizen, Crisis Connect is your go-to platform to:</p>
    <li><strong>Explore the Risks:</strong> Learn about the various natural hazards that can impact your region—earthquakes, volcanic eruptions, landslides, tsunamis, and more.</li>
    <li><strong>Understand the Impact:</strong> Delve into past disaster events and see how they have affected properties, infrastructure, and communities across Aotearoa. 
        We provide detailed historical data and real-time updates, helping you understand the risk in your area.</li>
    <li><strong>Mitigate Your Risk:</strong> Access expert advice and strategies for minimizing risks and ensuring that your home, business, or community is prepared. 
        This includes everything from building earthquake-resistant structures to flood-proofing your property.</li>
    <li><strong>Prepare for the Unexpected:</strong> With real-time hazard alerts and preparedness resources, 
        you can stay informed about imminent risks. Whether it’s an approaching storm or an earthquake warning, 
        you’ll have the knowledge and support you need to act quickly.</li>
</div>
</section>
<style>
.slideshow-container {
  position: relative;
  max-width: 100%;
  margin: auto;
}
.mySlides {
  display: none;
}

.text {
  position: absolute;
  bottom: 8px;
  left: 16px;
  color: white;
  font-size: 20px;
  padding: 8px 12px;
}

.fade {
  animation-name: fade;
  animation-duration: 2s;
}
@keyframes fade {
  0% { opacity: 0.4; }
  20% { opacity: 1; }
  60% { opacity: 1; }
  80% { opacity: 0.4; }
  100% { opacity: 0.4; }
}

    h2 {
        color: #333;
        font-size: 2.5em;
        text-align: center;
        font-weight: 700;
        margin-top: 3em;
        margin-bottom: 1em;
    }

    h5 {
        color: #b1d4e0;
        font-size: 1.5em;
        text-align: center;
        margin-bottom: 2em;
        font-weight: 400;
    }

    p {
        color: #b1d4e0;
        text-align: center;
        font-size: 1.1em;
        line-height: 1.8;
        max-width: 800px;
        margin: 0 auto 3em auto;
    }

    .PageContentContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 2em;
        box-sizing: border-box;
        width: 100%;
    }
    @media (max-width: 1024px) {
    h2 {
        font-size: 2em;
        margin-top: 2em;
    }

    h5 {
        font-size: 1.2em;
    }

    p {
        font-size: 1em;
        max-width: 90%;
    }
}

@media (max-width: 768px) {
    .slideshow-container {
        max-width: 100%;
        height: auto;
    }

    iframe {
        width: 100%;
        height: 50vh;
    }

    .PageContentContainer {
        padding: 1.5em;
    }

    h2 {
        font-size: 1.8em;
    }

    h5 {
        font-size: 1.1em;
    }

    p {
        font-size: 1em;
    }
}

@media (max-width: 480px) {
    .text {
        font-size: 16px;
        bottom: 4px;
        left: 8px;
    }

    iframe {
        height: 40vh;
    }

    h2 {
        font-size: 1.5em;
    }

    h5 {
        font-size: 1em;
    }

    p {
        font-size: 0.9em;
    }
}

</style>

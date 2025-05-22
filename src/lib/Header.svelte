
    </ul>

    <h2 class="text-xl font-semibold mt-6 mb-4">Contact</h2>
    <ul class="space-y-2">
      <li><a class="btn  btn-secondary w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-100 rounded" href="/contact_page" on:click={() => isSidebarOpen = false}>Contact Services</a></li>
      <li><a class="btn  btn-secondary w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-100 rounded" href="/task_cards" on:click={() => isSidebarOpen = false}>Task Cards</a></li>
      <!-- <li><a class="btn  btn-secondary w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-100 rounded" href="/developer_contact" >Contact us "the developers"</a></li> -->

    </ul>
  </div>
  {/if}
</div>
  
</section>

<style>
  h2{
    font-size: 30px;
  }
  select{
    color: black;
  }

  section
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#678994;
    padding: 0.5em;
    flex-direction:row-reverse;
    border: 2px solid #2e8bc0  ;
  }@media only screen and (max-width: 400px) {
    section {
      flex-direction:row-reverse;
      justify-content: space-between;
      align-items : center;
      padding: 0.2 em;
    }
  }

  img { /* image float right side */
    width: 80px;
    height: auto;
  
    text-align: center;
  }
  /* Sidebar styles */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: auto;
    min-height: 100%;
    overflow-y: auto;
    width: 20rem; /* w-64 */
    background-color: #74a7d5; /* Darker base color */
    background: linear-gradient(to right, #73a5f7, #5e6c84); /* blue → purple → pink */
    color: rgb(118, 5, 5);
    padding-left: 0rem;
    border-radius: 0px;
    box-shadow: 10px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  /* Sidebar button */
  .sidebar-button {
    transition: transform 0.3s ease-in-out;
  }

  .sidebar-button.open {
    transform: rotate(180deg);
  }
  .container {
        padding-left: 20px;
        padding-right: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        height:  40px;
        color: #2e8bc0;
      
    }
    ul {
      background-color: transparent;
    }
    li {
      border-color: antiquewhite;
    }
    
  </style>

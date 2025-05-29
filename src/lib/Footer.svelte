<footer>
    <p>Copyright © 2024 Otago Polytechnic</p>
    
    <div class="contact-info">
      <p>New Zealand: 0800 762 786</p>
      <p>International: +64 3 477 3014</p>
      <p>Email: <a href="mailto:info@op.ac.nz">info@op.ac.nz</a></p>
    </div>
  
  </footer>
  
  <style>
    footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  color: #fff;
  padding: 20px 15px;
  font-size: 13px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
  margin-top: 0px; /* reduced margin */
  text-align: center;
}

footer .contact-info p {
  margin: 2px 0;
  font-size: 12px;
}

nav {
  margin-top: 10px;
}

nav ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 15px;
  background-color: transparent;
}

nav ul li a {
  font-size: 14px;
  padding: 4px;
}

@media (max-width: 600px) {
  footer {
    font-size: 12px;
    padding: 8px 10px;
    margin-top: 10px;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  nav ul li a {
    padding: 3px 0;
  }
}
  </style>
  
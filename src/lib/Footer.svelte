<footer>
    <p>Copyright © 2024 Otago Polytechnic</p>
    <p>New Zealand 0800 762 786
        International +64 3 477 3014
        Hours: Monday – Friday, 8.00am – 5.00pm
        Email: info@op.ac.nz
    </p>
    <nav>
        <ul>
            <li><a href="https://www.police.govt.nz">Police</a></li>
            <li><a href="https://www.fireandemergency.nz">Fire and Emergency</a></li>
            <li><a href="https://www.metservice.com/?gad_source=1&gclid=Cj0KCQjwmt24BhDPARIsAJFYKk3jeOcUrmoC2Wnv3BTx1W7KwfvELbiGuK8cJaudLvKK4y0C8V_8CaAaAiJwEALw_wcB">Metservice</a></li>
        </ul>
    </nav>
</footer>
 
<style>
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: #fff; 
        padding: 20px;
        font-size: 14px;
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
        margin-top: 40px;
    }

    footer p {
        text-align: center;
        margin: 5px 0;
    }
 
    footer p:last-child {
        font-size: 12px;
    }
 
    footer a {
        color: #ffffff;
        text-decoration: none;
    }
 
    ul{
        background-color: transparent;
    }
    nav {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
    }
 
    nav ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
 
    nav ul li {
        margin: 0 10px;
    }
 
    nav ul li a {
        font-size: 16px;
        padding: 15px;
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
 
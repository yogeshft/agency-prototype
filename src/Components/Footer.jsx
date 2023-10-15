import React from "react";

const Footer = () => {
  return <footer>
    <div>
        <h1>TechyStar</h1>
        <p>@all rights reserved</p>
    </div>
    <div>
        <h5>Follow Us</h5>
        <div>
            <a href="youtube.com" target={"blank"}>Youtube</a>
            <a href="instragram.com" target={"blank"}>Instragram</a>
            <a href="github.com" target={"blank"}>Github</a>
        </div>
        {/* <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i> */}
    </div>
  </footer>;
};

export default Footer;

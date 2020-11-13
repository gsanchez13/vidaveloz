import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="text-black my-auto py-1 px-5" style={{ "backgroundColor": "#C44B3C" }}>
                <div className="d-flex bd-highlight mb-1 px-1 mx-5">
                    <Link to="/about" className="mr-3 no-decoration p-2 bd-highlight" style={{ "color": "black" }}>About Us</Link>
                    <Link to="/contact" className="mr-3 no-decoration p-2 bd-highlight" style={{ "color": "black" }}>Contact Us</Link>
                    <p className="ml-auto p-2 bd-highlight">
                        Follow Us:
          <a href="https://www.instagram.com/shopvidaveloz/" target="_blank" rel="noopener noreferrer"> {" "}
                            <AiFillInstagram style={{ "color": "black" }} size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer"> {" "}
                            <AiFillLinkedin style={{ "color": "black" }} size={20} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer"> {" "}
                            <AiOutlineTwitter style={{ "color": "black" }} size={20} />
                        </a>
                    </p>
                    <br />
                    <br />
                </div>
                <p className="d-flex mx-5 px-1"> © Vida Veloz LLC 2020</p>
            </div>
            </footer>
    )
};
export default Footer;
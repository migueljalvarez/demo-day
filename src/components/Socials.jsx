import React from "react";
import {} from "../assets/styles/style";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
const socials = [
  {
    name: "facebook",
    icon: FaFacebook,
    url: "",
  },
  {
    name: "instagram",
    icon: FaInstagram,
    url: "",
  },
  {
    name: "twitter",
    icon: FaTwitter,
    url: "",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    url: "",
  },
];

const Socials = () => {
  return (
    <div>
      {socials.map((social) => (
        <Link to="/">
          <social.icon size="2em" color="white" className="mx-2"/>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

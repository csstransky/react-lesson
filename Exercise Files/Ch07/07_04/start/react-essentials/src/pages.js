import React from "react";
import {Link, Outlet, useLocation} from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>[Company Website]</h1>
      <nav>
          <li><Link to="about">About</Link></li>
          <li><Link to="events">Events</Link></li>
          <li><Link to="contact">Contact</Link></li>
      </nav>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
        <Outlet />
        <li><Link to="services">Services</Link></li>
        <li><Link to="history">Company History</Link></li>
        <li><Link to="location">Location</Link></li>
    </div>
  );
}

export function Services() {
    return (
        <div>
            <h2>Our Services</h2>
        </div>
    )
}

export function CompanyHistory() {
    return (
        <div>
            <h2>Our Company History</h2>
        </div>
    );
}

export function Location() {
    return (
        <div>
            <h2>Our Location</h2>
        </div>
    )
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
}

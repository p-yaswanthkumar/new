
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './aboutus.css';
import aboutushero from '../assets/aboutshero.mp4';
import exp1 from '../assets/exp1.jpg';
import exp2 from '../assets/exp2.jpg';
import exp3 from '../assets/exp3.jpg';
import exp4 from '../assets/exp4.jpg';
import exp5 from '../assets/exp5.jpg';
import exp6 from '../assets/exp6.jpg';

import mission from '../assets/mission.webp';
import aboutlast from '../assets/aboutlast.jpg';


const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: false, mirror: true, offset: 100 });
  }, []);
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="hero-section h-screen" style={{position: 'relative', overflow: 'hidden'}} data-aos="fade-in" data-aos-duration="1500">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="aboutus-hero-bg-video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src={aboutushero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }} />
        <div className="hero-content" style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          textAlign: 'center',
        }}>
          <h1 className="aboutus-hero-title">Empowering Your Financial Future</h1>
          <p className="aboutus-hero-subtitle" style={{maxWidth: 900, margin: '0 auto', fontSize: '1.25rem'}}>
            Unlock your path to prosperity with our innovative financial solutions, expert guidance, and personalized support. Whether you're an individual, entrepreneur, or enterprise, we help you achieve your goals with clarity, confidence, and trust. Join thousands who have transformed their financial journey with us.
          </p>
        </div>
      </section>

      {/* Our Company Story */}
      

      {/* Timeline */}
      <section className="timeline-section w-full bg-[#FDF9F4] py-16" data-aos="fade-up" data-aos-duration="1200">
        <div className="container mx-auto px-4">
          <h2>Our Journey Through the Years</h2>
          <div className="timeline">
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>Company Founded</h3>
                <p>Started with a team of 5 passionate individuals and a vision to revolutionize financial services.</p>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <div className="timeline-year">2019</div>
              <div className="timeline-content">
                <h3>First 100 Clients</h3>
                <p>Reached our first milestone of serving 100 satisfied clients with personalized financial solutions.</p>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="300">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Digital Transformation</h3>
                <p>Launched our comprehensive digital platform, making financial services more accessible than ever.</p>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="400">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Series A Funding</h3>
                <p>Secured $10M in Series A funding to expand our services and reach more clients globally.</p>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="500">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>International Expansion</h3>
                <p>Expanded operations to 5 countries, serving over 10,000 clients worldwide.</p>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="600">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>AI Integration</h3>
                <p>Integrated advanced AI technology to provide smarter, more personalized financial insights.</p>
              </div>
            </div>
            <div className="timeline-item" data-aos="fade-up" data-aos-delay="700">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>50,000+ Clients</h3>
                <p>Reached the milestone of serving over 50,000 clients with our innovative financial solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-vision-section" data-aos="fade-up" data-aos-duration="1200">
        <div className="container mission-vision-flex">
          <div className="mv-card mv-vision" data-aos="fade-right" data-aos-delay="200">
            <div className="mv-icon-bg">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#ff8800"/>
                <path d="M24 16C18 16 13.09 19.64 11 24C13.09 28.36 18 32 24 32C30 32 34.91 28.36 37 24C34.91 19.64 30 16 24 16ZM24 29C21.24 29 19 26.76 19 24C19 21.24 21.24 19 24 19C26.76 19 29 21.24 29 24C29 26.76 26.76 29 24 29ZM24 21C22.34 21 21 22.34 21 24C21 25.66 22.34 27 24 27C25.66 27 27 25.66 27 24C27 22.34 25.66 21 24 21Z" fill="#fff"/>
              </svg>
            </div>
            <h2 className="mv-title">Vision</h2>
            <p className="mv-desc">
              To become the leading financial solutions provider by emphasizing innovation and trust, establishing ourselves as a globally recognized company through the highest standard of services and solutions.
            </p>
          </div>
          <div className="mv-image-center" data-aos="zoom-in" data-aos-delay="400">
            <img src={mission} alt="Team" className="mv-center-img" />
          </div>
          <div className="mv-card mv-mission" data-aos="fade-left" data-aos-delay="600">
            <div className="mv-icon-bg">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" fill="#ff8800"/>
                <path d="M32 18L22 28L16 22" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="mv-title">Mission</h2>
            <p className="mv-desc">
              To provide customer-centric, innovative, and result-oriented financial solutions that empower our clients worldwide, focusing on excellence, transparency, and long-term value.
            </p>
          </div>
        </div>
      </section>
      <section className="awards-section" data-aos="fade-up" data-aos-duration="1200">
        <div className="container">
          <div className="awards-flex">
            <div className="awards-left" data-aos="fade-right" data-aos-delay="200">
              <h2 className="awards-heading ">Awards & Certifications</h2>
              <ul className="awards-list">
                <li>
                  <strong>Fintech Innovation Award 2023:</strong> Recognized for outstanding innovation in financial technology solutions
                </li>
                <li>
                  <strong>Best Customer Service 2023:</strong> Awarded by Financial Services Excellence Council for superior client satisfaction
                </li>
                <li>
                  <strong>ISO 27001 Certified:</strong> International standard for information security management systems
                </li>
                <li>
                  <strong>SOC 2 Type II Compliant:</strong> Demonstrates our commitment to security, availability, and confidentiality
                </li>
                <li>
                  <strong>Sustainable Finance Leader:</strong> Recognized for promoting sustainable and responsible financial practices
                </li>
                <li>
                  <strong>Fast Company Most Innovative 2024:</strong> Listed among the most innovative companies in financial services
                </li>
              </ul>
            </div>
            <div className="awards-right" data-aos="fade-left" data-aos-delay="400">
              <img src={aboutlast} alt="Awards" className="awards-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="team-section w-full bg-[#FDF9F4] py-16" data-aos="fade-up" data-aos-duration="1200">
        <div className="container mx-auto px-4">
          <h2>Meet Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member team-hover-animate" data-aos="fade-up" data-aos-delay="100">
              <div className="team-hover-bg" />
              <img src={exp1} alt="CEO" className="team-photo orange-ring" />
              <h3>Priya Sharma</h3>
              <p className="team-title">Chief Executive Officer</p>
              <p className="team-bio">
                Priya brings 18 years of leadership in digital finance, driving our mission to empower clients with innovative solutions. She is passionate about financial inclusion and has led multiple award-winning fintech initiatives.
              </p>
            </div>
            <div className="team-member team-hover-animate" data-aos="fade-up" data-aos-delay="200">
              <div className="team-hover-bg" />
              <img src={exp2} alt="CTO" className="team-photo orange-ring" />
              <h3>Arjun Patel</h3>
              <p className="team-title">Chief Technology Officer</p>
              <p className="team-bio">
                Arjun is a technology strategist with expertise in AI and cloud platforms. He leads our product innovation, ensuring secure and scalable solutions for all clients.
              </p>
            </div>
            <div className="team-member team-hover-animate" data-aos="fade-up" data-aos-delay="300">
              <div className="team-hover-bg" />
              <img src={exp3} alt="CFO" className="team-photo orange-ring" />
              <h3>Meera Desai</h3>
              <p className="team-title">Chief Financial Officer</p>
              <p className="team-bio">
                Meera oversees our financial strategy and growth, with a focus on transparency and value creation. She has a track record of guiding startups to sustainable success.
              </p>
            </div>
            <div className="team-member team-hover-animate" data-aos="fade-up" data-aos-delay="400">
              <div className="team-hover-bg" />
              <img src={exp4} alt="COO" className="team-photo orange-ring" />
              <h3>Rohan Gupta</h3>
              <p className="team-title">Chief Operating Officer</p>
              <p className="team-bio">
                Rohan ensures operational excellence and client satisfaction. With 14 years in financial operations, he is dedicated to delivering seamless experiences.
              </p>
            </div>
            <div className="team-member team-hover-animate" data-aos="fade-up" data-aos-delay="500">
              <div className="team-hover-bg" />
              <img src={exp5} alt="CMO" className="team-photo orange-ring" />
              <h3>Ananya Rao</h3>
              <p className="team-title">Chief Marketing Officer</p>
              <p className="team-bio">
                Ananya leads our brand and outreach, building trust and engagement with clients. She specializes in digital marketing and financial education campaigns.
              </p>
            </div>
            <div className="team-member team-hover-animate" data-aos="fade-up" data-aos-delay="600">
              <div className="team-hover-bg" />
              <img src={exp6} alt="Head of Client Success" className="team-photo orange-ring" />
              <h3>Vikram Singh</h3>
              <p className="team-title">Head of Client Success</p>
              <p className="team-bio">
                Vikram champions our client-first approach, ensuring every client receives personalized support and guidance throughout their financial journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      

      {/* CSR / Community Impact */}
      <section className="csr-section" data-aos="fade-up" data-aos-duration="1200">
        <div className="container">
          <h2 className="csr-heading pt-10">Community Impact & Social Responsibility</h2>
          <div className="csr-cards-grid">
            <div className="csr-item" data-aos="fade-up" data-aos-delay="100">
              <h3>Financial Literacy Program</h3>
              <p>
                We've educated over 25,000 individuals through our free financial literacy workshops 
                and online resources, helping people make informed financial decisions.
              </p>
              <div className="csr-stats">
                <span>25,000+ People Educated</span>
              </div>
            </div>
            <div className="csr-item" data-aos="fade-up" data-aos-delay="200">
              <h3>Environmental Suability</h3>
              <p>
                Committed to carbon neutrality by 2025. We've reduced our carbon footprint by 40% 
                through digital-first operations and renewable energy initiatives.
              </p>
              <div className="csr-stats">
                <span>40% Carbon Reduction</span>
              </div>
            </div>
            <div className="csr-item" data-aos="fade-up" data-aos-delay="300">
              <h3>Community Investment</h3>
              <p>
                We donate 1% of our annual profits to local charities and have provided $500K+ 
                in microloans to small businesses in underserved communities.
              </p>
              <div className="csr-stats">
                <span>$500K+ in Microloans</span>
              </div>
            </div>
            <div className="csr-item" data-aos="fade-up" data-aos-delay="400">
              <h3>Diversity & Inclusion</h3>
              <p>
                Our workforce is 45% women and 60% from diverse backgrounds. We're committed to 
                creating an inclusive workplace where everyone can thrive.
              </p>
              <div className="csr-stats">
                <span>60% Diverse Workforce</span>
              </div>
            </div>
            <div className="csr-item" data-aos="fade-up" data-aos-delay="500">
              <h3>Employee Volunteerism</h3>
              <p>
                Our employees have volunteered over 10,000 hours in community service, supporting education, health, and local development projects.
              </p>
              <div className="csr-stats">
                <span>10,000+ Volunteer Hours</span>
              </div>
            </div>
            <div className="csr-item" data-aos="fade-up" data-aos-delay="600">
              <h3>Tech for Good</h3>
              <p>
                Leveraging technology to bridge financial gaps, we've launched digital tools for underserved populations to access essential financial services.
              </p>
              <div className="csr-stats">
                <span>5+ Digital Initiatives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
    </div>
  );
};

export default AboutUs;
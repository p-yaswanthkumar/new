import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home1 from './pages/Home1';
import Home2Hero from './pages/Home2';
import AboutHero from './pages/aboutus';
import ServiceHero from './pages/services';
import WelcomePage from './pages/welcome';
import AIHero from './pages/Artificial-Intelligence&Machine-Learning';
import WebDevServicePage from './pages/web-development';  
import DataSciencePage from './pages/DataScience&Analytics';
import CybersecurityPage from './pages/Cybersecurity&Ethical-Hacking';
import BlockchainPage from './pages/Blockchain&Cryptocurrency';
import CloudComputingPage from './pages/CloudComputing&DevOps';
import BlogHero from './pages/blog';
import BlogDetail from './pages/BlogDetail';
import ContactHero from './pages/ContactUs';
import UserDetailsSection from './pages/admindashboard'; //
import UserDashboard from './pages/userdashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Redirect root to /welcome */}
          <Route path="/" element={<WelcomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          {/* Admin Dashboard route without Header/Footer */}
          <Route path="/admindashboard" element={<UserDetailsSection />} />
          {/* All other routes with Header/Footer */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="home1" element={<Home1 />} />
                  <Route path="home2" element={<Home2Hero />} />
                  <Route path="aboutus" element={<AboutHero />} />
                  <Route path="services" element={<ServiceHero />} />
                  <Route path="Artificial-Intelligence&Machine-Learning" element={<AIHero />} />
                  <Route path="web-development" element={<WebDevServicePage />} />
                  <Route path="DataScience&Analytics" element={<DataSciencePage />} />
                  <Route path="blockchaincryptocurrency" element={<BlockchainPage />} />
                  <Route path="Cybersecurity&Ethical-Hacking" element={<CybersecurityPage />} />
                  <Route path="CloudComputing&DevOps" element={<CloudComputingPage />} />
                  <Route path="blog" element={<BlogHero />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="contactus" element={<ContactHero />} />
                  <Route path="/userdashboard" element={<UserDashboard />} />
                  {/* Add more routes as needed */}
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
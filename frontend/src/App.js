import React, { useEffect, useState } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

// const ProtectedRoute = ({ children, allowedRoles = [] }) => {
//   const [loading, setLoading] = useState(true);
//   const [isAllowed, setIsAllowed] = useState(false);

//   useEffect(() => {
//     const checkAccess = () => {
//       try {
//         const token = localStorage.getItem('token');
//         const userRoles = JSON.parse(localStorage.getItem('userRoles')) || [];

//         if (!token) {
//           throw new Error('Token missing');
//         }

//         // Decode the JWT (naively without verifying signature)
//         const payloadBase64 = token.split('.')[1];
//         const decodedPayload = JSON.parse(atob(payloadBase64));

//         // Check if token is expired
//         const currentTime = Math.floor(Date.now() / 1000);
//         if (decodedPayload.exp && decodedPayload.exp < currentTime) {
//           throw new Error('Token expired');
//         }

//         // Check if roles are allowed
//         const hasAccess =
//           allowedRoles.length === 0 ||
//           userRoles.some(role => allowedRoles.includes(role));

//         if (!hasAccess) {
//           throw new Error('Unauthorized role');
//         }

//         setIsAllowed(true);
//       } catch (error) {
//         console.warn('Access check failed:', error.message);
//         localStorage.removeItem('token');
//         localStorage.removeItem('userRoles');
//         localStorage.removeItem('userId');
//         setIsAllowed(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAccess();
//   }, [allowedRoles]);

//   if (loading) return null;

//   if (isAllowed === null) {
//     return <Navigate to="/login" replace />;
//   }

//   if (!isAllowed) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// };


function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Topbar />
        <Navbar />
        <ScrollToTop />
        <main className="app-main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/submit-form/:id" element={<ProtectedRoute allowedRoles={['admin', 'user']}><SubmitForm /></ProtectedRoute>} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
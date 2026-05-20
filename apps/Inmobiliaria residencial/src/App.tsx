// Importamos tu nueva página
import Welcome from './pages/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SobreNosotros } from './pages/SobreNosotros';
import { Contacto } from './pages/Contacto';
import { Error404 } from './pages/Error404';
import  PoliticasdePrivacidad  from './pages/politicas/PoliticasdePrivacidad';
import Terminos from './pages/politicas/Terminos';
import Cookies from './pages/politicas/Cookies';
import ScrollToTop from './utils/ScrollTop';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/politica-de-privacidad" element={<PoliticasdePrivacidad/>} />
        <Route path="/terminos-y-condiciones" element={<Terminos />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
































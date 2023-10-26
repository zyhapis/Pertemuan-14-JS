import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavComponent from './components/navbar/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <NavComponent />
            <About />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
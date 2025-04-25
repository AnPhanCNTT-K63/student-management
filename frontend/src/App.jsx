import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Navigation from "./navigation/Navigation";
import { UserProvider } from "./UserContext";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <UserProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Navigation />
            </main>
            <Footer />
          </div>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;

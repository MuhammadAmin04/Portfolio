// src/App.js
import React from "react";
// import "./App.css";
import { DarkModeProvider } from "./components/DarkmodeContext";
import DarkModeToggle from "./components/DarkmodeToggle";
import MainPage from "./components/Layout/Home";
import Header from "./components/Header";
import About from "./components/Layout/About"
import Work from "./components/Layout/Work";
import Testominals from "./components/Layout/Testominals";
import Contact from "./components/Layout/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<DarkModeProvider>
			<div className="App">
				<Header/>
				<MainPage />
				<About/>
				<Work/>
				<Testominals/>
				<Contact/>
				<Footer/>
			</div>
		</DarkModeProvider>
	);
}

export default App;



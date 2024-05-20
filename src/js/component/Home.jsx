import React from "react";

//include images into your bundle
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ListCard from "./ListCard.jsx";
import '/workspaces/exercise-landing-page-with-reactDouglasM/src/styles/index.css'

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<ListCard />
			<Footer />
		</div>
	);
};

export default Home;

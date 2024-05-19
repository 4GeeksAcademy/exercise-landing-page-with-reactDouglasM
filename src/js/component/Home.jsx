import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar.jsx";
import Header from "./Header.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center">
			<div>
				<NavBar />
				<div className="mx-5">
					<Header />
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="d-flex justify-content-center">
								<Card />
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="d-flex justify-content-center">
								<Card />
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="d-flex justify-content-center">
								<Card />
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-12">
							<div className="d-flex justify-content-center">
								<Card />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;

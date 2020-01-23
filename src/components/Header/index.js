import React from "react";
import LocationIcon from "mdi-react/LocationIcon";
import Button from "../Button";
import Input from "../Input";
import "./styles.scss";
export default function Header(props) {
	const { text, handleInput, count, handleButton } = props;
	const handleKeyPress = event => {
		if (event.key === "Enter") {
			handleButton();
		}
	};
	
	return (
		<section className="hero-banner">
			<div className="container">
				<div className="row flex-column">
					<div className="banner-headline">
						<h2>
							<strong>
								Book homes, hotels, and more!
							</strong>
							<br />
						</h2>
					</div>
				</div>
				{/* <!-- Search Bar --> */}
				<div className="row">
					<div className="hero-banner-search-form mt-65">
						<div className="hero-search-field ">
							<div className="input-with-icon">
								<Input
									id="search-input"
									type="text"
									placeholder="Where do you want to go?"
									value={text}
									onChange={handleInput}
									onKeyPress={handleKeyPress}
								/>
								<LocationIcon color="#00f" className="" />
							</div>
						</div>

						{/* <!-- Search Button --> */}
						<div className="hero-search-button" onClick={handleButton}>
							<Button>Search</Button>
						</div>
					</div>
				</div>

				{/* <!-- Number of Accomodation found --> */}
				<div className="row">
					<ul className="hero-stats">
						<li>
							<strong className="counter">{count}</strong>
							<span>Total Accommodations Found</span>
						</li>
					</ul>
				</div>
			</div>
			<div
				className="background-image-container"
				style={{
					backgroundImage: `url("https://static.holidu.com/cms/7007/l/799.jpg")`
				}}>
			</div>
		</section>
	);	
}

import React from "react";
import LocationIcon from "mdi-react/LocationIcon";
import "./styles.scss";
export default function Details({
	title,
	location,
	price,
	currency,
	url
}) {
	return (
		<a className="card-listing-details" href={url}>
			{(
				<React.Fragment>
					<div className="card-listing-description">
						<h3 className="card-listing-title">{title}</h3>
						<ul className="card-icons">
							<li>
								<LocationIcon size={18} />
								<i className="icon-material-outline-location-on"></i> {location}
							</li>
						</ul>
					</div>
					<div className="card-offers">
						<span>from</span>
						<strong>{`${currency} ${price}`}</strong>
						<span>per night</span>
					</div>
				</React.Fragment>
			)}
		</a>
	);
}

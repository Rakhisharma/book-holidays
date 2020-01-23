import React from "react";

import Card from "../Card";
export default function List({ items, loading }) {
	if (items.length === 0 && !loading) {
		return (
			<div className={"card-container"}>
				<div className="flex flex-column flex-center">
					<h1>Oh No!</h1>
					<h1>We could't find any Accommodations at this location </h1>
				</div>
			</div>
		);
	}
	return (
		<div className={"card-container"}>
			{loading
				? [...Array(3)].map((item, i) => (
						<Card loading={loading} buttonText={"TO OFFER"} key={i} {...item} />
				  ))
				: items.map((item, i) => (
						<Card
							photos={item.photos}
							buttonText={"TO OFFER"}
							key={i}
							{...item}
						/>
				  ))}
		</div>
	);
}

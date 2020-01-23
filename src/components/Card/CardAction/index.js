import React from "react";

import "./styles.scss";
import Button from "../../Button";

export default function ProductCardDescription({ url, buttonText }) {
	return (
		<div className="card-listing-bid">
			<div className="card-listing-bid-inner">
				<Button url={url} className={"button"}>
					{buttonText}
				</Button>
			</div>
		</div>
	);
}

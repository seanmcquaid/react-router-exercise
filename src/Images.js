import React from "react";

function Images(props){
	// Map through images
	const imagesArr = props.images.map((imageUrl, index)=>{
		return (<img className="galleryImage" key={index} src={imageUrl}/>)
	}) 
	return(
		<div>
			<h1>Images</h1>
			{imagesArr}
		</div>
	)
}

export default Images;
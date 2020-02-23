import React from "react";

const imagen = props => {
  // This is one of the props from the image
  const { largeImageURL, likes, previewURL, tags, views } = props.imagen;

  function numbersWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{numbersWithCommas(likes)} Likes </p>
          <p className="card-text">{numbersWithCommas(views)} Views </p>

          <a
            href={largeImageURL}
            target="_blank"
            className="btn btn-primary 
                   btn-block"
          >
            {" "}
            Ver imagen{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default imagen;

import React from 'react';

const Home = ({ images }) => {
    return (
        <>
            <div className="container-fluid" id="top">
                <div className="row">
                    {images.map((image) => {
                        return (
                            <div key={image.id} className="col-12 col-sm-6 col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <img
                                            src={image.src.large}
                                            className="card-img-top custom-img"
                                            alt="Image"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {images.length !== 0 && (
                    <div className="text-center">
                        <a href="#top" className="btn btn-dark my-5">
                            Back to top
                        </a>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;

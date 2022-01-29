import React from 'react';

const PageNotFound = ({history}) => {

    const loginHandler = () => {
        history.push('/')
    }
    return (
        <>
            <section class="wrapper image-wrapper bg-auto no-overlay bg-image text-center py-14 py-md-16 bg-map" data-image-src="./assets/img/map.png">
                <div class="container py-0 py-md-18">
                    <div class="row">
                        <div class="col-lg-6 col-xl-5 mx-auto">
                            <h2 class="display-4 mb-3 text-center">UNAUTHORIZE</h2>
                            <p class="lead mb-5 px-md-16 px-lg-3">Please login as an admin to access this site.</p>
                            <button class="btn btn-primary rounded-pill" onClick={() => loginHandler}>Join Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageNotFound;

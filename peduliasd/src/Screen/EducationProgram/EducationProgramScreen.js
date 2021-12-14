import React from 'react'

const EducationProgramScreen = () => {
    return (
        <>
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-17">
                    <div className="row mb-8 text-center">
                        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                            <h2 className="fs-16 text-uppercase text-primary mb-3">
                                Program Edukasi Peduli ASD
                            </h2>
                            <h3 className="display-4">
                                Isi descripsi terserah .. Check out some of our awesome projects with creative ideas and
                                great design.
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-view projects-masonry">
                        <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                            <div className="project item col-md-6 col-xl-4 product">
                                <figure className="lift rounded mb-6">
                                    <a href="./single-project.html">
                                        {' '}
                                        <img src="/uploads/1.png" alt="" />
                                    </a>
                                </figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category mb-2 text-yellow">
                                            Coffee
                                        </div>
                                        <h2 className="post-title h3">Cras Fermentum Sem</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="project item col-md-6 col-xl-4 workshop">
                                <figure className="lift rounded mb-6">
                                    <a href="./single-project2.html">
                                        {' '}
                                        <img src="./assets/img/photos/pd2.jpg" alt="" />
                                    </a>
                                </figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category mb-2 text-red">
                                            Stationary
                                        </div>
                                        <h2 className="post-title h3">Mollis Ipsum Mattis</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="project item col-md-6 col-xl-4 still-life">
                                <figure className="lift rounded mb-6">
                                    <a href="./single-project3.html">
                                        {' '}
                                        <img src="./assets/img/photos/pd3.jpg" alt="" />
                                    </a>
                                </figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category mb-2 text-orange">
                                            Branding
                                        </div>
                                        <h2 className="post-title h3">Ipsum Ultricies Cursus</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="project item col-md-6 col-xl-4 product">
                                <figure className="lift rounded mb-6">
                                    <a href="./single-project2.html">
                                        {' '}
                                        <img src="./assets/img/photos/pd4.jpg" alt="" />
                                    </a>
                                </figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category mb-2 text-purple">
                                            Product
                                        </div>
                                        <h2 className="post-title h3">
                                            Inceptos Euismod Egestas
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="project item col-md-6 col-xl-4 product">
                                <figure className="lift rounded mb-6">
                                    <a href="./single-project.html">
                                        {' '}
                                        <img src="./assets/img/photos/pd5.jpg" alt="" />
                                    </a>
                                </figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category mb-2 text-leaf">Print</div>
                                        <h2 className="post-title h3">
                                            Sollicitudin Ornare Porta
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="project item col-md-6 col-xl-4 workshop">
                                <figure className="lift rounded mb-6">
                                    <a href="./single-project3.html">
                                        {' '}
                                        <img src="./assets/img/photos/pd6.jpg" alt="" />
                                    </a>
                                </figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category mb-2 text-aqua">
                                            Workshop
                                        </div>
                                        <h2 className="post-title h3">Ipsum Mollis Vulputate</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )
}

export default EducationProgramScreen

import React from 'react'

const BelanjaScreen = () => {
    return (
        <>
        <body>
        <div class="content-wrapper">
            <section className="wrapper bg-light">
                <div className="container py-14 py-md-17">
                    <div className="row mb-8 text-center">
                        <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
                            <h2 className="fs-16 text-uppercase text-primary mb-3">
                                Belanja belum didevelop
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wrapper bg-light">
                <div className="container py-14 py-md-16">
                    <div className="grid grid-view projects-masonry">
                        <div className="isotope-filter filter mb-10">
                            <p>Filter:</p>
                            <ul>
                                <li><a className="filter-item active" data-filter="*">All</a></li>
                                <li><a className="filter-item" data-filter=".concept">Concept</a></li>
                                <li><a className="filter-item" data-filter=".product">Product</a></li>
                                <li><a className="filter-item" data-filter=".workshop">Workshop</a></li>
                                <li><a className="filter-item" data-filter=".still-life">Still Life</a></li>
                            </ul>
                        </div>
                        <div className="row gx-md-10 gy-10 gy-md-13 isotope">
                            <div className="project item col-md-6 product">
                                <figure className="lift rounded mb-6"><a href="./single-project.html"> <img src="./assets/img/photos/cs16.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-purple">Cosmetic</div>
                                        <h3 className="post-title">Cras Fermentum Sem</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="project item col-md-6 workshop">
                                <figure className="lift rounded mb-6"><a href="./single-project2.html"> <img src="./assets/img/photos/cs17.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-leaf">Coffee</div>
                                        <h3 className="post-title">Mollis Ipsum Mattis</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="project item col-md-6 still-life">
                                <figure className="lift rounded mb-6"><a href="./single-project3.html"> <img src="./assets/img/photos/cs18.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-violet">Still Life</div>
                                        <h3 className="post-title">Ipsum Ultricies Cursus</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="project item col-md-6 product">
                                <figure className="lift rounded mb-6"><a href="./single-project.html"> <img src="./assets/img/photos/cs19.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-yellow">Product</div>
                                        <h3 className="post-title">Sollicitudin Ornare Porta</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="project item col-md-6 product">
                                <figure className="lift rounded mb-6"><a href="./single-project2.html"> <img src="./assets/img/photos/cs20.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-orange">Product</div>
                                        <h3 className="post-title">Inceptos Euismod Egestas</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="project item col-md-6 workshop">
                                <figure className="lift rounded mb-6"><a href="./single-project3.html"> <img src="./assets/img/photos/cs21.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-green">Workshop</div>
                                        <h3 className="post-title">Ipsum Mollis Vulputate</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="project item col-md-6 concept">
                                <figure className="lift rounded mb-6"><a href="./single-project.html"> <img src="./assets/img/photos/cs22.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-red">Concept</div>
                                        <h3 className="post-title">Porta Ornare Cras</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="project item col-md-6 concept still-life">
                                <figure className="lift rounded mb-6"><a href="./single-project2.html"> <img src="./assets/img/photos/cs23.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-aqua">Concept</div>
                                        <h3 className="post-title">Vulputate Sollicitudin</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="project item col-md-6 product">
                                <figure className="lift rounded mb-6"><a href="./single-project3.html"> <img src="./assets/img/photos/cs24.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-purple">Product</div>
                                        <h3 className="post-title">Magna Tristique Inceptos</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="project item col-md-6 product">
                                <figure className="lift rounded mb-6"><a href="./single-project.html"> <img src="./assets/img/photos/cs25.jpg" alt="" /></a></figure>
                                <div className="project-details d-flex justify-content-center flex-column">
                                    <div className="post-header">
                                        <div className="post-category text-line mb-3 text-pink">Product</div>
                                        <h3 className="post-title">Ridiculus Elit</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </body>


        </>

    )
}

export default BelanjaScreen

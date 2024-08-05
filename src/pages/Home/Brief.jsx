import React from "react";

const Brief = () => {
    return (
        <section className="brief pad sb-flex gp-50">
            <img src="./images/hotdog.png" alt="Hot Dog" width="500px" />
            <div className="text wrap-flex gp-20 txt-lft">
                <h1>We provide healthy food for your family.</h1>
                <p>
                    Our story began with a vision to create a unique dining
                    experience that merges fine dining, exceptional service, and
                    a vibrant ambiance. Rooted in city's rich culinary culture,
                    we aim to honor our local roots while infusing a global
                    palate.
                </p>
                <p>
                    At place, we believe that dining is not just about food, but
                    also about the overall experience. Our staff, renowned for
                    their warmth and dedication, strives to make every visit an
                    unforgettable event.
                </p>
            </div>
        </section>
    );
};

export default Brief;

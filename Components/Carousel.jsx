    import React from "react";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    import Nnews from '../Components/Nnews'
import Items from "./Items";

    function MultipleItems() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
      return (
        <Slider {...settings}>
          
            {/* <Nnews image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p6-pfgmvuhbo2a7mau0c9jp4epi2i5a5hti108tv7sgu8.jpg" 
            txt="New Monster Hunter World Quest Adds Helmet " 
            date="20 Sept 2025"
            plat="Xbox"/>

        
          <div>
            <Nnews image="https://xtratheme.com/elementor/game/wp-content/uploads/sites/84/elementor/thumbs/p6-pfgmvuhbo2a7mau0c9jp4epi2i5a5hti108tv7sgu8.jpg" 
            txt="New Monster Hunter World Quest Adds Helmet " 
            date="20 Sept 2025"
            plat="Xbox"/>
          </div> */}
          <div>
                <Items/>
          </div>
        </Slider>
      );
    }
    export default MultipleItems;

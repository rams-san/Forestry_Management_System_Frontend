import React from 'react'
import './css/Home.css'
 export default class Home extends React.Component{
  render(){
    return (
        <div>
         <div class="heading" id="heading">Welcome to MyForestry</div>
         <h1>Gallery</h1>
            {/* <!--Carousel Wrapper--> */}
<div id="carousel-with-lb" class="carousel slide carousel-multi-item" data-ride="carousel">

  {/* <!--Controls--> */}
  <div class="controls-top">
   
    <a class="btn-floating btn-light" href="#carousel-with-lb" data-slide="prev"><i
        class="fas fa-chevron-left"></i></a>
    <a class="btn-floating btn-light" href="#carousel-with-lb" data-slide="next"><i
        class="fas fa-chevron-right"></i></a>
  </div>
  {/* <!--/.Controls-->

  <!--Indicators--> */}
  <ol class="carousel-indicators">
    <li data-target="#carousel-with-lb" data-slide-to="0" class="active secondary-color"></li>
    <li data-target="#carousel-with-lb" data-slide-to="1" class="secondary-color"></li>
    <li data-target="#carousel-with-lb" data-slide-to="2" class="secondary-color"></li>
  </ol>
  {/* <!--/.Indicators-->

  <!--Slides and lightbox--> */}

  <div class="carousel-inner mdb-lightbox" role="listbox">
    <div id="mdb-lightbox-ui"></div>
    {/* <!--First slide--> */}
    <div class=" carousel-item active text-center">

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://images.wallpaperscraft.com/image/firewood_wood_bark_114108_3840x2400.jpg"
          data-size="1600x1067">
          <img src="https://images.wallpaperscraft.com/image/firewood_wood_bark_114108_3840x2400.jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://images.wallpaperscraft.com/image/bamboo_plant_inscriptions_107570_3840x2400.jpg"
          data-size="1600x1067">
          <img src="https://images.wallpaperscraft.com/image/bamboo_plant_inscriptions_107570_3840x2400.jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://images.wallpaperscraft.com/image/bees_honeycomb_honey_close_up_114630_3840x2400.jpg"
          data-size="1600x1067">
          <img src="https://images.wallpaperscraft.com/image/bees_honeycomb_honey_close_up_114630_3840x2400.jpg"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://images.wallpaperscraft.com/image/forest_trees_path_185217_3840x2400.jpg"
          data-size="1600x1067">
          <img src="https://images.wallpaperscraft.com/image/forest_trees_path_185217_3840x2400.jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://images.wallpaperscraft.com/image/flowers_field_stems_145415_3840x2400.jpg"
          data-size="1600x1067">
          <img src="https://images.wallpaperscraft.com/image/flowers_field_stems_145415_3840x2400.jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://images.wallpaperscraft.com/image/basil_leaves_green_124382_3840x2400.jpg"
          data-size="1600x1067">
          <img src="https://images.wallpaperscraft.com/image/basil_leaves_green_124382_3840x2400.jpg"
            class="img-fluid"/>
        </a>
      </figure>

    </div>
    {/* <!--/.First slide-->

    <!--Second slide--> */}
    <div class="carousel-item text-center">

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://media.gettyimages.com/photos/the-rubber-tree-5-picture-id929449844?s=2048x2048"
          data-size="1600x1067">
          <img src="https://media.gettyimages.com/photos/the-rubber-tree-5-picture-id929449844?s=2048x2048"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://media.gettyimages.com/photos/teak-tree-farm-in-belize-picture-id875035212?s=2048x2048"
          data-size="1600x1067">
          <img src="https://media.gettyimages.com/photos/teak-tree-farm-in-belize-picture-id875035212?s=2048x2048"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://media.gettyimages.com/photos/logging-industry-forest-felling-picture-id157506111?s=2048x2048"
          data-size="1600x1067">
          <img src="https://media.gettyimages.com/photos/logging-industry-forest-felling-picture-id157506111?s=2048x2048"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://media.gettyimages.com/photos/deer-waits-in-woodland-as-the-rising-sun-begins-to-burn-off-overnight-picture-id460866424?s=2048x2048"
          data-size="1600x1067">
          <img src="https://media.gettyimages.com/photos/deer-waits-in-woodland-as-the-rising-sun-begins-to-burn-off-overnight-picture-id460866424?s=2048x2048"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://media.gettyimages.com/photos/this-picture-taken-on-march-26-2017-shows-a-captive-sumatran-elephant-picture-id658132952?s=2048x2048"
          data-size="1600x1067">
          <img src="https://media.gettyimages.com/photos/this-picture-taken-on-march-26-2017-shows-a-captive-sumatran-elephant-picture-id658132952?s=2048x2048"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://media.gettyimages.com/photos/in-this-picture-taken-on-august-25-a-siberian-tiger-sits-in-the-picture-id858073064?s=2048x2048"
          data-size="1600x1067">
          <img src="https://media.gettyimages.com/photos/in-this-picture-taken-on-august-25-a-siberian-tiger-sits-in-the-picture-id858073064?s=2048x2048"
            class="img-fluid"/>
        </a>
      </figure>

    </div>
    {/* <!--/.Second slide--> */}

    {/* <!--Third slide--> */}
    <div class="carousel-item text-center">

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://media.gettyimages.com/photos/migrated-birds-neotropic-cormorant-are-silhouetted-during-a-misty-as-picture-id630178330?s=2048x2048"
          data-size="1600x1067">
          <img src="https://media.gettyimages.com/photos/migrated-birds-neotropic-cormorant-are-silhouetted-during-a-misty-as-picture-id630178330?s=2048x2048"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://media.gettyimages.com/photos/waxwing-feeds-on-rowan-berries-on-december-9-2012-in-london-england-picture-id158051506?s=2048x2048"
          data-size="1600x1067">
          <img src="https://media.gettyimages.com/photos/waxwing-feeds-on-rowan-berries-on-december-9-2012-in-london-england-picture-id158051506?s=2048x2048"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://media.gettyimages.com/photos/formosan-blue-magpie-flies-through-the-air-at-a-local-park-in-taipei-picture-id525782058?s=2048x2048"
          data-size="1600x1067">
          <img src="https://media.gettyimages.com/photos/formosan-blue-magpie-flies-through-the-air-at-a-local-park-in-taipei-picture-id525782058?s=2048x2048"
            class="img-fluid"/>
        </a>
      </figure>

      <figure class="col-md-4 d-md-inline-block">
        <a href="https://images.wallpaperscraft.com/image/bird_peacock_beauty_78661_3840x2400.jpg"
          data-size="1600x1067">
          <img src="https://images.wallpaperscraft.com/image/bird_peacock_beauty_78661_3840x2400.jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://images.wallpaperscraft.com/image/bird_colorful_feathers_167644_3840x2400.jpg"
          data-size="1600x1067">
          <img src="https://images.wallpaperscraft.com/image/bird_colorful_feathers_167644_3840x2400.jpg"
            class="img-fluid"/>
        </a>
      </figure>
      <figure class="col-md-4 d-md-inline-block">
        <a href="https://images.wallpaperscraft.com/image/kingfisher_bird_branch_blur_117927_3840x2400.jpg"
          data-size="1600x1067">
          <img src="https://images.wallpaperscraft.com/image/kingfisher_bird_branch_blur_117927_3840x2400.jpg"
            class="img-fluid"/>
        </a>
      </figure>

    </div>
    {/* <!--/.Third slide--> */}

  </div>
  {/* <!--/.Slides--> */}

</div>
</div>
// {/* <!--/.Carousel Wrapper--> */}



    )
}
}

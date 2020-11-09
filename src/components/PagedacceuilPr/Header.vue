<template>
  
        <header id="Header">
            <div class="overlay">
                  <div class="inner">
                        <h1 class="Tendances">Nos Tendances</h1>
                  </div>
            </div>
    
            <video class="VdRolex" src="../../assets/new-submariner-video-cover.mp4" autoplay loop muted style="width:100%;
            object-fit:cover;
            height:100vh;"></video>
            <!-- object-fit:cover (mise en couverture de la video) -->
        </header>
       
  
</template>
            
<style scoped>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* PARAMETRAGE DU TEXTE SUR VIDEO */
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.inner .Tendances {
    max-width: 35rem;
    text-align: center;
    color:  #FF4949;
    padding: 0 2rem;
    font-family: 'Times New Roman';
    font-weight:500;
    font-style: italic;
    font-size: 82px;
}



@media (min-width:480px) and (max-width:767.9px){

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ----TEXTE SUR HEADER----- */
.inner .Tendances {
  display: none;
}
.overlay {
  display: none;
  }

/* HEADER AU DELAS DU FORMART 768 px */
.VdRolex {
    display: none;
}
#Header {
    background-image: url("../../assets/Header_format_tablettes.jpg");
    width: 100%;
    height: 100vh;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
}
}

@media (min-width:320px) and (max-width:479.9px){
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ----TEXTE SUR HEADER----- */
.inner .Tendances {
  display: none;
}
.overlay {
  display: none;
  }

/* HEADER AU DELAS DU FORMART 768 px */
.VdRolex {
    display: none;
}

#Header {
    background-image: url("../../assets/Header_format_smartphone.jpg");
    width: 100%;
    height: 100vh;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
}
}
</style>
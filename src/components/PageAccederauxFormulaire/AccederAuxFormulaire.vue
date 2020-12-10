<template>
  <body id="ImgAccesForm">
    <div class="overlay">
      <div class="inner">
        <div id="AccesForm">
          <h1 class="AccesForm">Formulaire de vérification et de conformité ,<br>
           pour pouvoir acceder a l’enchère</h1>
        </div>
        <br>
        <br>
        <div id="AccesForm">
          <button class="BtnAccesForm"><router-link class="LinkAccesForm" to="`//`">Accedez au formulaire</router-link></button>
      </div>
      </div>
    </div>
  </body>
</template>

<style scoped >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#ImgAccesForm {
  background-image: url("../../assets/Accedez_au_formulaire.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.inner #AccesForm {
    max-width: 45rem;
    text-align: center;
    color:  #FF4949;
    padding: 0 2rem;
    font-family: 'Times New Roman';
}
.AccesForm{
    font-weight:lighter;
    font-size: 34px;
}

.BtnAccesForm {
    width: 200px ;
    height: 40px ;
    border-radius: 10px;
    border: solid 2.5px #dcdcdc;
    background-color: #25272e;
    outline:none;
    opacity: 0.9;
}
.BtnAccesForm:hover{
  opacity: 1;
}

.LinkAccesForm {
    text-decoration: none;
    color: #ff4949; 
    font-family: "Noteworthy";
    font-size:large;
}


</style>
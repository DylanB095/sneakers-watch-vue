<template>
  <body id="ImgVerif">
    <div class="overlay">
      <div class="inner">
        <div id="VerifEmail">
          <h1 class="VerifEmail">VEUILLEZ VERIFIER VOTRE BOITE MAIL</h1>
        </div>
        <br>
        <br>
        <div id="VerifEmail">
          <button class="BtnVerif"><router-link class="LinkVerif" to="`//`">Retour</router-link></button>
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

#ImgVerif {
  background-image: url("../../assets/Verifier_votre_boite_mail.jpg");
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
.inner #VerifEmail {
    max-width: 45rem;
    text-align: center;
    color:  #FF4949;
    padding: 0 2rem;
    font-family: 'Times New Roman';
}
.VerifEmail{
    font-weight:lighter;
    font-size: 34px;
}

.BtnVerif {
    width: 120px ;
    height: 40px ;
    border-radius: 10px;
    border: solid 2.5px #ff4949;
    background-color: white;
    outline:none;
    
}
.LinkVerif {
    text-decoration: none;
    color: #ff4949; 
    font-family: "Noteworthy";
    font-size:large;
}


</style>
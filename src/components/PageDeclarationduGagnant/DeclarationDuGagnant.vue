<template>
  <body id="ImgDeclarationGagnant">
    <div class="overlay">
      <div class="inner">
        <div id="DeclarationGagnant">
          <h1 class="DeclarationGagnant">
            Les participants parlent de la victoire comme d’une chance.<br />C’est
            l'enchérissement qui fait la victoire!<br />Félicitations à vous.
          </h1>
        </div>
        <br />
        <br />
        <div id="DeclarationGagnant">
          <button class="BtnDeclaGagnant">
            <router-link class="LinkDeclaGagnant" to="`//`"
              >Acceuil</router-link
            >
          </button>
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

#ImgDeclarationGagnant {
  background-image: url("../../assets/Declaration_du_gagnant.jpg");
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
.inner #DeclarationGagnant {
  max-width: 45rem;
  text-align: center;
  color: #ff4949;
  padding: 0 2rem;
  font-family: "Times New Roman";
  font-weight: 900;
}
.DeclarationGagnant {
  font-weight:lighter;
  font-size: 34px;
}

.BtnDeclaGagnant {
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: solid 3px #ff4949;
  background-color: white;
  outline: none;
  opacity: 0.9;
}
.BtnDeclaGagnant:hover {
  opacity: 1;
}
.LinkDeclaGagnant {
  text-decoration: none;
  color: #ff4949;
  font-family: "Noteworthy";
  font-size: x-large;
}
</style>
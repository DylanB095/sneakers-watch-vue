<template>
  <body id="Img_fond_login">
      <div class="overlay">
          <div class="inner">
                   <div id="AvatarLogin">
              <img src="../../assets/Avatar_Login.png" alt="" width="250" style="opacity: 0.8">
          </div>
          <br>
          <div id="AvatarLogin">
              <h1 class="TexteH">
                  S'IDENTIFIER
              </h1>
          </div>
          <br>
          <div id="AvatarLogin">
              <h5 class="TexteH">
                  BIENVENUE
              </h5>
          </div>
          <br>
      <div id="AvatarLogin">
    <input type="text" class="AvatarLogin" placeholder="NOM D'UTILISATEUR" />
      </div>
      <br>
      <div id="AvatarLogin">
    <input type="text" class="AvatarLogin" placeholder="MOT DE PASSE" />
      </div>
      <br>
      <div>
      <input type="checkbox" id="checkbox1" name="checkboxlogin" />
    <label  class="checkbox1" for="checkbox1"><span></span> Souviens-toi de moi</label>
    <router-link class="MDPOublié" to="`//`">  Mot de passe oublié ?</router-link>
    </div>

      <div id="AvatarLogin">
          <br>
          <button class="BtnLogin"><router-link class="LinkLogin" to="`//`">Envoyer</router-link></button>
      </div>
      <br>
      <div id="AvatarLogin">
      <router-link class="CréeUnCmpte" to="`//`">Créer un compte</router-link>
      </div>
      </div>
      </div>
  </body>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 #Img_fond_login {
    background-image: url("../../assets/Fond_Decran_Login.jpg");
    width: 100%;
    height: 100vh;
    background-size:cover;
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
.inner #AvatarLogin {
    max-width: 45rem;
    text-align: center;
    color:  White;
    padding: 0 2rem;
    font-family: 'Times New Roman';
    font-weight: 200;
}
#AvatarLogin .TexteH {
    font-weight:100;
}

/* PARAMETRAGE INPUT */
#AvatarLogin .AvatarLogin {
    width: 230px;
    height: 30px;
    border-radius: 10px;
    border: solid 2.5px #ff4949;
    background-color: white;
    outline:none;
}
.AvatarLogin::placeholder{
    font-size: 10px;
    text-align: center;
    font-weight: bold;
    font-family: 'Times New Roman';
}

.checkbox1 {
    color: white;
    font-family: 'Times New Roman';
}
.MDPOublié {
    padding-left: 25px;
    text-decoration: none;
    color: white; 
    font-family: 'Times New Roman';
}

/* PARAMETRAGE BOUTON */
.BtnLogin {
    width: 120px ;
    height: 30px ;
    border-radius: 10px;
    border: solid 2.5px #ff4949;
    background-color: transparent;
    outline:none;
    
}
.LinkLogin{
    text-decoration: none;
    color: white; 
    font-family: 'Times New Roman';
    font-size:inherit;
}
.CréeUnCmpte {
    text-decoration: none;
    color: white; 
    font-family: 'Times New Roman';
}

</style>
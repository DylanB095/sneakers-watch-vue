<template>
<form @submit.prevent="login">
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
    <input type="text" class="AvatarLogin" placeholder="NOM D'UTILISATEUR" name="email" v-model="connecter.email" required />
      </div>
      <br>
      <div id="AvatarLogin">
    <input type="password" class="AvatarLogin" placeholder="MOT DE PASSE" name="password" v-model="connecter.password" required/>
      </div>
      <br>
      <div>
      <input type="checkbox" id="checkbox1" name="checkboxlogin" />
    <label  class="checkbox1" for="checkbox1"><span></span> Souviens-toi de moi</label>
    <router-link class="MDPOublié" to="`//`">  Mot de passe oublié ?</router-link>
    </div>

      <div id="AvatarLogin">
          <br>
          <button class="BtnLogin" type="submit">Envoyer</button>
      </div>
      <br>
      <div id="AvatarLogin">
      <router-link class="CréeUnCmpte" to="`//`">Créer un compte</router-link>
      </div>
      </div>
      </div>
  </body>
</form>
</template>

<script>
/* AXIOS est un module qui servira a appeler/relier le back avec le front */
import axios from "axios";
export default {
  data() {
    return {
        /* v-model */
      connecter: {},
    };
  },
  methods: {
    /* ROUTE login (recupere la data saisie sur mon front et est generé dans mon back ) */
    /* @submit.prevent="login" */
    login() {
      axios
        .post(this.$apiurl + "/client/login", this.connecter)
        .then((res) => {
          console.log(res)
          window.location.reload();  
        })
        .catch(err => {
          console.log(err)
        });
    },
  },
};
</script>

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
    text-decoration: none;
    color: white; 
    font-family: 'Times New Roman';
    font-size:inherit;
}
.BtnLogin:hover{
   transition: 0.1s;
  /*  changer la perspective de l'image*/
  transform: scale(1.15);
}
.CréeUnCmpte {
    text-decoration: none;
    color: white; 
    font-family: 'Times New Roman';
}

</style>
<template>
<form @submit.prevent="reinit">
  <body id="ImgReinit">
      <div id="CroixFermetureReinit">
          <i class="fas fa-times" style="padding: 10px 0px 0px 10px;
     color: #FF4949;"></i>
      </div>
      <div class="overlay">
          <div class="inner">
                        <div class="ReinitMDP">
              <h1>
                  Réinitialisation Mot De Passe
              </h1>
          </div>
          <br>
          <br>
      <div id="InputEmailIcone">
    <input type="Email" class="InputEmail" placeholder="Email" name="email" v-model="reinitialiser.email" required  />
      <i class="fas fa-user" id="IconeInpute"></i>   
      </div>
      <br>
      <div id="InputEmailIcone">
          <button class="BtnReinit" type="submit">Envoyer</button>
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
      reinitialiser: {},
    };
  },
  methods: {
    /* ROUTE reinit (envoiedemailChangement)(recupere la data saisie sur mon front et est generé dans mon back ) */
    /* @submit.prevent="reinit" */
    reinit() {
      axios
        .post(this.$apiurl + "/client/EnvoieDeMailChangement", this.reinitialiser)
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
 #ImgReinit {
    background-image: url("../../assets/RéinitialisationMotDePasse.jpg");
    width: 100%;
    height: 110vh;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
 }
 .ReinitMDP {
    color: #FF4949;
    text-align: center;
    font-size: 12.5px;
}

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.inner #InputEmailIcone {
    max-width: 35rem;
    text-align: center;
    color:  #FF4949;
    padding: 0 2rem;
    font-family: 'Times New Roman';
}

#InputEmailIcone .InputEmail[type=Email] {
    padding-left: 40px ;
    width: 230px;
    height: 30px;
    border-radius: 10px;
    border: solid 2.5px #ff4949;
    background-color: white;
    outline:none;
}
#InputEmailIcone {
    position: relative;
}
#InputEmailIcone #IconeInpute {
    position: absolute;
    left: 0;
    padding: 6.5px 5px 0px 50px;
    color:black;
}

.BtnReinit {
    width: 120px ;
    height: 30px ;
    border-radius: 10px;
    border: solid 2.5px #ff4949;
    background-color: white;
    outline:none;
    opacity: 0.9;
    text-decoration: none;
    color: #25272e; 
    font-family: "Noteworthy";
    font-size:inherit;
    cursor: pointer;
}
.BtnReinit:hover {
    opacity: 1;
}

</style>
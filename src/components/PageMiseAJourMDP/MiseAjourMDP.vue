<template>
  <form @submit.prevent="modificationmdp">
    <body id="Img_fond">
      <div class="overlay">
        <div class="inner">
          <div class="MajMDP">
            <h1>Mise à jour Mot De Passe</h1>
          </div>
          <br />
          <br />
          <div id="InputemailIcone">
            <input
              type="email"
              class="Inputemail"
              placeholder="Email"
              name="email"
              v-model="miseajour.email"
              required
            />
            <i class="fas fa-user" id="IconeInput"></i>
          </div>
          <br />
          <div id="InputemailIcone">
            <input
              type="text"
              class="Inputemail"
              placeholder="Mot de Passe"
              name="password"
              v-model="miseajour.password"
              required
            />
            <i class="fas fa-unlock-alt" id="IconeInput"></i>
          </div>
          <br />
          <div id="InputemailIcone">
            <button class="BtnMisAJour" type="submit">Envoyer</button>
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
      miseajour: {},
    };
  },
  methods: {
    /* ROUTE Mdpmodification (recupere la data saisie sur mon front et est generé dans mon back ) */
    /* @submit.prevent="modificationmdp" */
    modificationmdp() {
      axios
        .post(this.$apiurl + "/client/MdpModification", this.miseajour)
        .then((res) => {
          console.log(res);
         // window.location.reload();
        })
        .catch((err) => {
          console.log(err);
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
#Img_fond {
  background-image: url("../../assets/Mise_a_jour_du_Mot_De_Passe.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.MajMDP {
  color: #ff4949;
  text-align: center;
  font-size: 13px;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner #InputemailIcone {
  max-width: 35rem;
  text-align: center;
  color: #ff4949;
  padding: 0 2rem;
  font-family: "Times New Roman";
}

#InputemailIcone .Inputemail[type="text"],
[type="email"] {
  padding-left: 40px;
  width: 230px;
  height: 30px;
  border-radius: 10px;
  border: solid 2.5px #ff4949;
  background-color: white;
  outline: none;
}
#InputemailIcone {
  position: relative;
}
#InputemailIcone #IconeInput {
  position: absolute;
  left: 0;
  padding: 6.5px 5px 0px 45px;
  color: black;
}

.BtnMisAJour {
  width: 120px;
  height: 30px;
  border-radius: 10px;
  border: solid 2.5px #ff4949;
  background-color: white;
  outline: none;
  opacity: 0.8;
  text-decoration: none;
  color: #25272e;
  font-family: "Noteworthy";
  font-size: inherit;
  cursor: pointer;
}
.BtnMisAJour:hover {
  opacity: 1;
}
</style>
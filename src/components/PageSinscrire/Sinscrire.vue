<template>
  <form @submit.prevent="register">
    <body id="Img_fond_sinscrire">
      <div class="overlay">
        <div class="inner">
          <section id="container">
            <div class="Sinscrire">
              <h1>S'inscrire</h1>
            </div>

            <div class="FormulaireInscrip">
              <h2>Nouvel utilisateur</h2>
              <br />
              <p>Utilisez le formulaire ci-dessous pour créer votre compte.</p>

              <br />
              <div class="PrenmNom">
                <input
                  class="InputForm"
                  type="text"
                  placeholder="Prénom"
                  name="prenom"
                  v-model="inscription.prenom"
                  required
                />
                <input
                  type="text"
                  placeholder="Nom de famille"
                  name="nom"
                  v-model="inscription.nom"
                  required
                />

                <br />
                <br />
                <div class="Email">
                  <input
                    type="email"
                    placeholder="Entrer votre Email"
                    name="email"
                    v-model="inscription.email"
                    required
                  />
                </div>

                <br />
                <div class="AdresseCP">
                  <input
                    class="InputForm"
                    type="text"
                    placeholder="Adresse"
                    name="adresse"
                    v-model="inscription.adresse"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Code Postal"
                    name="code_postal"
                    v-model="inscription.code_postal"
                    required
                  />
                </div>

                <br />
                <div class="TelVille">
                  <input
                    class="InputForm"
                    type="text"
                    placeholder="Tel"
                    name="telephone"
                    v-model="inscription.telephone"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Ville"
                    name="ville"
                    v-model="inscription.ville"
                    required
                  />
                </div>
                <br />
                <div class="Mdp">
                  <input
                    type="password"
                    placeholder="Mot de passe"
                    name="password"
                    v-model="inscription.password"
                    required
                  />
                </div>
                <br />
                <br />
                <div class="CHECKBOX">
                  <input
                    type="checkbox"
                    id="checkbox1"
                    name="checkboxTermeConditions"
                  />
                  <label class="checkbox1" for="checkbox1"
                    ><span></span> Accepter les termes et conditions</label
                  >
                </div>
                <br />
                <div class="BtnSinscrire">
                  <button id="BtnSinscrire" type="submit">S'inscire</button>
                </div>
                <br />
                <div class="BtnSinscrire">
                  <router-link id="AvoirCompte" to="`//`"
                    >Avez-vous un compte ? S'identifier</router-link
                  >
                </div>
              </div>
            </div>
          </section>
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
      inscription: {},
    };
  },
  methods: {
    /* ROUTE register (recupere la data saisie sur mon front et est generé dans mon back ) */
    /* @submit.prevent="register" */
    register() {
      axios
        .post(this.$apiurl + "/client/register", this.inscription)
        .then((res) => {
          console.log(res);
          window.location.reload();
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
#Img_fond_sinscrire {
  background-image: url("../../assets/Sinscrire.jpg");
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
.inner #container {
  max-width: 55rem;
  height: 100%;
  display: flex;
}

/*Parametrage Bordoreau S'inscrire  */
.Sinscrire {
  background: linear-gradient(#ff4949, #d30547);
  width: 18.5rem;
}
.Sinscrire h1 {
  transform: rotate(-90deg);
  font-family: "Times New Roman", Times, serif;
  font-style: oblique;
  color: #f5f6f9;
  font-weight: lighter;
  font-size: 100px;
  margin: 450px 0 0 100px;
}

/* ------------------------------------------------------ */
/* Parametrage Formulaire inscription */
.FormulaireInscrip {
  width: 36.5rem;
  background: #f5f6f9;
  opacity: 0.9;
  height: 100%;
  padding: 30px 20px 10px 40px;
}
.FormulaireInscrip h2 {
  color: #ff4949;
  font-weight: 500;
  font-size: xx-large;
}
.FormulaireInscrip p {
  color: black;
  font-size: 18px;
  font-weight: 550;
}

/* Separation Input  */
.InputForm {
  margin-right: 100px;
}

/* Parametrage Placeholder */
.FormulaireInscrip input[type="text"]::placeholder {
  font-weight: 600;
  color: black;
  font-size: larger;
}
.FormulaireInscrip input[type="email"]::placeholder {
  font-weight: 600;
  color: black;
  font-size: larger;
}
.FormulaireInscrip input[type="password"]::placeholder {
  font-weight: 600;
  color: black;
  font-size: larger;
}
/* Parametrage input */
.FormulaireInscrip input[type="text"] {
  padding: 15px 0 15px 0;
  margin-top: 5px;
  border: none;
  border-bottom: #ff4949 solid 1px;
  background: transparent;
  font-family: "Times New Roman", Times, serif;
  outline: none;
}
.FormulaireInscrip input[type="email"] {
  padding: 15px 0 15px 0;
  margin-top: 5px;
  border: none;
  border-bottom: #ff4949 solid 1px;
  background: transparent;
  font-family: "Times New Roman", Times, serif;
  outline: none;
}
.FormulaireInscrip input[type="password"] {
  padding: 15px 0 15px 0;
  margin-top: 5px;
  border: none;
  border-bottom: #ff4949 solid 1px;
  background: transparent;
  font-family: "Times New Roman", Times, serif;
  outline: none;
}
/* Width INPUT EMAIL */
.Email input[type="email"] {
  width: 75%;
}

/* Width INPUT MDP */
.Mdp input[type="password"] {
  width: 75%;
}

/* Parametrage CHECKBOX */
.CHECKBOX input[type="checkbox"] {
  margin-right: 10px;
}
.checkbox1 {
  margin: 0 0 5px 0;
  font-weight: 600;
  color: black;
}

/* BTN + AVEZ VOUS UN COMPTE ? */
.BtnSinscrire {
  text-align: center;
}

/* BTN S'INSCRIRE */
#BtnSinscrire {
  background: linear-gradient(#ff4949, #d30547);
  border: #d30547 1px solid;
  text-align: center;
  width: 150px;
  height: 45px;
  opacity: 0.9;
  color: #f5f6f9;
  text-decoration: none;
  font-family: "Noteworthy";
  font-size: large;
  cursor: pointer;
}
#BtnSinscrire:hover {
  opacity: 1;
}

#AvoirCompte {
  text-decoration: none;
  color: black;
  font-weight: 600;
}

@media (min-width: 570px) and (max-width: 929.9px) {
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner #container {
    max-width: 55rem;
    height: 100%;
    display: flex;
  }

  /*Parametrage Bordoreau S'inscrire  */
  .Sinscrire {
    background: linear-gradient(#ff4949, #d30547);
    width: 18.5rem;
    display: none;
  }
  .Sinscrire h1 {
    transform: rotate(-90deg);
    font-family: "Times New Roman", Times, serif;
    font-style: oblique;
    color: #f5f6f9;
    font-weight: lighter;
    font-size: 100px;
    margin: 450px 0 0 100px;
  }

  /* ------------------------------------------------------ */
  /* Parametrage Formulaire inscription */
  .FormulaireInscrip {
    width: 33.5rem;
    background: #f5f6f9;
    opacity: 0.9;
    height: 100%;
    padding: 30px 20px 10px 20px;
    text-align: center;
  }
  .FormulaireInscrip h2 {
    color: #ff4949;
    font-weight: 500;
    font-size: xx-large;
  }
  .FormulaireInscrip p {
    color: black;
    font-size: 18px;
    font-weight: 550;
  }

  /* Separation Input  */
  .InputForm {
    margin-right: 100px;
  }

  /* Parametrage Placeholder */
  .FormulaireInscrip input[type="text"]::placeholder {
    font-weight: 600;
    color: black;
    font-size: larger;
    text-align: center;
  }
  .FormulaireInscrip input[type="email"]::placeholder {
    font-weight: 600;
    color: black;
    font-size: larger;
    text-align: center;
  }
  /* Parametrage input */
  .FormulaireInscrip input[type="text"] {
    padding: 15px 0 15px 0;
    margin-top: 5px;
    border: none;
    border-bottom: #ff4949 solid 1px;
    background: transparent;
    font-family: "Times New Roman", Times, serif;
    outline: none;
    text-align: center;
  }
  .FormulaireInscrip input[type="email"] {
    padding: 15px 0 15px 0;
    margin-top: 5px;
    border: none;
    border-bottom: #ff4949 solid 1px;
    background: transparent;
    font-family: "Times New Roman", Times, serif;
    outline: none;
    text-align: center;
  }
  /* Width INPUT EMAIL */
  .Email input[type="email"] {
    width: 78%;
  }

  /* Width INPUT MDP */
  .Mdp input[type="text"] {
    width: 78%;
  }

  /* Parametrage CHECKBOX */
  .CHECKBOX input[type="checkbox"] {
    margin-right: 10px;
  }
  .checkbox1 {
    margin: 0 0 5px 0;
    font-weight: 600;
    color: black;
  }

  /* BTN + AVEZ VOUS UN COMPTE ? */
  .BtnSinscrire {
    text-align: center;
  }

  /* BTN S'INSCRIRE */
  #BtnSinscrire {
    background: linear-gradient(#ff4949, #d30547);
    border: #d30547 1px solid;
    text-align: center;
    width: 150px;
    height: 45px;
    opacity: 0.9;
    color: #f5f6f9;
    text-decoration: none;
    font-family: "Noteworthy";
    font-size: large;
    cursor: pointer;
  }
  #BtnSinscrire:hover {
    opacity: 1;
  }

  #AvoirCompte {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
}

@media (min-width: 480px) and (max-width: 569.9px) {
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner #container {
    max-width: 55rem;
    height: 100%;
    display: flex;
  }

  /*Parametrage Bordoreau S'inscrire  */
  .Sinscrire {
    background: linear-gradient(#ff4949, #d30547);
    width: 18.5rem;
    display: none;
  }
  .Sinscrire h1 {
    transform: rotate(-90deg);
    font-family: "Times New Roman", Times, serif;
    font-style: oblique;
    color: #f5f6f9;
    font-weight: lighter;
    font-size: 100px;
    margin: 450px 0 0 100px;
  }

  /* ------------------------------------------------------ */
  /* Parametrage Formulaire inscription */
  .FormulaireInscrip {
    width: 28rem;
    background: #f5f6f9;
    opacity: 0.9;
    height: 100%;
    padding: 30px 20px 10px 20px;
    text-align: center;
  }
  .FormulaireInscrip h2 {
    color: #ff4949;
    font-weight: 500;
    font-size: x-large;
  }
  .FormulaireInscrip p {
    color: black;
    font-size: 16px;
    font-weight: 550;
  }

  /* Separation Input  */
  .InputForm {
    margin-right: 100px;
  }

  /* Parametrage Placeholder */
  .FormulaireInscrip input[type="text"]::placeholder {
    font-weight: 600;
    color: black;
    font-size: medium;
    text-align: center;
  }
  .FormulaireInscrip input[type="email"]::placeholder {
    font-weight: 600;
    color: black;
    font-size: medium;
    text-align: center;
  }
  /* Parametrage input */
  .FormulaireInscrip input[type="text"] {
    padding: 15px 0 15px 0;
    margin-top: 5px;
    border: none;
    border-bottom: #ff4949 solid 1px;
    background: transparent;
    font-family: "Times New Roman", Times, serif;
    outline: none;
    text-align: center;
  }
  .FormulaireInscrip input[type="email"] {
    padding: 15px 0 15px 0;
    margin-top: 5px;
    border: none;
    border-bottom: #ff4949 solid 1px;
    background: transparent;
    font-family: "Times New Roman", Times, serif;
    outline: none;
    text-align: center;
  }
  /* Width INPUT EMAIL et MDP */
  .Email input[type="email"] {
    width: 95%;
  }
  .Mdp input[type="text"] {
    width: 95%;
  }

  /* Parametrage CHECKBOX */
  .CHECKBOX input[type="checkbox"] {
    margin-right: 10px;
  }
  .checkbox1 {
    margin: 0 0 5px 0;
    font-weight: 600;
    color: black;
    size: medium;
  }

  /* BTN + AVEZ VOUS UN COMPTE ? */
  .BtnSinscrire {
    text-align: center;
  }

  /* BTN S'INSCRIRE */
  #BtnSinscrire {
    background: linear-gradient(#ff4949, #d30547);
    border: #d30547 1px solid;
    text-align: center;
    width: 150px;
    height: 45px;
    opacity: 0.9;
    color: #f5f6f9;
    text-decoration: none;
    font-family: "Noteworthy";
    font-size: medium;
    cursor: pointer;
  }
  #BtnSinscrire:hover {
    opacity: 1;
  }

  #AvoirCompte {
    size: medium;
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
}

@media (min-width: 320px) and (max-width: 479.9px) {
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inner #container {
    max-width: 55rem;
    height: 100%;
    display: flex;
  }

  /*Parametrage Bordoreau S'inscrire  */
  .Sinscrire {
    background: linear-gradient(#ff4949, #d30547);
    width: 18.5rem;
    display: none;
  }
  .Sinscrire h1 {
    transform: rotate(-90deg);
    font-family: "Times New Roman", Times, serif;
    font-style: oblique;
    color: #f5f6f9;
    font-weight: lighter;
    font-size: 100px;
    margin: 450px 0 0 100px;
  }

  /* ------------------------------------------------------ */
  /* Parametrage Formulaire inscription */
  .FormulaireInscrip {
    width: 18.5rem;
    background: #f5f6f9;
    opacity: 0.9;
    height: 100%;
    padding: 30px 20px 10px 20px;
    text-align: center;
  }
  .FormulaireInscrip h2 {
    color: #ff4949;
    font-weight: 500;
    font-size: x-large;
  }
  .FormulaireInscrip p {
    color: black;
    font-size: 16px;
    font-weight: 550;
  }
  /* Separation Input  */
  .InputForm {
    margin-right: 100px;
    display: none;
  }

  /* Parametrage Placeholder */
  .FormulaireInscrip input[type="text"]::placeholder {
    font-weight: 600;
    color: black;
    font-size: medium;
    text-align: center;
  }
  .FormulaireInscrip input[type="email"]::placeholder {
    font-weight: 600;
    color: black;
    font-size: medium;
    text-align: center;
  }
  /* Parametrage input */
  .FormulaireInscrip input[type="text"] {
    padding: 15px 0 15px 0;
    margin-top: 5px;
    border: none;
    border-bottom: #ff4949 solid 1px;
    background: transparent;
    font-family: "Times New Roman", Times, serif;
    outline: none;
    text-align: center;
  }
  .FormulaireInscrip input[type="email"] {
    padding: 15px 0 15px 0;
    margin-top: 5px;
    border: none;
    border-bottom: #ff4949 solid 1px;
    background: transparent;
    font-family: "Times New Roman", Times, serif;
    outline: none;
    text-align: center;
  }
  /* Width input */
  input[type="text"] {
    width: 75%;
  }
  input[type="email"] {
    width: 75%;
  }

  /* Parametrage CHECKBOX */
  .CHECKBOX input[type="checkbox"] {
    margin-right: 10px;
  }
  .checkbox1 {
    margin: 0 0 5px 0;
    font-weight: 600;
    color: black;
    size: medium;
  }

  /* BTN + AVEZ VOUS UN COMPTE ? */
  .BtnSinscrire {
    text-align: center;
  }

  /* BTN S'INSCRIRE */
  #BtnSinscrire {
    background: linear-gradient(#ff4949, #d30547);
    border: #d30547 1px solid;
    text-align: center;
    width: 150px;
    height: 45px;
    opacity: 0.9;
    color: #f5f6f9;
    text-decoration: none;
    font-family: "Noteworthy";
    font-size: medium;
    cursor: pointer;
  }
  #BtnSinscrire:hover {
    opacity: 1;
  }

  #AvoirCompte {
    size: medium;
    text-decoration: none;
    color: black;
    font-weight: 600;
  }
}
</style>
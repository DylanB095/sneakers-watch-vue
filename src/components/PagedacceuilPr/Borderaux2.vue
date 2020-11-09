<template>
  <div class="Borderau2">
    <div class="IconeHomme">
      <img class="AssistanceHomme" src="../../assets/SupAideHOMME.png" alt="Assistance d'achats" />
      <p class="TexteAssistanceHomme">ASSISTANCE D'ACHATS</p>
      <br />
      <button class="BtnAssistanceHomme" @click="openForm()">
        OBTENIR DE L'AIDE
      </button>
    </div>

    <!-- -------POPUP ASSISTANCE D'ACHATS--------- -->
    <div class="form-popup" id="myForm">
      <!-- Soumettre a l'evenement assistanceA (ASSISTANCE D'ACHATS) qui sera assosier au v-model et a (htpp://localhost:3000/....) -->
      <form @submit.prevent="assistanceA" class="form-container">
        <h1>ASSISTANCE D'ACHATS</h1>
        <br />
        <br />
        <label for="nom">Nom</label>
        <!-- v-model="assistanceAchat.(attibut ou proprieté venant du back)" ,requete assosier a Axios qui va me permetre d'envoyer les infos saisie depuis mon front a mon back  -->
        <input type="text" placeholder="Nom..." name="nom" v-model="assistanceAchat.nom" required />

        <label for="prenom">Prenom</label>
        <input type="text" placeholder="Prenom..." name="prenom" v-model="assistanceAchat.prenom" required />

        <label for="email">Email</label>
        <input type="text" placeholder="Email..." name="email" v-model="assistanceAchat.email" required />

        <label for="tel">Telephone</label>
        <input type="text" placeholder="Telephone..." name="tel" v-model="assistanceAchat.telephone" required />

        <button type="submit" class="btn">Enregistrer</button>
        <button type="button" class="btn cancel" @click="closeForm()">
          Annuler
        </button>
      </form>
    </div>

    <div class="IconeFemme">
      <img class="SupportAideFemme" src="../../assets/SupAideFEMME.png" alt="Support D'aide" />
      <p class="TexteSupportAideFemme">SUPPORT D'AIDE</p>
      <br />
      <button class="BtnSupportAideFemme" @click="openForm1()">
        OBTENIR DE L'AIDE
      </button>
    </div>
    <!-------------POPUP SUPPORT D'AIDE-------------->
    <div class="form-popup1" id="myForm1">
       <!-- Soumettre a l'evenement supportA (SUPPORT D'AIDE) qui sera assosier au v-model et a (htpp://localhost:3000/....) -->
      <form class="form-container1" @submit.prevent="supportA">
        <h1>SUPPORT D'AIDE</h1>
        <br />
        <br />
        <label for="nom">Nom</label>
        <!-- v-model="supportAide.(attibut ou proprieté venant du back)" ,requete assosier a Axios qui va me permetre d'envoyer les infos saisie depuis mon front a mon back  -->
        <input type="text" placeholder="Nom..." name="nom" v-model="supportAide.nom" required />

        <label for="prenom">Prenom</label>
        <input type="text" placeholder="Prenom..." name="prenom" v-model="supportAide.prenom" required />

        <label for="email">Email</label>
        <input type="text" placeholder="Email..." name="email" v-model="supportAide.email" required />

        <label for="motif_de_contact">Motif de Contact</label>
        <input type="text" placeholder="Motif de..." name="motif_de_contact" required
          v-model="supportAide.motif_de_contact" />

        <label for="message">Message</label>
        <input type="text" placeholder="Message..." name="message" v-model="supportAide.message" required />

        <button type="submit" class="btn1">Enregistrer</button>
        <button class="btn1 cancel1" @click="closeForm1()">
          Annuler
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  /* AXIOS est un module qui servira a appeler/relier le back avec le front */
  import axios from "axios";
  export default {
    data() {
      return {
        /* v-model */
        assistanceAchat: {},
        supportAide: {}
      };
    },
    methods: {

      /* FONCTION POPUP ASSISTANCE D'ACHATS */
      /* fontion qui permettra ouvrire avec oneclik mon popup */
      openForm: function () {
        document.getElementById("myForm").style.display = "block";
      },
      /* fonction qui permettre de fermer avec oneclick mon popup*/
      closeForm: function () {
        document.getElementById("myForm").style.display = "none";
      },

      /* ROUTE ASSISTANCE D'ACHATS (recupere la data saisie sur mon front et est generé dans mon back ) */
      /* @submit.prevent="supportA" */
      supportA() {
        axios.post("http://localhost:3000/supportaide/ContacterSppAide", this.supportAide)
          .then(() => {
            window.location.reload();
          })
          .catch();
      },

/* ----------------------------------------------------------------------------------------------------------------------------------------- */
     
     /* FONCTION POPUP SUPPORT D'AIDE */
     /* fontion qui permettra ouvrire avec oneclik mon popup */
      openForm1: function () {
        document.getElementById("myForm1").style.display = "block";
      },
      /* fonction qui permettre de fermer avec oneclick mon popup*/
      closeForm1: function () {
        document.getElementById("myForm1").style.display = "none";
      },

      /* ROUTE SUPPORT D'AIDE (recupere la data saisie sur mon front et est generé dans mon back ) */
      /* @submit.prevent="assistanceA" */
      assistanceA() {
        axios.post("http://localhost:3000/supportachat/ContacterSppAchat", this.assistanceAchat)
          .then(() => {
            window.location.reload();
          })
          .catch();
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

  .Borderau2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: #f5f6f9;
    height: 100%;
    width: 100%;
    color: gray;
    margin-top: 50px;
  }

  /* CARD HOMME/FEMME */
  .IconeHomme,
  .IconeFemme {
    margin-top: 50px;
    border: solid 5px white;
    background: transparent;
    width: 385px;
    height: 190px;
    margin: 50px 25px 50px 25px;
  }

  /* TEXTE CARD */
  .TexteAssistanceHomme,
  .TexteSupportAideFemme {
    font-family: "Times New Roman";
    font-weight: lighter;
    font-size: 18.5px;
  }

  /* BOUTON CARD  */
  .BtnSupportAideFemme,
  .BtnAssistanceHomme {
    outline: none;
    background: transparent;
    border: gray 1px solid;
    height: 25px;
    text-decoration: none;
    color: gray;
    font-size: x-small;
    font-family: "Times New Roman", Times, serif;
    cursor: pointer;
  }

  /* .BtnSupportAideFemme a,.BtnAssistanceHomme a {
text-decoration: none ;
color: gray ;
font-size: x-small ;
font-family: 'Times New Roman', Times, serif;
} */

  /*----------- HOMME -------------*/
  /* BOUTON + TEXTE HOMME */
  .BtnAssistanceHomme,
  .TexteAssistanceHomme {
    margin-left: 150px;
    margin-top: -115px;
  }

  /* IMG CARD HOMME */
  .AssistanceHomme {
    width: 125px;
  }

  /* ---------- FEMME -------------*/
  /* IMG CARD FEMME  */
  .SupportAideFemme {
    float: right;
    margin-top: 10px;
    width: 125px;
  }

  /* TEXTE FEMME */
  .TexteSupportAideFemme {
    margin-top: 58px;
    margin-left: 75px;
  }

  /* BOUTON FEMME */
  .BtnSupportAideFemme {
    margin-left: 122.5px;
  }

  /* -----------POPUP ASSISTANCE ACHATS----------- */
  /* Le PopUp - masqué par défaut */
  .form-popup {
    display: none;
    position: fixed;
    bottom: 15px;
    right: 15px;
    border: 3px solid #dcdcdc;
    border-radius: 2.5px;
    z-index: 9;
  }

  /* Titre H1 du Formulaire */
  .form-popup h1 {
    font-family: "Times New Roman", Times, serif;
    text-align: center;
    font-weight: 500;
    font-size: large;
    text-decoration-line: underline;
  }

  /* Label du formulaire */
  .form-container,
  label {
    font-family: "Times New Roman", Times, serif;
    font-weight: 500;
    font-size: medium;
  }

  /* Ajouter des styles au conteneur de formulaire */
  .form-container {
    max-width: 300px;
    padding: 10px;
    background-color: white;
  }

  /* Champs d’entrée pleine largeur */
  .form-container input[type="text"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f5f6f9;
    border-radius: 10px;
    font-family: "Times New Roman", Times, serif;
  }

  /* Lorsque les entrées se concentrent, faites quelque chose */
  .form-container input[type="text"]:focus {
    background-color: #dcdcdc;
    outline: none;
  }

  /* Lorsque les entrées se concentrent, faites quelque chose*/
  .form-container .btn {
    background-color: #25272e;
    color: white;
    padding: 16px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 80%;
    margin-left: 27.5px;
    margin-bottom: 10px;
    opacity: 0.8;
    font-family: "Times New Roman", Times, serif;
    font-size: smaller;
    outline: none;
  }

  /* Ajouter une couleur d’arrière-plan rouge au bouton Cancel*/
  .form-container .cancel {
    background-color: #ff4949;
  }

  /* Ajouter quelques effets de survol aux boutons */
  .form-container .btn:hover {
    opacity: 1;
  }

  /* -----------POPUP SUPPORT AIDE----------- */
  /* Le PopUp - masqué par défaut */
  .form-popup1 {
    display: none;
    position: fixed;
    bottom: 15px;
    right: 15px;
    border: 3px solid #dcdcdc;
    border-radius: 2.5px;
    z-index: 9;
  }

  /* Titre H1 du Formulaire */
  .form-popup1 h1 {
    font-family: "Times New Roman", Times, serif;
    text-align: center;
    font-weight: 500;
    font-size: large;
    text-decoration-line: underline;
  }

  /* Label du formulaire */
  .form-container1,
  label {
    font-family: "Times New Roman", Times, serif;
    font-weight: 500;
    font-size: medium;
  }

  /* Ajouter des styles au conteneur de formulaire */
  .form-container1 {
    max-height: 640px;
    max-width: 300px;
    padding: 10px;
    background-color: white;
  }

  /* Champs d’entrée pleine largeur */
  .form-container1 input[type="text"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    border: none;
    background: #f5f6f9;
    border-radius: 10px;
    font-family: "Times New Roman", Times, serif;
  }

  /* Lorsque les entrées se concentrent, faites quelque chose */
  .form-container1 input[type="text"]:focus {
    background-color: #dcdcdc;
    outline: none;
  }

  /* Lorsque les entrées se concentrent, faites quelque chose*/
  .form-container1 .btn1 {
    background-color: #25272e;
    color: white;
    padding: 16px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    width: 80%;
    margin-left: 27.5px;
    margin-bottom: 10px;
    opacity: 0.8;
    font-family: "Times New Roman", Times, serif;
    font-size: smaller;
    outline: none;
  }

  /* Ajouter une couleur d’arrière-plan rouge au bouton Cancel*/
  .form-container1 .cancel1 {
    background-color: #ff4949;
  }

  /* Ajouter quelques effets de survol aux boutons */
  .form-container1 .btn1:hover {
    opacity: 1;
  }

  @media (max-width: 491px) {

    /* CARD HOMME/FEMME */
    .IconeHomme,
    .IconeFemme {
      margin-top: 50px;
      border: solid 5px white;
      background: transparent;
      width: 300px;
      height: 170px;
      margin: 50px 0px 50px 0px;
    }

    /* TEXTE CARD */
    .TexteAssistanceHomme,
    .TexteSupportAideFemme {
      font-family: "Times New Roman";
      font-weight: lighter;
      font-size: 14px;
    }

    /* BOUTON CARD  */
    .BtnSupportAideFemme,
    .BtnAssistanceHomme {
      outline: none;
      background: transparent;
      border: gray 1px solid;
      height: 20px;
      text-decoration: none;
      color: gray;
      font-size: x-small;
      font-family: "Times New Roman", Times, serif;
    }

    /* .BtnSupportAideFemme a,.BtnAssistanceHomme a {
text-decoration: none ;
color: gray ;
font-size: x-small ;
font-family: 'Times New Roman', Times, serif;
} */

    /*----------- HOMME -------------*/
    /* BOUTON + TEXTE HOMME */
    .BtnAssistanceHomme,
    .TexteAssistanceHomme {
      margin-left: 120px;
      margin-top: -115px;
    }

    /* IMG CARD HOMME */
    .AssistanceHomme {
      width: 115px;
    }

    /* ---------- FEMME -------------*/
    /* IMG CARD FEMME  */
    .SupportAideFemme {
      float: right;
      margin-top: 10px;
      width: 115px;
    }

    /* TEXTE FEMME */
    .TexteSupportAideFemme {
      margin-top: 58px;
      margin-left: 55px;
    }

    /* BOUTON FEMME */
    .BtnSupportAideFemme {
      margin-left: 78px;
    }
  }
</style>
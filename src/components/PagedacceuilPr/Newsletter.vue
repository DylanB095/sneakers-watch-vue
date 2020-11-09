<template>
<!-- Soumettre a l'evenement newsletter (S'INSCRIRE À LA NEWSLETTER) qui sera assosier au v-model et a (htpp://localhost:3000/....) -->
  <form @submit.prevent="newsletter">
    <div class="Newsletter">
      <div class="SinscrireNewsletter">
        <h1 class="SinscrireALaNewsletter">S'INSCRIRE À LA NEWSLETTER</h1>
        <br />
        <p class="TexteNewsletter">
          Soyez informé des nouveautés,des maintenances et des promotions de
          produits.
        </p>
        <br />
        <!-- v-model="send.email"(attibut ou proprieté venant du back), requete assosier a Axios qui va me permetre d'envoyer l'email saisie depuis mon front a mon back  -->
        <input
          class="NwsLetter"
          type="Email"
          v-model="Send.email"
          placeholder="Email"
          required
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="BtnNewsletter" type="submit">ENVOYER</button>
      </div>
    </div>
  </form>
</template>

<script>
/* AXIOS est un module qui servira a appeler/relier le back avec le front */
import axios from "axios";
export default {
  data() {
    return {
        /* v-model */
      Send: {},
    };
  },
  methods: {
    /* ROUTE NEWSLETTER (recupere la data saisie sur mon front et est generé dans mon back ) */
    /* @submit.prevent="newsletter" */
    newsletter() {
      axios
        .post("http://localhost:3000/newsletter/Abonner", this.Send)
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

.Newsletter {
  margin-top: 50px;
  background: #f5f6f9;
  width: 100%;
  height: 100%;
}

/* TITRE + TEXTE + ... */
.SinscrireNewsletter {
  text-align: center;
  padding: 50px 0;
}

/* TITRE */
.SinscrireALaNewsletter {
  color: #ff4949;
  font-family: "Times New Roman";
  font-weight: 500;
}

/* TEXTE */
.TexteNewsletter {
  color: #25272e;
  font-family: "Times New Roman";
  font-size: small;
}

/* INPUT NEWSLETTER */
.NwsLetter {
  border: black 1px solid;
  height: 30px;
  width: 280px;
  outline: none;
  padding-left: 5px;
}

/* PLACEHOLDER INPUT NEWSLETTER */
.NwsLetter::placeholder {
  color: #25272e;
  font-size: x-small;
  font-family: "Times New Roman", Times, serif;
}

/* BOUTON NEWSLETTER */
.BtnNewsletter {
  height: 33px;
  width: 80px;
  outline: #f5f6f9;
  border: #ff4949;
  background: #ff4949;
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-size: x-small;
  opacity: 0.9;
}

.BtnNewsletter:hover {
  cursor: pointer;
  opacity: 1;
  /* effet de zoom */
  transition: 0.1s;
  /*  changer la perspective de l'image*/
  transform: scale(1.015);
}

@media (max-width: 491px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .Newsletter {
    margin-top: 50px;
    background: #f5f6f9;
    width: 100%;
    height: 100%;
  }

  /* TITRE + TEXTE + ... */
  .SinscrireNewsletter {
    text-align: center;
    padding: 50px 0;
  }

  /* TITRE */
  .SinscrireALaNewsletter {
    color: #ff4949;
    font-family: "Times New Roman";
    font-size: 21px;
    font-weight: 500;
  }

  /* TEXTE */
  .TexteNewsletter {
    color: #25272e;
    font-family: "Times New Roman";
    font-size: 9px;
  }

  /* INPUT NEWSLETTER */
  .NwsLetter {
    border: black 1px solid;
    height: 20px;
    width: 230px;
    outline: none;
    padding: 0px 0px 3px 5px;
  }

  /* PLACEHOLDER INPUT NEWSLETTER */
  .NwsLetter::placeholder {
    color: #25272e;
    font-size: 7px;
    font-family: "Times New Roman", Times, serif;
  }

  /* BOUTON NEWSLETTER */
  .BtnNewsletter {
    height: 20px;
    width: 60px;
    outline: none;
    border: #ff4949;
    background: #ff4949;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-size: 7px;
    opacity: 0.9;
  }

  .BtnNewsletter:hover {
    cursor: pointer;
    opacity: 1; /* effet de zoom */
    transition: 0.1s;
    /*  changer la perspective de l'image*/
    transform: scale(1.015);
  }
}
</style>
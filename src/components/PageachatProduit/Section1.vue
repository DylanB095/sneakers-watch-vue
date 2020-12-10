

<template>
  <section>
    <div class="PRODUIT">
      <!-- DIV QUI SERT A APPELER 1 OBJET QUI CORRESPOND A MA TABLES PRODUIT -->
      <div class="CardProd">
        <!-- comment on importe une image -->
        <img
          class="ImgProd"
          :src="require(`@/assets/montres/${produit.image}`)"
          width="370"
        />
        <div class="CardProd1">
          <!-- comment on importe une image -->
          <!-- -------------MINI SLIDE--------- -->
          <img
            class="ImgProdSlide"
            :src="
              require(`@/assets/Slide_manual/${produit.image_slide_gauche}`)
            "
            width="100"
          />
          <img
            class="ImgProdSlide"
            :src="
              require(`@/assets/Slide_manual/${produit.image_slide_milieu}`)
            "
            width="100"
          />
          <img
            class="ImgProdSlide"
            :src="
              require(`@/assets/Slide_manual/${produit.image_slide_droite}`)
            "
            width="100"
          />
        </div>
      </div>
      <!-- DIV FICHE DETAILLER PRODUIT -->
      <div class="ImgTxtBtnCardProd">
        <h2 class="TextProd">{{ produit.nom }}</h2>

        <h3 class="produitachatprod">{{ produit.prix_achat_immediat }} €</h3>

        <img class="ImgEtoile" src="../../assets/Etoile-avis.png" />
        <br />
        <br />

        <h4 class="Descriptionprod">{{ produit.description }}</h4>
        <br />
        <select name="" id="">
          <option value="">selectionnez la taille</option>
        </select>

        <div class="BOUTON">
          <router-link :to="`//${produit.id}`"
            ><button class="BtnProd">ACHETER</button></router-link
          >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link :to="`//${produit.id}`"
            ><button class="BtnProd">RETOUR</button></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      produit: {},
    };
  },
  created() {
    /* AXIOS est un module qui servira a appeler/relier le back avec le front */
    this.axios
      .get(this.$apiurl + "/produit/findone/" + this.$route.params.nom)
      .then((res) => {
        this.produit = res.data.produit;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.PRODUIT{
  display: flex;
}

/* card prod */
.CardProd {
  display: flex;
  flex-direction: column;
  padding-left:200px;
  padding-top: 55px;
}
/* img card */
.ImgProd {
  border: #dedede solid 1px;
  background: black;
}

/* ----- TEXT + IMG + BOUTON CARD ------ */

/* Div parent */
.ImgTxtBtnCardProd {
padding: 100px 100px 0 50px;
}
/* IMG Etoile CARD */
.ImgEtoile {
  width: 100px;
  margin-left: -11px;
}

/* Text CARD */
.TextProd {
  font-size: 18px;
  font-family: "Times New Roman";
  font-weight: 500;
}

/* prix CARD  */
.produitachatprod {
  line-height: 35px;
  font-family: "Times New Roman";
  font-size: 16px;
  font-weight: 900;
  color: #ff4949;
}

/* Descrption CARD */
.Descriptionprod {
  font-family: "Times New Roman", Times, serif;
  font-size: 14px;
  font-weight: lighter;
  letter-spacing: 0.1px;
}
/* Btn CARD */
.BtnProd {
  font-family: "Noteworthy";
  outline: none;
  text-decoration: none;
  font-size: small;
  border: #ff4949 solid 1px;
  background-color: #25272e;
  color: #ff4949;
  width: 100px;
  height: 40px;
  opacity: 0.9;
  margin-left:15px;
}
.BtnProd:hover {
  opacity: 1;
}
.BOUTON {
 padding-top: 80px;
 text-align: center;
}



.CardProd1 {
  margin: auto;
}



</style>
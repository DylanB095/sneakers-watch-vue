<template>
  <section>
    <div class="PRODUIT">
      <!-- DIV QUI SERT A APPELER 1 OBJET QUI CORRESPOND A MA TABLES PRODUIT -->
      <div class="CardProd">
        <!-- comment on importe une image -->
        <img
          class="ImgProd"
          :src="require(`@/assets/montres/${produit.image}`)"
          width="250"
        />

        <div class="ImgTxtBtnCardProd">
          <h2 class="TextProd">{{ produit.nom }}</h2>

          <h3 class="produitachatprod">{{ produit.prix_achat_immediat }} €</h3>

          <img class="ImgEtoile" src="../../assets/Etoile-avis.png" />
          <br />
          <br />

          <h4 class="Descriptionprod">{{ produit.description }}</h4>
          <br />
          <div class="BOUTON">
            <router-link :to="`//${produit.id}`"
              ><button class="BtnProd">ENRICHIR</button></router-link
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link :to="`//${produit.id}`"
              ><button class="BtnProd">ACHETER</button></router-link
            >
          </div>
        </div>
      </div>

      <!-- V FOR POUR APPELER TOUT PRODUIT QUI CORRESPOND A MA TABLES PRODUIT -->
      <div v-for="produit in produits" :key="produit.id" class="CardProd">
        <!-- comment on importe une image -->
        <img
          class="ImgProd"
          :src="require(`@/assets/montres/${produit.image}`)"
          width="250"
        />

        <div class="ImgTxtBtnCardProd">
          <h2 class="TextProd">{{ produit.nom }}</h2>

          <h3 class="produitachatprod">{{ produit.prix_achat_immediat }} €</h3>

          <img class="ImgEtoile" src="../../assets/Etoile-avis.png" />
          <br />
          <br />

          <h4 class="Descriptionprod">{{ produit.description }}</h4>
          <br />

          <div class="BOUTON">
            <router-link :to="`//${produit.id}`"
              ><button class="BtnProd">ENRICHIR</button></router-link
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <router-link :to="`//${produit.id}`"
              ><button class="BtnProd">ACHETER</button></router-link
            >
          </div>
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
      produits: {},
    };
  },
  created() {
    /* AXIOS est un module qui servira a appeler/relier le back avec le front */
    this.axios
      .get(this.$apiurl + "/produit/findone/Hublot BigBang")
      .then((res) => {
        this.produit = res.data.produit;
      })
      .catch((err) => {
        alert(err);
      }),
      this.axios
        .get(this.$apiurl + "/produit/all/2/2")
        .then((res) => {
          this.produits = res.data.produit;
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

/* ----- CARD------ */

/* .PRODUIT {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} */

/* card prod */
.CardProd {
  display: flex;
  padding: 0 65px 0 70px;
  padding-top: 55px;
}
/* img card */
.ImgProd {
  border: #dedede solid 1px;
}

/* ----- TEXT + IMG + BOUTON CARD ------ */

/* Div parent */
.ImgTxtBtnCardProd {
  height: 100%;
  margin: 45px 0 0 50px;
}
/* IMG Etoile CARD */
.ImgEtoile {
  width: 100px;
  margin-left: -10px;
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
  font-weight: normal;
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
  font-size: x-small;
  border: #ff4949;
  background-color: #ff4949;
  color: white;
  width: 90px;
  height: 30px;
  opacity: 0.9;
}
.BtnProd:hover {
  opacity: 1;
}

@media (min-width: 768px) and (max-width: 879.9px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ----- CARD------ */

  /* .PRODUIT {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} */

  /* card prod */
  .CardProd {
    display: flex;
    padding: 0 60px 0 65px;
    padding-top: 55px;
  }
  /* img card */
  .ImgProd {
    border: #dedede solid 1px;
  }

  /* ----- TEXT + IMG + BOUTON CARD ------ */

  /* Div parent */
  .ImgTxtBtnCardProd {
    height: 100%;
    margin: 30px 0 0 45px;
  }
  /* IMG Etoile CARD */
  .ImgEtoile {
    width: 100px;
    margin-left: -10px;
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
    font-weight: normal;
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
    font-size: x-small;
    border: #ff4949;
    background-color: #ff4949;
    color: white;
    width: 85px;
    height: 25px;
    opacity: 0.9;
  }
  .BtnProd:hover {
    opacity: 1;
  }
}

@media (min-width: 700px) and (max-width: 767.9px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ----- CARD------ */

  /* .PRODUIT {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} */

  /* card prod */
  .CardProd {
    display: flex;
    padding: 0 55px 0 60px;
    padding-top: 55px;
  }
  /* img card */
  .ImgProd {
    border: #dedede solid 1px;
  }

  /* ----- TEXT + IMG + BOUTON CARD ------ */

  /* Div parent */
  .ImgTxtBtnCardProd {
    height: 100%;
    margin: 27px 0 0 40px;
  }
  /* IMG Etoile CARD */
  .ImgEtoile {
    width: 95px;
    margin-left: -10px;
  }

  /* Text CARD */
  .TextProd {
    font-size: 17px;
    font-family: "Times New Roman";
    font-weight: 500;
  }

  /* prix CARD  */
  .produitachatprod {
    line-height: 35px;
    font-family: "Times New Roman";
    font-size: 15px;
    font-weight: normal;
    color: #ff4949;
  }

  /* Descrption CARD */
  .Descriptionprod {
    font-family: "Times New Roman", Times, serif;
    font-size: 13px;
    font-weight: lighter;
    letter-spacing: 0.1px;
  }
  /* Btn CARD */
  .BtnProd {
    font-family: "Noteworthy";
    outline: none;
    text-decoration: none;
    font-size: xx-small;
    border: #ff4949;
    background-color: #ff4949;
    color: white;
    width: 82.5px;
    height: 22.5px;
    opacity: 0.9;
  }
  .BtnProd:hover {
    opacity: 1;
  }
}

@media (min-width: 492px) and (max-width: 699.9px) {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ----- CARD------ */

  .PRODUIT {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* card prod */
  .CardProd {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 65px 0 65px;
    padding-top: 55px;
  }
  /* img card */
  .ImgProd {
    border: #dedede solid 1px;
  }

  /* ----- TEXT + IMG + BOUTON CARD ------ */

  /* Div parent */
  .ImgTxtBtnCardProd {
    margin: 35px 0 0 0;
    width: 65%;
  }
  /* IMG Etoile CARD */
  .ImgEtoile {
    width: 100px;
    margin-left: auto;
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
    font-weight: normal;
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

  .BOUTON {
    display: flex;
    flex-direction: column;
    line-height: 40px;
  }
  .BtnProd {
    font-family: "Noteworthy";
    outline: none;
    text-decoration: none;
    font-size: x-small;
    border: #ff4949;
    background-color: #ff4949;
    color: white;
    width: 90px;
    height: 30px;
    opacity: 0.9;
  }
  .BtnProd:hover {
    opacity: 1;
  }
}

@media (min-width: 320px) and (max-width: 491.9px) {
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ----- CARD------ */

  .PRODUIT {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* card prod */
  .CardProd {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 30px 0 30px;
    padding-top: 55px;
  }
  /* img card */
  .ImgProd {
    border: #dedede solid 1px;
  }

  /* ----- TEXT + IMG + BOUTON CARD ------ */

  /* Div parent */
  .ImgTxtBtnCardProd {
    margin: 35px 0 0 0;
    width: 75%;
  }
  /* IMG Etoile CARD */
  .ImgEtoile {
    width: 95px;
    margin-left: auto;
  }

  /* Text CARD */
  .TextProd {
    font-size: 17px;
    font-family: "Times New Roman";
    font-weight: 500;
  }

  /* prix CARD  */
  .produitachatprod {
    line-height: 35px;
    font-family: "Times New Roman";
    font-size: 15px;
    font-weight: normal;
    color: #ff4949;
  }

  /* Descrption CARD */
  .Descriptionprod {
    font-family: "Times New Roman", Times, serif;
    font-size: 13px;
    font-weight: lighter;
    letter-spacing: 0.1px;
  }
  /* Btn CARD */

  .BOUTON {
    display: flex;
    flex-direction: column;
    line-height: 30px;
  }
  .BtnProd {
    font-family: "Noteworthy";
    outline: none;
    text-decoration: none;
    font-size: xx-small;
    border: #ff4949;
    background-color: #ff4949;
    color: white;
    width: 85px;
    height: 25px;
    opacity: 0.9;
  }
  .BtnProd:hover {
    opacity: 1;
  }
}
</style>
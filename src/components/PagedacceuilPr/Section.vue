<template>
  <section class="ContenueSection">
    <div class="TitrePRSection1">
      <h1 class="BestSeller">BEST SELLERS</h1>
      <p class="MeilleurProd">Les meilleures productions de notre part</p>
      <p class="ParaphProd">
        Des classiques aux nouveautés de la Maison<br />Sneackers Watch,
        explorez l'univers de notre site
      </p>
    </div>

    <div class="PRODUIT">
      <!-- DATA PRODUIT DE MA DB -->
      <div v-for="produit in produits" :key="produit.id" class="CardProd">
        <!-- comment on importe une image -->
        <img
          class="ImgProd"
          :src="require(`@/assets/montres/Montre-Homme/${produit.image}`)"
          width="250"
        />

        <div class="ImgTxtBtnCardProd">
          <img class="ImgEtoile" src="../../assets/Etoile-avis.png" />

          <h2 class="TextProd">{{ produit.nom }}</h2>

          <h3 class="produitachatprod">{{ produit.prix_achat_immediat }} €</h3>

          <router-link :to="`//${produit.id}`"
            ><button class="BtnProd">ENRICHIR</button></router-link
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <router-link :to="`//${produit.id}`"
            ><button class="BtnProd">ACHETER</button></router-link
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
      produits: {},
    };
  },
  created() {
    /* AXIOS est un module qui servira a appeler/relier le back avec le front */
    this.axios
      .get(this.$apiurl + "/produit/limit/4")
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
  margin: 0 ;
  padding: 0 ;
  box-sizing: border-box ;
}
/* ------TITRE + TEXTE SECTION ---------- */
.TitrePRSection1 {
  text-align: center ;
}

.BestSeller {
  margin-top: 50px ;
  font-family: "Times New Roman" ;
  font-weight: bold ;
  font-size: 42px ;
}

.MeilleurProd {
  margin-top: 5px ;
  font-family: "Times New Roman" ;
  color: #ff4949 ;
  font-size: 20px ;
}
.ParaphProd {
  margin-top: 15px ;
  font-family: "Times New Roman" ;
  color: #25272e ;
  font-size: 20px ;
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
  padding: 25px ;
  padding-top: 40px ;
}
/* img card */
.ImgProd {
  border: #dedede solid 1px ;
}

/* ----- TEXT + IMG + BOUTON CARD ------ */

/* IMG Etoile CARD */
.ImgEtoile {
  width: 80px ;
}

/* Text CARD */
.TextProd {
  font-size: 16px ;
  font-family: "Times New Roman" ;
}

/* prix CARD  */
.produitachatprod {
  line-height: 35px ;
  font-family: "Times New Roman" ;
  font-size: 14px ;
  color: #ff4949 ;
}

/* Btn CARD */
.BtnProd {
  font-family: "Noteworthy" ;
  outline: none ;
  text-decoration: none ;
  font-size: xx-small ;
  border: #ff4949;
  background-color: #ff4949 ;
  color: white ;
  width: 80px ;
  height: 20px ;
  opacity: 0.9;
}
.BtnProd:hover {
  opacity: 1;
}

@media (max-width: 397px) {
  * {
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;
  }

  .TitrePRSection1 {
    text-align: center ;
  }

  .BestSeller {
    margin-top: 50px ;
    font-family: "Times New Roman" ;
    font-weight: bold ;
    font-size: 38px ;
  }

  .MeilleurProd {
    margin-top: 5px ;
    font-family: "Times New Roman" ;
    color: #ff4949 ;
    font-size: 16px ;
  }
  .ParaphProd {
    margin-top: 15px ;
    font-family: "Times New Roman" ;
    color: #25272e ;
    font-size: 16px ;
  }
}
</style>


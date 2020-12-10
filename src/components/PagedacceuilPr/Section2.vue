<template>
  <section class="ContenueSection2">
    <div class="TitrePRSection2">
      <h1 class="ProdPop">PRODUITS POPULAIRES</h1>
      <p class="DerniereTendance">Dernières tendances des grandes marques</p>
    </div>

    <div class="PRODUIT2">
      <div v-for="produit in produits" :key="produit.id" class="CardProd2">
        <!-- comment on importe une image -->
        <img
          class="ImgProd2"
          :src="require(`@/assets/Sneakers/${produit.image}`)"
          width="270"
        />

        <div class="ImgTxtBtnCardProd2">
          <img class="ImgEtoile2" src="../../assets/Etoile-avis.png" />

          <h2 class="TextProd2">{{produit.nom}}</h2>

          <h3 class="produitachatprod2">{{ produit.prix_achat_immediat }} €</h3>

          <router-link :to="`//${produit.id}`"
            ><button class="BtnProd2">ENRICHIR</button></router-link
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <router-link :to="`//${produit.id}`"
            ><button class="BtnProd2">ACHETER</button></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { bus } from "../../main";
export default {
  data() {
    return {
      produits: {},
    };
  },
  created() {
      bus.$on('recherchedata',(data)=>{
      this.produits = data.produit
    });
    if (this.produit == null){
    /* AXIOS est un module qui servira a appeler/relier le back avec le front */
    this.axios
      .get(this.$apiurl + "/produit/all/8/4")
      .then((res) => {
        this.produits = res.data.produit;
      })
      .catch((err) => {
        alert(err);
      });
  }
  },
  methods: {
    recherchedata(produit){
      this.produits = produit
    } 
  }
};
</script>

<style scoped>
* {
  margin: 0 ;
  padding: 0 ;
  box-sizing: border-box ;
}
/* ------TITRE + TEXTE SECTION 2 ---------- */
.TitrePRSection2 {
  text-align: center ;
}

.ProdPop {
  margin-top: 50px ;
  font-family: "Times New Roman" ;
  font-weight: lighter ;
  font-size: 36px ;
  color:  #25272e;
}

.DerniereTendance {
  margin-top: 5px ;
  font-family: "Times New Roman" ;
  color: #ff4949 ;
  font-size: 16px ;
}

/* ----- CARD------ */

.PRODUIT2 {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* card prod */
.CardProd2 {
  padding: 25px ;
  padding-top: 40px ;
}
/* img card */
.ImgProd2 {
  border: #dedede solid 1px ;
}

/* ----- TEXT + IMG + BOUTON CARD ------ */

/* IMG Etoile CARD */
.ImgEtoile2 {
  width: 80px ;
}

/* Text CARD */
.TextProd2 {
  font-size: 16px ;
  font-family: "Times New Roman" ;
}

/* prix CARD  */
.produitachatprod2 {
  line-height: 35px ;
  font-family: "Times New Roman" ;
  font-size: 14px ;
  color: #ff4949 ;
}

/* Btn CARD */
.BtnProd2 {
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
.BtnProd2:hover {
  opacity: 1;
}

@media (max-width: 420px) {
    * {
  margin: 0 ;
  padding: 0 ;
  box-sizing: border-box ;
}
/* ------TITRE + TEXTE SECTION 2 ---------- */
.TitrePRSection2 {
  text-align: center ;
}

.ProdPop {
  margin-top: 50px ;
  font-family: "Times New Roman" ;
  font-weight: lighter ;
  font-size: 28px ;
  color:  #25272e;
}

.DerniereTendance {
  margin-top: 5px ;
  font-family: "Times New Roman" ;
  color: #ff4949 ;
  font-size: 12px ;
}
}


</style>

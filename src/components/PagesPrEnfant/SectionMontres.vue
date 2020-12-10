<template>
  <section>

    <div class="PRODUIT">
      <div v-for="produit in produits" :key="produit.id" class="CardProd">
        <!-- comment on importe une image -->
        <img
          class="ImgProd"
          :src="require(`@/assets/montres/${produit.image}`)"
          width="270"
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
      .get(this.$apiurl + "/produit/all/4/32")
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


</style>
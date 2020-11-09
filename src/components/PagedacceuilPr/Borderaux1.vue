<template>
  <div id="Borderau1">
   
    <div class="Icone">
      <div class="IconeContenu">
      <i class="fas fa-gem"></i>
      <br> <br>
      <p class="BorderauText">
        OFFRES SPÉCIALES <br />
        <span> Économisez gros</span>
      </p>
      </div>
    </div>

    <div class="Icone">
      <div class="IconeContenu">
      <i class="fas fa-paper-plane"></i>
       <br> <br>
      <p class="BorderauText">
        LIVRAISON GRATUITE <br />
        <span> Sur les commandes de plus de 5000 €</span>
      </p>
      </div>
    </div>

    <div class="Icone">
      <div class="IconeContenu">
      <i class="fas fa-retweet"></i>
      <br> <br>
      <p class="BorderauText">
        30 JOURS DE RETOUR <br />
        <span> Politique que nous proposons </span>
      </p>
      </div>
    </div>

    <div class="Icone">
      <div class="IconeContenu">
      <i class="fas fa-rocket"></i>
       <br> <br>
      <p class="BorderauText">
        EXPÉDITION LA PLUS RAPIDE <br />
        <span>2 jours express</span>
      </p>
      </div>
    </div>
   
  </div>
</template>
 
<style scoped>

#Borderau1 {
  margin-top: 50px ;
  background-color: #f5f6f9;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* ICONE */
.Icone .fa, .far, .fas {
    color: #ff4949;
    font-size: 20px;
}
/* ICONE + TEXTE */
.Icone{
  text-align: center;
  width: 21%;
  margin: 25px ;

}

/* TEXT */
.BorderauText{
  font-family: 'Times New Roman', Times, serif;
  font-size: 14px;
  color :#25272e ;
}
/* TEXT + SPAN */
.BorderauText span{
  font-size: 11px;
  color: gray;
}

@media (max-width:936px){
  .Icone{
    text-align: center;
    width: 26%;
    margin: 25px ;
}
}
@media (max-width:769px){
.Icone {
    text-align: center;
    width: 40%;
    margin: 25px ;
}
}
@media (max-width:491px){
.Icone {
    text-align: center;
    width: 63%;
    margin: 25px ;
}
}


</style>
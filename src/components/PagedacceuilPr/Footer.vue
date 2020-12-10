<template>

  <footer>

    <div class="FooterContenu">

      <div class="FooterElement">
        <img src="../../assets/logo sneakers watch.png" alt="Logo" width="100" height="80"><br><br>
        <img class="iconeMoyenDepaiement" src="../../assets/IconeMasterCard.png" alt="IconeMasterCard" width="40">
        <img class="iconeMoyenDepaiement" src="../../assets/IconePayPal.png" alt="IconePayPal" width="70">
        <img class="iconeMoyenDepaiement" src="../../assets/IconeVisa.png" alt="IconeVisa" width="45">
      </div>

      <div class="FooterElement">
        <p>SERVICE CLIENTS</p>
        <br>
        <ul>
          <li><a href="/APropos">À propos de nous</a></li>
          <li><a href="">F.A.Q</a></li>
          <li><a href="">Mon Compte</a></li>
          <li><a href="">Nous Contacter</a></li>
        </ul>
      </div>

      <div class="FooterElement">
        <p>RÉSEAU SOCIAUX</p>
        <br>
        <ul>
          <li><a href="">Instagram</a></li>
          <li><a href="">Twitter</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Linkedin</a></li>
        </ul>
      </div>

      <div class="FooterElement">
        <p>NOUS CONTACTER</p>
        <br>
        <i class="fas fa-map-marker-alt"></i> France <br>
        <i class="fas fa-phone"></i>+33 7 00 00 00 00 <br>
        <i class="fas fa-envelope-open-text"></i> Sneakers.w0atch@gmail.com

      </div>

    </div>

  </footer>

</template>



<style scoped>
  * {
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;
  }

 footer {
    display: flex;
  }

/* DIV FOOTER CONTENU */
  .FooterContenu {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
  }

/* DIV FOOTERELEMENT (service client ,reseau sociaux , nous contacter ) */
  .FooterElement {
    padding: 45px ;
  }
  .FooterElement p{
     color: #ff4949 ;
    font-weight: 600 ;
    font-family: 'Times New Roman', Times, serif ;
  }

/* UL LI A  (service client et reseaux sociaux */
  ul li a {
    text-decoration: none ;
    color: #25272e ;
  }

  li {
    list-style: none ;
    padding: 0px 0px 20px 0px ;
  }

/* I (nous contacter) */
  .FooterElement i {
    color: #ff4949 ;
    padding: 0px 10px 20px 0px ;
  }

/* ICONE MOYEN DE PAIEMENT */
  .iconeMoyenDepaiement {
    padding: 7px ;
  }
  @media (max-width:1023px){
    /* DIV FOOTERELEMENT (service client ,reseau sociaux , nous contacter ) */
   .FooterElement {
     text-align: center;
  }
  }
  @media (max-width:769px){
    /* DIV FOOTERELEMENT (service client ,reseau sociaux , nous contacter ) */
   .FooterElement {
    padding: 55px ;
  }
  }
</style>
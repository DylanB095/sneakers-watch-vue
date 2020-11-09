<template>
  <section class="Section3CollectionLim">
    <div class="CollectionLim">
      <h1 class="TitreCollectionLim">Collections Edition Limité</h1>
      <br>
      <p class="TexteCollectionLim">
        Chaque collection en édition limitée présentée sur<br />
        Sneackers-Watch. Tout ce qui concerne les nouvelles<br />
        collections en édition limitée n’échappe pas à la vigilance<br />
        de nos visiteurs, spécialistes de la mode
      </p>
    </div>

    <div class="IMGCollectionLim">
      <img class="CollectionLimImg" src="../../assets/ImgCollectionLim.png" alt="ImageCollectionLimitée">
    </div>
  </section>
</template>

<style scoped>
  * {
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;
  }


    /* SECTION 3 */
  .Section3CollectionLim {
    display: flex ;
    width: 100% ;
    height: 100% ;
  }
  
/* DIV COLLECTION LIM (H1 + Texte) */
.CollectionLim {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  /* TITRE + TEXTE */
  .TitreCollectionLim,
  .TexteCollectionLim {
    margin-left: 50px ;
    font-family: "Times New Roman" ;
  }
  /* TITRE */
  .TitreCollectionLim {
    margin-top: 250px ;
    color: #ff4949 ;
    font-weight: lighter ;
    font-size: 34px ;
    letter-spacing: 1px ;
  }

  /* TEXTE */
  .TexteCollectionLim {
    font-size: 17px ;
    font-weight: lighter ;
    color: #25272e ;
  }

/* DIV IMGCOLLECTIONLIM (IMG) */
 .IMGCollectionLim {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  /* IMG */
  .CollectionLimImg {
    width: 580px ;
    height: 580px ;
    margin-top: 80px 
  }

  
  @media (max-width:1050px) {
     /* TITRE */
  .TitreCollectionLim {
    margin-top: 250px ;
    color: #ff4949 ;
    font-weight: lighter ;
    font-size: 30px ;
    letter-spacing: 1px ;
    text-align: center;
  }

  /* TEXTE */
  .TexteCollectionLim {
 font-size: 16px ;
    text-align: center;
    font-weight: lighter ;
    color: #25272e ;
  }

  /* IMG */
  .CollectionLimImg {
      width: 430px ;
    height: 455px ;
    margin-top: 80px ;
  }
  }

  @media (max-width:875px){
    /* SECTION 3 */
  .Section3CollectionLim {
    display: flex ;
    width: 100% ;
    height: 100% ;
    flex-direction: column;
    align-items: center;
  }

/* DIV COLLECTION LIM (H1 + Texte) */
.CollectionLim{
    width: 100% ; 
    display: flex ;
    flex-direction: column ;
    justify-content: flex-start ;
}

  /* TITRE + TEXTE */
.TitreCollectionLim, .TexteCollectionLim {
    margin-left: 0px ;
    font-family: "Times New Roman" ;
}

/* Titre */
.TitreCollectionLim {
    margin-top: 70px ;
    color: #ff4949 ;
    font-weight: lighter ;
    font-size: 33px ;
    letter-spacing: 1px ;
    text-align: center ;
}
/* Texte */
.TexteCollectionLim {
    font-size: 16px ;
    text-align: center ;
    font-weight: lighter ;
    color: #25272e ;  
}


/* DIV IMGCOLLECTIONLIM (IMG) */
.IMGCollectionLim{
     width: 0% ; 
     display: flex ; 
     justify-content: center ; 
}
  /* IMG */
  .CollectionLimImg {
    width: 480px ;
    height: 480px ;
    margin-top: 80px ;
}
  }

  @media (max-width:526px){
    /* SECTION 3 */
  .Section3CollectionLim {
    display: flex ;
    width: 100% ;
    height: 100% ;
    flex-direction: column;
    align-items: center;
  }

/* DIV COLLECTION LIM (H1 + Texte) */
.CollectionLim{
    width: 100% ; 
    display: flex ;
    flex-direction: column ;
    justify-content: flex-start ;
}
/* TITRE + TEXTE */
.TitreCollectionLim, .TexteCollectionLim {
    margin-left: 0px ;
    font-family: "Times New Roman" ;
}
  /* TITRE */
.TitreCollectionLim {
    margin-top: 70px ;
    color: #ff4949 ;
    font-weight: lighter ;
    font-size: 24px ;
    letter-spacing: 1px ;
    text-align: center ;
}
/* TEXTE */
.TexteCollectionLim {
    font-size: 13px ;
    text-align: center ;
    font-weight: lighter ;
    color: #25272e ;  
}

/* DIV IMGCOLLECTIONLIM (IMG) */
.IMGCollectionLim {
     width: 0% ; 
     display: flex ; 
     justify-content: center ; 
}

  /* IMG */
  .CollectionLimImg {
       width: 280px ;
    height: 310px ;
    margin-top: 80px ;
}




  }
</style>
<template>
  <header id="Header">
  </header>
</template>
            
<style scoped>


@media (min-width: 768px)  {
  * {
  margin: 0 ;
  padding: 0 ;
  box-sizing: border-box ;
}
  /* HEADER AU DELAS DE 768px */
  #Header {
    background-image: url("../../assets/Header_formatPC_PagesNosMontres.jpg") ;
    width: 100% ;
    height: 100vh ;
    background-size: cover ;
    background-position: center ;
    background-repeat: no-repeat ;
  }
}

@media (min-width: 480px) and (max-width: 767.9px) {
  * {
  margin: 0 ;
  padding: 0 ;
  box-sizing: border-box ;
}
/* HEADER ENTRE 480 px ET 767.9px */
  #Header {
    background-image: url("../../assets/Header_formatTablette_PagesNosMontres.jpg") ;
    width: 100% ;
    height: 100vh ;
    background-size: cover ;
    background-position: center ;
    background-repeat: no-repeat ;
  }
}

@media (min-width: 320px) and (max-width: 479.9px) {
  * {
    margin: 0 ;
    padding: 0 ;
    box-sizing: border-box ;
  }
 /* HEADER ENTRE 320 px ET 479.9px */ 
  #Header {
    background-image: url("../../assets/Header_formatSmartphone_PageNosMontres.jpg") ;
    width: 100% ;
    height: 100vh ;
    background-size: cover ;
    background-position: center ;
    background-repeat: no-repeat ;
  }
}
</style>
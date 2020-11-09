<template>
    <section id="sectionDeuxAPropos">
        <h1 class="sectionDeuxAPropos"> NOS MARQUES </h1>
        <div class="sectionlogomarques">
            <div class="logomarques">
                <img src="../../assets/NosMarques/Breitling.png" width="100"  alt="">
            </div>
            <div class="logomarques">
                <img src="../../assets/NosMarques/rolex.png" width="100" alt="">
            </div>
             <div class="logomarques">
                <img src="../../assets/NosMarques/Burberry.png" width="100" alt="">
            </div>
            <div class="logomarques">
                <img src="../../assets/NosMarques/Logo_Audemars_Piguet.png" width="100" alt="">
            </div>
            <div class="logomarques">
                <img src="../../assets/NosMarques/hublot_square.png" width="100" alt="">
            </div>
            <div class="logomarques">
                <img src="../../assets/NosMarques/Pierre hardy.png" width="100" alt="">
            </div>
             <div class="logomarques">
                <img src="../../assets/NosMarques/Yeezy.png" width="100" alt="">
            </div>
              <div class="logomarques">
                <img src="../../assets/NosMarques/off-white.png" width="100" alt="">
            </div>
        </div>
        <br>
        <br>
    </section>
</template>
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#sectionDeuxAPropos{
   background: #dcdcdc;
   padding: 36px 0px;
}
#sectionDeuxAPropos .sectionDeuxAPropos {
    text-align: center;
    font-family: "times new roman";
    font-size: 37px;
    color: #25272e;
}
.sectionlogomarques{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.logomarques{
   padding-top: 40px;
}
.logomarques:hover{
   padding-top: 40px;
   /* effet de zoom */
   transition: .1s; 
   /*  changer la perspective de l'image*/
   transform: scale(1.15);
}
</style>
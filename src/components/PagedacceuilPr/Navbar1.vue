<template>
<nav class="Premiere">
      <div class="Contact">
        <p >
          <i class="fas fa-phone"  style="transform: rotate(90deg);"></i>+33 7 00 00 00 00 <span class="Trait" ><i class="fas fa-envelope"></i>Sneakers.w0atch@gmail.com</span> 
        </p>
      </div>
      <div class="Reseaux">
       <a href=""><i class="fab fa-facebook-f"></i></a>
       <a href=""><i class="fab fa-twitter"></i></a>
       <a href=""><i class="fab fa-instagram"></i></a>
       <a href=""><i class="fab fa-linkedin-in"></i></a>
      </div>
    </nav>
  
</template>

<style>


* {
  margin: 0 ;
  padding: 0 ;
  box-sizing: border-box;
}

/*-------NAVBAR------*/
.Premiere {
  background-color: black ;
  height: 50px ;
  width: 100% ;
  display: flex ;
}
/*--- COULEUR ICONES---- */
 .fa-phone,.fa-envelope,.fa-facebook-f,.fa-twitter,.fa-instagram,.fa-linkedin-in{
  color: #ff4949 ;
}
/*---CONTACT----*/
.Contact {
  display: flex ;
  justify-content: flex-start;
  width: 50% ;
  color: #dcdcdc ;
}
.Trait {
 border-left: 1px solid ;
 /* padding-left: 0px ; */
}
/*----RESEAU----*/
.Reseaux {
  display: flex ;
  justify-content: flex-end ;
  width: 50% ;
}
/*--- AGENCEMENT RESEAU + CONTACT ----*/
.Reseaux i, .Contact i {
  margin: 12.5px 10px 0px 8px ;
}

@media (min-width:463px) and (max-width:767.90px) {

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*-------NAVBAR------*/
.Premiere {
  background-color: black ;
  height: 40px ;
  width: 100% ;
  display: flex ;
}

/*--- COULEUR ICONES---- */
 .fa-phone,.fa-envelope,.fa-facebook-f,.fa-twitter,.fa-instagram,.fa-linkedin-in{
  color: #ff4949 ;
}

/*---CONTACT----*/
.Contact {
  display: flex;
  justify-content: flex-start;
  width: 50%;
  color: #dcdcdc;
  font-size: 10px;
}
.Trait {
 border-left: 1px solid;
 padding-left: 1px;
/*margin-left: 1px; */
}
/*----RESEAU----*/
.Reseaux {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  font-size: 10px;
}
/*--- AGENCEMENT RESEAU + CONTACT ----*/
.Reseaux i, .Contact i {
  margin: 11.5px 3.5px 0px 3.5px;
}
}

@media (min-width:320px) and (max-width:462.90px) {

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*-------NAVBAR------*/
.Premiere {
  background-color: black;
  height: 35px;
  width: 100%;
  display: flex;
}
/*--- COULEUR ICONES---- */
 .fa-phone,.fa-envelope,.fa-facebook-f,.fa-twitter,.fa-instagram,.fa-linkedin-in{
  color: #ff4949;
}

/*---CONTACT----*/
.Contact {
  display: flex;
  justify-content: flex-start;
  width: 50%;
  color: #dcdcdc;
  font-size: 7px;
}
.Trait {
 border-left: 1px solid;
 /* padding-left: 2px; */
 margin-left: 0.5px;
}
/*----RESEAU----*/
.Reseaux {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  font-size: 7px;
}
/*--- AGENCEMENT RESEAU + CONTACT ----*/
.Reseaux i, .Contact i {
  margin: 11.5px 2px 0px 2px;
}
}


</style>
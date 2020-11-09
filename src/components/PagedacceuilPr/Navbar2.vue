<template>
<!-- DIV NAVBAR -->
<nav class="Deuxieme">
  <!-- DIV QUI ME SERVIRA DE PARAMETRER MON LOGO -->
      <div class="Logo">
        <img id="LogoS" src="../../assets/logo sneakers watch.png" alt="LogoSneakers" >
      </div>
        <!-- DIV DE MES HOMES FORMAT PC -->
      <div class="Home" >
          <ul>
             <li><a href="">ACCEUIL</a></li> 
             <li><a href="">FEMME</a></li>
             <li><a href="">HOMME</a></li>  
             <li><a href="">ENFANT</a></li> 
             <li><a href="">NOS MONTRES</a></li> 
          </ul>
          </div>
          <!-- ------------- FORMAT PC /TABLETTE /SMARTPHONE ------------------------------ -->
          <div class="IconeNav2">
              <a href=""><i class="fas fa-shopping-cart"></i></a>
              <a href=""><i class="fas fa-search"></i></a>
              </div>

              <!-- ----------------------------------- -->
 <!-- DROPDOWN MEDIA TABLETTE / SMARTPHONE BOUTON USER -->
               <div class="dropdown">
                  <button class="dropbtn" style="cursor: pointer" >
                     <i class="fas fa-user"></i>
                  </button>
              <div class="dropdown-content">
                   <a href="">S'inscrire</a>
                   <a href="">Mon compte</a>
              </div>
              </div>
             <!-------------- FORMAT PC---------------------------->
              <div class="dropdown1">
                  <button class="dropbtn1" style="cursor: pointer">
                     <i class="fas fa-bars"></i>
                  </button>
              <div class="dropdown-content1">
                   <a href="">S'inscrire</a>
                   <a href="">Mon compte</a>
              </div>
              </div>
              <!-- DROPDOWN MEDIA TABLETTE / SMARTPHONE BURGER-->
               <div class="dropdown2">
                  <button class="dropbtn2" style="cursor: pointer">
                     <i class="fas fa-bars"></i>
                  </button>
              <div class="dropdown-content2">
                 <ul>
             <li><a href="">ACCEUIL</a></li> 
             <li><a href="">FEMME</a></li>
             <li><a href="">HOMME</a></li>  
             <li><a href="">ENFANT</a></li> 
             <li><a href="">NOS MONTRES</a></li> 
          </ul>
              </div>
              </div>
</nav>
  
</template>

<script>

</script>
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*-------NAVBAR------*/
.Deuxieme {
  background-color: white;
  height: 100px;
  width: 100%;
  display: flex;
}

/*-----LOGO-----*/
.Logo {
    width:25%;
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px 0px 50px;
}
#LogoS {
    width:100px ;
    height: 80px ;
}

/*------HOME----*/
.Home {
    width: 50%;
}
.Home ul {
    justify-content: center;
    display: flex;
    list-style: none;
    margin-top: 40px;
}
 .Home ul li a {
    text-decoration: none;
    font-family: "Noteworthy";
    font-size: 13px;
    color: #25272e;
    margin-right: 30px; 
}
.Home ul li a:hover {
 color: #FF4949;
}

/*-----IconeNav2-----*/
.IconeNav2 {
    width: 25%;
    display: flex;
    justify-content: flex-end;
}
.IconeNav2 a i  {
padding: 45px 5px 0px 10px;
color: #25272e;
font-size: 15px;
}

/*------------------BURGER S'inscrire/Mon compte formart PC-------------------------*/
 /* dropdown container  */
.dropdown1 {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown1 .dropbtn1 {
  border: none;
  outline: none;
  color: #25272e;
  padding: 44.5px 25px 0px 10px;
  background-color: inherit;
}

/* Dropdown content masquée par default */
.dropdown-content1 {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 85px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content1 a{
  float: none;
  color: black;
  font-size: 11px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content1 a:hover {
  background-color: #dcdcdc;
  color: #FF4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown1:hover .dropdown-content1 {
  display: block; 
}

/*-------------ACCOUNT S'inscrire/Mon compte TABLETTE/SMARTPHONE NON AFFICHER--------------*/
/* dropdown container  */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  border: none;
  outline: none;
  color: #25272e;
  padding: 44.5px 25px 0px 10px;
  background-color: inherit;
  display: none;
}

/* Dropdown content masquée par default */
.dropdown-content {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 85px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content a {
  float: none;
  color: black;
  font-size: 11px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content a:hover {
  background-color: #dcdcdc;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown:hover .dropdown-content {
  display: block; 
}

/*------------- BURGER HOMES TABLETTE SMARTPHONE NON AFFICHER-------------*/
/* dropdown container  */
.dropdown2 {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown2 .dropbtn2 {
  border: none;
  outline: none;
  color: #25272e;
  padding: 44.5px 25px 0px 10px;
  background-color: inherit;
  display: none;
}

/* Dropdown content masquée par default */
.dropdown-content2 {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 85px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content2 ul li a {
  float: none;
  color: black;
  font-size: 11px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content2 ul li {
  list-style: none;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content2 ul li a:hover {
  background-color: #dcdcdc;
  color: #FF4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown2:hover .dropdown-content2 {
  display: block; 
}

@media (min-width:768px) and (max-width:882.90px) {

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*-------NAVBAR------*/
.Deuxieme {
  background-color: white;
  height: 90px;
  width: 100%;
  display: flex;
}

/*-----LOGO-----*/
.Logo {
    width:25%;
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px 0px 40px;
}
#LogoS {
    width:80px ;
    height: 60px ;
}

/*------HOME----*/
.Home {
    width: 50%;
}
.Home ul {
    justify-content: center;
    display: flex;
    list-style: none;
    margin-top: 30px;
}
 .Home ul li a {
    text-decoration: none;
    font-family: "Noteworthy";
    color: #25272e;
    margin-right: 26px;
    font-size: 11.5px;
}
.Home ul li a:hover {
 color: #FF4949;
}

/*-----IconeNav2-----*/
.IconeNav2 {
    width: 25%;
    display: flex;
    justify-content: flex-end;
}
.IconeNav2 a i {
padding: 35px 8px 0px 8px;
color: #25272e;
font-size: 12px;
}

/*------------------BURGER S'inscrire/Mon compte formart PC-------------------------*/
/* dropdown container */
.dropdown1 {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown1 .dropbtn1 {
  border: none;
  outline: none;
  color: #25272e;
  padding: 34px 15px 0px 8px;
  background-color: inherit;
  font-size:12px;
}

/* Dropdown content masquée par default */
.dropdown-content1 {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content1 a {
  float: none;
  color: black;
  font-size: 10px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content1 a:hover {
  background-color: #dcdcdc;
  color: #FF4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown1:hover .dropdown-content1 {
  display: block; 
}

/*-------------ACCOUNT S'inscrire/Mon compte TABLETTE/SMARTPHONE NON AFFICHER--------------*/
/* dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  border: none;
  outline: none;
  color: #25272e;
  padding: 34px 15px 0px 8px;
  background-color: inherit;
  font-size:12px;
  display:none;
}

/* Dropdown content masquée par default */
.dropdown-content {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content a {
  float: none;
  color: black;
  font-size: 10px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content a:hover {
  background-color: #dcdcdc;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown:hover .dropdown-content {
  display: block; 
}

/*------------- BURGER HOMES TABLETTE/SMARTPHONE NON AFFICHER-------------*/
/* dropdown container */
.dropdown2 {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown2 .dropbtn2 {
  border: none;
  outline: none;
  color: #25272e;
  padding: 34px 15px 0px 8px;
  background-color: inherit;
  font-size:12px;
  display:none;
}

/* Dropdown content masquée par default */
.dropdown-content2 {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content2 ul li a {
  float: none;
  color: black;
  font-size: 10px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content2 ul li {
  list-style: none;
}
/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content2 ul li a:hover {
  background-color: #dcdcdc;
  color: #FF4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown2:hover .dropdown-content2 {
  display: block; 
}
}

@media (min-width: 480px) and (max-width:767.90px) {

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*-------NAVBAR------*/
.Deuxieme {
  background-color: white;
  height: 80px;
  width: 100%;
  display: flex;
}

/*-----LOGO-----*/
.Logo {
    width:25%;
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px 0px 30px;
}
#LogoS {
    width:80px ;
    height: 60px ;
}

/*------HOME NON AFFICHER----*/
.Home {
    width: 50%;
}
.Home ul {
    justify-content: center;
    display: flex;
    list-style: none;
    margin-top: 30px;
}
 .Home ul li a {
    text-decoration: none;
    font-family: "Noteworthy";
    color: #25272e;
    margin-right: 26px;
    font-size: 11.5px;
    display: none;
}
.Home ul li a:hover {
 color: #FF4949;
}

/*-----IconeNav2-----*/
.IconeNav2 {
    width: 25%;
    display: flex;
    justify-content: flex-end;
}
.IconeNav2 a i {
padding: 35px 8px 0px 8px;
color: #25272e;
font-size: 12px;
}

/*------------------BURGER ACCOUNT PC NON AFICHER-------------------------*/
/* dropdown container */
.dropdown1 {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown1 .dropbtn1 {
  border: none;
  outline: none;
  color: #25272e;
  padding: 34px 15px 0px 8px;
  background-color: inherit;
  font-size:12px;
  display: none;
}

/* Dropdown content masquée par default */
.dropdown-content1 {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content1 a {
  float: none;
  color: black;
  font-size: 10px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content1 a:hover {
  background-color: #dcdcdc;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown1:hover .dropdown-content1 {
  display: block; 
}

/*-------------ACCOUNT TABLETTE SMARTPHONE--------------*/
/* dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  border: none;
  outline: none;
  color: #25272e;
  padding: 34px 15px 0px 8px;
  background-color: inherit;
  font-size:12px;
  display:block;
}

/* Dropdown content masquée par default */
.dropdown-content {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content a {
  float: none;
  color: black;
  font-size: 10px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content a:hover {
  background-color: #dcdcdc;
  color: #FF4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown:hover .dropdown-content {
  display: block; 
}

/*------------- BURGER HOMES TABLETTE SMARTPHONE-------------*/
/* dropdown container */
.dropdown2 {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown2 .dropbtn2 {
  border: none;
  outline: none;
  color: #25272e;
  padding: 34px 15px 0px 5px;
  background-color: inherit;
  font-size:12px;
  display:block;
  font-family: inherit; /*Important pour l’alignement vertical sur les téléphones mobiles*/
  margin: 0; /* Important pour l’alignement vertical sur les téléphones mobiles */
}

/* Dropdown content masquée par default */
.dropdown-content2 {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content2 ul li a {
  float: none;
  color: black;
  font-size: 8px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content2 ul li {
  list-style: none;
}
/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content2 ul li a:hover {
  background-color: #dcdcdc;
  color: #FF4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown2:hover .dropdown-content2 {
  display: block; 
}
}

@media (min-width: 320px) and (max-width:479.90px) {

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*-------NAVBAR------*/
.Deuxieme {
  background-color: white;
  height: 70px;
  width: 100%;
  display: flex;
}

/*-----LOGO-----*/
.Logo {
    width:25%;
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px 0px 20px;
}
#LogoS {
    width:65px ;
    height: 50px ;
}

/*------HOME NON AFIICHER----*/
.Home {
    width: 50%;
}
.Home ul {
    justify-content: center;
    display: flex;
    list-style: none;
    margin-top: 30px;
}
 .Home ul li a {
    text-decoration: none;
    font-family: "Noteworthy";
    color: #25272e;
    margin-right: 26px;
    font-size: 11.5px;
    display: none;
}
.Home ul li a:hover {
 color: #FF4949;
}

/*-----IconeNav2-----*/
.IconeNav2 {
    width: 25%;
    display: flex;
    justify-content: flex-end;
}
.IconeNav2 a i {
padding: 30px 5px 0px 5px;
color: #25272e;
font-size: 11px;
}

/*------------------BURGER ACCOUNT PC NON AFFICHER-------------------------*/
/* dropdown container */
.dropdown1 {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown1 .dropbtn1 {
  border: none;
  outline: none;
  color: #25272e;
  padding: 34px 15px 0px 8px;
  background-color: inherit;
  font-size:12px;
  display: none;
}

/* Dropdown content masquée par default */
.dropdown-content1 {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content1 a {
  float: none;
  color: black;
  font-size: 10px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content1 a:hover {
  background-color: #dcdcdc;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown1:hover .dropdown-content1 {
  display: block; 
}

/*-------------ACCOUNT TABLETTE SMARTPHONE--------------*/
/* dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  border: none;
  outline: none;
  color: #25272e;
  padding: 30px 5px 0px 5px;
  background-color: inherit;
  font-size:11px;
  display:block;
  font-family: inherit; /*Important pour l’alignement vertical sur les téléphones mobiles*/
  margin: 0; /* Important pour l’alignement vertical sur les téléphones mobiles */
}

/* Dropdown content masquée par default */
.dropdown-content {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content a {
  float: none;
  color: black;
  font-size: 8px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content a:hover {
  background-color: #dcdcdc;
  color: #FF4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown:hover .dropdown-content {
  display: block; 
}

/*------------- BURGER HOMES TABLETTE SMARTPHONE-------------*/
/* dropdown container */
.dropdown2 {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown2 .dropbtn2 {
  border: none;
  outline: none;
  color: #25272e;
  padding: 30px 15px 0px 8px;
  background-color: inherit;
  font-size:11px;
  display:block;
  font-family: inherit; /*Important pour l’alignement vertical sur les téléphones mobiles*/
  margin: 0; /* Important pour l’alignement vertical sur les téléphones mobiles */
}

/* Dropdown content masquée par default */
.dropdown-content2 {
  display: none;
  position: absolute;
  background-color:white;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right:0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content2 ul li a {
  float: none;
  color: black;
  font-size: 7px;
  font-family:"Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content2 ul li {
  list-style: none;
}
/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content2 ul li a:hover {
  background-color: #dcdcdc;
  color: #FF4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown2:hover .dropdown-content2 {
  display: block; 
}
}






</style>
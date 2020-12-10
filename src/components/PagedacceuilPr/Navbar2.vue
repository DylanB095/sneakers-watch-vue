<template>
  <form @submit.prevent="search">
    <nav class="Deuxieme">
      <!----------------------------------- LOGO NAVBAR -------------------------------------->

      <div class="Logo">
        <a href="/#"><img
          id="LogoS"
          src="../../assets/logo sneakers watch.png"
          alt="LogoSneakers"
          
        /></a>
      </div>

      <!---------------------------------------- MENU --------------------------------------->

      <div class="Menu">
        <ul>
          <li><a href="/#">ACCEUIL</a></li>
          <li><a href="/femme">FEMME</a></li>
          <li><a href="/homme">HOMME</a></li>
          <li><a href="/enfant">ENFANT</a></li>
          <li><a href="/nosmontres">NOS MONTRES</a></li>
        </ul>
      </div>

      <!-------------------------------------- RECHERCHE -------------------------------------->

      <div class="ContainerRecherche">
        <input type="text" placeholder="Rech.." v-model="find" required />
        <div class="IconRecherche">
          <i class="fas fa-search" style="cursor: pointer"></i>
        </div>
        <i class="fas fa-shopping-cart panier" style="cursor: pointer"></i>
      </div>

      <!-------------------------------------- DROPDOWN -------------------------------------->

      <div class="dropdown">
        <button class="dropbtn" style="cursor: pointer">
          <i class="fas fa-user"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">S'inscrire</a>
          <a href="#">Mon compte</a>
        </div>
      </div>

      <div class="dropdown1">
        <button class="dropbtn1" style="cursor: pointer">
          <i class="fas fa-bars"></i>
        </button>
        <div class="dropdown-content1">
          <a href="#">S'inscrire</a>
          <a href="#">Mon compte</a>
        </div>
      </div>

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
  </form>
</template>
<script>
import axios from "axios";
import $ from "jquery";
  import { bus } from "../../main";

export default {
  data() {
    return {
      /* v-model */
      recherche: {},
      find: "",
    };
  },
  methods: {
    /* ROUTE search (recupere la data saisie sur mon front et est generé dans mon back ) */
    /* @submit.prevent="search" */
    search() {
      axios
        .get(this.$apiurl + "/produit/Recherche/"+ this.find)
        .then((res) => {
          console.log(res);
          this.recherche = res.data;
          this.recherchedata(this.recherche)
          // window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    recherchedata(event) {
     bus.$emit('recherchedata',event)
   },
  },

  /* ONCLICK DE L'ICONE SEARCH */
  mounted() {
    $(document).ready(function () {
      $(".fa-search").click(function () {
        $(".IconRecherche").toggleClass("active");
        $("input[type='text']").toggleClass("active");
      });
    });
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*---------------------------- NAVBAR ------------------------------- */

.Deuxieme {
  display: flex;
  padding: 0 30px;
  background: white;
  height: 100px;
  width: 100%;
}

/*---------------------------- LOGO ------------------------------- */

.Logo {
  width: 20%;
  display: flex;
  justify-content: flex-start;
  padding: 10px 0px 0px 15px;
}

#LogoS {
  width: 100px;
  height: 80px;
}

/*---------------------------- MENU ------------------------------- */

.Menu {
  width: 55%;
}

.Menu ul {
  justify-content: center;
  display: flex;
  list-style: none;
  margin-top: 40px;
}

.Menu ul li a {
  text-decoration: none;
  font-family: "Noteworthy";
  font-size: 13px;
  color: #25272e;
  margin-right: 30px;
}

.Menu ul li a:hover {
  color: #ff4949;
}

/*---------------------------- RECHERCHE ------------------------------- */

.ContainerRecherche {
  width: 19%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

.ContainerRecherche input[type="text"] {
  border: 0;
  padding: 0;
  background-color: #f5f6f9;
  width: 0px;
  height: 35px;
  border-radius: 3px;
  transition: all 0.3s ease;
  outline: none;
}

.ContainerRecherche .IconRecherche i {
  padding: 7px 5px 0px 10px;
  color: #25272e;
  font-size: 15px;
}

.ContainerRecherche i {
  padding: 2px 5px 0px 10px;
  color: #25272e;
  font-size: 15px;
}

.ContainerRecherche .IconRecherche i.active {
  background: #062333;
  transition: all 0.3s ease;
}

.ContainerRecherche input[type="text"].active {
  width: 125px;
  padding: 0 10px;
  transition: all 0.5s 0.2s ease;
}

/*------------------BURGER-------------------------*/
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
  background-color: white;
  min-width: 85px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content1 a {
  float: none;
  color: black;
  font-size: 11px;
  font-family: "Noteworthy";
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
.dropdown-content1 a:hover {
  background-color: #dcdcdc;
  color: #ff4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown1:hover .dropdown-content1 {
  display: block;
}

/*-------------ACCOUNT--------------*/
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
  background-color: white;
  min-width: 85px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content a {
  float: none;
  color: black;
  font-size: 11px;
  font-family: "Noteworthy";
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

/*------------- BURGER Menu-------------*/
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
  background-color: white;
  min-width: 85px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0px;
}

/* Liens à l’intérieur de la liste déroulante */
.dropdown-content2 ul li a {
  float: none;
  color: black;
  font-size: 11px;
  font-family: "Noteworthy";
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
  color: #ff4949;
}

/* Afficher le menu déroulant en vol stationnaire (hover) */
.dropdown2:hover .dropdown-content2 {
  display: block;
}

@media (min-width: 768px) and (max-width: 882.9px) {
  /*---------------------------- NAVBAR ------------------------------- */

  .Deuxieme {
    background: white;
    height: 90px;
    width: 100%;
    display: flex;
  }

  /*---------------------------- LOGO ------------------------------- */

  .Logo {
    width: 20%;
    display: flex;
    justify-content: flex-start;
  }

  .Logo {
    padding: 10px 0px 0px 0px;
  }

  #LogoS {
    width: 80px;
    height: 60px;
  }

  /*---------------------------- MENU ------------------------------- */

  .Menu {
    width: 58%;
  }

  .Menu ul {
    justify-content: center;
    display: flex;
    list-style: none;
    margin-top: 30px;
  }

  .Menu ul li a {
    text-decoration: none;
    font-family: "Noteworthy";
    color: #25272e;
    margin-right: 26px;
    font-size: 11.5px;
  }

  .Menu ul li a:hover {
    color: #ff4949;
  }

  /*---------------------------- RECHERCHE ------------------------------- */

  .ContainerRecherche input[type="text"].active {
    width: 90px;
    margin-top: -8px;
    outline: none;
  }

  .IconRecherche {
    margin-top: -9px;
  }

  .ContainerRecherche .IconRecherche i {
    padding: 0px 15px 0px 8px;
    font-size: 12px;
  }

  .ContainerRecherche i {
    padding: 0px 15px 0px 8px;
    font-size: 12px;
    margin-top: -8px;
  }

  .ContainerRecherche {
    width: 17%;
  }

  /*--------------------------------- DROPDOWN BURGER ---------------------------------*/

  /* Dropdown button */
  .dropdown1 .dropbtn1 {
    padding: 34px 15px 0px 8px;
    font-size: 12px;
  }

  /* Dropdown content masquée par default */
  .dropdown-content1 {
    min-width: 80px;
  }

  /* Liens à l’intérieur de la liste déroulante */
  .dropdown-content1 a {
    float: none;
    color: black;
    font-size: 10px;
    font-family: "Noteworthy";
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
  .dropdown-content1 a:hover {
    background-color: #dcdcdc;
    color: #ff4949;
  }

  /* Afficher le menu déroulant en vol stationnaire (hover) */
  .dropdown1:hover .dropdown-content1 {
    display: block;
  }

  /*---------------------------------- DROPDOWN ACCOUNT -------------------------------*/

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
    font-size: 12px;
    display: none;
  }

  /* Dropdown content masquée par default */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0px;
  }

  /* Liens à l’intérieur de la liste déroulante */
  .dropdown-content a {
    float: none;
    color: black;
    font-size: 10px;
    font-family: "Noteworthy";
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
  .dropdown-content a:hover {
    background-color: #dcdcdc;
    color: #ff4949;
  }

  /* Afficher le menu déroulant en vol stationnaire (hover) */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /*------------------------------- BURGER MENU ----------------------------------*/

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
    font-size: 12px;
    display: none;
  }

  /* Dropdown content masquée par default */
  .dropdown-content2 {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0px;
  }

  /* Liens à l’intérieur de la liste déroulante */
  .dropdown-content2 ul li a {
    float: none;
    color: black;
    font-size: 10px;
    font-family: "Noteworthy";
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
    color: #ff4949;
  }

  /* Afficher le menu déroulant en vol stationnaire (hover) */
  .dropdown2:hover .dropdown-content2 {
    display: block;
  }
}

@media (min-width: 480px) and (max-width: 767.9px) {
  /*---------------------------- NAVBAR ------------------------------- */

  .Deuxieme {
    background: white;
    height: 80px;
    width: 100%;
    display: flex;
  }

  /*---------------------------- LOGO ------------------------------- */

  .Logo {
    width: 25%;
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px 0px 30px;
  }

  #LogoS {
    width: 80px;
    height: 60px;
  }

  .Logo {
    padding: 10px 0px 0px 0px;
  }

  /*---------------------------- MENU ------------------------------- */

  .Menu {
    width: 50%;
    display: none;
  }

  .Menu ul {
    justify-content: center;
    display: flex;
    list-style: none;
    margin-top: 30px;
  }

  .Menu ul li a {
    text-decoration: none;
    font-family: "Noteworthy";
    color: #25272e;
    margin-right: 26px;
    font-size: 11.5px;
    display: none;
  }

  .Menu ul li a:hover {
    color: #ff4949;
  }

  /*---------------------------- RECHERCHE ------------------------------- */

  .ContainerRecherche input[type="text"].active {
    width: 130px;
    outline: none;
  }

  .ContainerRecherche .IconRecherche i {
    padding: 0px 15px 0px 5px;
    font-size: 12px;
  }

  .ContainerRecherche i {
    padding: 2px 15px 0px 5px;
    font-size: 12px;
  }

  .ContainerRecherche {
    width: 90%;
  }

  /*------------------------------- DROPDOWN ----------------------------------*/

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
    font-size: 12px;
    display: none;
  }

  /* Dropdown content masquée par default */
  .dropdown-content1 {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0px;
  }

  /* Liens à l’intérieur de la liste déroulante */
  .dropdown-content1 a {
    float: none;
    color: black;
    font-size: 10px;
    font-family: "Noteworthy";
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
  .dropdown-content1 a:hover {
    background-color: #dcdcdc;
    color: #ff4949;
  }

  /* Afficher le menu déroulant en vol stationnaire (hover) */
  .dropdown1:hover .dropdown-content1 {
    display: block;
  }

  /*---------------------------------- DROPDOWN ACCOUNT ------------------------------------*/

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
    font-size: 12px;
    display: block;
  }

  /* Dropdown content masquée par default */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0px;
  }

  /* Liens à l’intérieur de la liste déroulante */
  .dropdown-content a {
    float: none;
    color: black;
    font-size: 10px;
    font-family: "Noteworthy";
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
  .dropdown-content a:hover {
    background-color: #dcdcdc;
    color: #ff4949;
  }

  /* Afficher le menu déroulant en vol stationnaire (hover) */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /*------------------------------ BURGER MENU --------------------------------*/

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
    font-size: 12px;
    display: block;
    font-family: inherit;
    /*Important pour l’alignement vertical sur les téléphones mobiles*/
    margin: 0;
    /* Important pour l’alignement vertical sur les téléphones mobiles */
  }

  /* Dropdown content masquée par default */
  .dropdown-content2 {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0px;
  }

  /* Liens à l’intérieur de la liste déroulante */
  .dropdown-content2 ul li a {
    float: none;
    color: black;
    font-size: 8px;
    font-family: "Noteworthy";
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
    color: #ff4949;
  }

  /* Afficher le menu déroulant en vol stationnaire (hover) */
  .dropdown2:hover .dropdown-content2 {
    display: block;
  }
}

@media (min-width: 320px) and (max-width: 479.9px) {
  /*---------------------------- NAVBAR ------------------------------- */

  .Deuxieme {
    background: white;
    height: 70px;
    width: 100%;
    display: flex;
  }

  /*---------------------------- LOGO ------------------------------- */
  .Logo {
    width: 25%;
    display: flex;
    justify-content: flex-start;
    padding: 10px 0px 0px 20px;
  }

  .Logo {
    padding: 10px 0px 0px 0px;
  }

  #LogoS {
    width: 65px;
    height: 50px;
  }

  /*---------------------------- MENU ------------------------------- */

  .Menu {
    width: 50%;
    display: none;
  }

  .Menu ul {
    justify-content: center;
    display: flex;
    list-style: none;
    margin-top: 30px;
  }

  .Menu ul li a {
    text-decoration: none;
    font-family: "Noteworthy";
    color: #25272e;
    margin-right: 26px;
    font-size: 11.5px;
    display: none;
  }

  .Menu ul li a:hover {
    color: #ff4949;
  }

  /*---------------------------- RECHERCHE ------------------------------- */

  .ContainerRecherche input[type="text"].active {
    width: 60px;
    outline: none;
  }

  .ContainerRecherche .IconRecherche i {
    padding: 0px 15px 0px 5px;
    font-size: 12px;
  }

  .ContainerRecherche i {
    padding: 2px 15px 0px 5px;
    font-size: 12px;
  }

  .ContainerRecherche {
    width: 90%;
  }

  /*----------------------------- BURGER ------------------------------------*/

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
    font-size: 12px;
    display: none;
  }

  /* Dropdown content masquée par default */
  .dropdown-content1 {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0px;
  }

  /* Liens à l’intérieur de la liste déroulante */
  .dropdown-content1 a {
    float: none;
    color: black;
    font-size: 10px;
    font-family: "Noteworthy";
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
  .dropdown-content1 a:hover {
    background-color: #dcdcdc;
    color: #ff4949;
  }

  /* Afficher le menu déroulant en vol stationnaire (hover) */
  .dropdown1:hover .dropdown-content1 {
    display: block;
  }

  /*--------------------------- DROPDOWN ACCOUNT ------------------------------*/

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
    padding: 30px 15px 0px 8px;
    background-color: inherit;
    font-size: 11px;
    display: block;
    font-family: inherit;
    /*Important pour l’alignement vertical sur les téléphones mobiles*/
    margin: 0;
    /* Important pour l’alignement vertical sur les téléphones mobiles */
  }

  /* Dropdown content masquée par default */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0px;
  }

  /* Liens à l’intérieur de la liste déroulante */
  .dropdown-content a {
    float: none;
    color: black;
    font-size: 8px;
    font-family: "Noteworthy";
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  /* Ajouter une couleur d’arrière-plan gris aux liens déroulants sur le vol stationnaire (hover) */
  .dropdown-content a:hover {
    background-color: #dcdcdc;
    color: #ff4949;
  }

  /* Afficher le menu déroulant en vol stationnaire (hover) */
  .dropdown:hover .dropdown-content {
    display: block;
  }

  /*---------------------------------- BURGER MENU ---------------------------------------*/

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
    font-size: 11px;
    display: block;
    font-family: inherit;
    /*Important pour l’alignement vertical sur les téléphones mobiles*/
    margin: 0;
    /* Important pour l’alignement vertical sur les téléphones mobiles */
  }

  /* Dropdown content masquée par default */
  .dropdown-content2 {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 80px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0px;
  }

  /* Liens à l’intérieur de la liste déroulante */
  .dropdown-content2 ul li a {
    float: none;
    color: black;
    font-size: 7px;
    font-family: "Noteworthy";
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
    color: #ff4949;
  }

  /* Afficher le menu déroulant en vol stationnaire (hover) */
  .dropdown2:hover .dropdown-content2 {
    display: block;
  }
}
</style>
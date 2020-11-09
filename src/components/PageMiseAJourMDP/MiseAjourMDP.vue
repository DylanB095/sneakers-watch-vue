<template>
  <body id="Img_fond">
      <div class="overlay">
          <div class="inner">
                   <div class="MajMDP">
              <h1>
                  Mise à jour Mot De Passe
              </h1>
          </div>
          <br>
          <br>
      <div id="InputemailIcone">
    <input type="email" class="Inputemail" placeholder="Email" />
      <i class="fas fa-user" id="IconeInput"></i>   
      </div>
      <br>
      <div id="InputemailIcone">
    <input type="email" class="Inputemail" placeholder="Mot de Passe" />
      <i class="fas fa-unlock-alt" id="IconeInput"></i>   
      </div>
      <br>
      <div id="InputemailIcone">
          <button class="BtnMisAJour"><router-link class="LinkMiseaJour" to="`//`">Envoyer</router-link></button>
          
      </div>
      </div>
      </div>
  </body>
</template>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 #Img_fond {
    background-image: url("../../assets/Mise_a_jour_du_Mot_De_Passe.jpg");
    width: 100%;
    height: 100vh;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
 }
 .MajMDP{
   color: #FF4949;
   text-align: center;
   font-size: 13px;
 }

.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.inner #InputemailIcone {
    max-width: 35rem;
    text-align: center;
    color:  #FF4949;
    padding: 0 2rem;
    font-family: 'Times New Roman';
}

#InputemailIcone .Inputemail[type=email] {
    padding-left: 40px ;
    width: 230px;
    height: 30px;
    border-radius: 10px;
    border: solid 2.5px #ff4949;
    background-color: white;
    outline:none;
}
#InputemailIcone {
    position: relative;
}
#InputemailIcone #IconeInput {
    position: absolute;
    left: 0;
    padding: 6.5px 5px 0px 45px;
    color:black;
}

.BtnMisAJour {
    width: 120px ;
    height: 30px ;
    border-radius: 10px;
    border: solid 2.5px #ff4949;
    background-color: white;
    outline:none;
    
}
.LinkMiseaJour {
    text-decoration: none;
    color: #25272e; 
    font-family: "Noteworthy";
    font-size:inherit;
}

</style>
<template>
    <header id="HeaderAPropos">
        <div class="ContenuTextAPropos">
            <div class="HeaderAProposTitre"><h1> L'ART DE LA MODE</h1></div>
            <div class="HeaderAProposPara"><p>VENEZ DÉCOUVRIRE LES DERNIERES <br> TENDANCES EN VOGUE</p> </div>
            <div id="HeaderAProposBtn"> <button class="HeaderAProposBtn">Nos Tendances</button></div>

        </div>
    </header>
</template>
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#HeaderAPropos{
    background-image: url("../../assets/HeaderPagesAPropos.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
}

.ContenuTextAPropos{
    color: white;
    font-family: "Times New Roman";
    max-width: 88%;
    transform: translate(49px, 217px);
}
.HeaderAProposTitre{
    font-style: italic;
    color: #ff4949;
    font-size: 17px;
    font-weight: bold;
    padding-bottom: 16px;
    font-family: "TimesNewRoman";
}
.HeaderAProposPara{
   font-family: "Times New Roman";
    line-height: 36px;
    color: #DCDCDC;
    font-size: 30px;
    padding-bottom: 16px;
}
#HeaderAProposBtn .HeaderAProposBtn{
    background-color: #ff4949;
    border: 2px solid #DCDCDC;
    color: #DCDCDC;
    font-family: "Noteworthy";
    padding: 0 20px;
    outline: none;
    font-weight: 500;
    border-radius: 4px;
    height: 30px;
    cursor: pointer;
}
#HeaderAProposBtn .HeaderAProposBtn:hover{
    background-color:  #DCDCDC;
    border: 2px solid #ff4949;
    color: #ff4949;
    font-family: "Noteworthy";
    padding: 0 20px;
    outline: none;
    font-weight: 500;
    border-radius: 4px;
    height: 30px;
    cursor: pointer;
}
@media screen and (max-width: 606px){

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.ContenuTextAPropos {
    color: white;
    font-family: "Times New Roman";
    max-width: 89%;
    transform: translate(36px, 203px);
}
.HeaderAProposTitre {
    font-style: italic;
    color: #ff4949;
    font-size: 11px;
    font-weight: bold;
    padding-bottom: 16px;
    font-family: "TimesNewRoman";
}
.HeaderAProposPara {
    font-family: "Times New Roman";
    line-height: 36px;
    color: #DCDCDC;
    font-size: 19px;
    padding-bottom: 16px;
}
#HeaderAProposBtn .HeaderAProposBtn {
    background-color: #ff4949;
    border: 2px solid #DCDCDC;
    color: #DCDCDC;
    font-family: "Noteworthy";
    padding: 0 11px;
    outline: none;
    font-weight: 500;
    border-radius: 4px;
    height: 30px;
    cursor: pointer;
}
#HeaderAProposBtn .HeaderAProposBtn:hover {
    background-color: #DCDCDC;
    border: 2px solid  #ff4949;
    color: #ff4949;
    font-family: "Noteworthy";
    padding: 0 11px;
    outline: none;
    font-weight: 500;
    border-radius: 4px;
    height: 30px;
    cursor: pointer;
}
}
</style>
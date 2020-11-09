<template>
<nav id="NavAPropos">
    <div class="LogoAPropos">
        <img src="../../assets/logo sneakers watch.png" width="98" alt="LogoSneakersW">
    </div>
    <div id="btnEnchere">
        <button class="btnEnchere">Acceder aux Encheres </button>
    </div>
   </nav>
</template>
<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#NavAPropos{
    display: flex;
    background: black;
}
.LogoAPropos{
    padding: 9px;
    padding-left: 34px;
}
#btnEnchere{
    display: flex;
    width: 84%;
    padding: 29px;
    justify-content: flex-end;
}
#btnEnchere .btnEnchere {
    background-color: #DCDCDC;
    border: 2px solid #ff4949;
    color: #ff4949;
    font-family: "Noteworthy";
    padding: 0 9px;
    border-radius: 4px;
    height: 30px;
    outline: none;
    font-size: small;
    cursor: pointer;
}
#btnEnchere .btnEnchere:hover {
    background-color: #ff4949;
    border: 2px solid #DCDCDC;
    color: #DCDCDC;
    font-family: "Noteworthy";
    padding: 0 9px;
    border-radius: 4px;
    height: 30px;
    outline: none;
    font-size: small;
    cursor: pointer;
}
@media screen and (max-width: 435px){
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  #btnEnchere .btnEnchere {
    outline: none;
    background-color: #DCDCDC;
    border: 2px solid #ff4949;
    color: #ff4949;
    font-family: "Noteworthy";
    padding: 0 9px;
    border-radius: 4px;
    font-size: x-small;
    height: 30px;
    cursor: pointer;
}
#btnEnchere .btnEnchere:hover {
    outline: none;
     background-color: #ff4949;
    border: 2px solid #DCDCDC;
    color: #DCDCDC;
    font-family: "Noteworthy";
    padding: 0 9px;
    border-radius: 4px;
    font-size: x-small;
    height: 30px;
    cursor: pointer;
}
}
</style>
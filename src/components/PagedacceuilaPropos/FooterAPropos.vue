<template>
    <footer id="contenuFooterAPropos">
        <div class="contenuFooterAPropos">
            <div class="miseEnPageFooter">
        <div class="copy">
            
           <h2 class="copyAPropos">
               &copy; 2020 <span>Sneacker watch</span>, Tous les droits réservés</h2>
        </div>
        <div class="Mention">
            <h4 class="MentionLegal"> Mention légal - Politique de confidentialité - Condition générale d'utilisateur</h4>
        </div>
        </div>
        </div>
    </footer>
</template>
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#contenuFooterAPropos{
    background: black;
    padding: 36px 0px;
    color: white;
}
.miseEnPageFooter {
display: flex;
}

.copy{
width: 50%;
display: flex;
justify-content: flex-start;
}
.copyAPropos{
    padding-left: 5px;
    font-size: 14px;
}
.copyAPropos span {
    color:#ff4949 ;
}

.Mention{
    width: 50%;
    display: flex;
    justify-content: flex-end;
}
.MentionLegal{
padding-right: 5px;
font-size: 12px;
}
 
@media (min-width: 531px) and (max-width: 790.9px){ 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#contenuFooterAPropos{
    background: black;
    padding: 36px 0px;
    color: white;
}
.miseEnPageFooter {
display: flex;
}

.copy{
width: 50%;
display: flex;
justify-content: flex-start;
}
.copyAPropos{
    padding-left: 5px;
    font-size: 10px;
}
.copyAPropos span {
    color:#ff4949 ;
}

.Mention{
    width: 50%;
    display: flex;
    justify-content: flex-end;
}
.MentionLegal{
padding-right: 5px;
font-size: 8px;
} 
}  

@media (min-width: 320px) and (max-width: 530.9px){

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#contenuFooterAPropos{
    background: black;
    padding: 36px 0px;
    color: white;
}
.miseEnPageFooter {
display: flex;
}

.copy{
width: 50%;
display: flex;
justify-content: flex-start;
}
.copyAPropos{
    padding-left: 5px;
    font-size: 6.5px;
}
.copyAPropos span {
    color:#ff4949 ;
}

.Mention{
    width: 50%;
    display: flex;
    justify-content: flex-end;
}
.MentionLegal{
padding-right: 5px;
font-size: 4.5px;
}
} 

</style>
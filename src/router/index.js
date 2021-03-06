import Vue from 'vue'
import VueRouter from 'vue-router'
import PagesdacceuilPr from '../views/PagesAcceuilPr.vue'
import PageMiseAJourMDP from '../views/PagesMiseAjourMDP.vue'
import PageRenitialisationMDP from '../views/PageRenitialisationMDP.vue'
import PageVerificationdumail from '../views/PageVerificationDuMail.vue'
import PagedacceuilaPropos from '../views/PagesAcceuiAPropos.vue'
import PageAccederauxFormulaire from '../views/PageAccedezAuxFormulaire.vue'
import PageDeclarationduGagnant from '../views/PageDeclarationDuGagnant.vue'
import PageLogin from '../views/PageLogin.vue'
import PagesPrHommes from '../views/PageProduitHomme.vue'
import PagesPrFemme from '../views/PageProduitFemme.vue'
import PagesPrEnfant from '../views/PageProduitEnfant.vue'
import PagesPrNosMontres from '../views/PagesProduitNosMontres.vue'
import PageachatProduit from '../views/PageAchatProduit.vue'
import PageSinscrire from '../views/PageSinscrire.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/NosMontres',
        name: 'PagesPrNosMontres',
        component: PagesPrNosMontres
    },
    {
        path: '/Enfant',
        name: 'PagesPrEnfant',
        component: PagesPrEnfant
    },
    {
        path: '/Femme',
        name: 'PagesPrFemme',
        component: PagesPrFemme
    },
    {
        path: '/Homme',
        name: 'PagesPrHommes',
        component: PagesPrHommes
    },
    {
        path: '/',
        name: 'PagesdacceuilPr',
        component: PagesdacceuilPr
    },
    {
        path: '/MiseAjourMDP',
        name: 'PagesMiseAjourMDP',
        component: PageMiseAJourMDP
    },
    {
        path: '/ReinitMDP',
        name: 'PageRenitialisationMDP',
        component: PageRenitialisationMDP,
    },
    {
        path: '/VerifEmail',
        name: 'PageVerificationdumail',
        component: PageVerificationdumail,
    },
    {
        path: '/APropos',
        name: 'PagedacceuilaPropos',
        component: PagedacceuilaPropos,
    },
    {
        path: '/AccesFormulaire',
        name: 'PageAccedezAuxFormulaire',
        component: PageAccederauxFormulaire,
    },
    {
        path: '/DeclaGagnant',
        name: 'PageDeclarationduGagnant',
        component: PageDeclarationduGagnant,
    },
    {
        path: '/Login',
        name: 'PageLogin',
        component: PageLogin,
    },
    {
        path: '/Register',
        name: 'PageSinscrire',
        component: PageSinscrire,
    },
    {
        path: '/Achat/:nom',
        name: 'PageachatProduit',
        component: PageachatProduit,
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
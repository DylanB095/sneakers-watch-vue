<template>
    <div>
       <Navbar1/>
       <Navbar2/> 
       <Section1/>
       <Section2/>
       <Footer/>
       <FooterCopyRight/>

    </div>
</template>
<script>
import Navbar1 from '../components/PagedacceuilPr/Navbar1' 
import Navbar2 from '../components/PagedacceuilPr/Navbar2' 
import Section1 from '../components/PageachatProduit/Section1'
import Section2 from '../components/PageachatProduit/Section2'
import Footer from '../components/PagedacceuilPr/Footer'
import FooterCopyRight from'../components/PagedacceuilPr/FooterCopyRight'
export default {
    components:{
        Navbar1,
        Navbar2, 
        Section1,
        Section2,
        Footer,
        FooterCopyRight,
    }
}
</script>
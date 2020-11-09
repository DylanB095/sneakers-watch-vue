<template>
    <div>
       <Navbar1/>
       <Navbar2/> 
       <Header/>   
       <Section/> 
       <Borderaux1/>
       <Section2/>
       <Borderaux2/>
       <Section3/>
       <Newsletter/>
       <Footer/>
       <FooterCopyRight/>

    </div>
</template>
<script>
import Navbar1 from '../components/PagedacceuilPr/Navbar1' 
import Navbar2 from '../components/PagedacceuilPr/Navbar2' 
import Header from '../components/PagedacceuilPr/Header'  
import Section from '../components/PagedacceuilPr/Section'  
import Borderaux1 from '../components/PagedacceuilPr/Borderaux1'
import Section2 from '../components/PagedacceuilPr/Section2'
import Borderaux2 from '../components/PagedacceuilPr/Borderaux2'
import Section3 from '../components/PagedacceuilPr/Section3'
import Newsletter from '../components/PagedacceuilPr/Newsletter'
import Footer from '../components/PagedacceuilPr/Footer'
import FooterCopyRight from '../components/PagedacceuilPr/FooterCopyRight'
export default {
    components:{
        Navbar1,
        Navbar2, 
        Header, 
        Section, 
        Borderaux1,
        Section2,
        Borderaux2,
        Section3,
        Newsletter,
        Footer,
        FooterCopyRight,
    }
}
</script>
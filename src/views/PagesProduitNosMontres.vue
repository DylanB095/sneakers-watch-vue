<template>
    <div>
       <Navbar1/>
       <Navbar2/> 
       <Header/>
       <Filtre/>
       <SectionMontres/>
       <Pagination/>
       <Newsletter/>
       <Footer/>
       <FooterCopyRight/>

    </div>
</template>
<script>
import Navbar1 from '../components/PagedacceuilPr/Navbar1' 
import Navbar2 from '../components/PagedacceuilPr/Navbar2' 
import Header from'../components/PagesPrNosMontres/Header'
import Filtre from'../components/PagesPrHommes/Filtre'
import SectionMontres from'../components/PagesPrNosMontres/SectionMontres'
import Pagination from '../components/PagesPrHommes/Pagination'
import Newsletter from '../components/PagedacceuilPr/Newsletter'
import Footer from '../components/PagedacceuilPr/Footer'
import FooterCopyRight from'../components/PagedacceuilPr/FooterCopyRight'
export default {
    components:{
        Navbar1,
        Navbar2, 
        Header,
        Filtre,
        SectionMontres,
        Pagination,
        Newsletter,
        Footer,
        FooterCopyRight,
    }
}
</script>
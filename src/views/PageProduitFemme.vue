<template>
  <div>
    <Navbar1 />
    <Navbar2 />
    <Header />
    <Filtre />
    <SectionSneakers @recherchedata="recherchedata($event)"/>
    <SectionMontres @recherchedata="recherchedata($event)"/>
    <Pagination />
    <Newsletter />
    <Footer />
    <FooterCopyRight/>
  </div>
</template>
<script>
import Navbar1 from "../components/PagedacceuilPr/Navbar1";
import Navbar2 from "../components/PagedacceuilPr/Navbar2";
import Header from "../components/PagesPrFemme/Header";
import Filtre from "../components/PagesPrHommes/Filtre";
import SectionSneakers from "../components/PagesPrFemme/SectionSneakers";
import SectionMontres from "../components/PagesPrFemme/SectionMontres";
import Pagination from "../components/PagesPrHommes/Pagination";
import Newsletter from "../components/PagedacceuilPr/Newsletter";
import Footer from "../components/PagedacceuilPr/Footer";
import FooterCopyRight from "../components/PagedacceuilPr/FooterCopyRight"
export default {
  components: {
    Navbar1,
    Navbar2,
    Header,
    Filtre,
    SectionSneakers,
    SectionMontres,
    Pagination,
    Newsletter,
    Footer,
    FooterCopyRight,
  },
};
</script>
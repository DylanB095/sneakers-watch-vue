<template>
    <div>
        <NavbarAPropos/>
        <HeaderAPropos/>
        <Section1APropos/> 
        <Section2APropos/>
        <FooterAPropos/>
        
        
        
    </div>
</template>
<script>
import FooterAPropos from '../components/PagedacceuilaPropos/FooterAPropos'
import HeaderAPropos from '../components/PagedacceuilaPropos/HeaderAPropos'
import NavbarAPropos from '../components/PagedacceuilaPropos/NavbarAPropos'
import Section1APropos from '../components/PagedacceuilaPropos/Section1APropos'
import Section2APropos from '../components/PagedacceuilaPropos/Section2APropos'
export default {
    components:{
        FooterAPropos,
        HeaderAPropos,
        NavbarAPropos,
        Section1APropos,
        Section2APropos,
    }
}
</script>
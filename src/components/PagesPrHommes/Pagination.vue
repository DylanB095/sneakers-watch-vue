<template>
  <body>
      <div class="ContenuePagination">
    <div class="pagination">
      <a href="#" >1</a>
      <a href="#" >2</a>
      <a href="#" >3</a>
      <a href="#" >4</a>
      <a href="#" >5</a>
      <a href="#">...</a>
      <a href="#">&rsaquo;</a>
      <a href="#">&raquo;</a>
    </div>
    </div>
  </body>
</template>

<style  scoped>

/* DIV PRINCIPAL QUI REGROUPE MES <A HREF */
.ContenuePagination {
    
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-bottom: #ff4949 1px solid ;
    border-top:#ff4949 1px solid  ;
}

/* Seconde div qui regroupe mes <a href */
.pagination{
    border-left: 1px #ff4949 solid;
    border-right: 1px #ff4949 solid;
    
}

/* <A HREF  */
.pagination a {
  color: #25272e;
  float: left;
  padding: 8px 12px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  font-size: small;
}

 .pagination a:active {
  background-color: #f5f6f9;
  color: #ff4949;
  border-radius: 2.5px;
  text-decoration-line: underline;
} 

.pagination a:hover{
  color: #ff4949;
  text-decoration-line: underline;
}
</style>
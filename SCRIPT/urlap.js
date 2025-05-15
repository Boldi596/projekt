var nev, lakcim, szuldatum, email, szoba, erkezik, erkezikDatum, 
tavozikDatum, reggeli, ebed, vacsora, szauna, szoveg; 

function kiolvas(){
    nev = document.getElementById("teljesNev").value; 
    lakcim = document.getElementById("lakoHely").value; 
    szuldatum = document.getElementById("szulDatum").value; 
    email = document.getElementById("email1").value; 
    szoba = document.getElementById("szobaletszam").value; 
    erkezik = document.getElementById("hanyfo").value; 
    erkezikDatum = document.getElementById("erkDatum").value; 
    tavozikDatum = document.getElementById("tavDatum").value; 
    reggeli = document.getElementById("reggeli").value; 
    ebed = document.getElementById("ebed").value; 
    vacsora = document.getElementById("vacsora").value; 
    szauna = document.getElementById("szauna").value; 
    szoveg = document.getElementById("szovegesmegjegyzes").value; 




    console.log(nev);  
    console.log(lakcim);  
    console.log(szuldatum);  
    console.log(email);  
    console.log(szoba); 
    console.log(erkezik); 
    console.log(erkezikDatum); 
    console.log(tavozikDatum); 
    console.log(reggeli);     
    console.log(ebed);  
    console.log(vacsora);  
    console.log(szauna);  
    console.log(szoveg);  

 





    localStorage.setItem("nev", nev);
    localStorage.setItem("lakcim", lakcim);
    localStorage.setItem("szuldatum", szuldatum);
    localStorage.setItem("email", email);
    localStorage.setItem("szoba", szoba);
    localStorage.setItem("erkezik", erkezik);
    localStorage.setItem("erkezikDatum", erkezikDatum);
    localStorage.setItem("tavozikDatum", tavozikDatum);
    localStorage.setItem("reggeli", reggeli);
    localStorage.setItem("ebed", ebed);
    localStorage.setItem("vacsora", vacsora);
    localStorage.setItem("szauna", szauna); 
    localStorage.setItem("szoveg", szoveg);  


    window.location.href = "visszaigazolas.html";
}




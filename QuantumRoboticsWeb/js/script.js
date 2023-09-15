document.getElementById("icon-menu").addEventListener("click", mostra_menu);

function mostra_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}


//Buscador de contenido

//Ejecutando funciones

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarar variables
bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
input_search = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

//Funcion para mostrar el buscador

function mostrar_buscador(){
    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    input_search.focus(); //Escribir
    if(input_search.value ==""){
        box_search.style.display="none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    input_search.value = "";
    box_search.style.display="none"
}

//Crear filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){
    filter = input_search.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtra mediante li
    for (i = 0; i < li.length; i ++){
        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display ="";
            box_search.style.display = "block";

            if(input_search.value ==""){
                box_search.style.display="none";
            }
        }else{
            li[i].style.display="none";
        }
    }

}
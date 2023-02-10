import * as React from 'react';
import PublicoAlvoParse from '../Parse/PublicoAlvoParse';
import FerramentaParse from '../Parse/FerramentaParse';
import HabilidadeParse from '../Parse/HabilidadeParse';
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';


const ColorTitle = styled(AppBar)(({ theme }) => ({
  color: 'black',
  backgroundColor: '#b6d3b7',
  fontFamily: 'system-ui',
  fontWeight: 700,
  letterSpacing: '.3rem'
}));

//PÁGINA DOS MÉTODOS
  
  function CreateTable(){
  
    const req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.responseType = 'text';
  req.open("GET", "https://mco-api.herokuapp.com/getall/metodos", true);
  req.onloadend  = function() {
    let principal = document.getElementById("root");
    let testar = document.getElementsByTagName("table");
  
    if(testar.length != 0){
      return;
    }
    let tabela = document.createElement("table");
    tabela.className = "tabela";
    principal.appendChild(tabela);
    
    let teste = "";
    let elementos;
   
    teste =  req.responseText;
     elementos = JSON.parse(teste);
    //elementos = JSON.parse('[{"Id":8,"CategoriaId":1,"Titulo":"ComFAPOO: Método  de  Ensino  de Programação Orientada à Objetos Baseado em Aprendizagem Significativa e Computação Física.","PublicoAlvoId":3,"Conteudo":"Aprendizagem Significativa \/ Programação Orientada a Objetos \/ Ensino de Programação \/ Concreteness Fading","FerramentaId":6,"HabilidadeId":3,"Ambiente":null,"Abordagem":null,"CaminhoDeAcesso":"https:\/\/sol.sbc.org.br\/journals\/index.php\/rbie\/article\/view\/2851\/2173"},{"Id":9,"CategoriaId":1,"Titulo":"ComFAPOO: Método  de  Ensino  de Programação Orientada à Objetos Baseado em Aprendizagem Significativa e Computação Física.","PublicoAlvoId":4,"Conteudo":"Aprendizagem Significativa \/ Programação Orientada a Objetos \/ Ensino de Programação \/ Concreteness Fading","FerramentaId":6,"HabilidadeId":2,"Ambiente":null,"Abordagem":null,"CaminhoDeAcesso":"https:\/\/sol.sbc.org.br\/journals\/index.php\/rbie\/article\/view\/2851\/2173"},{"Id":10,"CategoriaId":1,"Titulo":"Proposta de ensino de programação para crianças com Scratch e Pensamento Computacional. Tecnologias, Sociedade e Conhecimento","PublicoAlvoId":4,"Conteudo":"Ensino de Programação \/ Pensamento Computacional \/ Oficina","FerramentaId":4,"HabilidadeId":2,"Ambiente":null,"Abordagem":null,"CaminhoDeAcesso":"https:\/\/econtents.bc.unicamp.br\/inpec\/index.php\/tsc\/article\/view\/14484"}]');
  
    let cabecalho = CreateTableHeader();
    tabela.appendChild(cabecalho);
    let corpo = document.createElement("tbody");
    tabela.appendChild(corpo);
  
    elementos.forEach(element => {
      let linha = CreateTableLine(element);
      corpo.appendChild(linha);
    });
  
    let filtro = document.createElement("script");
    filtro.innerHTML = getUniqueValuesFromColumn();
    principal.appendChild(filtro);
  
  };
  req.send(null);
  
  
  
  
  }
  
  function CreateTableHeader(){
    let header = document.createElement("thead");
    let newline = document.createElement("tr");
  
    let colunaTitulo = document.createElement("td");
     colunaTitulo.innerHTML = "Título";
     colunaTitulo.id = "1";
     let TituloFilter = document.createElement("select");
     TituloFilter.className =  "table-filter";
     let TituloOptions = document.createElement("option");
     TituloOptions.value = "all";
     TituloFilter.appendChild(TituloOptions);
     colunaTitulo.appendChild(TituloFilter);
     newline.appendChild(colunaTitulo);
   
     let colunaPublicoAlvo = document.createElement("td");
     colunaPublicoAlvo.innerHTML = "Público Alvo";
     colunaPublicoAlvo.id = "2";
     let PublicoAlvoFilter = document.createElement("select");
     PublicoAlvoFilter.className =  "table-filter";
     let PublicoAlvoOptions = document.createElement("option");
     PublicoAlvoOptions.value = "all";
     PublicoAlvoFilter.appendChild(PublicoAlvoOptions);
     colunaPublicoAlvo.appendChild(PublicoAlvoFilter);
     newline.appendChild(colunaPublicoAlvo);
   
     let colunaConteudo = document.createElement("td");
     colunaConteudo.innerHTML = "Conteúdo";
     colunaConteudo.id = "3";
     let ConteudoFilter = document.createElement("select");
     ConteudoFilter.className =  "table-filter";
     let ConteudoOptions = document.createElement("option");
     ConteudoOptions.value = "all";
     ConteudoFilter.appendChild(ConteudoOptions);
     colunaConteudo.appendChild(ConteudoFilter);
     newline.appendChild(colunaConteudo);
   
     let colunaFerramenta = document.createElement("td");
     colunaFerramenta.innerHTML = "Ferramenta";
     colunaFerramenta.id = "4";
     let FerramentaFilter = document.createElement("select");
     FerramentaFilter.className =  "table-filter";
     let FerramentaOptions = document.createElement("option");
     FerramentaOptions.value = "all";
     FerramentaFilter.appendChild(FerramentaOptions);
     colunaFerramenta.appendChild(FerramentaFilter);
     newline.appendChild(colunaFerramenta);
   
     let colunaHabilidade = document.createElement("td");
     colunaHabilidade.innerHTML = "Habilidade";
     colunaHabilidade.id = "5";
     let HabilidadeFilter = document.createElement("select");
     HabilidadeFilter.className =  "table-filter";
     let HabilidadeOptions = document.createElement("option");
     HabilidadeOptions.value = "all";
     HabilidadeFilter.appendChild(HabilidadeOptions);
     colunaHabilidade.appendChild(HabilidadeFilter);
     newline.appendChild(colunaHabilidade);
   
     let colunaCaminhoDeAcesso = document.createElement("td");
     colunaCaminhoDeAcesso.innerHTML = "Caminho de Acesso";
     colunaCaminhoDeAcesso.id = "6";
     newline.appendChild(colunaCaminhoDeAcesso);
  
     header.appendChild(newline);
   
     return header;
  }
  
  function CreateTableLine(element){
    let newline = document.createElement("tr");
  
    let colunaTitulo = document.createElement("td");
    colunaTitulo.innerHTML = element.Titulo;
    newline.appendChild(colunaTitulo);
  
    let colunaPublicoAlvo = document.createElement("td");
    colunaPublicoAlvo.innerHTML = PublicoAlvoParse(element.PublicoAlvoId);
    newline.appendChild(colunaPublicoAlvo);
  
    let colunaConteudo = document.createElement("td");
    colunaConteudo.innerHTML = element.Conteudo;
    newline.appendChild(colunaConteudo);
  
    let colunaFerramenta = document.createElement("td");
    colunaFerramenta.innerHTML = FerramentaParse(element.FerramentaId);
    newline.appendChild(colunaFerramenta);
  
    let colunaHabilidade = document.createElement("td");
    colunaHabilidade.innerHTML = HabilidadeParse(element.HabilidadeId);
    newline.appendChild(colunaHabilidade);
  
    let colunaCaminhoDeAcesso = document.createElement("td");
    colunaCaminhoDeAcesso.innerHTML = '<a href="' + element.CaminhoDeAcesso + '"> Link de acesso</a>' ;
    newline.appendChild(colunaCaminhoDeAcesso);
  
    return newline;
  
  }
  
  
    function getUniqueValuesFromColumn() {
  
      console.log("entrei na funcao")
  
      var unique_col_values_dict = {}
  
      let allFilters = document.querySelectorAll(".table-filter")
      allFilters.forEach((filter_i) => {
          let col_index = filter_i.parentElement.getAttribute("id");
          // alert(col_index)
          const rows = document.querySelectorAll("table > tbody > tr")
  
          rows.forEach((row) => {
              let cell_value = row.querySelector("td:nth-child("+col_index+")").innerHTML;
              // if the col index is already present in the dict
              if (col_index in unique_col_values_dict) {
  
                  // if the cell value is already present in the array
                  if (unique_col_values_dict[col_index].includes(cell_value)) {
                      // alert(cell_value + " is already present in the array : " + unique_col_values_dict[col_index])
  
                  } else {
                      unique_col_values_dict[col_index].push(cell_value)
                      // alert("Array after adding the cell value : " + unique_col_values_dict[col_index])
  
                  }
  
  
              } else {
                  unique_col_values_dict[col_index] = new Array(cell_value)
              }
          });
  
          filter_i.addEventListener("change", filter_rows);
      });
  
      console.log(unique_col_values_dict)
  
      const arr = Array.from(unique_col_values_dict)
      arr.forEach(i => {
        console.log("Column index : " + i + " has Unique values : \n" + unique_col_values_dict[i]);
      });
      
      updateSelectOptions(unique_col_values_dict);
  
  };
  
  function updateSelectOptions(unique_col_values_dict) {
    let allFilters = document.querySelectorAll(".table-filter")
  
    allFilters.forEach((filter_i) => {
        let col_index = filter_i.parentElement.getAttribute('id')
  
        unique_col_values_dict[col_index].forEach((i) => {
            filter_i.innerHTML = filter_i.innerHTML + `\n<option value="${i}">${i}</option>`
        });
  
    });
  };
  
  function filter_rows() {
    let allFilters = document.querySelectorAll(".table-filter")
    var filter_value_dict = new Map();
  
    allFilters.forEach((filter_i) => {
        let col_index = filter_i.parentElement.getAttribute('id')
  
        console.log(col_index)
  
        console.log('entrei aquiii')
  
        console.log(filter_i.value)
  
        let value = filter_i.value
        if (value != "all") {
            filter_value_dict[col_index] = value;
            console.log("adicionando o value: " + value);
            console.log("filter: " + filter_value_dict[col_index]);
  
        }
    });
  
    var col_cell_value_dict = {};
  
    const rows = document.querySelectorAll("table tbody tr");
    rows.forEach((row) => {
        var display_row = true;
  
        allFilters.forEach((filter_i) => {
            let col_index = filter_i.parentElement.getAttribute('id')
            col_cell_value_dict[col_index] = row.querySelector("td:nth-child(" + col_index+ ")").innerHTML
        })
  
        console.log(filter_value_dict);
        console.log("filter length: " + filter_value_dict.length);
  
        for(const key in filter_value_dict){
          let filter_value = filter_value_dict[key]
          let row_cell_value = col_cell_value_dict[key]
  
          console.log("index of: " + row_cell_value.indexOf(filter_value));
          
          if (row_cell_value.indexOf(filter_value) == -1 && filter_value != "all") {
              display_row = false;
              break;
          }
        }
  
  
  
        console.log("olha o display row: " + display_row);
  
        if (display_row == true) {
            row.style.display = "table-row"
  
        } else {
            row.style.display = "none"
  
        }
  
    })
  
  }


const Metodos = () => {
  CreateTable();
  return (

    <div>
    <>

<ColorTitle position="static" elevation={0} component="footer" color="inherit">
<Toolbar style={{ justifyContent: "center" }}>
<Typography sx={{
        color: 'black',
        display: 'inline',
        fontWeight: 'bold',
        fontFamily: 'monospace',
        mx: 0.5,
        fontSize: 28,
      }}>MÉTODOS</Typography>
</Toolbar>
</ColorTitle>
</>
  </div>
      
  )
 
}

export default Metodos;

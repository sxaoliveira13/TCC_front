import * as React from 'react';

function HabilidadeParse(num){
    if(num == '1'){
        return 'Pensamento Lógico';
    }
    else if(num == '2'){
        return 'Criatividade';
    }
    else if(num == '3'){
        return 'Resolução de problemas';
    }
    else if(num == '4'){
        return 'Programação';
    }
    else if(num == '5'){
        return 'Não se aplica';
    }
    else if(num == '6'){
        return 'Raciocínio lógico';
    }
    else if(num == '7'){
        return 'Colaboração';
    }
    else if(num == '8'){
        return 'Conhecimento computacional';
    }
    else if(num == '9'){
        return 'Lógica';
    }
    else if(num == '10'){
        return 'Sustentabilidade';
    }
    else{
        return num;
    }
}

export default HabilidadeParse;
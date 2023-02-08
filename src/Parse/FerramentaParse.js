import * as React from 'react';

function FerramentaParse(num){
    if(num == '1'){
        return 'GNU';
    }
    else if(num == '2'){
        return 'Estilo BSD';
    }
    else if(num == '3'){
        return 'Papel e lápis';
    }
    else if(num == '4'){
        return 'Scratch';
    }
    else if(num == '5'){
        return 'App Inventor';
    }
    else if(num == '6'){
        return 'Computação Física';
    }
    else if(num == '7'){
        return 'HTML';
    }
    else if(num == '8'){
        return 'HTML / CSS';
    }
    else if(num == '9'){
        return 'Python';
    }
    else{
        return num;
    }
}

export default FerramentaParse;
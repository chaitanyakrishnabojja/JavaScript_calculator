$(function(){
//    getting display ID
    var display = document.getElementById('display');
    
//    Concatenating Display Number
    
    function displayNumber(event, concat){
        display.value += concat;
    }
    
//    Pi function
    
    function pifun(){
        if(display.value == ''){
            display.value = Math.PI.toFixed(8);
        }else{
            display.value = (display.value * Math.PI).toFixed(8);
        }
    }
    
//    logerthemic function
    
    function lnfun(){
        display.value = Math.log(display.value).toFixed(8);
    }
    
//    squareroot function
    
    function squareroot(){
        display.value = Math.sqrt(display.value);
    }
    
//    xsquare function
    
    function xsquarefun(){
        display.value = display.value * display.value;
    }
    
//    exponential function
    
    function epowerxfun(){
        display.value = Math.exp(display.value).toFixed(8);
    }
    
   //    Trignometric functions
    
    function sinfun(){
        display.value = Math.sin(display.value).toFixed(8);
    }
    
    function cosfun(){
        display.value = Math.cos(display.value).toFixed(8);
    }
    
    function tanfun(){
        display.value = Math.tan(display.value).toFixed(8);
    }
    
   //  inverse function
    
    function addsubtractfun(){
        display.value = display.value * (-1);
    }
    
    function backspacefun(){
        display.value = display.value.substring(0, (display.value.length - 1));
    }
    
    function clearfun(){
        display.value = '';
    }
    
    //    Getting result of the display expression
    function evalfun(event){
        display.value = eval(display.value);
    }

    
     $('#zero_btn').on('click', function(event){
        displayNumber(event, 0);
    });
    $('#one_btn').on('click', function(event){
        displayNumber(event, 1);
    });
    $('#two_btn').on('click', function(event){
        displayNumber(event, 2);
    });
    $('#three_btn').on('click', function(event){
        displayNumber(event, 3);
    });
    $('#four_btn').on('click', function(event){
 
        displayNumber(event, 4);
    });
    $('#five_btn').on('click', function(event){
        displayNumber(event, 5);
    });
    $('#six_btn').on('click', function(event){
        displayNumber(event, 6);
    });
    $('#seven_btn').on('click', function(event){
        displayNumber(event, 7);
    });
     $('#eight_btn').on('click', function(event){
        displayNumber(event, 8);
    });
    $('#nine_btn').on('click', function(event){
        displayNumber(event, 9);
    });
    $('#dot_btn').on('click', function(event){
        displayNumber(event, '.');
    });
    $('#lbrace_btn').on('click', function(event){
        displayNumber(event, '(');
    });
    $('#rbrace_btn').on('click', function(event){
        displayNumber(event, ')');
    });
    $('#add_btn').on('click', function(event){displayNumber(event, '+');});
    $('#subtract_btn').on('click', function(event){displayNumber(event, '-');});
    $('#multiply_btn').on('click', function(event){displayNumber(event, '*');});
    $('#divide_btn').on('click', function(event){displayNumber(event, '/');});
    $('#percentage_btn').on('click', function(event){displayNumber(event, '%');});
    $('#pi_btn').on('click', function(){pifun();});
    $('#ln_btn').on('click', function(){lnfun();});
    $('#sqroot_btn').on('click', function(){squareroot();});
    $('#xsquare_btn').on('click', function(){xsquarefun();});
    $('#epowerx_btn').on('click', function(){epowerxfun();});
    $('#sin_btn').on('click', function(){sinfun();});
    $('#cos_btn').on('click', function(){cosfun();});
    $('#tan_btn').on('click', function(){tanfun();});
    $('#addsubtract_btn').on('click', function(){addsubtractfun();});
    $('#backspace_btn').on('click', function(){backspacefun();});
    $('#clear_btn').on('click', function(){clearfun();});
    $('#equalsto_btn').on('click', function(event){evalfun(event);});
    
});
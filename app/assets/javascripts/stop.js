
function create_id_name(snap,line,column){
    return "#snap_"+snap+"_"+line+""+column;
}




function get_value(snap,line,column){
    return $(create_id_name(snap,line,column)).text() * 1;
}

function set_value(snap,line,column,new_text){
    $(create_id_name(snap,line,column)).text(new_text);
}

function get_start_column() {
     var tmp = "#" + ticks + "_ticks ";
     if( $(tmp + "#side").text() == "C" )
        return 0;
     
     return 2;
}

function rules_snap(snap,min_distance_add) {
    var QTD_COLUMN = get_start_column();
    var best_nivel = 0;
   // set_value(1,3,QTD_COLUMN,0)
    //set_value(1,2,QTD_COLUMN,0)
        for(var i = 0; i < 5; i++){
            
            var best_nivel_qtd = get_value(snap,best_nivel,QTD_COLUMN);
            var competitor_qtd = get_value(snap,i,QTD_COLUMN);
            
            if(competitor_qtd >= best_nivel_qtd)
                best_nivel = i;
            
            if(i == min_distance_add){
               
               if(competitor_qtd > 0){break;}
                else if(get_value(snap,i-1,QTD_COLUMN) >= 50){
                    best_nivel = i -1;
                    break;
                }
            
            }
                
            if(i > min_distance_add && competitor_qtd > 0){
                 best_nivel = i;
                 break;
            }
                
                
        }
        var tmp = "#" + ticks + "_ticks ";
        $(tmp + create_id_name(snap,best_nivel,QTD_COLUMN)).css('background-color', 'yellow');
        $(tmp + create_id_name(snap,best_nivel,QTD_COLUMN+1)).css('background-color', 'yellow');
}


function main() {
    var tmp = "#" + ticks + "_ticks ";
    
    for(var s = 1; s<7;s++){
        for(var i = 0; i<4;i++){
            for(var j = 0; j<5;j++){
                $(tmp + create_id_name(s,j,i)).css('background-color', 'white');
            }
        }
        
        if( get_start_column() == 0){
            $(tmp + create_id_name(s,0,0)).css('background-color', '#ff8508');
            $(tmp + create_id_name(s,0,1)).css('background-color', '#ff8508');
        }
        else{
            $(tmp + create_id_name(s,0,2)).css('background-color', '#ff8508');
            $(tmp + create_id_name(s,0,3)).css('background-color', '#ff8508');
        }
    }
        
    
    
    
    rules_snap(1,3);
    rules_snap(2,2);
    rules_snap(3,2);
    rules_snap(4,1);
    
    rules_snap(5,0);
    rules_snap(6,0);
}
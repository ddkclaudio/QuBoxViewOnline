// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require material

var data;
var ticks = 2;
var occ;
var day;

var occs = new Object(); // or just {}

// UPDATE
function informacoes() {
    
    $("#"+ticks+"_ticks #index_occ").html( occ['informacoes']['index']);
    $("#"+ticks+"_ticks #start_time").html( occ['informacoes']['start_time'].replace("000","").replace("T"," "));
    $("#"+ticks+"_ticks #paddi").html( occ['informacoes']['paddi']);
    $("#"+ticks+"_ticks #qadd").html( occ['informacoes']['qadd']);
    $("#"+ticks+"_ticks #side").html( occ['informacoes']['side']);
    $("#"+ticks+"_ticks #padds").html( occ['informacoes']['padds']);
    $("#"+ticks+"_ticks #qadds").html( occ['informacoes']['qadds']);
    $("#"+ticks+"_ticks #paddf").html( occ['informacoes']['paddf']);
    $("#"+ticks+"_ticks #x").html( occ['informacoes']['x']);
    $("#"+ticks+"_ticks #paddw").html( occ['informacoes']['paddw']);
    $("#"+ticks+"_ticks #qaddw").html( occ['informacoes']['qaddw']);
    $("#"+ticks+"_ticks #paddsw").html( occ['informacoes']['paddsw']);
    $("#"+ticks+"_ticks #qaddsw").html( occ['informacoes']['qaddsw']);
    $("#"+ticks+"_ticks #end_time").html( occ['informacoes']['end_time'].replace("000","").replace("T"," "));
    $("#"+ticks+"_ticks #vwap").html( occ['informacoes']['vwap'][0]);
}
function disp_risk_c() {
    var template = "<div id='disp_risk'> <table class='mdl-data-table  mdl-data-table--selectable mdl-shadow--2dp mdl-cell mdl-cell--2-col'> <thead> <tr> <th class='border'>Risco</th> <th class='border'>Preço</th> <th class='border'>Preço</th> <th class='border'>Disponível</th> </tr> </thead> <tbody> <tr> <td id='risk_00' class='border'>xxxx</td> <td id='risk_01' class='border'>xxxx</td> <td id='disp_00' class='border'>xxxx</td> <td id='disp_01' class='border'>xxxx</td> </tr> <tr> <td id='risk_10' class='border'>xxxx</td> <td id='risk_11' class='border'>xxxx</td> <td id='disp_10' class='border'>xxxx</td> <td id='disp_11' class='border'>xxxx</td> </tr> <tr> <td id='risk_20' class='border'>xxxx</td> <td id='risk_21' class='border'>xxxx</td> <td id='disp_20' class='border'>xxxx</td> <td id='disp_21' class='border'>xxxx</td> </tr> <tr> <td id='risk_30' class='border'>xxxx</td> <td id='risk_31' class='border'>xxxx</td> <td id='disp_30' class='border'>xxxx</td> <td id='disp_31' class='border'>xxxx</td> </tr> <tr> <td id='risk_40' class='border'>xxxx</td> <td id='risk_41' class='border'>xxxx</td> <td id='disp_40' class='border'>xxxx</td> <td id='disp_41' class='border'>xxxx</td> </tr> <tr> <td id='risk_50' class='border'>xxxx</td> <td id='risk_51' class='border'></td> <td id='disp_50' class='border'></td> <td id='disp_51' class='border'>xxxx</td> </tr> </tbody> </table> <table class='mdl-data-table  mdl-data-table--selectable mdl-shadow--2dp mdl-cell mdl-cell--2-col'> <thead> <tr> <th class='border'>Risc Stop</th> <th class='border'>Preço</th> <th class='border'>Preço</th> <th class='border'>Fila</th> </tr> </thead> <tbody> <tr> <td id='risk_stop_00' class='border'>xxxx</td> <td id='risk_stop_01' class='border'>xxxx</td> <td id='fila_00'      class='border'>xxxx</td> <td id='fila_01'      class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_10' class='border'>xxxx</td> <td id='risk_stop_11' class='border'>xxxx</td> <td id='fila_10' class='border'>xxxx</td> <td id='fila_11' class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_20' class='border'>xxxx</td> <td id='risk_stop_21' class='border'>xxxx</td> <td id='fila_20' class='border'>xxxx</td> <td id='fila_21' class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_30' class='border'>xxxx</td> <td id='risk_stop_31' class='border'>xxxx</td> <td id='fila_30' class='border'>xxxx</td> <td id='fila_31' class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_40' class='border'>xxxx</td> <td id='risk_stop_41' class='border'>xxxx</td> <td id='fila_40' class='border'>xxxx</td> <td id='fila_41' class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_50' class='border'>xxxx</td> <td id='risk_stop_51' class='border'></td> <td id='fila_50' class='border'></td> <td id='fila_51' class='border'>xxxx</td> </tr> </tbody> </table> </div>";
    $("#disp_risk").html(template);
    
    $("#"+ticks+"_ticks #disp_00 ").html(occ['disponivel'][0]['price']);
    $("#"+ticks+"_ticks #disp_01 ").html(occ['disponivel'][0]['quantity']);
    $("#"+ticks+"_ticks #disp_10 ").html(occ['disponivel'][1]['price']);
    $("#"+ticks+"_ticks #disp_11 ").html(occ['disponivel'][1]['quantity']);
    $("#"+ticks+"_ticks #disp_20 ").html(occ['disponivel'][2]['price']);
    $("#"+ticks+"_ticks #disp_21 ").html(occ['disponivel'][2]['quantity']);
    $("#"+ticks+"_ticks #disp_30 ").html(occ['disponivel'][3]['price']);
    $("#"+ticks+"_ticks #disp_31 ").html(occ['disponivel'][3]['quantity']);
    $("#"+ticks+"_ticks #disp_40 ").html(occ['disponivel'][4]['price']);
    $("#"+ticks+"_ticks #disp_41 ").html(occ['disponivel'][4]['quantity']);
    $("#"+ticks+"_ticks #disp_50 ").html('');
    $("#"+ticks+"_ticks #disp_51 ").html(   occ['disponivel'][0]['quantity']+
                                            occ['disponivel'][1]['quantity']+
                                            occ['disponivel'][2]['quantity']+
                                            occ['disponivel'][3]['quantity']+
                                            occ['disponivel'][4]['quantity']);

    $("#"+ticks+"_ticks #risk_00 ").html(occ['risco'][0]['quantity']);
    $("#"+ticks+"_ticks #risk_01 ").html(occ['risco'][0]['price']);
    $("#"+ticks+"_ticks #risk_10 ").html(occ['risco'][1]['quantity']);
    $("#"+ticks+"_ticks #risk_11 ").html(occ['risco'][1]['price']);
    $("#"+ticks+"_ticks #risk_20 ").html(occ['risco'][2]['quantity']);
    $("#"+ticks+"_ticks #risk_21 ").html(occ['risco'][2]['price']);
    $("#"+ticks+"_ticks #risk_30 ").html(occ['risco'][3]['quantity']);
    $("#"+ticks+"_ticks #risk_31 ").html(occ['risco'][3]['price']);
    $("#"+ticks+"_ticks #risk_40 ").html(occ['risco'][4]['quantity']);
    $("#"+ticks+"_ticks #risk_41 ").html(occ['risco'][4]['price']);
    $("#"+ticks+"_ticks #risk_51 ").html('');
    $("#"+ticks+"_ticks #risk_50 ").html(   occ['risco'][0]['quantity']+
                                            occ['risco'][1]['quantity']+
                                            occ['risco'][2]['quantity']+
                                            occ['risco'][3]['quantity']+
                                            occ['risco'][4]['quantity']);
    
    $("#"+ticks+"_ticks #risk_stop_01 ").html(occ['risco_stop'][0]['price']);
    $("#"+ticks+"_ticks #risk_stop_00 ").html(occ['risco_stop'][0]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_11 ").html(occ['risco_stop'][1]['price']);
    $("#"+ticks+"_ticks #risk_stop_10 ").html(occ['risco_stop'][1]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_21 ").html(occ['risco_stop'][2]['price']);
    $("#"+ticks+"_ticks #risk_stop_20 ").html(occ['risco_stop'][2]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_31 ").html(occ['risco_stop'][3]['price']);
    $("#"+ticks+"_ticks #risk_stop_30 ").html(occ['risco_stop'][3]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_41 ").html(occ['risco_stop'][4]['price']);
    $("#"+ticks+"_ticks #risk_stop_40 ").html(occ['risco_stop'][4]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_51 ").html('');
    $("#"+ticks+"_ticks #risk_stop_50 ").html(  occ['risco_stop'][0]['quantity']+
                                                occ['risco_stop'][1]['quantity']+
                                                occ['risco_stop'][2]['quantity']+
                                                occ['risco_stop'][3]['quantity']+
                                                occ['risco_stop'][4]['quantity']);
                                                
    $("#"+ticks+"_ticks #fila_01 ").html(occ['risk_fila'][0]['quantity']);
    $("#"+ticks+"_ticks #fila_00 ").html(occ['risk_fila'][0]['price']);
    $("#"+ticks+"_ticks #fila_11 ").html(occ['risk_fila'][1]['quantity']);
    $("#"+ticks+"_ticks #fila_10 ").html(occ['risk_fila'][1]['price']);
    $("#"+ticks+"_ticks #fila_21 ").html(occ['risk_fila'][2]['quantity']);
    $("#"+ticks+"_ticks #fila_20 ").html(occ['risk_fila'][2]['price']);
    $("#"+ticks+"_ticks #fila_31 ").html(occ['risk_fila'][3]['quantity']);
    $("#"+ticks+"_ticks #fila_30 ").html(occ['risk_fila'][3]['price']);
    $("#"+ticks+"_ticks #fila_41 ").html(occ['risk_fila'][4]['quantity']);
    $("#"+ticks+"_ticks #fila_40 ").html(occ['risk_fila'][4]['price']);
    $("#"+ticks+"_ticks #fila_50 ").html('');
    $("#"+ticks+"_ticks #fila_51 ").html(   occ['risk_fila'][0]['quantity']+
                                            occ['risk_fila'][1]['quantity']+
                                            occ['risk_fila'][2]['quantity']+
                                            occ['risk_fila'][3]['quantity']+
                                            occ['risk_fila'][4]['quantity']);
    
}
function disp_risk_v() {
    var template = "<div id='disp_risk'> <table class='mdl-data-table  mdl-data-table--selectable mdl-shadow--2dp mdl-cell mdl-cell--2-col'> <thead> <tr> <th class='border'>Disponível</th> <th class='border'>Preço</th> <th class='border'>Preço</th> <th class='border'>Risco</th> </tr> </thead> <tbody> <tr> <td id='disp_00' class='border'>xxxx</td> <td id='disp_01' class='border'>xxxx</td> <td id='risk_00' class='border'>xxxx</td> <td id='risk_01' class='border'>xxxx</td> </tr> <tr> <td id='disp_10' class='border'>xxxx</td> <td id='disp_11' class='border'>xxxx</td> <td id='risk_10' class='border'>xxxx</td> <td id='risk_11' class='border'>xxxx</td> </tr> <tr> <td id='disp_20' class='border'>xxxx</td> <td id='disp_21' class='border'>xxxx</td> <td id='risk_20' class='border'>xxxx</td> <td id='risk_21' class='border'>xxxx</td> </tr> <tr> <td id='disp_30' class='border'>xxxx</td> <td id='disp_31' class='border'>xxxx</td> <td id='risk_30' class='border'>xxxx</td> <td id='risk_31' class='border'>xxxx</td> </tr> <tr> <td id='disp_40' class='border'>xxxx</td> <td id='disp_41' class='border'>xxxx</td> <td id='risk_40' class='border'>xxxx</td> <td id='risk_41' class='border'>xxxx</td> </tr> <tr> <td id='disp_50' class='border'>xxxx</td> <td id='disp_51' class='border'></td> <td id='risk_50' class='border'></td> <td id='risk_51' class='border'>xxxx</td> </tr> </tbody> </table> <table class='mdl-data-table  mdl-data-table--selectable mdl-shadow--2dp mdl-cell mdl-cell--2-col'> <thead> <tr> <th class='border'>Fila</th> <th class='border'>Preço</th> <th class='border'>Preço</th> <th class='border'>Risc Stop</th> </tr> </thead> <tbody> <tr> <td id='fila_00'        class='border'>xxxx</td> <td id='fila_01'        class='border'>xxxx</td> <td id='risk_stop_00'   class='border'>xxxx</td> <td id='risk_stop_01'   class='border'>xxxx</td> </tr> <tr> <td id='fila_10'        class='border'>xxxx</td> <td id='fila_11'        class='border'>xxxx</td> <td id='risk_stop_10'   class='border'>xxxx</td> <td id='risk_stop_11'   class='border'>xxxx</td> </tr> <tr> <td id='fila_20'        class='border'>xxxx</td> <td id='fila_21'        class='border'>xxxx</td> <td id='risk_stop_20'   class='border'>xxxx</td> <td id='risk_stop_21'   class='border'>xxxx</td> </tr> <tr> <td id='fila_30'        class='border'>xxxx</td> <td id='fila_31'        class='border'>xxxx</td> <td id='risk_stop_30'   class='border'>xxxx</td> <td id='risk_stop_31'   class='border'>xxxx</td> </tr> <tr> <td id='fila_40'        class='border'>xxxx</td> <td id='fila_41'        class='border'>xxxx</td> <td id='risk_stop_40'   class='border'>xxxx</td> <td id='risk_stop_41'   class='border'>xxxx</td> </tr> <tr> <td id='fila_50'        class='border'>xxxx</td> <td id='fila_51'        class='border'></td> <td id='risk_stop_50'   class='border'></td> <td id='risk_stop_51'   class='border'>xxxx</td> </tr> </tbody> </table> </div>";
    $("#disp_risk").html(template);
    
    $("#"+ticks+"_ticks #disp_01 ").html(occ['disponivel'][0]['price']);
    $("#"+ticks+"_ticks #disp_00 ").html(occ['disponivel'][0]['quantity']);
    $("#"+ticks+"_ticks #disp_11 ").html(occ['disponivel'][1]['price']);
    $("#"+ticks+"_ticks #disp_10 ").html(occ['disponivel'][1]['quantity']);
    $("#"+ticks+"_ticks #disp_21 ").html(occ['disponivel'][2]['price']);
    $("#"+ticks+"_ticks #disp_20 ").html(occ['disponivel'][2]['quantity']);
    $("#"+ticks+"_ticks #disp_31 ").html(occ['disponivel'][3]['price']);
    $("#"+ticks+"_ticks #disp_30 ").html(occ['disponivel'][3]['quantity']);
    $("#"+ticks+"_ticks #disp_41 ").html(occ['disponivel'][4]['price']);
    $("#"+ticks+"_ticks #disp_40 ").html(occ['disponivel'][4]['quantity']);
    $("#"+ticks+"_ticks #disp_51 ").html('');
    $("#"+ticks+"_ticks #disp_50 ").html(   occ['disponivel'][0]['quantity']+
                                            occ['disponivel'][1]['quantity']+
                                            occ['disponivel'][2]['quantity']+
                                            occ['disponivel'][3]['quantity']+
                                            occ['disponivel'][4]['quantity']);

    $("#"+ticks+"_ticks #risk_01 ").html(occ['risco'][0]['quantity']);
    $("#"+ticks+"_ticks #risk_00 ").html(occ['risco'][0]['price']);
    $("#"+ticks+"_ticks #risk_11 ").html(occ['risco'][1]['quantity']);
    $("#"+ticks+"_ticks #risk_10 ").html(occ['risco'][1]['price']);
    $("#"+ticks+"_ticks #risk_21 ").html(occ['risco'][2]['quantity']);
    $("#"+ticks+"_ticks #risk_20 ").html(occ['risco'][2]['price']);
    $("#"+ticks+"_ticks #risk_31 ").html(occ['risco'][3]['quantity']);
    $("#"+ticks+"_ticks #risk_30 ").html(occ['risco'][3]['price']);
    $("#"+ticks+"_ticks #risk_41 ").html(occ['risco'][4]['quantity']);
    $("#"+ticks+"_ticks #risk_40 ").html(occ['risco'][4]['price']);
    $("#"+ticks+"_ticks #risk_50 ").html('');
    $("#"+ticks+"_ticks #risk_51 ").html(   occ['risco'][0]['quantity']+
                                            occ['risco'][1]['quantity']+
                                            occ['risco'][2]['quantity']+
                                            occ['risco'][3]['quantity']+
                                            occ['risco'][4]['quantity']);
    
    $("#"+ticks+"_ticks #risk_stop_00 ").html(occ['risco_stop'][0]['price']);
    $("#"+ticks+"_ticks #risk_stop_01 ").html(occ['risco_stop'][0]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_10 ").html(occ['risco_stop'][1]['price']);
    $("#"+ticks+"_ticks #risk_stop_11 ").html(occ['risco_stop'][1]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_20 ").html(occ['risco_stop'][2]['price']);
    $("#"+ticks+"_ticks #risk_stop_21 ").html(occ['risco_stop'][2]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_30 ").html(occ['risco_stop'][3]['price']);
    $("#"+ticks+"_ticks #risk_stop_31 ").html(occ['risco_stop'][3]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_40 ").html(occ['risco_stop'][4]['price']);
    $("#"+ticks+"_ticks #risk_stop_41 ").html(occ['risco_stop'][4]['quantity']);
    $("#"+ticks+"_ticks #risk_stop_50 ").html('');
    $("#"+ticks+"_ticks #risk_stop_51 ").html(  occ['risco_stop'][0]['quantity']+
                                                occ['risco_stop'][1]['quantity']+
                                                occ['risco_stop'][2]['quantity']+
                                                occ['risco_stop'][3]['quantity']+
                                                occ['risco_stop'][4]['quantity']);
                                                
    $("#"+ticks+"_ticks #fila_00 ").html(occ['risk_fila'][0]['quantity']);
    $("#"+ticks+"_ticks #fila_01 ").html(occ['risk_fila'][0]['price']);
    $("#"+ticks+"_ticks #fila_10 ").html(occ['risk_fila'][1]['quantity']);
    $("#"+ticks+"_ticks #fila_11 ").html(occ['risk_fila'][1]['price']);
    $("#"+ticks+"_ticks #fila_20 ").html(occ['risk_fila'][2]['quantity']);
    $("#"+ticks+"_ticks #fila_21 ").html(occ['risk_fila'][2]['price']);
    $("#"+ticks+"_ticks #fila_30 ").html(occ['risk_fila'][3]['quantity']);
    $("#"+ticks+"_ticks #fila_31 ").html(occ['risk_fila'][3]['price']);
    $("#"+ticks+"_ticks #fila_40 ").html(occ['risk_fila'][4]['quantity']);
    $("#"+ticks+"_ticks #fila_41 ").html(occ['risk_fila'][4]['price']);
    $("#"+ticks+"_ticks #fila_51 ").html('');
    $("#"+ticks+"_ticks #fila_50 ").html(   occ['risk_fila'][0]['quantity']+
                                            occ['risk_fila'][1]['quantity']+
                                            occ['risk_fila'][2]['quantity']+
                                            occ['risk_fila'][3]['quantity']+
                                            occ['risk_fila'][4]['quantity']);
    
}
function spreadZeradoGeral(segundos,local) {
    $("#"+ticks+"_ticks #"+segundos+" #sz_paddw ")                    .html(occ[local]['paddw']['paddw']);
    $("#"+ticks+"_ticks #"+segundos+" #sz_qaddw ")                    .html(occ[local]['paddw']['qaddw']);
    $("#"+ticks+"_ticks #"+segundos+" #sz_removido_qaddw ")           .html(occ[local]['paddw']['removido']);
    $("#"+ticks+"_ticks #"+segundos+" #sz_porcentagem_qaddw ")        .html(occ[local]['paddw']['porcentagem'].toFixed(2));
    $("#"+ticks+"_ticks #"+segundos+" #sz_porcentagem_real_qaddw ")   .html(occ[local]['paddw']['porcentagem_real'].toFixed(2));
    $("#"+ticks+"_ticks #"+segundos+" #sz_calculo ")                  .html(occ[local]['paddw']['Tipo de Cálculo']);
    $("#"+ticks+"_ticks #"+segundos+" #sz_financeiro ")               .html(occ[local]['paddw']['Financeiro']);

    $("#"+ticks+"_ticks #"+segundos+" #sz_paddsw ")                   .html(occ[local]['paddsw']['paddsw']);
    $("#"+ticks+"_ticks #"+segundos+" #sz_qaddsw ")                   .html(occ[local]['paddsw']['qaddsw']);
    $("#"+ticks+"_ticks #"+segundos+" #sz_removido_qaddsw ")          .html(occ[local]['paddsw']['removido']);
    $("#"+ticks+"_ticks #"+segundos+" #sz_porcentagem_qaddsw ")       .html(occ[local]['paddsw']['porcentagem'].toFixed(2));
    
    if(occ[local]['paddsw']['teria_lucro'])
        $("#"+ticks+"_ticks #"+segundos+" #sz_teria_lucro ").html("Sim");
    else
        $("#"+ticks+"_ticks #"+segundos+" #sz_teria_lucro ").html("Não");
}
function spreadZerado3Segundos() {
    $("#"+ticks+"_ticks #frequencia_min ").html(occ['spread_zerado_segundos']['frequencia'][0]);
    $("#"+ticks+"_ticks #frequencia_max ").html(occ['spread_zerado_segundos']['frequencia'][1]);
    spreadZeradoGeral('segundos_sim','spread_zerado_segundos');
}
function set_snap_c(index){
    var soma_l = 0;
    var soma_r = 0;
    for(var i =0; i < 5; i++){
        var a = occ['snap_shots']['mbp_snap_'+index][i][1];
        var b = occ['snap_shots']['mbp_snap_'+index][i][0];
        var c = occ['snap_shots']['mbp_snap_'+index][i][2];
        var d = occ['snap_shots']['mbp_snap_'+index][i][3];
        soma_l += a;
        soma_r += d;
        
        $( "#"+ticks+"_ticks td#snap_"+index+"_"+i+"0" ).html(a);
        $( "#"+ticks+"_ticks td#snap_"+index+"_"+i+"1" ).html(b);
        $( "#"+ticks+"_ticks td#snap_"+index+"_"+i+"2" ).html(c);
        $( "#"+ticks+"_ticks td#snap_"+index+"_"+i+"3" ).html(d);
        
    }
    $( "#"+ticks+"_ticks td#snap_"+index+"_50").html(soma_l);
    $( "#"+ticks+"_ticks td#snap_"+index+"_53").html(soma_r);
}
function set_snap_v(index){
    var soma_l = 0;
    var soma_r = 0;
    for(var i =0; i < 5; i++){
        var a = occ['snap_shots']['mbp_snap_'+index][i][1];
        var b = occ['snap_shots']['mbp_snap_'+index][i][0];
        var c = occ['snap_shots']['mbp_snap_'+index][i][2];
        var d = occ['snap_shots']['mbp_snap_'+index][i][3];
        soma_l += a;
        soma_r += d;
        
        $( "#"+ticks+"_ticks td#snap_"+index+"_"+i+"0" ).html(a);
        $( "#"+ticks+"_ticks td#snap_"+index+"_"+i+"1" ).html(b);
        $( "#"+ticks+"_ticks td#snap_"+index+"_"+i+"2" ).html(c);
        $( "#"+ticks+"_ticks td#snap_"+index+"_"+i+"3" ).html(d);
        
    }
    $( "#"+ticks+"_ticks td#snap_"+index+"_50").html(soma_l);
    $( "#"+ticks+"_ticks td#snap_"+index+"_53").html(soma_r);
}
function snapshots_c(){
    
    for(var i =1; i < 8; i++){
        $( "#"+ticks+"_ticks td#snap_"+i+"_00" ).addClass( "active_side" );
        $( "#"+ticks+"_ticks td#snap_"+i+"_01" ).addClass( "active_side" );
        $( "#"+ticks+"_ticks td#snap_"+i+"_02" ).removeClass( "active_side" );
        $( "#"+ticks+"_ticks td#snap_"+i+"_03" ).removeClass( "active_side" );
    }
    
    set_snap_c(1);
    set_snap_c(2);
    set_snap_c(3);
    set_snap_c(4);
    set_snap_c(5);
    set_snap_c(6);
    set_snap_c(7);
    
}
function snapshots_v(){
    for(var i =1; i < 8; i++){
        $( "#"+ticks+"_ticks td#snap_"+i+"_00" ).removeClass( "active_side" );
        $( "#"+ticks+"_ticks td#snap_"+i+"_01" ).removeClass( "active_side" );
        $( "#"+ticks+"_ticks td#snap_"+i+"_02" ).addClass( "active_side" );
        $( "#"+ticks+"_ticks td#snap_"+i+"_03" ).addClass( "active_side" );
    }
    
    set_snap_v(1);
    set_snap_v(2);
    set_snap_v(3);
    set_snap_v(4);
    set_snap_v(5);
    set_snap_v(6);
    set_snap_v(7);
}

function getValueByKey(name,key){
    for(var i =0; i <occ['snap_shots']['chart_2'].length; i++){
        if(occ['snap_shots']['chart_2'][i]['name'] == name){
            return occ['snap_shots']['chart_2'][i][key];
        }
    }
}

function getValueByKeyOFI(name,key){
    for(var i =0; i <occ['snap_shots']['chart_2'].length; i++){
        if(occ['snap_shots']['chart_2'][i]['name'] == name){
            if(occ['informacoes']['side'] == 'C')
                return occ['snap_shots']['chart_2'][i][key][0];
            else
                return occ['snap_shots']['chart_2'][i][key][0];
        }
    }
}


function table_of_analisys(){
    //Porcentagem removida no QADDW/WDO:
    $( "#"+ticks+"_ticks td#pqaddw_1" ).html(getValueByKey("snap_2","removidos_no_qaddw")+"%");
    $( "#"+ticks+"_ticks td#pqaddw_2" ).html(getValueByKey("snap_3","removidos_no_qaddw")+"%");
    $( "#"+ticks+"_ticks td#pqaddw_3" ).html(getValueByKey("snap_4","removidos_no_qaddw")+"%");
    $( "#"+ticks+"_ticks td#pqaddw_4" ).html(getValueByKey("snap_5","removidos_no_qaddw")+"%");
    $( "#"+ticks+"_ticks td#pqaddw_5" ).html(getValueByKey("snap_6","removidos_no_qaddw")+"%");
    $( "#"+ticks+"_ticks td#pqaddw_6" ).html( "??" );
    
    //Tinha buraco no book na hora do ADD?
    $( "#"+ticks+"_ticks td#tem_buraco_0" ).html( getValueByKey("snap_1","tinha_buraco")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#tem_buraco_1" ).html( getValueByKey("snap_2","tinha_buraco")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#tem_buraco_2" ).html( getValueByKey("snap_3","tinha_buraco")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#tem_buraco_3" ).html( getValueByKey("snap_4","tinha_buraco")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#tem_buraco_4" ).html( getValueByKey("snap_5","tinha_buraco")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#tem_buraco_5" ).html( getValueByKey("snap_6","tinha_buraco")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#tem_buraco_6" ).html( "??" );
    
    //Qual o OFI (QADD - Outro lado)
    $( "#"+ticks+"_ticks td#ofi_0" ).html( getValueByKeyOFI("snap_1","ofi") );
    $( "#"+ticks+"_ticks td#ofi_1" ).html( getValueByKeyOFI("snap_2","ofi") );
    $( "#"+ticks+"_ticks td#ofi_2" ).html( getValueByKeyOFI("snap_3","ofi") );
    $( "#"+ticks+"_ticks td#ofi_3" ).html( getValueByKeyOFI("snap_4","ofi") );
    $( "#"+ticks+"_ticks td#ofi_4" ).html( getValueByKeyOFI("snap_5","ofi") );
    $( "#"+ticks+"_ticks td#ofi_5" ).html( getValueByKeyOFI("snap_6","ofi") );
    $( "#"+ticks+"_ticks td#ofi_6" ).html( "??" );
    
    //Houve DELL no ADD?
    $( "#"+ticks+"_ticks td#dell_add_0" ).html( getValueByKey("snap_1","delete_no_add"));
    $( "#"+ticks+"_ticks td#dell_add_1" ).html( getValueByKey("snap_2","delete_no_add"));
    $( "#"+ticks+"_ticks td#dell_add_2" ).html( getValueByKey("snap_3","delete_no_add"));
    $( "#"+ticks+"_ticks td#dell_add_3" ).html( getValueByKey("snap_4","delete_no_add"));
    $( "#"+ticks+"_ticks td#dell_add_4" ).html( getValueByKey("snap_5","delete_no_add"));
    $( "#"+ticks+"_ticks td#dell_add_5" ).html( getValueByKey("snap_6","delete_no_add"));
    
    
    //Teve iceberg após o DELL?
    $( "#"+ticks+"_ticks td#iceberg_0" ).html( getValueByKey("snap_1","teve_iceberg_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#iceberg_1" ).html( getValueByKey("snap_2","teve_iceberg_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#iceberg_2" ).html( getValueByKey("snap_3","teve_iceberg_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#iceberg_3" ).html( getValueByKey("snap_4","teve_iceberg_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#iceberg_4" ).html( getValueByKey("snap_5","teve_iceberg_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#iceberg_5" ).html( getValueByKey("snap_6","teve_iceberg_wdo")? "Sim" : "Não" );
    
    //Teve ADD secundário após o DELL?
    $( "#"+ticks+"_ticks td#add_secundario_0" ).html( getValueByKey("snap_1","teve_add_secundario_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#add_secundario_1" ).html( getValueByKey("snap_2","teve_add_secundario_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#add_secundario_2" ).html( getValueByKey("snap_3","teve_add_secundario_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#add_secundario_3" ).html( getValueByKey("snap_4","teve_add_secundario_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#add_secundario_4" ).html( getValueByKey("snap_5","teve_add_secundario_wdo")? "Sim" : "Não" );
    $( "#"+ticks+"_ticks td#add_secundario_5" ).html( getValueByKey("snap_6","teve_add_secundario_wdo")? "Sim" : "Não" );
    
    //O evento estava a favor ou contra o VWAP?
    $( "#"+ticks+"_ticks td#vwap_0" ).html( getValueByKey("snap_1","vwap_contra"));
    $( "#"+ticks+"_ticks td#vwap_1" ).html( getValueByKey("snap_2","vwap_contra"));
    $( "#"+ticks+"_ticks td#vwap_2" ).html( getValueByKey("snap_3","vwap_contra"));
    $( "#"+ticks+"_ticks td#vwap_3" ).html( getValueByKey("snap_4","vwap_contra"));
    $( "#"+ticks+"_ticks td#vwap_4" ).html( getValueByKey("snap_5","vwap_contra"));
    $( "#"+ticks+"_ticks td#vwap_5" ).html( getValueByKey("snap_6","vwap_contra"));
    
    //Frequência
    $( "#"+ticks+"_ticks td#frequencia_0" ).html( "["+getValueByKey("snap_1","frequencia")[0]+","+getValueByKey("snap_1","frequencia")[1]+"]" );
    $( "#"+ticks+"_ticks td#frequencia_1" ).html( "["+getValueByKey("snap_2","frequencia")[0]+","+getValueByKey("snap_2","frequencia")[1]+"]" );
    $( "#"+ticks+"_ticks td#frequencia_2" ).html( "["+getValueByKey("snap_3","frequencia")[0]+","+getValueByKey("snap_3","frequencia")[1]+"]" );
    $( "#"+ticks+"_ticks td#frequencia_3" ).html( "["+getValueByKey("snap_4","frequencia")[0]+","+getValueByKey("snap_4","frequencia")[1]+"]" );
    $( "#"+ticks+"_ticks td#frequencia_4" ).html( "["+getValueByKey("snap_5","frequencia")[0]+","+getValueByKey("snap_5","frequencia")[1]+"]" );
    $( "#"+ticks+"_ticks td#frequencia_5" ).html( "["+getValueByKey("snap_6","frequencia")[0]+","+getValueByKey("snap_6","frequencia")[1]+"]" );
    
    //RPS 
    $( "#"+ticks+"_ticks td#rps_0" ).html( getValueByKey("snap_1","rps_all")[0]);
    $( "#"+ticks+"_ticks td#rps_1" ).html( getValueByKey("snap_2","rps_all")[0]);
    $( "#"+ticks+"_ticks td#rps_2" ).html( getValueByKey("snap_3","rps_all")[0]);
    $( "#"+ticks+"_ticks td#rps_3" ).html( getValueByKey("snap_4","rps_all")[0]);
    $( "#"+ticks+"_ticks td#rps_4" ).html( getValueByKey("snap_5","rps_all")[0]);
    $( "#"+ticks+"_ticks td#rps_5" ).html( getValueByKey("snap_6","rps_all")[0]);
    
    //Somatório do saldo de C & V
    $( "#"+ticks+"_ticks td#saldo_0" ).html( getValueByKey("snap_1","saldo_acumudado")[0]);
    $( "#"+ticks+"_ticks td#saldo_1" ).html( getValueByKey("snap_2","saldo_acumudado")[0]);
    $( "#"+ticks+"_ticks td#saldo_2" ).html( getValueByKey("snap_3","saldo_acumudado")[0]);
    $( "#"+ticks+"_ticks td#saldo_3" ).html( getValueByKey("snap_4","saldo_acumudado")[0]);
    $( "#"+ticks+"_ticks td#saldo_4" ).html( getValueByKey("snap_5","saldo_acumudado")[0]);
    $( "#"+ticks+"_ticks td#saldo_5" ).html( getValueByKey("snap_6","saldo_acumudado")[0]);
    
}
function update() {
    puts(occ)
    
    informacoes();
    
    if(occ['informacoes']['side'] == 'C'){
        disp_risk_c();
        snapshots_c();
    }
    else{
        disp_risk_v();
        snapshots_v();
    }
    
    table_of_analisys();
    spreadZeradoGeral('segundos_nao','Spread_zerado');
    spreadZerado3Segundos();
    drawChart();
}




google.charts.load('current', {
    'packages': ['corechart']
});
//google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    puts(occ['snap_shots']['chart_2']);
    
    var data = [
        ['Momentos', 'Qadd', 'Qaddw'],
        ['Momento ADD', 1000, 400],
        ['Spread zerado 1ª linha', 1170, 460],
        ['Spread zerado última linha', 660, 1120],
        ['1s', 1030, 540],
        ['2s', 1030, 545],
        ['3s', 1030, 550]
    ];
    
    data = [['Momentos', 'Qadd', 'Qaddw']];
    
    
    for(var i = 0; i < occ['snap_shots']['chart_2'].length; i++){
        var name = occ['snap_shots']['chart_2'][i]['name'];
        var qadd_restante = occ['snap_shots']['chart_2'][i]['delete_no_add'];
        var qaddw_restante = occ['snap_shots']['chart_2'][i]['removidos_no_qaddw'];
        data.push([name,qadd_restante,qaddw_restante]);
    }
    
    puts(data);
    
    data = google.visualization.arrayToDataTable(data);

    var options = {
        title: 'Evolução das remoções',
        legend: {
            position: 'rigth'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('remotion_chart_' + ticks));

    chart.draw(data, options);
}





// HANDLE FUNCTIONS
$.getJSON("https://qubox-ddkclaudio.c9users.io/data_json.json", function(json) {
    data = json;
    day = $("#day").html().replace("Estudos do Book - ","");
    find_occ();
});
function tab_ticks(arg){
    ticks = arg;
}
function select_occ(arg){
    occ = occs[arg+""];
    update();
}
function find_occ() {
    var local_occ;
    
    var types = []
    
    types.push(data['J17']);
    types.push(data['K17']);
    types.push(data['M17']);
    types.push(data['M18']);
    
    for(i = 0; i< types.length; i++){
        var type = types[i];
        if(type != null){
            for(j = 0; j< type.length; j++){
                var local_day = type[j];
                if(local_day['day'] == day){
                    
                    
                    for(k = 2; k < 11; k++){
                        var local_tick = local_day[''+k];
                        
                        if(local_tick['more50'] != null && local_tick['more50'].length > 0)
                        local_tick['more50'].forEach(function(entry) {
                            occs[entry['informacoes']['start_time']] = entry;
                        });
                        
                        if(local_tick['less50'] != null && local_tick['less50'].length > 0)
                        local_tick['less50'].forEach(function(entry) {
                            occs[entry['informacoes']['start_time']] = entry;
                        });
                    }
                }
            }
        }
    }
}

// UTILS
function puts(argument) {
    console.log(argument);
}
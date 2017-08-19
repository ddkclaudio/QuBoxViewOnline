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
    $("#"+ticks+"_ticks #start_time").html( occ['informacoes']['start_time'].replace("000",""));
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
    $("#"+ticks+"_ticks #end_time").html( occ['informacoes']['end_time'].replace("000",""));
    $("#"+ticks+"_ticks #vwap").html( occ['informacoes']['vwap']);
}
function disp_risk() {
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
    
    $("#"+ticks+"_ticks #fila_00 ").html('');
    $("#"+ticks+"_ticks #fila_01 ").html('');
    $("#"+ticks+"_ticks #fila_10 ").html('');
    $("#"+ticks+"_ticks #fila_11 ").html('');
    $("#"+ticks+"_ticks #fila_20 ").html('');
    $("#"+ticks+"_ticks #fila_21 ").html('');
    $("#"+ticks+"_ticks #fila_30 ").html('');
    $("#"+ticks+"_ticks #fila_31 ").html('');
    $("#"+ticks+"_ticks #fila_40 ").html('');
    $("#"+ticks+"_ticks #fila_41 ").html('');
    $("#"+ticks+"_ticks #fila_50 ").html('');
    $("#"+ticks+"_ticks #fila_51 ").html('');
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
    $("#"+ticks+"_ticks #"+segundos+" #sz_teria_lucro ")              .html(occ[local]['paddsw']['teria_lucro']);
}
function spreadZerado3Segundos() {
    $("#"+ticks+"_ticks #frequencia_min ").html(occ['spread_zerado_segundos']['frequencia'][0]);
    $("#"+ticks+"_ticks #frequencia_max ").html(occ['spread_zerado_segundos']['frequencia'][1]);
    spreadZeradoGeral('segundos_sim','spread_zerado_segundos');
}
function update() {
    puts(occ)
    
    informacoes();
    disp_risk();
    spreadZeradoGeral('segundos_nao','Spread_zerado');
    spreadZerado3Segundos();
}














// HANDLE FUNCTIONS
$.getJSON("https://qubox-ddkclaudio.c9users.io/to_json.json", function(json) {
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
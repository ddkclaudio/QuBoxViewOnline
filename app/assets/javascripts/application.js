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
google.charts.load('current', {
    'packages': ['corechart']
});

var sync_count = 0;
var data;
var snap_1;
var snap_2;
var snap_3;
var snap_4;
var snap_5;
var snap_6;
var snap_7;

var snap_1_shot;
var snap_2_shot;
var snap_3_shot;
var snap_4_shot;
var snap_5_shot;
var snap_6_shot;
var snap_7_shot;

var disponivel;
var risco;
var risco_stop;
var risk_fila;

var ticks = 2;

function informacoes() {
    $("#" + ticks + "_ticks #index_occ  ").html(data['index'])
    $("#" + ticks + "_ticks #start_time ").html(data['start_time'].split(' ')[1])
    $("#" + ticks + "_ticks #paddi      ").html(data['paddi'])
    $("#" + ticks + "_ticks #qadd       ").html(data['qadd'])
    $("#" + ticks + "_ticks #side       ").html(data['side'])
    $("#" + ticks + "_ticks #padds      ").html(data['padds'])
    $("#" + ticks + "_ticks #qadds      ").html(data['qadds'])
    $("#" + ticks + "_ticks #paddf      ").html(data['paddf'])
    $("#" + ticks + "_ticks #x          ").html(data['x'])
    $("#" + ticks + "_ticks #paddw      ").html(data['paddw'])
    $("#" + ticks + "_ticks #qaddw      ").html(data['qaddw'] > 0 ? data['qaddw'] : "Não atingido")
    $("#" + ticks + "_ticks #paddsw     ").html(data['paddsw'])
    $("#" + ticks + "_ticks #qaddsw     ").html(data['qaddsw'] > 0 ? data['qaddsw'] : "Não atingido")
    $("#" + ticks + "_ticks #end_time   ").html(data['end_time'].split(' ')[1])
    $("#" + ticks + "_ticks #vwap       ").html(snap_1['vwap'])
    $("#" + ticks + "_ticks #RPS_INFO   ").html(snap_1['rps'])
}

function disp_risk_c() {
    var template = "<div id='disp_risk'> <table class='mdl-data-table  mdl-data-table--selectable mdl-shadow--2dp mdl-cell mdl-cell--2-col'> <thead> <tr> <th class='border'>Risco</th> <th class='border'>Preço</th> <th class='border'>Preço</th> <th class='border'>Disponível</th> </tr> </thead> <tbody> <tr> <td id='risk_00' class='border'>xxxx</td> <td id='risk_01' class='border'>xxxx</td> <td id='disp_00' class='border'>xxxx</td> <td id='disp_01' class='border'>xxxx</td> </tr> <tr> <td id='risk_10' class='border'>xxxx</td> <td id='risk_11' class='border'>xxxx</td> <td id='disp_10' class='border'>xxxx</td> <td id='disp_11' class='border'>xxxx</td> </tr> <tr> <td id='risk_20' class='border'>xxxx</td> <td id='risk_21' class='border'>xxxx</td> <td id='disp_20' class='border'>xxxx</td> <td id='disp_21' class='border'>xxxx</td> </tr> <tr> <td id='risk_30' class='border'>xxxx</td> <td id='risk_31' class='border'>xxxx</td> <td id='disp_30' class='border'>xxxx</td> <td id='disp_31' class='border'>xxxx</td> </tr> <tr> <td id='risk_40' class='border'>xxxx</td> <td id='risk_41' class='border'>xxxx</td> <td id='disp_40' class='border'>xxxx</td> <td id='disp_41' class='border'>xxxx</td> </tr> <tr> <td id='risk_50' class='border'>xxxx</td> <td id='risk_51' class='border'></td> <td id='disp_50' class='border'></td> <td id='disp_51' class='border'>xxxx</td> </tr> </tbody> </table> <table class='mdl-data-table  mdl-data-table--selectable mdl-shadow--2dp mdl-cell mdl-cell--2-col'> <thead> <tr> <th class='border'>Risc Stop</th> <th class='border'>Preço</th> <th class='border'>Preço</th> <th class='border'>Fila</th> </tr> </thead> <tbody> <tr> <td id='risk_stop_00' class='border'>xxxx</td> <td id='risk_stop_01' class='border'>xxxx</td> <td id='fila_00'      class='border'>xxxx</td> <td id='fila_01'      class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_10' class='border'>xxxx</td> <td id='risk_stop_11' class='border'>xxxx</td> <td id='fila_10' class='border'>xxxx</td> <td id='fila_11' class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_20' class='border'>xxxx</td> <td id='risk_stop_21' class='border'>xxxx</td> <td id='fila_20' class='border'>xxxx</td> <td id='fila_21' class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_30' class='border'>xxxx</td> <td id='risk_stop_31' class='border'>xxxx</td> <td id='fila_30' class='border'>xxxx</td> <td id='fila_31' class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_40' class='border'>xxxx</td> <td id='risk_stop_41' class='border'>xxxx</td> <td id='fila_40' class='border'>xxxx</td> <td id='fila_41' class='border'>xxxx</td> </tr> <tr> <td id='risk_stop_50' class='border'>xxxx</td> <td id='risk_stop_51' class='border'></td> <td id='fila_50' class='border'></td> <td id='fila_51' class='border'>xxxx</td> </tr> </tbody> </table> </div>";
    $("#disp_risk").html(template);
    $("#" + ticks + "_ticks #disp_00 ").html(disponivel['bid_price_0']);
    $("#" + ticks + "_ticks #disp_01 ").html(disponivel['bid_quantity_0']);
    $("#" + ticks + "_ticks #disp_10 ").html(disponivel['bid_price_1']);
    $("#" + ticks + "_ticks #disp_11 ").html(disponivel['bid_quantity_1']);
    $("#" + ticks + "_ticks #disp_20 ").html(disponivel['bid_price_2']);
    $("#" + ticks + "_ticks #disp_21 ").html(disponivel['bid_quantity_2']);
    $("#" + ticks + "_ticks #disp_30 ").html(disponivel['bid_price_3']);
    $("#" + ticks + "_ticks #disp_31 ").html(disponivel['bid_quantity_3']);
    $("#" + ticks + "_ticks #disp_40 ").html(disponivel['bid_price_4']);
    $("#" + ticks + "_ticks #disp_41 ").html(disponivel['bid_quantity_4']);
    $("#" + ticks + "_ticks #disp_50 ").html('');
    $("#" + ticks + "_ticks #disp_51 ").html(disponivel['bid_quantity_0'] + disponivel['bid_quantity_1'] + disponivel['bid_quantity_2'] + disponivel['bid_quantity_3'] + disponivel['bid_quantity_4']);

    $("#" + ticks + "_ticks #risk_00 ").html(risco['bid_quantity_0']);
    $("#" + ticks + "_ticks #risk_01 ").html(risco['bid_price_0']);
    $("#" + ticks + "_ticks #risk_10 ").html(risco['bid_quantity_1']);
    $("#" + ticks + "_ticks #risk_11 ").html(risco['bid_price_1']);
    $("#" + ticks + "_ticks #risk_20 ").html(risco['bid_quantity_2']);
    $("#" + ticks + "_ticks #risk_21 ").html(risco['bid_price_2']);
    $("#" + ticks + "_ticks #risk_30 ").html(risco['bid_quantity_3']);
    $("#" + ticks + "_ticks #risk_31 ").html(risco['bid_price_3']);
    $("#" + ticks + "_ticks #risk_40 ").html(risco['bid_quantity_4']);
    $("#" + ticks + "_ticks #risk_41 ").html(risco['bid_price_4']);
    $("#" + ticks + "_ticks #risk_51 ").html('');
    $("#" + ticks + "_ticks #risk_50 ").html(risco['bid_quantity_0'] + risco['bid_quantity_1'] + risco['bid_quantity_2'] + risco['bid_quantity_3'] + risco['bid_quantity_4']);

    $("#" + ticks + "_ticks #risk_stop_01 ").html(risco_stop['bid_price_0']);
    $("#" + ticks + "_ticks #risk_stop_00 ").html(risco_stop['bid_quantity_0']);
    $("#" + ticks + "_ticks #risk_stop_11 ").html(risco_stop['bid_price_1']);
    $("#" + ticks + "_ticks #risk_stop_10 ").html(risco_stop['bid_quantity_1']);
    $("#" + ticks + "_ticks #risk_stop_21 ").html(risco_stop['bid_price_2']);
    $("#" + ticks + "_ticks #risk_stop_20 ").html(risco_stop['bid_quantity_2']);
    $("#" + ticks + "_ticks #risk_stop_31 ").html(risco_stop['bid_price_3']);
    $("#" + ticks + "_ticks #risk_stop_30 ").html(risco_stop['bid_quantity_3']);
    $("#" + ticks + "_ticks #risk_stop_41 ").html(risco_stop['bid_price_4']);
    $("#" + ticks + "_ticks #risk_stop_40 ").html(risco_stop['bid_quantity_4']);
    $("#" + ticks + "_ticks #risk_stop_51 ").html('');
    $("#" + ticks + "_ticks #risk_stop_50 ").html(risco_stop['bid_quantity_0'] + risco_stop['bid_quantity_1'] + risco_stop['bid_quantity_2'] + risco_stop['bid_quantity_3'] + risco_stop['bid_quantity_4']);

    $("#" + ticks + "_ticks #fila_01 ").html(risk_fila['bid_quantity_0']);
    $("#" + ticks + "_ticks #fila_00 ").html(risk_fila['bid_price_0']);
    $("#" + ticks + "_ticks #fila_11 ").html(risk_fila['bid_quantity_1']);
    $("#" + ticks + "_ticks #fila_10 ").html(risk_fila['bid_price_1']);
    $("#" + ticks + "_ticks #fila_21 ").html(risk_fila['bid_quantity_2']);
    $("#" + ticks + "_ticks #fila_20 ").html(risk_fila['bid_price_2']);
    $("#" + ticks + "_ticks #fila_31 ").html(risk_fila['bid_quantity_3']);
    $("#" + ticks + "_ticks #fila_30 ").html(risk_fila['bid_price_3']);
    $("#" + ticks + "_ticks #fila_41 ").html(risk_fila['bid_quantity_4']);
    $("#" + ticks + "_ticks #fila_40 ").html(risk_fila['bid_price_4']);
    $("#" + ticks + "_ticks #fila_50 ").html('');
    $("#" + ticks + "_ticks #fila_51 ").html(risk_fila['bid_quantity_0'] + risk_fila['bid_quantity_1'] + risk_fila['bid_quantity_2'] + risk_fila['bid_quantity_3'] + risk_fila['bid_quantity_4']);
}

function disp_risk_v() {
    var template = "<div id='disp_risk'> <table class='mdl-data-table  mdl-data-table--selectable mdl-shadow--2dp mdl-cell mdl-cell--2-col'> <thead> <tr> <th class='border'>Disponível</th> <th class='border'>Preço</th> <th class='border'>Preço</th> <th class='border'>Risco</th> </tr> </thead> <tbody> <tr> <td id='disp_00' class='border'>xxxx</td> <td id='disp_01' class='border'>xxxx</td> <td id='risk_00' class='border'>xxxx</td> <td id='risk_01' class='border'>xxxx</td> </tr> <tr> <td id='disp_10' class='border'>xxxx</td> <td id='disp_11' class='border'>xxxx</td> <td id='risk_10' class='border'>xxxx</td> <td id='risk_11' class='border'>xxxx</td> </tr> <tr> <td id='disp_20' class='border'>xxxx</td> <td id='disp_21' class='border'>xxxx</td> <td id='risk_20' class='border'>xxxx</td> <td id='risk_21' class='border'>xxxx</td> </tr> <tr> <td id='disp_30' class='border'>xxxx</td> <td id='disp_31' class='border'>xxxx</td> <td id='risk_30' class='border'>xxxx</td> <td id='risk_31' class='border'>xxxx</td> </tr> <tr> <td id='disp_40' class='border'>xxxx</td> <td id='disp_41' class='border'>xxxx</td> <td id='risk_40' class='border'>xxxx</td> <td id='risk_41' class='border'>xxxx</td> </tr> <tr> <td id='disp_50' class='border'>xxxx</td> <td id='disp_51' class='border'></td> <td id='risk_50' class='border'></td> <td id='risk_51' class='border'>xxxx</td> </tr> </tbody> </table> <table class='mdl-data-table  mdl-data-table--selectable mdl-shadow--2dp mdl-cell mdl-cell--2-col'> <thead> <tr> <th class='border'>Fila</th> <th class='border'>Preço</th> <th class='border'>Preço</th> <th class='border'>Risc Stop</th> </tr> </thead> <tbody> <tr> <td id='fila_00'        class='border'>xxxx</td> <td id='fila_01'        class='border'>xxxx</td> <td id='risk_stop_00'   class='border'>xxxx</td> <td id='risk_stop_01'   class='border'>xxxx</td> </tr> <tr> <td id='fila_10'        class='border'>xxxx</td> <td id='fila_11'        class='border'>xxxx</td> <td id='risk_stop_10'   class='border'>xxxx</td> <td id='risk_stop_11'   class='border'>xxxx</td> </tr> <tr> <td id='fila_20'        class='border'>xxxx</td> <td id='fila_21'        class='border'>xxxx</td> <td id='risk_stop_20'   class='border'>xxxx</td> <td id='risk_stop_21'   class='border'>xxxx</td> </tr> <tr> <td id='fila_30'        class='border'>xxxx</td> <td id='fila_31'        class='border'>xxxx</td> <td id='risk_stop_30'   class='border'>xxxx</td> <td id='risk_stop_31'   class='border'>xxxx</td> </tr> <tr> <td id='fila_40'        class='border'>xxxx</td> <td id='fila_41'        class='border'>xxxx</td> <td id='risk_stop_40'   class='border'>xxxx</td> <td id='risk_stop_41'   class='border'>xxxx</td> </tr> <tr> <td id='fila_50'        class='border'>xxxx</td> <td id='fila_51'        class='border'></td> <td id='risk_stop_50'   class='border'></td> <td id='risk_stop_51'   class='border'>xxxx</td> </tr> </tbody> </table> </div>";
    $("#disp_risk").html(template);
    $("#" + ticks + "_ticks #disp_00 ").html(disponivel['bid_quantity_0']);
    $("#" + ticks + "_ticks #disp_01 ").html(disponivel['bid_price_0']);
    $("#" + ticks + "_ticks #disp_10 ").html(disponivel['bid_quantity_1']);
    $("#" + ticks + "_ticks #disp_11 ").html(disponivel['bid_price_1']);
    $("#" + ticks + "_ticks #disp_20 ").html(disponivel['bid_quantity_2']);
    $("#" + ticks + "_ticks #disp_21 ").html(disponivel['bid_price_2']);
    $("#" + ticks + "_ticks #disp_30 ").html(disponivel['bid_quantity_3']);
    $("#" + ticks + "_ticks #disp_31 ").html(disponivel['bid_price_3']);
    $("#" + ticks + "_ticks #disp_40 ").html(disponivel['bid_quantity_4']);
    $("#" + ticks + "_ticks #disp_41 ").html(disponivel['bid_price_4']);
    $("#" + ticks + "_ticks #disp_51 ").html('');
    $("#" + ticks + "_ticks #disp_50 ").html(disponivel['bid_quantity_0'] + disponivel['bid_quantity_1'] + disponivel['bid_quantity_2'] + disponivel['bid_quantity_3'] + disponivel['bid_quantity_4']);

    $("#" + ticks + "_ticks #risk_00 ").html(risco['bid_price_0']);
    $("#" + ticks + "_ticks #risk_01 ").html(risco['bid_quantity_0']);
    $("#" + ticks + "_ticks #risk_10 ").html(risco['bid_price_1']);
    $("#" + ticks + "_ticks #risk_11 ").html(risco['bid_quantity_1']);
    $("#" + ticks + "_ticks #risk_20 ").html(risco['bid_price_2']);
    $("#" + ticks + "_ticks #risk_21 ").html(risco['bid_quantity_2']);
    $("#" + ticks + "_ticks #risk_30 ").html(risco['bid_price_3']);
    $("#" + ticks + "_ticks #risk_31 ").html(risco['bid_quantity_3']);
    $("#" + ticks + "_ticks #risk_40 ").html(risco['bid_price_4']);
    $("#" + ticks + "_ticks #risk_41 ").html(risco['bid_quantity_4']);
    $("#" + ticks + "_ticks #risk_50 ").html('');
    $("#" + ticks + "_ticks #risk_51 ").html(risco['bid_quantity_0'] + risco['bid_quantity_1'] + risco['bid_quantity_2'] + risco['bid_quantity_3'] + risco['bid_quantity_4']);

    $("#" + ticks + "_ticks #risk_stop_01 ").html(risco_stop['bid_quantity_0']);
    $("#" + ticks + "_ticks #risk_stop_00 ").html(risco_stop['bid_price_0']);
    $("#" + ticks + "_ticks #risk_stop_11 ").html(risco_stop['bid_quantity_1']);
    $("#" + ticks + "_ticks #risk_stop_10 ").html(risco_stop['bid_price_1']);
    $("#" + ticks + "_ticks #risk_stop_21 ").html(risco_stop['bid_quantity_2']);
    $("#" + ticks + "_ticks #risk_stop_20 ").html(risco_stop['bid_price_2']);
    $("#" + ticks + "_ticks #risk_stop_31 ").html(risco_stop['bid_quantity_3']);
    $("#" + ticks + "_ticks #risk_stop_30 ").html(risco_stop['bid_price_3']);
    $("#" + ticks + "_ticks #risk_stop_41 ").html(risco_stop['bid_quantity_4']);
    $("#" + ticks + "_ticks #risk_stop_40 ").html(risco_stop['bid_price_4']);
    $("#" + ticks + "_ticks #risk_stop_50 ").html('');
    $("#" + ticks + "_ticks #risk_stop_51 ").html(risco_stop['bid_quantity_0'] + risco_stop['bid_quantity_1'] + risco_stop['bid_quantity_2'] + risco_stop['bid_quantity_3'] + risco_stop['bid_quantity_4']);

    $("#" + ticks + "_ticks #fila_01 ").html(risk_fila['bid_price_0']);
    $("#" + ticks + "_ticks #fila_00 ").html(risk_fila['bid_quantity_0']);
    $("#" + ticks + "_ticks #fila_11 ").html(risk_fila['bid_price_1']);
    $("#" + ticks + "_ticks #fila_10 ").html(risk_fila['bid_quantity_1']);
    $("#" + ticks + "_ticks #fila_21 ").html(risk_fila['bid_price_2']);
    $("#" + ticks + "_ticks #fila_20 ").html(risk_fila['bid_quantity_2']);
    $("#" + ticks + "_ticks #fila_31 ").html(risk_fila['bid_price_3']);
    $("#" + ticks + "_ticks #fila_30 ").html(risk_fila['bid_quantity_3']);
    $("#" + ticks + "_ticks #fila_41 ").html(risk_fila['bid_price_4']);
    $("#" + ticks + "_ticks #fila_40 ").html(risk_fila['bid_quantity_4']);
    $("#" + ticks + "_ticks #fila_51 ").html('');
    $("#" + ticks + "_ticks #fila_50 ").html(risk_fila['bid_quantity_0'] + risk_fila['bid_quantity_1'] + risk_fila['bid_quantity_2'] + risk_fila['bid_quantity_3'] + risk_fila['bid_quantity_4']);
}

function spreadZeradoGeral(segundos, local, side) {

    var qaddw           = data['qaddw'];
    var qaddw_d         = snap_2['qaddw_dell'];
    var qaddw_c         = snap_2['qaddw_change'];
    var qaddw_add       = snap_2['qaddw_add'];
    var qaddw_canc      = snap_2['qaddw_cancel'];

    // SPREAD ZERADO QADDW
    $("#" + ticks + "_ticks #" + segundos + " #sz_paddw                     ").html(data['paddw']);
    $("#" + ticks + "_ticks #" + segundos + " #sz_qaddw                     ").html(qaddw);
    $("#" + ticks + "_ticks #" + segundos + " #sz_removido_qaddw            ").html(qaddw_d + qaddw_c);
    $("#" + ticks + "_ticks #" + segundos + " #sz_cancelado_qaddw           ").html(qaddw_canc);
    $("#" + ticks + "_ticks #" + segundos + " #sz_adicionado_qaddw          ").html(qaddw_add);
    $("#" + ticks + "_ticks #" + segundos + " #sz_porcentagem_qaddw         ").html(qaddw_d + qaddw_c + qaddw_canc);
    $("#" + ticks + "_ticks #" + segundos + " #sz_porcentagem_real_qaddw    ").html(qaddw_d + qaddw_c);
    $("#" + ticks + "_ticks #" + segundos + " #sz_calculo                   ").html(data['paddw_calculo_plus']);
    $("#" + ticks + "_ticks #" + segundos + " #sz_financeiro                ").html(data['paddw_financeiro_plus']);
    
    var qaddsw           = data['qaddsw'];
    var qaddsw_d         = snap_2['qaddsw_dell'];
    var qaddsw_c         = snap_2['qaddsw_change'];
    var qaddsw_add       = snap_2['qaddsw_add'];
    var qaddsw_canc      = snap_2['qaddsw_cancel'];
    
    $("#" + ticks + "_ticks #" + segundos + " #sz_paddsw                    ").html(data['paddsw']);
    $("#" + ticks + "_ticks #" + segundos + " #sz_qaddsw                    ").html(qaddsw);
    $("#" + ticks + "_ticks #" + segundos + " #sz_removido_qaddsw           ").html(qaddsw_d + qaddsw_c);
    $("#" + ticks + "_ticks #" + segundos + " #sz_cancelado_qaddsw          ").html(qaddsw_canc);
    $("#" + ticks + "_ticks #" + segundos + " #sz_adicionado_qaddsw         ").html(qaddsw_add);
    $("#" + ticks + "_ticks #" + segundos + " #sz_porcentagem_qaddsw        ").html(qaddsw_d + qaddsw_c + qaddsw_canc);
    $("#" + ticks + "_ticks #" + segundos + " #sz_porcentagem_real_qaddsw   ").html(qaddsw_d + qaddsw_c);
    
    var qadd           = data['qadd'];
    var qadd_d         = snap_2['qadd_dell'];
    var qadd_c         = snap_2['qadd_change'];
    var qadd_add       = snap_2['qadd_add'];
    var qadd_canc      = snap_2['qadd_cancel'];
    
    $("#" + ticks + "_ticks #" + segundos + " #sz_padd").html(data['paddi']);
    $("#" + ticks + "_ticks #" + segundos + " #sz_qadd").html(qadd);
    $("#" + ticks + "_ticks #" + segundos + " #sz_qadd_add").html(qadd_add);
    $("#" + ticks + "_ticks #" + segundos + " #sz_qadd_delete").html(qadd_d);
    $("#" + ticks + "_ticks #" + segundos + " #sz_qadd_change").html(qadd_c);
    $("#" + ticks + "_ticks #" + segundos + " #sz_qadd_cancel").html(qadd_canc);
    $("#" + ticks + "_ticks #" + segundos + " #sz_qadd_dc").html(qadd_d + qadd_c);
    $("#" + ticks + "_ticks #" + segundos + " #sz_qadd_dcc").html(qadd_d + qadd_c + qadd_canc);
    

    if (data['paddsw_lucro'] == 1)
        $("#" + ticks + "_ticks #" + segundos + " #sz_teria_lucro ").html("Sim");
    else
        $("#" + ticks + "_ticks #" + segundos + " #sz_teria_lucro ").html("Não");
}

function break_str(index,str) {
    switch(index){
        case 0:
            return str.split(',')[0].replace('[','');
        break;
        case 1:
            return str.split(',')[1].replace(']','');
        break;
    }
}

function spreadZerado3Segundos() {
    $("#" + ticks + "_ticks #frequencia_min ").html(break_str(0,snap_6['frequencia']));
    $("#" + ticks + "_ticks #frequencia_max ").html(break_str(1,snap_6['frequencia']));

    var qaddw           = data['qaddw'];
    var qaddw_d         = snap_6['qaddw_dell'];
    var qaddw_c         = snap_6['qaddw_change'];
    var qaddw_add       = snap_6['qaddw_add'];
    var qaddw_canc      = snap_6['qaddw_cancel'];

    // SPREAD ZERADO QADDW
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_paddw                     ").html(data['paddw']);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_qaddw                     ").html(qaddw);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_removido_qaddw            ").html(qaddw_d + qaddw_c);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_cancelado_qaddw           ").html(qaddw_canc);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_adicionado_qaddw          ").html(qaddw_add);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_porcentagem_qaddw         ").html(qaddw_d + qaddw_c + qaddw_canc);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_porcentagem_real_qaddw    ").html(qaddw_d + qaddw_c);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_calculo                   ").html(data['paddw_calculo_plus']);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_financeiro                ").html(data['paddw_financeiro_plus']);
    
    var qaddsw           = data['qaddsw'];
    var qaddsw_d         = snap_6['qaddsw_dell'];
    var qaddsw_c         = snap_6['qaddsw_change'];
    var qaddsw_add       = snap_6['qaddsw_add'];
    var qaddsw_canc      = snap_6['qaddsw_cancel'];
    
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_paddsw                    ").html(data['paddsw']);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_qaddsw                    ").html(qaddsw);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_removido_qaddsw           ").html(qaddsw_d + qaddsw_c);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_cancelado_qaddsw          ").html(qaddsw_canc);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_adicionado_qaddsw         ").html(qaddsw_add);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_porcentagem_qaddsw        ").html(qaddsw_d + qaddsw_c + qaddsw_canc);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_porcentagem_real_qaddsw   ").html(qaddsw_d + qaddsw_c);
    
    var qadd           = data['qadd'];
    var qadd_d         = snap_6['qadd_dell'];
    var qadd_c         = snap_6['qadd_change'];
    var qadd_add       = snap_6['qadd_add'];
    var qadd_canc      = snap_6['qadd_cancel'];
    
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_padd").html(data['paddi']);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_qadd").html(qadd);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_qadd_add").html(qadd_add);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_qadd_delete").html(qadd_d);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_qadd_change").html(qadd_c);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_qadd_cancel").html(qadd_canc);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_qadd_dc").html(qadd_d + qadd_c);
    $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_qadd_dcc").html(qadd_d + qadd_c + qadd_canc);

    if (data['paddsw_lucro_plus'])
        $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_teria_lucro ").html("Sim");
    else
        $("#" + ticks + "_ticks #" + 'segundos_sim' + " #sz_teria_lucro ").html("Não");
}

function set_snap_c(index) {


    var tmp;

    switch (index) {
        case 1:
            tmp = snap_1_shot;
            break;
        case 2:
            tmp = snap_2_shot;
            break;
        case 3:
            tmp = snap_3_shot;
            break;
        case 4:
            tmp = snap_4_shot;
            break;
        case 5:
            tmp = snap_5_shot;
            break;
        case 6:
            tmp = snap_6_shot;
            break;
        case 7:
            tmp = snap_7_shot;
            break;
    }

    var soma_l = 0;
    var soma_r = 0;
    
    if((data['snap_7'] > 0 && index == 7) || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6){
    for (var i = 0; i < 5; i++) {
        var a = tmp['bid_price_' + i];
        var b = tmp['bid_quantity_' + i];
        var c = tmp['ask_price_' + i];
        var d = tmp['ask_quantity_' + i];

        soma_l += b;
        soma_r += d;
        $("#" + ticks + "_ticks td#snap_" + index + "_" + i + "0").html(b);
        $("#" + ticks + "_ticks td#snap_" + index + "_" + i + "1").html(a);
        $("#" + ticks + "_ticks td#snap_" + index + "_" + i + "2").html(c);
        $("#" + ticks + "_ticks td#snap_" + index + "_" + i + "3").html(d);
    }
    $("#" + ticks + "_ticks td#snap_" + index + "_50").html(soma_l);
    $("#" + ticks + "_ticks td#snap_" + index + "_53").html(soma_r);
    }
    
}

function set_snap_v(index) {
    var tmp;
    switch (index) {
        case 1:
            tmp = snap_1_shot;
            break;
        case 2:
            tmp = snap_2_shot;
            break;
        case 3:
            tmp = snap_3_shot;
            break;
        case 4:
            tmp = snap_4_shot;
            break;
        case 5:
            tmp = snap_5_shot;
            break;
        case 6:
            tmp = snap_6_shot;
            break;
        case 7:
            tmp = snap_7_shot;
            puts("===== 7");
            break;
    }
    var soma_l = 0;
    var soma_r = 0;
    
    if( (index == 7 && tmp != null) || index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 )
    for (var i = 0; i < 5; i++) {
        var a = tmp['bid_price_' + i];
        
        var c = tmp['ask_price_' + i];
        var d = tmp['ask_quantity_' + i];
        var b = tmp['bid_quantity_' + i];
        
        soma_l += b;
        soma_r += d;
        $("#" + ticks + "_ticks td#snap_" + index + "_" + i + "0").html(b);
        $("#" + ticks + "_ticks td#snap_" + index + "_" + i + "1").html(a);
        $("#" + ticks + "_ticks td#snap_" + index + "_" + i + "2").html(c);
        $("#" + ticks + "_ticks td#snap_" + index + "_" + i + "3").html(d);
    }
    $("#" + ticks + "_ticks td#snap_" + index + "_50").html(soma_l);
    $("#" + ticks + "_ticks td#snap_" + index + "_53").html(soma_r);
}

function snapshots_c() {
    for (var i = 1; i < 8; i++) {
        $("#" + ticks + "_ticks td#snap_" + i + "_00").addClass("active_side");
        $("#" + ticks + "_ticks td#snap_" + i + "_01").addClass("active_side");
        $("#" + ticks + "_ticks td#snap_" + i + "_02").removeClass("active_side");
        $("#" + ticks + "_ticks td#snap_" + i + "_03").removeClass("active_side");
    }
    set_snap_c(1);
    set_snap_c(2);
    set_snap_c(3);
    set_snap_c(4);
    set_snap_c(5);
    set_snap_c(6);
    set_snap_c(7);
}

function snapshots_v() {
    for (var i = 1; i < 8; i++) {
        $("#" + ticks + "_ticks td#snap_" + i + "_00").removeClass("active_side");
        $("#" + ticks + "_ticks td#snap_" + i + "_01").removeClass("active_side");
        $("#" + ticks + "_ticks td#snap_" + i + "_02").addClass("active_side");
        $("#" + ticks + "_ticks td#snap_" + i + "_03").addClass("active_side");
    }
    set_snap_v(1);
    set_snap_v(2);
    set_snap_v(3);
    set_snap_v(4);
    set_snap_v(5);
    set_snap_v(6);
    set_snap_v(7);
}

function vwap_status(vwap) {
    if (data['side'] == "C")
        if (vwap >= data['paddi'])
            return "Contra";
        else
            return "A favor";
    else 
        if (vwap >= data['paddi'])
            return "A favor";
        else
            return "Contra";
}

function percent(arg){
    return ((arg * 100) / data['qaddw']).toFixed(2) ;
}

function get_ofi(index) {
    var tmp;
    switch (index) {
        case 1:
            tmp = snap_1_shot;
            break;
        case 2:
            tmp = snap_2_shot;
            break;
        case 3:
            tmp = snap_3_shot;
            break;
        case 4:
            tmp = snap_4_shot;
            break;
        case 5:
            tmp = snap_5_shot;
            break;
        case 6:
            tmp = snap_6_shot;
            break;
        case 7:
            tmp = snap_7_shot;
            break;
    }
    var soma_l = 0;
    var soma_r = 0;
    
    for (var i = 0; i < 5; i++) {
        var a = tmp['bid_price_' + i];
        
        var c = tmp['ask_price_' + i];
        var d = tmp['ask_quantity_' + i];
        var b = tmp['bid_quantity_' + i];
        
        soma_l += b;
        soma_r += d;
    }

    if(data['side'] == 'C')
        return soma_l - soma_r;
    return soma_r - soma_l;

}

function table_of_snapshots() {
	
    $("#" + ticks + "_ticks #qadd_dell_1")	.html(snap_1['qadd_dell']);
    $("#" + ticks + "_ticks #qadd_change_1").html(snap_1['qadd_change']);
    $("#" + ticks + "_ticks #qadd_add_1")	.html(snap_1['qadd_add']);
    $("#" + ticks + "_ticks #qadd_cancel_1").html(snap_1['qadd_cancel']);
    $("#" + ticks + "_ticks #qadd_total_1")	.html(snap_1['qadd_total']);
    $("#" + ticks + "_ticks #qadd_saldo_1")	.html(snap_1['qadd_saldo']);
	
    $("#" + ticks + "_ticks #qadd_dell_2")	.html(snap_2['qadd_dell']);
    $("#" + ticks + "_ticks #qadd_change_2").html(snap_2['qadd_change']);
    $("#" + ticks + "_ticks #qadd_add_2")	.html(snap_2['qadd_add']);
    $("#" + ticks + "_ticks #qadd_cancel_2").html(snap_2['qadd_cancel']);
    $("#" + ticks + "_ticks #qadd_total_2")	.html(snap_2['qadd_total']);
    $("#" + ticks + "_ticks #qadd_saldo_2")	.html(snap_2['qadd_saldo']);
	
    $("#" + ticks + "_ticks #qadd_dell_3")	.html(snap_3['qadd_dell']);
    $("#" + ticks + "_ticks #qadd_change_3").html(snap_3['qadd_change']);
    $("#" + ticks + "_ticks #qadd_add_3")	.html(snap_3['qadd_add']);
    $("#" + ticks + "_ticks #qadd_cancel_3").html(snap_3['qadd_cancel']);
    $("#" + ticks + "_ticks #qadd_total_3")	.html(snap_3['qadd_total']);
    $("#" + ticks + "_ticks #qadd_saldo_3")	.html(snap_3['qadd_saldo']);
	
    $("#" + ticks + "_ticks #qadd_dell_4")	.html(snap_4['qadd_dell']);
    $("#" + ticks + "_ticks #qadd_change_4").html(snap_4['qadd_change']);
    $("#" + ticks + "_ticks #qadd_add_4")	.html(snap_4['qadd_add']);
    $("#" + ticks + "_ticks #qadd_cancel_4").html(snap_4['qadd_cancel']);
    $("#" + ticks + "_ticks #qadd_total_4")	.html(snap_4['qadd_total']);
    $("#" + ticks + "_ticks #qadd_saldo_4")	.html(snap_4['qadd_saldo']);
	
    $("#" + ticks + "_ticks #qadd_dell_5")	.html(snap_5['qadd_dell']);
    $("#" + ticks + "_ticks #qadd_change_5").html(snap_5['qadd_change']);
    $("#" + ticks + "_ticks #qadd_add_5")	.html(snap_5['qadd_add']);
    $("#" + ticks + "_ticks #qadd_cancel_5").html(snap_5['qadd_cancel']);
    $("#" + ticks + "_ticks #qadd_total_5")	.html(snap_5['qadd_total']);
    $("#" + ticks + "_ticks #qadd_saldo_5")	.html(snap_5['qadd_saldo']);
	
    $("#" + ticks + "_ticks #qadd_dell_6")	.html(snap_6['qadd_dell']);
    $("#" + ticks + "_ticks #qadd_change_6").html(snap_6['qadd_change']);
    $("#" + ticks + "_ticks #qadd_add_6")	.html(snap_6['qadd_add']);
    $("#" + ticks + "_ticks #qadd_cancel_6").html(snap_6['qadd_cancel']);
    $("#" + ticks + "_ticks #qadd_total_6")	.html(snap_6['qadd_total']);
    $("#" + ticks + "_ticks #qadd_saldo_6")	.html(snap_6['qadd_saldo']);
    
    //==================
    
    
    $("#" + ticks + "_ticks #qaddw_dell_1")	.html(snap_1['qaddw_dell']);
    $("#" + ticks + "_ticks #qaddw_change_1").html(snap_1['qaddw_change']);
    $("#" + ticks + "_ticks #qaddw_add_1")	.html(snap_1['qaddw_add']);
    $("#" + ticks + "_ticks #qaddw_cancel_1").html(snap_1['qaddw_cancel']);
    $("#" + ticks + "_ticks #qaddw_total_1")	.html(snap_1['qaddw_total']);
    $("#" + ticks + "_ticks #qaddw_saldo_1")	.html(snap_1['qaddw_saldo']);
	
    $("#" + ticks + "_ticks #qaddw_dell_2")	.html(snap_2['qaddw_dell']);
    $("#" + ticks + "_ticks #qaddw_change_2").html(snap_2['qaddw_change']);
    $("#" + ticks + "_ticks #qaddw_add_2")	.html(snap_2['qaddw_add']);
    $("#" + ticks + "_ticks #qaddw_cancel_2").html(snap_2['qaddw_cancel']);
    $("#" + ticks + "_ticks #qaddw_total_2")	.html(snap_2['qaddw_total']);
    $("#" + ticks + "_ticks #qaddw_saldo_2")	.html(snap_2['qaddw_saldo']);
	
    $("#" + ticks + "_ticks #qaddw_dell_3")	.html(snap_3['qaddw_dell']);
    $("#" + ticks + "_ticks #qaddw_change_3").html(snap_3['qaddw_change']);
    $("#" + ticks + "_ticks #qaddw_add_3")	.html(snap_3['qaddw_add']);
    $("#" + ticks + "_ticks #qaddw_cancel_3").html(snap_3['qaddw_cancel']);
    $("#" + ticks + "_ticks #qaddw_total_3")	.html(snap_3['qaddw_total']);
    $("#" + ticks + "_ticks #qaddw_saldo_3")	.html(snap_3['qaddw_saldo']);
	
    $("#" + ticks + "_ticks #qaddw_dell_4")	.html(snap_4['qaddw_dell']);
    $("#" + ticks + "_ticks #qaddw_change_4").html(snap_4['qaddw_change']);
    $("#" + ticks + "_ticks #qaddw_add_4")	.html(snap_4['qaddw_add']);
    $("#" + ticks + "_ticks #qaddw_cancel_4").html(snap_4['qaddw_cancel']);
    $("#" + ticks + "_ticks #qaddw_total_4")	.html(snap_4['qaddw_total']);
    $("#" + ticks + "_ticks #qaddw_saldo_4")	.html(snap_4['qaddw_saldo']);
	
    $("#" + ticks + "_ticks #qaddw_dell_5")	.html(snap_5['qaddw_dell']);
    $("#" + ticks + "_ticks #qaddw_change_5").html(snap_5['qaddw_change']);
    $("#" + ticks + "_ticks #qaddw_add_5")	.html(snap_5['qaddw_add']);
    $("#" + ticks + "_ticks #qaddw_cancel_5").html(snap_5['qaddw_cancel']);
    $("#" + ticks + "_ticks #qaddw_total_5")	.html(snap_5['qaddw_total']);
    $("#" + ticks + "_ticks #qaddw_saldo_5")	.html(snap_5['qaddw_saldo']);
	
    $("#" + ticks + "_ticks #qaddw_dell_6")	.html(snap_6['qaddw_dell']);
    $("#" + ticks + "_ticks #qaddw_change_6").html(snap_6['qaddw_change']);
    $("#" + ticks + "_ticks #qaddw_add_6")	.html(snap_6['qaddw_add']);
    $("#" + ticks + "_ticks #qaddw_cancel_6").html(snap_6['qaddw_cancel']);
    $("#" + ticks + "_ticks #qaddw_total_6")	.html(snap_6['qaddw_total']);
    $("#" + ticks + "_ticks #qaddw_saldo_6")	.html(snap_6['qaddw_saldo']);

    
}
function table_of_analisys() {
    //Porcentagem removida no QADDW/WDO:
    $("#" + ticks + "_ticks td#pqaddw_1").html(percent(snap_2['qaddw_dell'] + snap_2['qaddw_change']));
    $("#" + ticks + "_ticks td#pqaddw_2").html(percent(snap_3['qaddw_dell'] + snap_3['qaddw_change']));
    $("#" + ticks + "_ticks td#pqaddw_3").html(percent(snap_4['qaddw_dell'] + snap_4['qaddw_change']));
    $("#" + ticks + "_ticks td#pqaddw_4").html(percent(snap_5['qaddw_dell'] + snap_5['qaddw_change']));
    $("#" + ticks + "_ticks td#pqaddw_5").html(percent(snap_6['qaddw_dell'] + snap_6['qaddw_change']));
    $("#" + ticks + "_ticks td#pqaddw_6").html("??");


    //Tinha buraco no book na hora do ADD?
    $("#" + ticks + "_ticks td#tem_buraco_0").html(snap_1['tinha_buraco'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#tem_buraco_1").html(snap_2['tinha_buraco'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#tem_buraco_2").html(snap_3['tinha_buraco'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#tem_buraco_3").html(snap_4['tinha_buraco'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#tem_buraco_4").html(snap_5['tinha_buraco'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#tem_buraco_5").html(snap_6['tinha_buraco'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#tem_buraco_6").html("??");

    //Qual o OFI (QADD - Outro lado)
    $("#" + ticks + "_ticks td#ofi_0").html(get_ofi(1));
    $("#" + ticks + "_ticks td#ofi_1").html(get_ofi(2));
    $("#" + ticks + "_ticks td#ofi_2").html(get_ofi(3));
    $("#" + ticks + "_ticks td#ofi_3").html(get_ofi(4));
    $("#" + ticks + "_ticks td#ofi_4").html(get_ofi(5));
    $("#" + ticks + "_ticks td#ofi_5").html(get_ofi(6));
    $("#" + ticks + "_ticks td#ofi_6").html("??");

    //Houve DELL no ADD?
    var last = 0
    var diff = 0

    diff = snap_1['delete_no_add'] 
    $("#" + ticks + "_ticks td#dell_add_0").html( 0 > 0 ? "Sim" : "Não");

    diff = snap_2['delete_no_add']
    $("#" + ticks + "_ticks td#dell_add_1").html(Math.abs(snap_1['qadd_dell'] - snap_2['qadd_dell']) + Math.abs(snap_1['qadd_change'] - snap_2['qadd_change']) > 0 ? "Sim" : "Não");

    diff = snap_3['delete_no_add']
    $("#" + ticks + "_ticks td#dell_add_2").html(Math.abs(snap_2['qadd_dell'] - snap_3['qadd_dell']) + Math.abs(snap_2['qadd_change'] - snap_3['qadd_change']) > 0 ? "Sim" : "Não");

    diff = snap_4['delete_no_add'] 
    $("#" + ticks + "_ticks td#dell_add_3").html(Math.abs(snap_3['qadd_dell'] - snap_4['qadd_dell']) + Math.abs(snap_3['qadd_change'] - snap_4['qadd_change']) > 0 ? "Sim" : "Não");

    diff = snap_5['delete_no_add'] 
    $("#" + ticks + "_ticks td#dell_add_4").html(Math.abs(snap_4['qadd_dell'] - snap_5['qadd_dell']) + Math.abs(snap_4['qadd_change'] - snap_5['qadd_change']) > 0 ? "Sim" : "Não");

    diff = snap_6['delete_no_add']
    $("#" + ticks + "_ticks td#dell_add_5").html(Math.abs(snap_5['qadd_dell'] - snap_6['qadd_dell']) + Math.abs(snap_5['qadd_change'] - snap_6['qadd_change']) > 0 ? "Sim" : "Não");

    //Teve iceberg após o DELL?
    $("#" + ticks + "_ticks td#iceberg_0").html(snap_1['teve_iceberg'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#iceberg_1").html(snap_2['teve_iceberg'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#iceberg_2").html(snap_3['teve_iceberg'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#iceberg_3").html(snap_4['teve_iceberg'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#iceberg_4").html(snap_5['teve_iceberg'] > 0 ? "Sim" : "Não");
    $("#" + ticks + "_ticks td#iceberg_5").html(snap_6['teve_iceberg'] > 0 ? "Sim" : "Não");

    //Teve ADD secundário após o DELL?
    $("#" + ticks + "_ticks td#add_secundario_0").html(snap_1['teve_add_secundario'] > 0 ? "Sim" : "Não")
    $("#" + ticks + "_ticks td#add_secundario_1").html(snap_2['teve_add_secundario'] > 0 ? "Sim" : "Não")
    $("#" + ticks + "_ticks td#add_secundario_2").html(snap_3['teve_add_secundario'] > 0 ? "Sim" : "Não")
    $("#" + ticks + "_ticks td#add_secundario_3").html(snap_4['teve_add_secundario'] > 0 ? "Sim" : "Não")
    $("#" + ticks + "_ticks td#add_secundario_4").html(snap_5['teve_add_secundario'] > 0 ? "Sim" : "Não")
    $("#" + ticks + "_ticks td#add_secundario_5").html(snap_6['teve_add_secundario'] > 0 ? "Sim" : "Não")

    //O evento estava a favor ou contra o VWAP?
    $("#" + ticks + "_ticks td#vwap_0").html(vwap_status(snap_1['vwap']));
    $("#" + ticks + "_ticks td#vwap_1").html(vwap_status(snap_2['vwap']));
    $("#" + ticks + "_ticks td#vwap_2").html(vwap_status(snap_3['vwap']));
    $("#" + ticks + "_ticks td#vwap_3").html(vwap_status(snap_4['vwap']));
    $("#" + ticks + "_ticks td#vwap_4").html(vwap_status(snap_5['vwap']));
    $("#" + ticks + "_ticks td#vwap_5").html(vwap_status(snap_6['vwap']));

    //Frequência
    $("#" + ticks + "_ticks td#frequencia_0").html(snap_1['frequencia']);
    $("#" + ticks + "_ticks td#frequencia_1").html(snap_2['frequencia']);
    $("#" + ticks + "_ticks td#frequencia_2").html(snap_3['frequencia']);
    $("#" + ticks + "_ticks td#frequencia_3").html(snap_4['frequencia']);
    $("#" + ticks + "_ticks td#frequencia_4").html(snap_5['frequencia']);
    $("#" + ticks + "_ticks td#frequencia_5").html(snap_6['frequencia']);

    //RPS
    $("#" + ticks + "_ticks td#rps_0").html(snap_1['rps']);
    $("#" + ticks + "_ticks td#rps_1").html(snap_2['rps']);
    $("#" + ticks + "_ticks td#rps_2").html(snap_3['rps']);
    $("#" + ticks + "_ticks td#rps_3").html(snap_4['rps']);
    $("#" + ticks + "_ticks td#rps_4").html(snap_5['rps']);
    $("#" + ticks + "_ticks td#rps_5").html(snap_6['rps']);

    //Somatório do saldo de C & V
    $("#" + ticks + "_ticks td#saldo_0").html(snap_1['acumulado']);
    $("#" + ticks + "_ticks td#saldo_1").html(snap_2['acumulado']);
    $("#" + ticks + "_ticks td#saldo_2").html(snap_3['acumulado']);
    $("#" + ticks + "_ticks td#saldo_3").html(snap_4['acumulado']);
    $("#" + ticks + "_ticks td#saldo_4").html(snap_5['acumulado']);
    $("#" + ticks + "_ticks td#saldo_5").html(snap_6['acumulado']);
    
    
    
    
    
}

function update() {

    informacoes();

    if (data['side'] == 'C') {
        disp_risk_c();
        snapshots_c();
    } else {
        disp_risk_v();
        snapshots_v();
    }

    table_of_analisys();
    table_of_snapshots();
    spreadZeradoGeral('segundos_nao', 'Spread_zerado', 1);
    spreadZerado3Segundos();
    drawChart();
    drawChart_rps();
    drawChart_dol_bid_ask();
}

function getLabel(arg) {
    if(arg == 0)
        return ".";
    if (arg == "snap_1" || arg == 1)
        return "Momento do ADD";
    if (arg == "snap_2" || arg == 2)
        return "Spread zerado 1ª linha";
    if (arg == "snap_3" || arg == 3)
        return "Spread zerado ultima linha";
    if (arg == "snap_4" || arg == 4)
        return "+1s";
    if (arg == "snap_5" || arg == 5)
        return "+2s";
    if (arg == "snap_6" || arg == 6)
        return "+3s";
    if (arg == "snap_7" || arg == 7)
        return "Houve dell no qadd"
    return "erro: getLabel(arg)"
}

function drawChart() {
    // Create and populate the data table.
    var data_google = new google.visualization.DataTable();
    data_google.addColumn('string', 'x');
    data_google.addColumn({
        type: 'string',
        role: 'annotation'
    });
    data_google.addColumn({
        type: 'string',
        role: 'annotationText'
    });
    data_google.addColumn('number', 'Qadd');
    data_google.addColumn('number', 'Qaddw');
    data_google.addColumn('number', 'QaddwC');
    
    
    
    var a = snap_1['qadd_saldo'];
    var b = data['qaddw'] - ((snap_1['qaddw_dell'] + snap_1['qaddw_change']) - snap_1['qaddw_add']) ;
    var c = snap_1['qaddw_saldo'];
    data_google.addRow([getLabel('snap_1'), '', '', a, b, c]);
    
    a = snap_2['qadd_saldo'];
    b = data['qaddw'] - ((snap_2['qaddw_dell'] + snap_2['qaddw_change']) - snap_2['qaddw_add']) ;
    c = snap_2['qaddw_saldo'];
    data_google.addRow([getLabel('snap_2'), '', '', a, b, c]);
    
    a = snap_3['qadd_saldo'];
    b = data['qaddw'] - ((snap_3['qaddw_dell'] + snap_3['qaddw_change']) - snap_3['qaddw_add']) ;
    c = snap_3['qaddw_saldo'];
    data_google.addRow([getLabel('snap_3'), '', '', a, b, c]);
    
    a = snap_4['qadd_saldo'];
    b = data['qaddw'] - ((snap_4['qaddw_dell'] + snap_4['qaddw_change']) - snap_4['qaddw_add']) ;
    c = snap_4['qaddw_saldo'];
    data_google.addRow([getLabel('snap_4'), '', '', a, b, c]);
    
    a = snap_5['qadd_saldo'];
    b = data['qaddw'] - ((snap_5['qaddw_dell'] + snap_5['qaddw_change']) - snap_5['qaddw_add']) ;
    c = snap_5['qaddw_saldo'];
    data_google.addRow([getLabel('snap_5'), '', '', a, b, c]);
    
    a = snap_6['qadd_saldo'];
    b = data['qaddw'] - ((snap_6['qaddw_dell'] + snap_6['qaddw_change']) - snap_6['qaddw_add']) ;
    c = snap_6['qaddw_saldo'];
    data_google.addRow([getLabel('snap_6'), '', '', a, b, c]);




    // Create and draw the visualization.
    new google.visualization.LineChart(document.getElementById('remotion_chart_' + ticks)).
    draw(data_google, {
        // curveType: 'function',
title: 'Evolução do Qadd e Qaddw',
        vAxis: {
            fontSize: 13, // or the number you want
            title: 'temps (ms)',
            viewWindowMode: 'explicit',
            viewWindow: {
                // max: max(occ['informacoes']['qadd'], occ['informacoes']['qaddw']),
            }
        },
        hAxis: {
            textStyle: {
                fontSize: 13 // or the number you want
            },
        },
        annotations: {
            style: 'line'
        }
    });
}

function drawChart_rps() {
    // Create and populate the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'x');
    data.addColumn({
        type: 'string',
        role: 'annotation'
    });
    data.addColumn({
        type: 'string',
        role: 'annotationText'
    });
    data.addColumn('number', 'Rps');
    data.addColumn('number', 'Saldo acumulado');
    
    data.addRow([getLabel('snap_1'), '', '', snap_1['rps'], snap_1['acumulado']]);
    data.addRow([getLabel('snap_2'), '', '', snap_2['rps'], snap_2['acumulado']]);
    data.addRow([getLabel('snap_3'), '', '', snap_3['rps'], snap_3['acumulado']]);
    data.addRow([getLabel('snap_4'), '', '', snap_4['rps'], snap_4['acumulado']]);
    data.addRow([getLabel('snap_5'), '', '', snap_5['rps'], snap_5['acumulado']]);
    data.addRow([getLabel('snap_6'), '', '', snap_6['rps'], snap_6['acumulado']]);

    // Create and draw the visualization.
    new google.visualization.LineChart(document.getElementById('rps_chart_' + ticks)).
    draw(data, {
        // curveType: 'function',
title: 'Evolução do RPS - DOL',
        vAxis: {
            maxValue: 10,
            fontSize: 13, // or the number you want
            title: 'temps (ms)',
            viewWindowMode: 'explicit',
            viewWindow: {
                // max: max(occ['informacoes']['qadd'], occ['informacoes']['qaddw']),
            }
        },
        hAxis: {
            textStyle: {
                fontSize: 13 // or the number you want
            },
        },
        annotations: {
            style: 'line'
        }
    });
}

function drawChart_dol_bid_ask() {
    // Create and populate the gooo table.
    var gooo = new google.visualization.DataTable();
    gooo.addColumn('string', 'x');
    gooo.addColumn({
        type: 'string',
        role: 'annotation'
    });
    gooo.addColumn({
        type: 'string',
        role: 'annotationText'
    });
    gooo.addColumn('number', 'Preço bid');
    gooo.addColumn('number', 'Preço ask');
    
    var book_dol_price = data['book_dol_price'].split(";");
    
    book_dol_price.forEach(function(entry) {
        entry = entry.split(" ");
        
        gooo.addRow([getLabel(entry[2]), '', '',entry[0] * 1, entry[1] * 1 ]);
    });
    
    

    // Create and draw the visualization.
    new google.visualization.LineChart(document.getElementById('dol_bid_ask_chart_' + ticks)).
    draw(gooo, {
        // curveType: 'function',

        vAxis: {
            fontSize: 13, // or the number you want
            title: 'temps (ms)',
            viewWindowMode: 'explicit',
            viewWindow: {
                // max: max(occ['informacoes']['qadd'], occ['informacoes']['qaddw']),
            }
        },
        title: 'Evolução dos preços - DOL',
        hAxis: {
            textStyle: {
                fontSize: 13
            },
        },
        annotations: {
            style: 'line'
        }
    });
}

function load_json(index) {

    sync_count = 0;

    $.getJSON("https://qubox-ddkclaudio.c9users.io/infos/" + index + ".json", function(json) {
        data = json;

        $.getJSON("https://qubox-ddkclaudio.c9users.io/snapshots/" + data['snap_2'] + ".json", function(snap_2_json) {
            snap_2 = snap_2_json;
            $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + snap_2['id_mbp'] + ".json", function(json) {
                snap_2_shot = json;
                sync();
            });
        });

        $.getJSON("https://qubox-ddkclaudio.c9users.io/snapshots/" + data['snap_3'] + ".json", function(snap_3_json) {
            snap_3 = snap_3_json;
            $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + snap_3['id_mbp'] + ".json", function(json) {
                snap_3_shot = json;
                sync();
            });
        });

        $.getJSON("https://qubox-ddkclaudio.c9users.io/snapshots/" + data['snap_4'] + ".json", function(snap_4_json) {
            snap_4 = snap_4_json;
            $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + snap_4['id_mbp'] + ".json", function(json) {
                snap_4_shot = json;
                sync();
            });
        });

        $.getJSON("https://qubox-ddkclaudio.c9users.io/snapshots/" + data['snap_5'] + ".json", function(snap_5_json) {
            snap_5 = snap_5_json;
            $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + snap_5['id_mbp'] + ".json", function(json) {
                snap_5_shot = json;
                sync();
            });
        });

        $.getJSON("https://qubox-ddkclaudio.c9users.io/snapshots/" + data['snap_6'] + ".json", function(snap_6_json) {
            snap_6 = snap_6_json;
            $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + snap_6['id_mbp'] + ".json", function(json) {
                snap_6_shot = json;
                sync();
            });
        });
        
        if(data['snap_7'] > 0){
        $.getJSON("https://qubox-ddkclaudio.c9users.io/snapshots/" + data['snap_7'] + ".json", function(snap_7_json) {
            snap_7 = snap_7_json;
            
            $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + snap_7['id_mbp'] + ".json", function(json) {
                snap_7_shot = json;
                sync();
            });
        });
        }else{
            sync();
            
        }
            
        $.getJSON("https://qubox-ddkclaudio.c9users.io/snapshots/" + data['snap_1'] + ".json", function(snap_1_json) {
            snap_1 = snap_1_json;
            $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + snap_1['id_mbp'] + ".json", function(json) {
                snap_1_shot = json;
                sync();
            });
        });

        $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + data['disponivel'] + ".json", function(disponivel_json) {
            disponivel = disponivel_json;
            sync();
        });

        $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + data['risco'] + ".json", function(risco_json) {
            risco = risco_json;
            sync();
        });

        $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + data['risco_stop'] + ".json", function(risco_stop_json) {
            risco_stop = risco_stop_json;
            sync();
        });

        $.getJSON("https://qubox-ddkclaudio.c9users.io/mbps/" + data['risk_fila'] + ".json", function(risk_fila_json) {
            risk_fila = risk_fila_json;
            sync();
        });
    });
}

function sync() {
    sync_count++;
    if (sync_count == 11)
        update();
}

function tab_ticks(arg) {

    ticks = arg;
}

function select_occ(arg) {

    load_json(arg);
}

function puts(argument) {

    console.log(argument);
}
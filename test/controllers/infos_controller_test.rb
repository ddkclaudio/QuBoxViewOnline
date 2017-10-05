require 'test_helper'

class InfosControllerTest < ActionController::TestCase
  setup do
    @info = infos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:infos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create info" do
    assert_difference('Info.count') do
      post :create, info: { disponivel: @info.disponivel, end_time: @info.end_time, index: @info.index, paddf: @info.paddf, paddi: @info.paddi, padds: @info.padds, paddsw: @info.paddsw, paddsw_lucro: @info.paddsw_lucro, paddsw_lucro_plus: @info.paddsw_lucro_plus, paddw: @info.paddw, paddw_calculo: @info.paddw_calculo, paddw_calculo_plus: @info.paddw_calculo_plus, paddw_financeiro: @info.paddw_financeiro, paddw_financeiro_plus: @info.paddw_financeiro_plus, qadd: @info.qadd, qadds: @info.qadds, qaddsw: @info.qaddsw, qaddw: @info.qaddw, risco: @info.risco, risco_stop: @info.risco_stop, risk_fila: @info.risk_fila, side: @info.side, snap_1: @info.snap_1, snap_2: @info.snap_2, snap_3: @info.snap_3, snap_4: @info.snap_4, snap_5: @info.snap_5, snap_6: @info.snap_6, snap_7: @info.snap_7, start_time: @info.start_time, x: @info.x }
    end

    assert_redirected_to info_path(assigns(:info))
  end

  test "should show info" do
    get :show, id: @info
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @info
    assert_response :success
  end

  test "should update info" do
    patch :update, id: @info, info: { disponivel: @info.disponivel, end_time: @info.end_time, index: @info.index, paddf: @info.paddf, paddi: @info.paddi, padds: @info.padds, paddsw: @info.paddsw, paddsw_lucro: @info.paddsw_lucro, paddsw_lucro_plus: @info.paddsw_lucro_plus, paddw: @info.paddw, paddw_calculo: @info.paddw_calculo, paddw_calculo_plus: @info.paddw_calculo_plus, paddw_financeiro: @info.paddw_financeiro, paddw_financeiro_plus: @info.paddw_financeiro_plus, qadd: @info.qadd, qadds: @info.qadds, qaddsw: @info.qaddsw, qaddw: @info.qaddw, risco: @info.risco, risco_stop: @info.risco_stop, risk_fila: @info.risk_fila, side: @info.side, snap_1: @info.snap_1, snap_2: @info.snap_2, snap_3: @info.snap_3, snap_4: @info.snap_4, snap_5: @info.snap_5, snap_6: @info.snap_6, snap_7: @info.snap_7, start_time: @info.start_time, x: @info.x }
    assert_redirected_to info_path(assigns(:info))
  end

  test "should destroy info" do
    assert_difference('Info.count', -1) do
      delete :destroy, id: @info
    end

    assert_redirected_to infos_path
  end
end

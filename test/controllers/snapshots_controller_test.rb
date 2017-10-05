require 'test_helper'

class SnapshotsControllerTest < ActionController::TestCase
  setup do
    @snapshot = snapshots(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:snapshots)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create snapshot" do
    assert_difference('Snapshot.count') do
      post :create, snapshot: { acumulado: @snapshot.acumulado, delete_no_add: @snapshot.delete_no_add, frequencia: @snapshot.frequencia, mbp: @snapshot.mbp, number_of_snapshot: @snapshot.number_of_snapshot, ofi: @snapshot.ofi, preco: @snapshot.preco, qadd_add: @snapshot.qadd_add, qadd_cancel: @snapshot.qadd_cancel, qadd_change: @snapshot.qadd_change, qadd_dell: @snapshot.qadd_dell, qaddsw_add: @snapshot.qaddsw_add, qaddsw_cancel: @snapshot.qaddsw_cancel, qaddsw_change: @snapshot.qaddsw_change, qaddsw_dell: @snapshot.qaddsw_dell, qaddw_add: @snapshot.qaddw_add, qaddw_cancel: @snapshot.qaddw_cancel, qaddw_change: @snapshot.qaddw_change, qaddw_dell: @snapshot.qaddw_dell, rps: @snapshot.rps, teve_add_secundario: @snapshot.teve_add_secundario, teve_iceberg: @snapshot.teve_iceberg, tinha_buraco: @snapshot.tinha_buraco, vwap: @snapshot.vwap }
    end

    assert_redirected_to snapshot_path(assigns(:snapshot))
  end

  test "should show snapshot" do
    get :show, id: @snapshot
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @snapshot
    assert_response :success
  end

  test "should update snapshot" do
    patch :update, id: @snapshot, snapshot: { acumulado: @snapshot.acumulado, delete_no_add: @snapshot.delete_no_add, frequencia: @snapshot.frequencia, mbp: @snapshot.mbp, number_of_snapshot: @snapshot.number_of_snapshot, ofi: @snapshot.ofi, preco: @snapshot.preco, qadd_add: @snapshot.qadd_add, qadd_cancel: @snapshot.qadd_cancel, qadd_change: @snapshot.qadd_change, qadd_dell: @snapshot.qadd_dell, qaddsw_add: @snapshot.qaddsw_add, qaddsw_cancel: @snapshot.qaddsw_cancel, qaddsw_change: @snapshot.qaddsw_change, qaddsw_dell: @snapshot.qaddsw_dell, qaddw_add: @snapshot.qaddw_add, qaddw_cancel: @snapshot.qaddw_cancel, qaddw_change: @snapshot.qaddw_change, qaddw_dell: @snapshot.qaddw_dell, rps: @snapshot.rps, teve_add_secundario: @snapshot.teve_add_secundario, teve_iceberg: @snapshot.teve_iceberg, tinha_buraco: @snapshot.tinha_buraco, vwap: @snapshot.vwap }
    assert_redirected_to snapshot_path(assigns(:snapshot))
  end

  test "should destroy snapshot" do
    assert_difference('Snapshot.count', -1) do
      delete :destroy, id: @snapshot
    end

    assert_redirected_to snapshots_path
  end
end

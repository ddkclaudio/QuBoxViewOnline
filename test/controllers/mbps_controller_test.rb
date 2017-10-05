require 'test_helper'

class MbpsControllerTest < ActionController::TestCase
  setup do
    @mbp = mbps(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:mbps)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create mbp" do
    assert_difference('Mbp.count') do
      post :create, mbp: { ask_price_0: @mbp.ask_price_0, ask_price_1: @mbp.ask_price_1, ask_price_2: @mbp.ask_price_2, ask_price_3: @mbp.ask_price_3, ask_price_4: @mbp.ask_price_4, ask_quantity_0: @mbp.ask_quantity_0, ask_quantity_1: @mbp.ask_quantity_1, ask_quantity_2: @mbp.ask_quantity_2, ask_quantity_3: @mbp.ask_quantity_3, ask_quantity_4: @mbp.ask_quantity_4, bid_price_0: @mbp.bid_price_0, bid_price_1: @mbp.bid_price_1, bid_price_2: @mbp.bid_price_2, bid_price_3: @mbp.bid_price_3, bid_price_4: @mbp.bid_price_4, bid_quantity_0: @mbp.bid_quantity_0, bid_quantity_1: @mbp.bid_quantity_1, bid_quantity_2: @mbp.bid_quantity_2, bid_quantity_3: @mbp.bid_quantity_3, bid_quantity_4: @mbp.bid_quantity_4 }
    end

    assert_redirected_to mbp_path(assigns(:mbp))
  end

  test "should show mbp" do
    get :show, id: @mbp
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @mbp
    assert_response :success
  end

  test "should update mbp" do
    patch :update, id: @mbp, mbp: { ask_price_0: @mbp.ask_price_0, ask_price_1: @mbp.ask_price_1, ask_price_2: @mbp.ask_price_2, ask_price_3: @mbp.ask_price_3, ask_price_4: @mbp.ask_price_4, ask_quantity_0: @mbp.ask_quantity_0, ask_quantity_1: @mbp.ask_quantity_1, ask_quantity_2: @mbp.ask_quantity_2, ask_quantity_3: @mbp.ask_quantity_3, ask_quantity_4: @mbp.ask_quantity_4, bid_price_0: @mbp.bid_price_0, bid_price_1: @mbp.bid_price_1, bid_price_2: @mbp.bid_price_2, bid_price_3: @mbp.bid_price_3, bid_price_4: @mbp.bid_price_4, bid_quantity_0: @mbp.bid_quantity_0, bid_quantity_1: @mbp.bid_quantity_1, bid_quantity_2: @mbp.bid_quantity_2, bid_quantity_3: @mbp.bid_quantity_3, bid_quantity_4: @mbp.bid_quantity_4 }
    assert_redirected_to mbp_path(assigns(:mbp))
  end

  test "should destroy mbp" do
    assert_difference('Mbp.count', -1) do
      delete :destroy, id: @mbp
    end

    assert_redirected_to mbps_path
  end
end

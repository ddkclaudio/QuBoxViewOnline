class MbpsController < ApplicationController
  before_action :set_mbp, only: [:show, :edit, :update, :destroy]

  # GET /mbps
  # GET /mbps.json
  def index
    @mbps = Mbp.all
  end

  # GET /mbps/1
  # GET /mbps/1.json
  def show
  end

  # GET /mbps/new
  def new
    @mbp = Mbp.new
  end

  # GET /mbps/1/edit
  def edit
  end

  # POST /mbps
  # POST /mbps.json
  def create
    @mbp = Mbp.new(mbp_params)

    respond_to do |format|
      if @mbp.save
        format.html { redirect_to @mbp, notice: 'Mbp was successfully created.' }
        format.json { render :show, status: :created, location: @mbp }
      else
        format.html { render :new }
        format.json { render json: @mbp.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /mbps/1
  # PATCH/PUT /mbps/1.json
  def update
    respond_to do |format|
      if @mbp.update(mbp_params)
        format.html { redirect_to @mbp, notice: 'Mbp was successfully updated.' }
        format.json { render :show, status: :ok, location: @mbp }
      else
        format.html { render :edit }
        format.json { render json: @mbp.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /mbps/1
  # DELETE /mbps/1.json
  def destroy
    @mbp.destroy
    respond_to do |format|
      format.html { redirect_to mbps_url, notice: 'Mbp was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mbp
      @mbp = Mbp.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mbp_params
      params.require(:mbp).permit(:bid_price_0, :bid_quantity_0, :ask_price_0, :ask_quantity_0, :bid_price_1, :bid_quantity_1, :ask_price_1, :ask_quantity_1, :bid_price_2, :bid_quantity_2, :ask_price_2, :ask_quantity_2, :bid_price_3, :bid_quantity_3, :ask_price_3, :ask_quantity_3, :bid_price_4, :bid_quantity_4, :ask_price_4, :ask_quantity_4)
    end
end

class SnapshotsController < ApplicationController
  before_action :set_snapshot, only: [:show, :edit, :update, :destroy]

  # GET /snapshots
  # GET /snapshots.json
  def index
    @snapshots = Snapshot.all
  end

  # GET /snapshots/1
  # GET /snapshots/1.json
  def show
  end

  # GET /snapshots/new
  def new
    @snapshot = Snapshot.new
  end

  # GET /snapshots/1/edit
  def edit
  end

  # POST /snapshots
  # POST /snapshots.json
  def create
    @snapshot = Snapshot.new(snapshot_params)

    respond_to do |format|
      if @snapshot.save
        format.html { redirect_to @snapshot, notice: 'Snapshot was successfully created.' }
        format.json { render :show, status: :created, location: @snapshot }
      else
        format.html { render :new }
        format.json { render json: @snapshot.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /snapshots/1
  # PATCH/PUT /snapshots/1.json
  def update
    respond_to do |format|
      if @snapshot.update(snapshot_params)
        format.html { redirect_to @snapshot, notice: 'Snapshot was successfully updated.' }
        format.json { render :show, status: :ok, location: @snapshot }
      else
        format.html { render :edit }
        format.json { render json: @snapshot.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /snapshots/1
  # DELETE /snapshots/1.json
  def destroy
    @snapshot.destroy
    respond_to do |format|
      format.html { redirect_to snapshots_url, notice: 'Snapshot was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_snapshot
      @snapshot = Snapshot.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def snapshot_params
      params.require(:snapshot).permit(:number_of_snapshot, :qaddw_dell, :qaddw_change, :qaddw_add, :qaddw_cancel, :qaddsw_dell, :qaddsw_change, :qaddsw_add, :qaddsw_cancel, :qadd_dell, :qadd_change, :qadd_add, :qadd_cancel, :vwap, :rps, :frequencia, :tinha_buraco, :acumulado, :delete_no_add, :teve_iceberg, :teve_add_secundario, :preco, :ofi, :mbp)
    end
end

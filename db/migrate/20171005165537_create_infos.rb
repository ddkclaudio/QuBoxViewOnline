class CreateInfos < ActiveRecord::Migration
  def change
    create_table :infos do |t|
      t.integer :index
      t.string :start_time
      t.float :paddi
      t.integer :qadd
      t.text :side
      t.float :padds
      t.integer :qadds
      t.float :paddf
      t.text :x
      t.float :paddw
      t.integer :qaddw
      t.float :paddsw
      t.integer :qaddsw
      t.text :end_time
      t.text :paddw_calculo
      t.float :paddw_financeiro
      t.integer :paddsw_lucro
      t.text :paddw_calculo_plus
      t.float :paddw_financeiro_plus
      t.integer :paddsw_lucro_plus
      t.integer :disponivel
      t.integer :risco
      t.integer :risco_stop
      t.integer :risk_fila
      t.integer :snap_1
      t.integer :snap_2
      t.integer :snap_3
      t.integer :snap_4
      t.integer :snap_5
      t.integer :snap_6
      t.integer :snap_7

      t.timestamps null: true
    end
  end
end

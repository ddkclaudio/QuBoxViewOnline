# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171005183831) do

  create_table "infos", force: :cascade do |t|
    t.integer  "index"
    t.string   "start_time"
    t.float    "paddi"
    t.integer  "qadd"
    t.text     "side"
    t.float    "padds"
    t.integer  "qadds"
    t.float    "paddf"
    t.text     "x"
    t.float    "paddw"
    t.integer  "qaddw"
    t.float    "paddsw"
    t.integer  "qaddsw"
    t.text     "end_time"
    t.text     "paddw_calculo"
    t.float    "paddw_financeiro"
    t.integer  "paddsw_lucro"
    t.text     "paddw_calculo_plus"
    t.float    "paddw_financeiro_plus"
    t.integer  "paddsw_lucro_plus"
    t.integer  "disponivel"
    t.integer  "risco"
    t.integer  "risco_stop"
    t.integer  "risk_fila"
    t.integer  "snap_1"
    t.integer  "snap_2"
    t.integer  "snap_3"
    t.integer  "snap_4"
    t.integer  "snap_5"
    t.integer  "snap_6"
    t.integer  "snap_7"
    t.integer  "ticks"
    t.date     "day"
    t.text     "book_dol_price"
    t.text     "book_dol_qtd"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "mbps", force: :cascade do |t|
    t.float    "bid_price_0"
    t.integer  "bid_quantity_0"
    t.float    "ask_price_0"
    t.integer  "ask_quantity_0"
    t.float    "bid_price_1"
    t.integer  "bid_quantity_1"
    t.float    "ask_price_1"
    t.integer  "ask_quantity_1"
    t.float    "bid_price_2"
    t.integer  "bid_quantity_2"
    t.float    "ask_price_2"
    t.integer  "ask_quantity_2"
    t.float    "bid_price_3"
    t.integer  "bid_quantity_3"
    t.float    "ask_price_3"
    t.integer  "ask_quantity_3"
    t.float    "bid_price_4"
    t.integer  "bid_quantity_4"
    t.float    "ask_price_4"
    t.integer  "ask_quantity_4"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "snapshots", force: :cascade do |t|
    t.integer  "number_of_snapshot"
    t.integer  "qaddw_dell"
    t.integer  "qaddw_change"
    t.integer  "qaddw_add"
    t.integer  "qaddw_cancel"
    t.integer  "qaddsw_dell"
    t.integer  "qaddsw_change"
    t.integer  "qaddsw_add"
    t.integer  "qaddsw_cancel"
    t.integer  "qadd_dell"
    t.integer  "qadd_change"
    t.integer  "qadd_add"
    t.integer  "qadd_cancel"
    t.float    "vwap"
    t.float    "rps"
    t.text     "frequencia"
    t.integer  "tinha_buraco"
    t.float    "acumulado"
    t.integer  "delete_no_add"
    t.integer  "teve_iceberg"
    t.integer  "teve_add_secundario"
    t.float    "preco_bid"
    t.float    "preco_ask"
    t.text     "ofi"
    t.integer  "id_mbp"
    t.integer  "qadd_total"
    t.integer  "qadd_saldo"
    t.integer  "qaddw_total"
    t.integer  "qaddw_saldo"
    t.integer  "qaddsw_total"
    t.integer  "qaddsw_saldo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end

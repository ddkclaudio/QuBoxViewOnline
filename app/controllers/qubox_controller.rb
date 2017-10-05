class QuboxController < ApplicationController
#   before_action :get_json, only: [:index]
    
    def index
        if params.key?('id')
            @day = params['id']
        else
            @day = '2017-03-23'
        end
        
        @all_days = Info.uniq.pluck(:day)
        
        @infos = Hash.new
        (2..10).each do |i|
            @infos[i] = Hash.new
            @infos[i]['less50'] = Info.where("ticks = '#{i}' and day = '#{@day}' and qadd < 50")
            @infos[i]['more50'] = Info.where("ticks = '#{i}' and day = '#{@day}' and qadd > 49")
        end
        
        
    end
  
end


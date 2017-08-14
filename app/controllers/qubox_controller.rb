class QuboxController < ApplicationController
   before_action :get_json, only: [:index]
    
    def index
        info_day = @day.split('-')
        
        if info_day[1] == 'J17'
            tmp = @JSON['J17']
            for i in 0..(tmp.length - 1)
                if tmp[i]['day'] == @day
                    @data = tmp[i]
                end
            end
        end
        
        if info_day[1] == 'K17'
            tmp = @JSON['K17']
            for i in 0..(tmp.length - 1)
                if tmp[i]['day'] == @day
                    @data = tmp[i]
                end
            end
        end
        
        if info_day[1] == 'M17'
            tmp = @JSON['M17']
            for i in 0..(tmp.length - 1)
                if tmp[i]['day'] == @day
                    @data = tmp[i]
                end
            end
        end
    
    end
    
    def get_json
      @JSON = JSON.parse(File.read("#{Rails.public_path}/to_json.json"))  
      get_days
    end

    def get_days
        @day = nil
        @days = [] 
        
        if @JSON.key?('J17')
            j17 = @JSON['J17']
            for i in 0..(j17.length - 1)
                @days.push(j17[i]['day'])
            end
        end
        
        if @JSON.key?('K17')
            j17 = @JSON['K17']
            for i in 0..(j17.length - 1)
                 @days.push(j17[i]['day'])
            end
        end
        
        if @JSON.key?('M17')
            j17 = @JSON['M17']
            for i in 0..(j17.length - 1)
                 @days.push(j17[i]['day'])
            end
        end
        
        if params.key?('id')
            @day = params['id']
        elsif @days.length > 0
            @day = @days[0]
        end
    end
  
end

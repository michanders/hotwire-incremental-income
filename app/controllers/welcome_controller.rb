class WelcomeController < ApplicationController
  
  def index
    @star = params[:starselect]
    @room = params[:roomnum]
    @value = @room.to_i * @star.to_i
  end
  

end

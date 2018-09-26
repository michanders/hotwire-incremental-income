class WelcomeController < ApplicationController
  
  def index
    @star = params[:starselect]
    @room = params[:roomnum]
    value = @room.to_i * @star.to_i
    commacatcher(value)
  end
  
  
  private
  
  def commacatcher(val)
    @value = val
  end

end

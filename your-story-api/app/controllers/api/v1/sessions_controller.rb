module Api
  module V1
    class SessionsController < ApplicationController

      def create
        user = User.find_by(:email => params[:user][:email])
       if user && member.authenticate(params[:user][:password])
         session[:user_id] = member.id
         redirect_to user_path(user)
       # else
         # redirect_to login_path
       end
      end

    end
  end
end

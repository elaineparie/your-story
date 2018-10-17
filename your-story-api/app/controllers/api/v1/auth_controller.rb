module Api
  module V1
    class AuthController < ApplicationController

      def create
        user = User.find_by(:email => params[:email])
      if user && user.authenticate(params[:password])
        token = encode_token({ user_id: user.id })
         render json: { user: user, jwt: token}
       end
      end


    end
  end
end

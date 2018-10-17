module Api
  module V1
    class ApplicationController < ActionController::API
      include ActionController::MimeResponds

      def encode_token(payload)
        token = JWT.encode(payload, "flobble")
      end

      def auth_header
        header = request.headers["Authorization"]
      end

      def decoded_token
        if auth_header
        token = auth_header.split(" ")[1]
        begin
        JWT.decode(token, "flobble", true, {algorithm: 'HS256'})
      else
        end
      end

      def current_user
        if decoded_token
        user_id = decoded_token[0]["user_id"]
        @user = User.find(user_id)
        else
        end
      end

    end
  end
end

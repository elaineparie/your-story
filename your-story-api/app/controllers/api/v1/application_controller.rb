module Api
  module V1
    class ApplicationController < ActionController::API
      include ActionController::MimeResponds

        # before_action :current_member
        # before_action :require_logged_in, except: [:new, :create, :home]
        #
        # def logged_in?
        #   !!current_user
        # end
        #
        # private
        # def require_logged_in
        #   redirect_to new_member_path unless logged_in?
        # end
        #
        # def current_member
        #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
        # end
        # helper_method :current_user

    end
  end
end

module Api
  module V1
    class UsersController < ApplicationController
      def index
        @users = User.all
        render json: @users
      end

      def create
        @user = User.create(name: params[:name], email: params[:email], password: params[:password])
        binding.pry
        render json: @user
      end

      def show
      end

      def destroy
      end

      private
      def set_user
      end

    end
  end
end

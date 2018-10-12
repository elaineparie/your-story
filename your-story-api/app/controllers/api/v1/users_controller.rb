module Api
  module V1
    class UsersController < ApplicationController
      def index
        @users = User.all
        render json: @users
      end

      def create
        binding.pry
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

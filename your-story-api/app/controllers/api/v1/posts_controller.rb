module Api
  module V1
    class PostsController < ApplicationController
      def index
        @posts = Post.all
        render json: @posts
        # binding.pry
      end

      def show
      end

      def destroy
      end

      def create
      end 

      private
      def set_article
      end

    end
  end
end

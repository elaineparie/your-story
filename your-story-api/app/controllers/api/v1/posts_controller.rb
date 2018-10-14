module Api
  module V1
    class PostsController < ApplicationController
      def index
        @posts = Post.all
        render json: @posts
      end

      def show
      end

      def destroy
      end

      def create
        binding.pry
      end

      private
      def set_article
      end

    end
  end
end

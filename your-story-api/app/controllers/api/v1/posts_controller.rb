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
        @post = Post.create(title: params[:title], body: params[:body])
        render json: @post 
      end

      private
      def set_article
      end

      def post_params
      end

    end
  end
end

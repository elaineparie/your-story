module Api
  module V1
    class PostsController < ApplicationController
      def index
        p = Post.create(title: "hello")
        render json: p
        # binding.pry
      end

      def show
      end

      def destroy
      end

      private
      def set_article
      end

    end
  end
end

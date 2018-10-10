module Api
  module V1
    class PostsController < ApplicationController
      def index
        array = []
        array << p = Post.create(title: "hello", body: "first post")
        array << x = Post.create(title: "wassup", body: "second post")
        render json: array
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

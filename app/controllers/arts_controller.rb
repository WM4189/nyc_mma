class ArtsController < ApplicationController
    skip_before_action :authorize

    def show
        render json: Art.find(params[:id]), status: :ok
    end

    def index
        render json: Art.all, status: :ok
    end

    def create
        art = Art.create!(art_params)
        render json: art, status: :created
    end

    def update
        art = Art.find(params[:id])
        art.update!(art_params)
        render json: art, status: :accepted
    end

    def destroy
        Art.find(params[:id]).destroy
        render json: {message: "Art Successfully Destroyed"}, status: :ok
    end

    private

    def art_params
        params.permit(:id, :bjj, :boxing, :capoeira, :jkd, :thai, :share)
    end

end

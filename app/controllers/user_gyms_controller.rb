class UserGymsController < ApplicationController

    def show
        render json: UserGym.find(params[:id]), status: :ok
    end

    def index
        render json: UserGym.all, status: :ok
    end

    def create
        user_gym = UserGym.create!(user_gym_params)
        render json: user_gym, status: :created
    end

    def update
        user_gym = Gym.find(params[:id])
        user_gym.update!(user_gym_params)
        render json: user_gym, status: :accepted
    end

    def destroy
        UserGym.find(params[:id]).destroy
        render json: {message: "UserGym Successfully Destroyed"}, status: :ok
    end

    private

    def user_gym_params
        params.permit(:rating, :review, :user_id, :gym_id)
    end

end

class GymsController < ApplicationController
    before_action :authorize, only: [:destroy]

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    # rescue_from ActionDispatch::Http::Parameters::ParseError, with: :render_unprocessable_params

    def show
        render json: Gym.find(params[:id]), status: :ok
    end

    def index
        render json: Gym.all, status: :ok
    end

    def create
        gym = Gym.create!(gym_params)
        render json: gym.average_gym_rating, status: :created
    end

    def update
        gym = Gym.find(params[:id])
        gym.update!(gym_params)
        render json: gym, status: :accepted
    end

    def destroy
        Gym.find(params[:id]).destroy
        render json: {message: "Gym Successfully Destroyed"}, status: :ok
    end

    private

    def gym_params
        params.permit(:name, :address, :link, :art)
    end

    # def render_unprocessable_params
    #     render json: {error: "Invalid Parameters"}, status: :unprocessable_entity
    # end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def record_not_found
        render json: { error: ["Gym not found"] }, status: :not_found
    end

end

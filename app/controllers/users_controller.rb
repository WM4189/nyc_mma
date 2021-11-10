class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]  

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def update
        @current_user.update!(journal_params)
        render json: @current_user, status: :accepted
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def index  
        render json: User.all, status: :ok
    end

    def show
        render json: @current_user, status: :ok
    end

    private

    def journal_params
        params.permit(:journal)
    end

    def user_params
        params.permit(:username, :password, :email)
    end

    def render_unprocessable_entity_response(exception)
        render json: {error: "exception.record.errors.full_messages"}, status: :unprocessable_entity
    end
end


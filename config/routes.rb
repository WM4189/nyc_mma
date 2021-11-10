Rails.application.routes.draw do
  
  resources :bjj
  resources :boxing
  resources :capoeira
  resources :jkd 
  resources :thai

  resources :arts
  resources :gyms
  resources :users
  resources :user_gyms

  patch "/bjj", to: "arts#update"
  patch "/boxing", to: "arts#update"
  patch "/capoeira", to: "arts#update"
  patch "/jkd", to: "arts#update"
  patch "/thai", to: "arts#update"

  patch "/profile", to: "users#update" 
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

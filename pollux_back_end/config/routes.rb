Rails.application.routes.draw do
  resources :settlements
  resources :participants
  resources :activities
  resources :expenses
  resources :users, only: [:index, :show, :update, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #  user register
  post '/register', to: 'users#register'
  
  # login
  post '/login', to: 'sessions#login'


end

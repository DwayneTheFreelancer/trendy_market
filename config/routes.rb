Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  
  
  resources :products do
    resources :comments
  end
  
  post '/users/:user_id/products', to: 'products#create_by_user'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

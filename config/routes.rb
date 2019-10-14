Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :ingredients
  end

  namespace :api do
    resources :recipes
  end
  
end

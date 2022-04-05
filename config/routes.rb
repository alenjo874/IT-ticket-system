Rails.application.routes.draw do
  
  resources :tickets
  resources :rentals
  resources :inventories
  resources :employees
  resources :admins

  get "/incomplete_tickets", to: "tickets#incomplete"
  get "/complete_tickets", to: "tickets#complete"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

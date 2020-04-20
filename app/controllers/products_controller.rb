class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show index_by_user]

  # GET /products
  def index
    @products = Product.all

    render json: @products, include: :user
  end
  
  # # Get /users/:user_id/recipes
  # def index_by_user
  #   @user = User.find(params[:user_id])
  #   products = @user.products
  #   render json: products, include: :user, status: :ok
  # end

  # GET /products/1
  def show
    render json: @product, include: :user
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, include: :user, status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end
  
  # /users/:user_id/products
  def create_by_user
    user = User.find(params[:user_id])
    product = user.products.new(product_params)
    if product.save
      render json: product, include: :user, status: :created
    else
      render json: product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:image_url, :title, :description, :link, :user_id)
    end
end

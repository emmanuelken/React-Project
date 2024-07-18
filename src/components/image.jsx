import products from "../product"


const ProductImage = () => {

    return (
        <div>
            <img src={products.image} alt={products.name} style={{ width: '100%' }}/>
        </div>
    )
}

export default ProductImage;
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Rating from "@/Rating";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Store } from "@@/Store";
import { laptop_url } from "@@/config";
import PropTypes from "prop-types"; // Import PropTypes

function Product({ product }) {
  const navigate = useNavigate();
  // const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  // const {
  //   cart: { cartItems },
  // } = state;

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = product.image;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [product.image]);

  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `${laptop_url}/api/products/${product._id}`
    );
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
  };

  return (
    <div>
      <Card className="card h-100" aria-hidden="true">
        <Link to={`/product/${product.slug}`}>
          <img
            // src={imageLoaded ? product.image : ""}
            src={product.image}
            className="card-img-top skeleton"
            // className={imageLoaded ? "card-img-top" : "card-img-top skeleton "}
            alt="..."
            rel="preload"
          />
        </Link>
        <Card.Body>
          <Link to={`/product/${product.slug}`}>
            <Card.Title className="placeholder-glow">{product.name}</Card.Title>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <Card.Text className="placeholder-glow">${product.price}</Card.Text>
          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Out of stock
            </Button>
          ) : (
            <Button onClick={() => addToCartHandler(product)}>
              Add to cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    numReviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    countInStock: PropTypes.number.isRequired,
    // Add other prop types based on your 'product' object structure
  }).isRequired,
};

export default Product;

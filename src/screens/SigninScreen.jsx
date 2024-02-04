import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { Store } from "../Store";
import { toast } from "react-toastify";
import { getError } from "../utils";
import { laptop_url } from "../config";
import LoadingBox from "../components/LoadingBox";

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isGuest, setIsGuest] = useState(false);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const [isloading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    loginaccount();
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const guestlogin = () => {
    setEmail("guest@mail.in");
    setPassword("guest@123");
    setIsGuest(true);
  };

  const loginaccount = async () => {
    try {
      setIsLoading(true);
      console.log("request");

      const { data } = await Axios.post(`${laptop_url}/api/users/signin`, {
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
      console.log("success");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (email && password) {
      loginaccount();
    }
  }, [isGuest]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      {isloading ? (
        <LoadingBox />
      ) : (
        <>
          <h1 className="my-3">Sign In</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="mb-3">
              <Button type="submit">Sign In</Button>
              {/* <Button onClick={guestlogin}>Guest</Button> */}
            </div>
            <div className="mb-3">
              New customer?
              <Link to={`/signup?redirect=${redirect}`}>
                Create your account
              </Link>
            </div>
            <div className="mb-3">
              <Link onClick={guestlogin}>Login as Guest user</Link>
            </div>
          </Form>
        </>
      )}
    </Container>
  );
}

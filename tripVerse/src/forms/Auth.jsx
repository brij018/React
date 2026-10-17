import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { updateCurrentUser, updateProfile } from "firebase/auth";
import useAuth from "../context/useAuth";

const Auth = () => {
  const { login, signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [islogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const redirectTarget = location.state?.from?.pathname || "/trips";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) {
      setError("");
    }
  };

  const mapFirebaseError = (errCode) => {
    switch (errCode) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "Incorrect email or password. Please verify your credentials and try again.";
      case "auth/email-already-in-use":
        return "An account with this email address already exists. Please sign in instead.";
      case "auth/weak-password":
        return "Password is too weak. Please choose a password with at least 6 characters.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/popup-closed-by-user":
        return "Google sign-in popup was cancelled before completing.";
      case "auth/network-request-failed":
        return "Network connection error. Please verify your internet connection and retry.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please wait a moment and try again.";
      default:
        return "Authentication encountered an issue. Please try again.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!formData.password) {
      setError("Please enter your password.");
      return;
    }
    if (!isLogin && !formData.name.trim()) {
      setError("Please provide your full name to create an account.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email.trim(), formData.password);
        navigate(redirectTarget, { replace: true });
      } else {
        const userCredential = await signup(
          formData.email.trim(),
          formData.password,
        );
        if (formData.email.trim() && userCredential.user) {
          try {
            await updateProfile(userCredential.user, {
              displayName: formData.name.trim(),
            });
          } catch (error) {}
        }
        setSuccessMsg("Account created successfully");
        navigate(redirectTarget, { replace: true });
      }
    } catch (error) {
      setError(mapFirebaseError(error.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      await loginWithGoogle();
      navigate(redirectTarget, { replace: true });
    } catch (err) {
      setError(mapFirebaseError(err.code));
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div>
      <Container></Container>
    </div>
  );
};

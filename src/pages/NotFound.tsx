import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard after 2 seconds
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center font-bold font-poppins text-center">
      Redirecting you to <br /> the Dashboard...
    </div>
  );
}

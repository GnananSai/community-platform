"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export const withAuth = (WrappedComponent: React.FC) => {
  const WrapperComponent: React.FC = (props) => {
    const router = useRouter();
    const { isAuth } = useAuth();
    useEffect(() => {
      if (isAuth === false) {
        router.push("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WrapperComponent;
};

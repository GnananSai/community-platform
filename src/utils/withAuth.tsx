"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import LoadingSpinner from "@/components/LoadingSpinner";

export const withAuth = (WrappedComponent: React.FC) => {
  const WrapperComponent: React.FC = (props) => {
    const router = useRouter();
    const { isAuth, loading } = useAuth();

    useEffect(() => {
      if (!loading && isAuth === false) {
        router.push("/");
      }
    }, [isAuth, loading, router]);

    if (loading) {
      // TO-DO: Add a loading spinner
      return <LoadingSpinner />;
    }

    return <WrappedComponent {...props} />;
  };

  return WrapperComponent;
};

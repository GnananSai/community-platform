"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/utils/auth";

export const withAuth = (WrappedComponent: React.FC) => {
  const WrapperComponent: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!useAuth()) {
        router.push("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return WrapperComponent;
};

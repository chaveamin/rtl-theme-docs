import React from "react";
import DocItem from "@theme-original/DocItem";
import ProtectedRoute from "@site/src/components/ProtectedRoute";
import { useLocation } from "@docusaurus/router";

export default function DocItemWrapper(props) {
  const location = useLocation();
  const isBuildTime = typeof window === "undefined";

  if (isBuildTime) {
    return <DocItem {...props} />;
  }

  return (
    <ProtectedRoute currentPath={location.pathname}>
      <DocItem {...props} />
    </ProtectedRoute>
  );
}

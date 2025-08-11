    "use client";

import React, { useState } from "react";
import LoadingOverlay from "@/components/LoadingOverlay";
import { Header } from "@/components/header";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <LoadingOverlay setLoading={setLoading} />
      {!loading && <Header />}
      {!loading && children}
    </>
  );
}

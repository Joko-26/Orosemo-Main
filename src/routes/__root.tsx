import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SnowOverlay } from "@/components/snowOverlay";

function RootLayout() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  return (
    <>
      <Header />
      <SnowOverlay/>
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});

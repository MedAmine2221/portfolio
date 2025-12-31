"use client";
import * as React from "react";
import { Provider } from "react-redux";

import { store } from "@/redux/store";

export interface ReduxProvidersProps {
  children: React.ReactNode;
}

export function ReduxProviders({ children }: ReduxProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}

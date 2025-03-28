import { ReactNode } from "react";

export type Tab = {
  id: string;
  name: string;
  node: ReactNode;
  icon?: string;
};

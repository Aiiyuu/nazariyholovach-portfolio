import { lazy } from "react";

export const HomePage = lazy(() => import("../../features/home"));
export const WorkPage = lazy(() => import("../../features/work"));
export const NotFoundPage = lazy(() => import("../../features/not-found"));

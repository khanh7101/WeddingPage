import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "@/layout/MainLayout";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const Partner = lazy(() => import("@/pages/Partner"));
const Review = lazy(() => import("@/pages/Review"));
const Service = lazy(() => import("@/pages/Service"));
const Contact = lazy(() => import("@/pages/Contact"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/gallery"
          element={
            <MainLayout>
              <Gallery />
            </MainLayout>
          }
        />
        <Route
          path="/partner"
          element={
            <MainLayout>
              <Partner />
            </MainLayout>
          }
        />
        <Route
          path="/review"
          element={
            <MainLayout>
              <Review />
            </MainLayout>
          }
        />
        <Route
          path="/service"
          element={
            <MainLayout>
              <Service />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>浙江理工大学工业设计系</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Nav />
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer/>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}

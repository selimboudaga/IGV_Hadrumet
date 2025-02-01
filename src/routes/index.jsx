import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import paths from "./paths";
const Home = lazy(() => import("../pages/Home"));
const Opportunities = lazy(() => import("../pages/Opportunities"));
const Testimonials = lazy(() => import("../pages/Testimonials"));
const Country = lazy(() => import("../pages/Country"));
const LostPage = lazy(() => import("../pages/LostPage"));
import gv from "../assets/gv.gif";
function Router() {
  const routes = useRoutes([
    {
      path: paths.Home,
      element: <Home />,
    },
    {
      path: paths.Opportunities,
      element: <Opportunities />,
    },
    {
      path: paths.Testimonials,
      element: <Testimonials />,
    },
    {
      path: paths.Country,
      element: <Country />,
    },
    {
      path: paths.LostPage,
      element: <LostPage />,
    }
  ]);
  return (
    <Suspense
      fallback={
        <div>
          <div className="flex relative  flex-col items-center justify-center h-screen">
            {/**gradient decoration */}
            <div className="  w-[300px]  h-[300px] bg-blue/65 rounded-full absolute z-0 top-[50%] left-0 md:left-[40%]  translate-y-[-50%] blur-[160px] flex "></div>
            <img width={190} src={gv} alt="" />
            <p className=" text-blue text-2xl text-center font-semibold">
              Loading The Impact{" "}
            </p>
          </div>
        </div>
      }
    >
      {routes}
    </Suspense>
  );
}
export default Router;

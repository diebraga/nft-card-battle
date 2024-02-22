import { Layout } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "create-campaign",
    element: (
      <Layout>
        <CreateCampaign />
      </Layout>
    ),
  },
  {
    path: "campaign-details/:id",
    element: (
      <Layout>
        <CampaignDetails />
      </Layout>
    ),
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;

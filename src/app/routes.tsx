import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import LearnMore from "./pages/LearnMore";
import Contact from "./pages/Contact";
import Philosophy from "./pages/Philosophy";
import Risks from "./pages/Risks";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/how-it-works",
    Component: HowItWorks,
  },
  {
    path: "/learn-more",
    Component: LearnMore,
  },
  {
    path: "/contact",
    Component: Contact,
  },
  {
    path: "/philosophy",
    Component: Philosophy,
  },
  {
    path: "/risks",
    Component: Risks,
  },
  {
    path: "/faq",
    Component: FAQ,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/terms",
    Component: Terms,
  },
  {
    path: "/privacy",
    Component: Privacy,
  },
  {
    path: "/disclaimer",
    Component: Disclaimer,
  },
]);

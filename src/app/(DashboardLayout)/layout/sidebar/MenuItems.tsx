import {
  IconLogout,
  IconUsers,
  IconReportAnalytics
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "General",
  },

  {
    id: uniqueId(),
    title: "Reports",
    icon: IconReportAnalytics,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Users",
    icon: IconUsers,
    href: "/users",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Log out",
    icon: IconLogout,
    href: "/logout",
  },
];

export default Menuitems;

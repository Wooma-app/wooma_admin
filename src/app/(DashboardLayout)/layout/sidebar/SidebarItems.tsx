import React from "react";
import Menuitems from "./MenuItems";
import { usePathname, useRouter } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";
import { useAuth } from "@/context/authContext";

const SidebarItems = ({ toggleMobileSidebar }: any) => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const router = useRouter();
  const { logout } = useAuth();

  const handleMenuClick = async (href: string) => {
    if (href === "/logout") {
      await logout();
      // router.push("/authentication/login");
      return;
    }
    router.push(href);
  };

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                // onClick={toggleMobileSidebar}
                onClick={() => handleMenuClick(item?.href ?? '')}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;

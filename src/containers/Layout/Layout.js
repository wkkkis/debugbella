import { useState } from "react";
import  Header  from "../NavigationMenuBar/Header/Header";
import  Drawer  from "../NavigationMenuBar/Header/Drawer/Drawer";

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <Header openDrawer={() => setDrawerOpen(true)} />
      <Drawer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

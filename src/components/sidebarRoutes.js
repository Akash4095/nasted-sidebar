export const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "home",
  },
  {
    path: "/users",
    name: "Users",
    icon: "user",
  },
  {
    path: "/messages",
    name: "Messages",
    icon: "comment",
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "chart bar outline",
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: "file",
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile",
        icon: "address card",
      },
      {
        path: "/settings/billings",
        name: "Billings",
        icon: "money bill alternate outline",
      },
      {
        path: "/settings/auth",
        name: "Auth",
        icon: "lock",
      },
    ],
    
  },
  {
    path: "/order",
    name: "Order",
    icon: "plus cart",
  },
  {
    path: "/settings",
    name: "Settings",
    icon: "setting",
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile",
        icon: "address card",
      },
      {
        path: "/settings/billings",
        name: "Billings",
        icon: "money bill alternate outline",
      },
      {
        path: "/settings/auth",
        name: "Auth",
        icon: "lock",
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: "heart",
  },

];
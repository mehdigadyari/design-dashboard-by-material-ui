import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Crowlers",
    rtlName: "لیست کراولر ها",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Crowlers Complete",
    rtlName: "اطلاعات تکمیلی کراولر",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Crowlers add",
    rtlName: "اضافه کردن کراولر",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
   
  {
    path: "/maps",
    name: "Maps",
    rtlName: "نقشه",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "اعلانات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },

];

export default dashboardRoutes;

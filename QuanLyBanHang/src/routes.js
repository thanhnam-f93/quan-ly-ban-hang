import React from 'react';
import Logins from './components/Login/Login';
import DropDown from './components/Order/DropDown';
import OrderDetail from './components/OrderDetail/OrderDetail';
import AddRole from './components/Role/AddRole/AddRole';
import Role from './components/Role/Role';
import RoleDetail from './components/Role/RoleDetail/RoleDetail';
import Saler from './components/sale/Saler';
import Setting from './components/Setting/Setting';
import AddStaff from './components/Staff/AddStaff/AddStaff';
import StaffDetail from './components/Staff/StaffDetail/StaffDetail';
import ReturnOrder from './components/OrderReturn/ReturnOrder';
import ReturnOrderDetail from './components/ReturnOrderDetail/ReturnOrderDetail';

/*================== Of Template React =================*/
const Toaster = React.lazy(() => import("./views/notifications/toaster/Toaster"));
const Tables = React.lazy(() => import("./views/base/tables/Tables"));
const Breadcrumbs = React.lazy(() =>import("./views/base/breadcrumbs/Breadcrumbs"));
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));
const Jumbotrons = React.lazy(() =>import("./views/base/jumbotrons/Jumbotrons"));
const ListGroups = React.lazy(() =>import("./views/base/list-groups/ListGroups"));
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>import("./views/base/paginations/Pagnations"));
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>import("./views/base/progress-bar/ProgressBar"));
const Switches = React.lazy(() => import("./views/base/switches/Switches"));
const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>import("./views/buttons/brand-buttons/BrandButtons"));
const ButtonDropdowns = React.lazy(() =>import("./views/buttons/button-dropdowns/ButtonDropdowns"));
const ButtonGroups = React.lazy(() =>import("./views/buttons/button-groups/ButtonGroups"));
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() =>import("./views/icons/coreui-icons/CoreUIIcons"));
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>import("./views/theme/typography/Typography"));
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

/*==================The End Of Template React =================*/

/*---------------------------------------------------------------------------------------*/

/*================== Start code of Team - Quản lý bán hàng =================*/

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const Staff = React.lazy(() => import("./components/Staff/Staff"));
const CustomerDetail = React.lazy(() =>import("./components/Customer/CustomerDetail"));
const CustomerNew = React.lazy(() => import("./components/Customer/CustomerNew"));
const CustomerList = React.lazy(() => import("./components/Customer/CustomerList"));
const ListProduct = React.lazy(() => import('./components/ListProduct/ListProduct'));
const Update = React.lazy(() => import('./components/ListProduct/Update'));
const Create = React.lazy(() => import('./components/ListProduct/Create'));

/*================== The End code of Team - Quản lý bán hàng =================*/

const ListSupplier = React.lazy(() => import('./components/ListSupplier/ListSupplier'));
const UpdateSupplier = React.lazy(() => import('./components/ListSupplier/UpdateSupplier'));
const CreateSupplier = React.lazy(() => import('./components/ListSupplier/CreateSupplier'));
const Order = React.lazy(() => import('./components/Order/Order'));
/*================== The End code of Team - Quản lý bán hàng =================*/

const routes = [
  /*================== Of Template React =================*/
  // { path: "/", exact: true, name: "Home" },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  /*================== The End Of Template React =================*/
  // { path: '/', exact: true, name: 'trang-chu' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },

/*================== The End Of Template React =================*/

  /*---------------------------------------------------------------------------------------*/

  /*================== Start code of Team - Quản lý bán hàng =================*/
    { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", exact: true, name: "Tổng quan", component: Dashboard },
  { path: "/staff", exact: true, name: "Staff", component: Staff },
  {
    path: "/CustomerDetail",
    exact: true,
    name: "Detail",
    component: CustomerDetail,
  },
  {
    path: "/CustomerNew",
    exact: true,
    name: "New",
    component: CustomerNew,
  },
  {
    path: "/CustomerList",
    exact: true,
    name: "List",
    component: CustomerList,
  },
  /*================== The End code of Team - Quản lý bán hàng =================*/
/*================== Start code of Team - Quản lý bán hàng =================*/
  { path: '/order', exact: true,  name: 'danh-sach-don-hang', component: Order },
  { path: '/dropdown', exact: true,  name: 'danh-sach-don-hang', component: DropDown },
  { path: '/order-detail', exact: true,  name: '', component: OrderDetail },
  { path: '/order-detail/:id/:type', exact: true,  name: 'chi-tiet-don-hang', component: OrderDetail },
  { path: '/order/return', exact: true,  name: 'don-hang-tra-ve ', component: ReturnOrder },
  { path: '/order/return/:id', exact: true,  name: '', component: ReturnOrder },
  { path: '/order/return-order-detail', exact: true,  name: '', component: ReturnOrderDetail },
  { path: '/product', exact: true,  name: 'Product', component: ListProduct },
  { path: '/category', exact: true,  name: 'Product', component: ListProduct },
  { path: '/product/update-category/:id', exact: true,  name: 'update', component: Update },
  { path: '/product/add-category', exact: true,  name: 'add', component: Create },
  { path: '/supplier', exact: true,  name: 'Supplier', component: ListSupplier },
  // { path: '/binhlogins', exact: true,  name: '', component: Logins },
  { path: '/saler', exact: true,  name: 'ban-hang', component: Saler },

  
  { path: '/settings', exact: true,  name: 'Cấu hình', component: Setting },
  { path: '/settings/staffs', exact: true,  name: 'Nhân viên', component: Staff },
  { path: '/settings/staffs/new-staff', exact: true,  name: 'Thêm mới', component: AddStaff },
  { path: '/settings/staffs/:id', exact: true,  name: 'Chỉnh sửa', component: StaffDetail },
  { path: '/settings/roles', exact: true,  name: 'Vai trò', component: Role },
  { path: '/settings/roles/new-role', exact: true,  name: 'Thêm mới', component: AddRole },
  { path: '/settings/roles/:id', exact: true,  name: 'Chỉnh sửa', component: RoleDetail },
  { path: '/update-supplier/:id', exact: true,  name: 'update', component: UpdateSupplier },
  { path: '/add-supplier', exact: true,  name: 'add', component: CreateSupplier }
 

/*================== The End code of Team - Quản lý bán hàng =================*/
];

export default routes;

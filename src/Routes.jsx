import Index from "./Pages/Index/Index";
import Course from "./Pages/Course/Course";
import Category from "./Pages/Category/Category";
import Blog from "./Pages/Blog/Blog";
import Blogs from "./Pages/Blogs/Blogs";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Layout from "./Layout/Layout";
import LayoutWithoutHeaderFooter from './Layout/LayoutWithoutHeaderFooter'
import TermsConditions from "./Pages/TermsConditions/TermsConditions";
import NotFound from "./Pages/404/404";
import ContactUS from "./Pages/ContactUS/ContactUS";
import Search from "./Pages/Search.jsx/Search";
import AdminDashboard from './Pages/AdminDashboard/index'
import UsersAdminDashboard from "./Pages/AdminDashboard/Users/Users";
import CoursesAdminDashboard from "./Pages/AdminDashboard/Courses/Courses";
import MenusAdminDashboard from "./Pages/AdminDashboard/Menus/Menus";
import BlogsAdminDashboard from './Pages/AdminDashboard/Blogs/Blogs';
import CategoryAdminDashboard from './Pages/AdminDashboard/Category/Category';
import UsersMessagesDashboard from './Pages/AdminDashboard/UsersMessages/UsersMessages'
import Overview from "./Pages/AdminDashboard/Overview/Overview";





let routes = [
    {element: <Layout /> , children: [
        {
            path: '/',
            element: <Index />
        }
    ]},
    {element: <Layout /> , children: [
        {
            path: '/courses/:page',
            element: <Courses />
        }
    ]},
    {element: <Layout /> , children: [
        {
            path: '/course/:courseName',
            element: <Course />
        }
    ]},
    {element: <Layout /> , children: [
        {
            path: '/category/:categoryName/:page',
            element: <Category />
        }
    ]},
    {element: <Layout /> , children: [
        {
            path: '/blogs/:page',
            element: <Blogs />
        }
    ]},
    {element: <Layout /> , children: [
        {
            path: '/blog/:blogName',
            element: <Blog />
        }
    ]},
    {element: <Layout /> , children: [
        {
            path: '/termsConditions',
            element: <TermsConditions />
        }
    ]},
    {element: <Layout /> , children: [
        {
            path: '/contactUS',
            element: <ContactUS />
        }
    ]},
    {element: <Layout /> , children: [
        {
            path: '/search/:value',
            element: <Search />
        }
    ]},
    {element: <LayoutWithoutHeaderFooter /> , children : [
        { 
            path: '/login',
            element: <Login />
        }
    ]},
    {element: <LayoutWithoutHeaderFooter /> , children : [
        { 
            path: '/register',
            element: <Register />
        }
    ]},
     { 
            path: '/adminDashboard_VNqM5yZGo3c^GM/*',
            element: <AdminDashboard />,
            children: [
            {path: 'overview' , element : <Overview />} ,
            {path: 'users' , element : <UsersAdminDashboard />} ,
            {path: 'courses' , element : <CoursesAdminDashboard />},
            {path: 'category' , element : <CategoryAdminDashboard />},
            {path: 'menus' , element : <MenusAdminDashboard />},
            {path: 'blogs' , element : <BlogsAdminDashboard />},
            {path: 'messages' , element : <UsersMessagesDashboard />},
            ],
        },
    {element: <LayoutWithoutHeaderFooter /> , children : [
        { 
            path: '/*',
            element: <NotFound />
        }
    ]},
]


export default routes ;
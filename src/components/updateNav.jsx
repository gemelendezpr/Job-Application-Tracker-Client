
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@mui/system';
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Collapse,
//   Button,
//   IconButton,
// } from '@mui/material';
// import Icon from '@mui/material/Icon';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Import ChevronLeftIcon
// import { AuthContext } from '../context/auth.context';
// import { useContext } from 'react';

// // Mock components for illustration purposes
// const CoworkingPage = () => <div>Coworking Page</div>;
// const Rental = () => <div>Rental Page</div>;
// const AboutUs = () => <div>About Us Page</div>;
// const Pricing = () => <div>Pricing Page</div>;
// const SignInBasicPage = () => <div>SignIn Basic Page</div>;
// const SignInCoverPage = () => <div>SignIn Cover Page</div>;
// const SignUpCoverPage = () => <div>SignUp Cover Page</div>;
// const PageHeaders = () => <div>Page Headers</div>;
// const Features = () => <div>Features</div>;
// const PricingSection = () => <div>Pricing Section</div>;
// const Navbars = () => <div>Navbars</div>;
// const NavTabs = () => <div>Nav Tabs</div>;
// const Newsletters = () => <div>Newsletters</div>;
// const ContactSections = () => <div>Contact Sections</div>;
// const Alerts = () => <div>Alerts</div>;
// const Notifications = () => <div>Notifications</div>;
// const Avatars = () => <div>Avatars</div>;
// const Badges = () => <div>Badges</div>;

// const useStyles = makeStyles((theme) => ({
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
// }));

// const Navbar = () => {
//   const classes = useStyles();
//   const { logOutUser, getToken } = useContext(AuthContext);

//   const navigationData = [
//     {
//         name: "pages",
//         icon: <Icon>dashboard</Icon>,
//         columns: 3,
//         rowsPerColumn: 2,
//         collapse: [
//           {
//             name: "landing pages",
//             collapse: [
//               {
//                 name: "coworking",
//                 route: "/pages/landing-pages/coworking",
//                 component: <CoworkingPage />,
//               },
//               {
//                 name: "rental",
//                 route: "/pages/landing-pages/rental",
//                 component: <Rental />,
//               },
//             ],
//           },
//           {
//             name: "company",
//             collapse: [
//               {
//                 name: "about us",
//                 route: "/pages/company/about-us",
//                 component: <AboutUs />,
//               },
//               {
//                 name: "pricing",
//                 route: "/pages/company/pricing",
//                 component: <Pricing />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "account",
//         icon: <Icon>contacts</Icon>,
//         collapse: [
//           {
//             name: "sign in",
//             dropdown: true,
//             collapse: [
//               {
//                 name: "basic",
//                 route: "/authentication/sign-in/basic",
//                 component: <SignInBasicPage />,
//               },
//               {
//                 name: "cover",
//                 route: "/authentication/sign-in/cover",
//                 component: <SignInCoverPage />,
//               },
//             ],
//           },
//           {
//             name: "sign up",
//             dropdown: true,
//             collapse: [
//               {
//                 name: "cover",
//                 route: "/authentication/sign-up/cover",
//                 component: <SignUpCoverPage />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "sections",
//         icon: <Icon>view_day</Icon>,
//         collapse: [
//           {
//             name: "page sections",
//             description: "See all 55 sections",
//             dropdown: true,
//             collapse: [
//               {
//                 name: "page headers",
//                 route: "/sections/page-sections/page-headers",
//                 component: <PageHeaders />,
//               },
//               {
//                 name: "features",
//                 route: "/sections/page-sections/features",
//                 component: <Features />,
//               },
//               {
//                 name: "pricing",
//                 route: "/sections/page-sections/pricing",
//                 component: <PricingSection />,
//               },
//             ],
//           },
//           {
//             name: "navigation",
//             description: "See all 3 navigations",
//             dropdown: true,
//             collapse: [
//               {
//                 name: "navbars",
//                 route: "/sections/navigation/navbars",
//                 component: <Navbars />,
//               },
//               {
//                 name: "nav tabs",
//                 route: "/sections/navigation/nav-tabs",
//                 component: <NavTabs />,
//               },
//             ],
//           },
//           {
//             name: "input areas",
//             description: "See all 8 input areas",
//             dropdown: true,
//             collapse: [
//               {
//                 name: "newsletters",
//                 route: "/sections/input-areas/newsletters",
//                 component: <Newsletters />,
//               },
//               {
//                 name: "contact sections",
//                 route: "/sections/input-areas/contact-sections",
//                 component: <ContactSections />,
//               },
//             ],
//           },
//           {
//             name: "attention catchers",
//             description: "See all 5 examples",
//             dropdown: true,
//             collapse: [
//               {
//                 name: "alerts",
//                 route: "/sections/attention-catchers/alerts",
//                 component: <Alerts />,
//               },
//               {
//                 name: "notifications",
//                 route: "/sections/attention-catchers/notifications",
//                 component: <Notifications />,
//               },
//             ],
//           },
//           {
//             name: "elements",
//             description: "See all 32 examples",
//             dropdown: true,
//             collapse: [
//               {
//                 name: "avatars",
//                 route: "/sections/elements/avatars",
//                 component: <Avatars />,
//               },
//               {
//                 name: "badges",
//                 route: "/sections/elements/badges",
//                 component: <Badges />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "docs",
//         icon: <Icon>article</Icon>,
//         collapse: [
//           {
//             name: "getting started",
//             description: "All about overview, quick start, license and contents",
//             href: "external-link-here",
//           },
//           {
//             name: "foundation",
//             description: "See our colors, icons and typography",
//             href: "external-link-here",
//           },
//         ],
//       }
//   ];

//   const renderNavItem = (item) => {
//     if (item.collapse) {
//       return (
//         <div key={item.name}>
//           <ListItem button>
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.name} />
//           </ListItem>
//           <Collapse in={true} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               {item.collapse.map(renderNavItem)}
//             </List>
//           </Collapse>
//         </div>
//       );
//     }

//     return (
//       <ListItem
//         button
//         key={item.name}
//         to={item.route}
//         component={Link}
//         className={classes.nested}
//       >
//         <ListItemIcon>{item.icon}</ListItemIcon>
//         <ListItemText primary={item.name} />
//       </ListItem>
//     );
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       anchor="left"
//       sx={{ width: 240, flexShrink: 0 }}
//     >
//       <div className={classes.drawerHeader}>
//         <IconButton>
//           <ChevronLeftIcon />
//         </IconButton>
//       </div>
//       <List>
//         {/* Your original navigation content */}
//         <ListItem button component={Link} to="/">
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button component={Link} to="/search">
//           <ListItemText primary="Search Companies" />
//         </ListItem>
//         {!getToken() && (
//           <>
//             <ListItem button component={Link} to="/login">
//               <ListItemText primary="Login" />
//             </ListItem>
//             <ListItem button component={Link} to="/signup">
//               <ListItemText primary="Signup" />
//             </ListItem>
//           </>
//         )}
//         {getToken() && (
//           <>
//             <ListItem button component={Link} to="/profile" className={classes.nested}>
//               <ListItemText primary="Profile" />
//             </ListItem>
//             <Button onClick={logOutUser} className={classes.nested}>
//               Logout
//             </Button>
//           </>
//         )}

//         {/* Material UI structure */}
//         {navigationData.map(renderNavItem)}
//       </List>
//     </Drawer>
//   );
// };

// export default Navbar;

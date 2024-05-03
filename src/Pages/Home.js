
const menuItems = [
  { title: 'Dashboard', path: '/dashboard',
   subMenuItems : [
       {
        title : 'Dashboard', Path : '/dashboard'
       }
   ],
},
   { title: 'Users', path: '/users', 
   subMenuItems: [
     { title: 'User', path: '/users/user' },
     { title: 'Permission', path: '/users/permission' },
   ] },
   { title: 'Company', path: '/company', 
   subMenuItems: [
     { title: 'Clients', path: '/company/clients' },
     { title: 'Courier', path: '/company/courier' },
     { title: 'Depots', path: '/company/depots' },
     { title: 'Vehicle', path: '/company/vehicle' },
     { title: 'Freight Prayers', path: '/company/freight prayers' },
     { title: 'Drivers', path: '/company/drivers' },
   ] },
   { title: 'Setting', path: '/setting' },
   { title: 'Logout', path: '/logout' },

 ];

export default menuItems;

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer'
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Distributor Managment',
    route: '/distributorManagment',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Distributor Master',
        to: '/distributorManagment/distributorMaster',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'User Management',
    route: '/userManagement',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'User',
        to: '/UserManagement/user',
      },

    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Product Management',
    route: '/productManagement',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Product',
        to: '/productManagement/product',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Product Category',
        to: '/productManagement/productCategory',
      },

    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Salesman Management',
    route: '/salesman',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Salesman',
        to: '/salesmanManagement/salesman',
      },

    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Van Management',
    route: '/van',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Van Master',
        to: '/vanManagement/van',
      },

    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Tax Management',
    route: '/tax',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Tax',
        to: '/taxManagement/tax',
      },

    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/reports',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Reports',
        to: '/reports',
      },


    ]
  }
]


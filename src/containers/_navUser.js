export default [
    {
        _tag: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer'
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
        name: 'Purchase Order Managment',
        route: '/purchaseOrderManagment',
        icon: 'cil-cursor',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Purchase Order',
                to: '/purchaseOrderManagment/purchaseOrder',
            },

        ],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'GRN Managment',
        route: '/grnManagment',
        icon: 'cil-cursor',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'GRN',
                to: '/purchaseOrderManagment/grn',
            },

        ],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Sales Order Managment',
        route: '/salesOrderManagment',
        icon: 'cil-cursor',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Sales Order',
                to: '/purchaseOrderManagment/salesOrder',
            },

        ],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Sales Invoice Managment',
        route: '/salesInvoiceManagment',
        icon: 'cil-cursor',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Sales Invoice',
                to: '/salesInvoiceManagment/salesInvoice',
            },

        ],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Inventory Managment',
        route: '/inventoryManagment',
        icon: 'cil-cursor',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Inventory',
                to: '/inventoryManagment/inventory',
            },

        ],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Retailer Managment',
        route: '/retailerManagment',
        icon: 'cil-cursor',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Retailer',
                to: '/retailerManagment/retailer',
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

        ],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Van Management',
        route: '/notifications',
        icon: 'cil-bell',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Alerts',
                to: '/notifications/alerts',
            },

        ]
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'PickList Managment',
        route: '/pickListManagment',
        icon: 'cil-cursor',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Pick List',
                to: '/pickListManagment/pickList',
            },

        ],
    },
    {
        _tag: 'CSidebarNavDropdown',
        name: 'Reports',
        route: '/reports',
        icon: 'cil-puzzle',
        _children: [
            {
                _tag: 'CSidebarNavItem',
                name: 'Reports',
                to: '/reports',
            },
        ],
    },
]


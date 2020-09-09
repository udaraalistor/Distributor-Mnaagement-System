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
                name: 'Purchase Order Create',
                to: '/purchaseOrderManagment/purchaseOrderCreate',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Purchase Order View',
                to: '/purchaseOrderManagment/purchaseOrderView',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Purchase Return Create',
                to: '/purchaseOrderManagment/purchaseReturnCreate',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Purchase Return View',
                to: '/purchaseOrderManagment/purchaseReturnView',
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
                name: 'GRN Acceptance',
                to: '/purchaseOrderManagment/grnAcceptance',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'GRN History',
                to: '/purchaseOrderManagment/grnHistory',
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
                name: 'Sales Order Create',
                to: '/purchaseOrderManagment/salesOrderCreate',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Sales Order View',
                to: '/purchaseOrderManagment/salesOrderView',
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
                name: 'Sales Invoice Create',
                to: '/salesInvoiceManagment/salesInvoiceCreate',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Sales Invoice View',
                to: '/salesInvoiceManagment/salesInvoiceView',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Sales Return Create',
                to: '/salesInvoiceManagment/salesReturnCreate',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Sales Return Create',
                to: '/salesInvoiceManagment/salesReturnView',
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
                name: 'Stock',
                to: '/inventoryManagment/stock',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Warehouse Create',
                to: '/inventoryManagment/warehouseCreate',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Warehouse Type Create',
                to: '/inventoryManagment/warehouseTypeCreate',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Stock Adjustment',
                to: '/inventoryManagment/stockAdjustment',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Stock Transfer',
                to: '/inventoryManagment/stockTransfer',
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
                name: 'Retailer Create',
                to: '/retailerManagment/retailerCreate',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Retailer View',
                to: '/retailerManagment/retailerView',
            },
            {
                _tag: 'CSidebarNavItem',
                name: 'Retailer Transfer',
                to: '/retailerManagment/retailerTransfer',
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


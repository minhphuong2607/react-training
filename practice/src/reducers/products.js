var initialState = [
    {
        id: 1, 
        name: "MilkTea 1",
        price: 60.000,
        status: "stocking",
        action: ""
    },
    {
        id: 2, 
        name: "MilkTea 2",
        price: 70.000,
        status: "stocking",
        action: ""
    },
    {
        id: 3, 
        name: "MilkTea 3",  
        price: 80.000,
        status: "stocking",
        action: ""
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
};

export default products;
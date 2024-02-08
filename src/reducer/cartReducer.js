const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { item, noOfItems, amount } = action.payload;
        console.log(item, noOfItems, amount)
    }
    return state
}
export default cartReducer;
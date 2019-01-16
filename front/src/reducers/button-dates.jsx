//action appelée par le reducer button-dates.jsx

const activeButton = (state = {
    disabled: "1"
}, action) => {
    switch (action.type) {


        case 'UPDATE_BUTTON':
        console.log("fezfez", action.number)
            return {
                disabled: action.number
            };
        default:
            return state

    }
}

export default activeButton;
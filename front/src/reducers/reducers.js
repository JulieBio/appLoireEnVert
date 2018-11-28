
// export default function (state = { housesList: [], selectedHouse: "" }, action) {
//     let selectedHouse;
//     switch (action.type) {
  
//       case 'UPDATE_HOUSE_LIST':
//         const houses = action.houses;
//         return { ...state, housesList: houses }
  
//       case 'SELECT_RANDOM':
//         const { housesList } = state;
//         selectedHouse = housesList[Math.floor(Math.random() * housesList.length)]
//         return { ...state, selectedHouse }
  
//       case 'SELECT_SPECIFIC':
//         selectedHouse = housesList[action.id]
//         return { ...state, selectedHouse }
  
//       default:
//         return state
  
//     }
//   }
  
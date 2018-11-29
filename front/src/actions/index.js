import axios from 'axios';


export const updateRandomHouse = () => ({
  type: 'SELECT_RANDOM',
})

export const updateSpecificHouse = (id) => ({
  type: 'SELECT_SPECIFIC',
  id
})

export const updateHouseList = (houses) => ({
  type: 'UPDATE_HOUSE_LIST',
  houses
})

export const fetchHouses = () => {
  return dispatch => {
    return axios.get('http://localhost:5000/houses')
      .then(response => {
        const houses  = response.data.houses;
        console.log(houses)
        dispatch(updateHouseList(houses))
      })
  }
}
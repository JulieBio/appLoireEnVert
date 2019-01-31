// const filterEvents qui prend un state "where" initial null et un state "who" null.

// initiation du state: { where: '%%', who: '%%', when: 15 } pour avoir les évenements filtrés
const filterEvents = (state = { where: '%%', who: '%%', when: 15 }, action) => {
  // si on n'actualise pas le state, on aura tous les resultats
  switch (action.type) {
    case "UPDATE_FILTER":
      // fait revenir le filtre date à 15 jours (par defaut)
      // action.filter fait la mise à jour du state 
      if (action.filter.where && action.filter.who !== '%%') action.filter.when = 15
      return { ...state, ...action.filter };
    default:
      return state;
  }
};
// const filterEvents dispatchée au container EventList.js
// const importée au reducer index.js
export default filterEvents;

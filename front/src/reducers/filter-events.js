//const filterEvents qui prend un state "where" initial null et un state "who" null.
//Faire la mise à jour du state (action.filter)
// Julie Lisa : "when" est par défaut à 15 jours
// Monica: initiation du state: { where: '%%', who: '%%', when: 15 } pour avoir les évenements filtrés
// si on n'actualise pas le state, on aura tous les resultats

const filterEvents = (state = { where: '%%', who: '%%', when: 15 }, action) => {

  console.log("je rentre dans redux filter", action);
  switch (action.type) {
    case "UPDATE_FILTER":
      console.log("reducer", state, action.filter);
      return { ...state, ...action.filter };
    default:
      return state;
  }
};
//const filterEvents dispatchée au container EventList.js
//const importée au reducer index.js
export default filterEvents;

import axios from "axios";

//Julie : description de l'action
export const updateEventsList = events => ({
  type: "UPDATE_EVENTS_LIST",
  events
});
export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});

//On crée const pour actualiser les résultats filtrés (Monica/Nadim)
// Julie Lisa : filter (sous type) est un req.body
export const updateFilter = filter => ({
  type: "UPDATE_FILTER",
  filter
});

export const updateButton = number => {
  console.log("in ACTION", number)
  return { type: "UPDATE_BUTTON",
  number,}
};


// recupération dans la bdd
export const fetchEvents = filter => {
  console.log("filter", filter);
  return dispatch => {
    console.log(2);
    return (
// Julie Lisa : filter est un req.body est le même que filter dans updateFilter
      axios.all([
          axios.get("https://loireenvert.fr/wp-json/wp/v2/events"),
          axios.get("https://loireenvert.fr/wp-json/wp/v2/locations"),
          axios.get("https://loireenvert.fr/wp-json/wp/v2/event-categories ")
      ])
// Marion : on crée deux variables contenant chacune les données de chaque table categoriesRes
        .then(axios.spread((eventRes, locationsRes, categoriesRes ) => {
          const eventsLoire = eventRes.data;
          console.log("eventsLoire", eventsLoire)
          /**
           * Recupération des images dans le content
           */
          
          const regexFindImage = /<img.*?https?(.*?(?:jpg|png)).*?>/;
          const NewEventsLoire= eventsLoire.map(event => {
            console.log(`http${regexFindImage.exec(event.post_content)[1]}`)
            return({...event,image:`http${regexFindImage.exec(event.post_content)[1]}`})
          })
          console.log('NewEventsLoire',NewEventsLoire )
          console.log("image")
          
          /**
           * Merge des events avec les locations
           */
          const locs = locationsRes.data;
          const categories = categoriesRes.data;
          // Marion : on prends la table de tous les évènements attribuée à la variable const events puis pour un évènement on récupère la colomne commune à la table des évènements et à la table des lieux dans chaque table et on compare qu'elles soient bien identique. Si oui, on retourne la table évènements avec le lieux correspondant à la clé.
          const eventLoireFull = NewEventsLoire.map((event,i) => {
            const loc = locs.find(loc => loc.location_id === event.location_id)
            const categorie = categories.find(catego =>{
              if(event.categories_id &&  event.categories_id.indexOf(catego.id ))
                return true;
                else
                return false;
            })
            if(i===1)console.log(event,loc,{...event, ...loc, ...categorie})
            return {...event, ...loc, ...categorie}
          });
          console.log("evenLoireFull",eventLoireFull)
          eventLoireFull.map(ev=>console.log(ev.image))
          dispatch(updateEventsList(eventLoireFull));
        }))
        .catch(e => {
          console.log(e);
        })
    );
  };
};

import axios from "axios";
import moment from 'moment';

// description de l'action
export const updateEventsList = events => ({
  type: "UPDATE_EVENTS_LIST",
  events
});
export const addEvent = event => ({
  type: "ADD_EVENT",
  event
});

// On crée const pour actualiser les résultats filtrés
//  filter (sous type) est un req.body
export const updateFilter = filter => ({
  type: "UPDATE_FILTER",
  filter
});

export const updateButton = number => {
  return {
    type: "UPDATE_BUTTON",
    number,
  }
};


export const fetchEvents = filter => {
  return dispatch => {
    return (
      // filter est un req.body est le même que filter dans updateFilter
      axios.all([
        axios.get("https://loireenvert.fr/wp-json/wp/v2/events"),
        axios.get("https://loireenvert.fr/wp-json/wp/v2/locations"),
        axios.get("https://loireenvert.fr/wp-json/wp/v2/event-categories ")
      ])
        // on crée deux variables contenant chacune les données de chaque table categoriesRes
        .then(axios.spread((eventRes, locationsRes, categoriesRes) => {
          const eventsLoire = eventRes.data;
          /**
           * Recupération des images dans le content
           */

          const regexFindImage = /<img.*?https?(.*?(?:jpg|png)).*?>/;
          const eventswithImg = eventsLoire.map(event => {
            return ({ ...event, image: `http${regexFindImage.exec(event.post_content)[1]}` })
          })

          /**
           * Merge des events avec les locations
           */
          const locs = locationsRes.data;
          const categories = categoriesRes.data;
          // on prends la table de tous les évènements attribuée à la variable const events puis pour un évènement on récupère la colomne commune à la table des évènements et à la table des lieux dans chaque table et on compare qu'elles soient bien identique. Si oui, on retourne la table évènements avec le lieux correspondant à la clé.
          const eventswithImgWithLoc = eventswithImg.map((event, i) => {
            const loc = locs.find(loc => loc.location_id === event.location_id)
              return { ...event, ...loc }
          });

          /**
           * Merge categories
           */
          const eventswithImgWithLocWithCat = eventswithImgWithLoc.map((event, i) => {
            if (event.categories_id) {
              const newecategories = event.categories_id.map(evtcat => {
                const goodcat = categories.find(cat => {
                  return (evtcat === cat.id)
                })
                return goodcat
              })
              return { ...event, categories_id: newecategories };
            }
            else
              return event;
          });
          eventswithImgWithLocWithCat.sort((a, b) => moment(a.event_start_date).diff(b.event_start_date))
          dispatch(updateEventsList(eventswithImgWithLocWithCat));
        }))
        .catch(e => {
          console.log(e);
        })
    );
  };
};



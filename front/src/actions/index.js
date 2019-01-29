import axios from "axios";
import moment from 'moment';

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
  return {
    type: "UPDATE_BUTTON",
    number,
  }
};


// recupération dans la bdd
export const fetchEvents = filter => {
  return dispatch => {
    return (
      // Julie Lisa : filter est un req.body est le même que filter dans updateFilter
      axios.all([
        axios.get("https://loireenvert.fr/wp-json/wp/v2/events"),
        axios.get("https://loireenvert.fr/wp-json/wp/v2/locations"),
        axios.get("https://loireenvert.fr/wp-json/wp/v2/event-categories ")
      ])
        // Marion : on crée deux variables contenant chacune les données de chaque table categoriesRes
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
          // Marion : on prends la table de tous les évènements attribuée à la variable const events puis pour un évènement on récupère la colomne commune à la table des évènements et à la table des lieux dans chaque table et on compare qu'elles soient bien identique. Si oui, on retourne la table évènements avec le lieux correspondant à la clé.
          const eventswithImgWithLoc = eventswithImg.map((event, i) => {
            const loc = locs.find(loc => loc.location_id === event.location_id)
            if (i === 1) console.log(event, loc, { ...event, ...loc })
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
          eventswithImgWithLocWithCat.sort((a,b)=> moment(a.event_start_date).diff(b.event_start_date))
          dispatch(updateEventsList(eventswithImgWithLocWithCat));
        }))
        .catch(e => {
          console.log(e);
        })
    );
  };
};



// let now = new Date();
// let twoWeeks  = moment(now).add(15, 'days');
// let oneMounth  = moment(now).add(30, 'days');

// const eventsFiltredDates = eventswithImgWithLocWithCat.map((event, when) => {
//   if (event.event_start_date < oneMounth) {
//     const 
//   }
// }
// )

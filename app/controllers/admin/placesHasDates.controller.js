import placesHasDatesDatamapper from '../../datamappers/placeshasdates.datamapper.js';
import datesDatamapper from '../../datamappers/dates.datamapper.js';
import placesDatamapper from '../../datamappers/places.datamapper.js';


export default {
  async datePlacesPage(req, res) {
    const { id } = req.params;
    const date = await datesDatamapper.findByPk(id);
    let allPlaces = await placesDatamapper.findAll();
    const placesList = await placesHasDatesDatamapper.findAllPlacesByDate(id);

    // create an array and push inside the place delivery id who is yet associated
    const allIdPlacesList = [];

    placesList.forEach((object) => {
      allIdPlacesList.push(object.delivery_place_id);
    });

    // delete places from allPlaces where is the date yet associated
    allIdPlacesList.forEach((placeId) => {
      // eslint-disable-next-line max-len
      allPlaces = allPlaces.filter((object) => object.id !== placeId);
    });
    return res.status(200).render('dates_has_places.ejs', {
      id, placesList, date, allPlaces,
    });
  },

  async orderDeletePage(req, res) {
    const { id } = req.params;
    return res.status(200).render('dates_has_places_delete.ejs', { id });
  },

  async createOne(req, res) {
    const datePlacesData = req.body;

    // for each place selected, create an object with date and place to send
    // to the datamapper to create the association
    // eslint-disable-next-line no-restricted-syntax, prefer-const
    for (let place of datePlacesData.delivery_place_id) {
      // eslint-disable-next-line prefer-const
      let associationData = {
        delivery_date_id: Number(datePlacesData.date),
        delivery_place_id: Number(place),
      };

      // eslint-disable-next-line no-await-in-loop
      await placesHasDatesDatamapper.create(associationData);
    }

    return res.status(200).redirect(`/admin/dates-livraison/${datePlacesData.date}/lieux-livraison`);
  },

  async deleteOne(req, res) {
    const { id } = req.params;

    await placesHasDatesDatamapper.delete(id);

    return res.status(200).redirect('/admin/dates-livraison');

  },

};

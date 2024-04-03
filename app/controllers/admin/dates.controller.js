import datesDatamapper from '../../datamappers/dates.datamapper.js';
import placesDatamapper from '../../datamappers/places.datamapper.js';

export default {
  async datePage(_, res) {
    const datesList = await datesDatamapper.findAll();
    const datesToComeList = datesList.filter((date) => date.date >= new Date());
    return res.render('dates.ejs', { datesToComeList });
  },

  async dateDetailPage(req, res) {
    const datesList = await datesDatamapper.findAll();

    // get date we want update
    const { id } = req.params;
    const date = await datesDatamapper.findByPk(id);
    const placesList = await placesDatamapper.findAll();

    return res.status(200).render('dates_detail.ejs', {
      id, datesList, date, placesList,
    });
  },

  async dateCreationPage(req, res) {
    const datesList = await datesDatamapper.findAll();
    return res.status(200).render('dates_create.ejs', { datesList });
  },

  async createOne(req, res) {
    const dateData = req.body;
    await datesDatamapper.create(dateData);
    return res.status(200).redirect('/admin/dates-livraison');
  },

  async updateOne(req, res) {
    const dateData = req.body;
    const { id } = req.params;
    const timestampz = Date.now();
    dateData.updated_at = new Date(timestampz);

    const date = await datesDatamapper
      .update(id, dateData);

    // if date not exists
    if (!date) {
      return alert('Erreur lors de la mise à jour');
    }
    // date updated
    return res.status(200).redirect('/admin/dates-livraison');
  },

};

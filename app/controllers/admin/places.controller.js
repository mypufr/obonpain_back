import placesDatamapper from '../../datamappers/places.datamapper.js';

export default {
  async placesPage(_, res) {
    const placesList = await placesDatamapper.findAll();
    const place = {
      name: '',
      adress: '',
      zip_code: '',
      city: '',
      information: '',
      status: true,
    };
    return res.status(200).render('places.ejs', { placesList, place });
  },

  async createOne(req, res) {
    const placeData = req.body;
    console.log(placeData);

    //placeData.zip_code = placeData.zip_code.parseInt();

    await placesDatamapper.create(placeData);
    return res.status(200).redirect('/admin/lieux-livraison');
  },

  async updateOne(req, res) {
    const placeData = req.body;
    console.log(placeData);
    const { id } = req.params;

    // eslint-disable-next-line spaced-comment
    //update updated_at
    placeData.updated_at = new Date();

    const place = await placesDatamapper
      .update(id, placeData);

    // if places not exists
    if (!place) {
      // return alert('Erreur lors de la mise à jour');
      return alert('Erreur lors de la mise à jour');
    }

    // place updated
    return res.status(200).redirect('/admin/lieux-livraison');
  },

  async placeDetailPage(req, res) {
    // eslint-disable-next-line spaced-comment
    //get places to update
    const { id } = req.params;
    const place = await placesDatamapper.findByPk(id);

    // eslint-disable-next-line spaced-comment
    //get placesList
    const placesList = await placesDatamapper.findAll();

    // if place not exists
    if (!place) {
      // return alert('Erreur lors de la mise à jour');
      return alert('Erreur lors de la mise à jour');
    }

    // place exists
    return res.status(200).render('places.ejs', {
      placesList, place,
    });
  },
};

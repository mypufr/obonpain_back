import usersDatamapper from '../../datamappers/users.datamapper.js';

export default {
  async clientsPage(_, res) {
    const clientsList = await usersDatamapper.findAll();
    return res.status(200).render('clients.ejs', { clientsList });
  },

  async clientDetailPage(req, res) {
    const user = await usersDatamapper.findByPk(req.params.id);
    const { id } = user;

    // if user not exist
    if (!user) {
      return alert('Erreur - client non trouvé');
    }

    return res.status(200).render('client_detail.ejs', { id, user });
  },

  async clientUpdate(req, res) {
    const userStatus = req.body;
    // update updated_at
    userStatus.updated_at = new Date();

    const { id } = req.params;

    const status = await usersDatamapper
      .updateStatus(id, userStatus);

    // if status not exist
    if (!status) {
      return alert('Erreur - mise à jour impossible');
    }

    // if status exists
    return res.status(200).redirect('/admin/clients');
  },

};

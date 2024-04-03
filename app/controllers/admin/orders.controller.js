/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
/* eslint-disable camelcase */
import ordersDatamapper from '../../datamappers/orders.datamapper.js';
import placesDatamapper from '../../datamappers/places.datamapper.js';
import usersDatamapper from '../../datamappers/users.datamapper.js';
import productsDatamapper from '../../datamappers/products.datamapper.js';
import breadsHasOrdersDatamapper from '../../datamappers/breadshasorders.datamapper.js';
// import ApiError from '../errors/api-error.js';

export default {
  async ordersListPage(_, res) {
    const ordersList = await ordersDatamapper.findAll();
    return res.status(200).render('order_list', { ordersList });
  },

  async orderPlaceCreate(req, res) {
    const placesList = await placesDatamapper.findAll();
    return res.status(200).render('order_select_place', { placesList });
  },

  async orderDateAndProductChoicePage(req, res) {
    const { id } = req.params;

    // récupérer le nom du lieu
    const place = await placesDatamapper.findByPk(id);

    // find all the dates for this place
    const datesList = await placesDatamapper.findDatesForOnePlace(id);
    const datesToComeList = datesList.filter((date) => date.date >= new Date());

    // get all users where role === 'client'
    const clientsList = await usersDatamapper.findAllClients();
    const clientsTrueList = clientsList.filter((client) => client.status === true);

    // get all users where role === 'admin'
    const adminsList = await usersDatamapper.findAllAdmins();
    const adminsTrueList = adminsList.filter((admin) => admin.status === true);

    // get all products
    const productsList = await productsDatamapper.findAll();
    const productsTrueList = productsList.filter((product) => product.status === true);

    return res.status(200).render('order_create', {
      id, place, datesToComeList, clientsTrueList, productsTrueList, adminsTrueList,
    });
  },

  async orderDetailPage(req, res) {
    const { id } = req.params;
    const order = await breadsHasOrdersDatamapper.findByPk(id);
    return res.status(200).render('order_modify', { order, id });
  },

  async orderDeletePage(req, res) {
    const { id } = req.params;
    return res.status(200).render('order_delete', { id });
  },

  async createOne(req, res) {
    const orderData = req.body;
    const orderIdList = [];

    // add delivery_date_id property and create an order for each date
    // eslint-disable-next-line no-restricted-syntax
    for (const date of orderData.delivery_date_id_list) {
      orderData.delivery_date_id = date;
      // eslint-disable-next-line no-await-in-loop
      const orderId = await ordersDatamapper.create(orderData);
      // push each orderId in the array orderIdList
      orderIdList.push(orderId);
    }

    // delete the property not necessary for the relation bread_has_order
    const {
      // eslint-disable-next-line no-unused-vars
      delivery_date_id_list, customer_id, creator_id, delivery_date_id, delivery_place_id,
    } = orderData;

    delete orderData.customer_id;
    delete orderData.delivery_date_id_list;
    delete orderData.creator_id;
    delete orderData.delivery_date_id;
    delete orderData.delivery_place_id;

    // create an object for each bread_id and quantity
    const productsArray = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(orderData)) {
      // check if quantity is not null
      if (value) {
        // get the price of the bread
        // eslint-disable-next-line no-await-in-loop
        const bread = await productsDatamapper.findByPk(key);
        const breadPrice = bread.price;
        // if there is a quantity, create an object with the bread_id and the quantity
        const breadOrder = { bread_id: key, quantity: value, price: breadPrice };
        // push breadOrder into productsArray
        productsArray.push(breadOrder);
      }
    }

    for (const object of orderIdList) {
      // eslint-disable-next-line no-restricted-syntax
      for (const product of productsArray) {
        await ordersDatamapper.createBreadHasOrder(object.id, product);
      }
    }

    return res.status(200).redirect('/admin/commandes');
  },

  async updateOne(req, res) {
    const orderData = req.body;
    const { id } = req.params;
    // update updated_at
    orderData.updated_at = new Date();

    const modifyData = await breadsHasOrdersDatamapper.update(id, orderData);

    // if modifyData not exists
    if (!modifyData) {
      return alert('Erreur lors de la mise à jour');
    }

    return res.status(200).redirect('/admin/commandes');
  },

  async deleteOne(req, res) {
    const { id } = req.params;

    await breadsHasOrdersDatamapper.delete(id);

    return res.status(200).redirect('/admin/commandes');
  },
};

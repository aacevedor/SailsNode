var Liabilities = {

	schema : true,

	attributes: {
    id: {
      type: 'INTEGER',
      primaryKey: true
    },
    
    // Proper ENUM types at the Database level are not yet supported
    // but you can use validations to achieve the same end result.
    // You can also add a default social_network with defaultsTo
    social_network: {
      type: 'STRING',
      in: ['facebook', 'twitter', 'vk', 'weibo']
    },
    country: 'STRING',
    message: 'TEXT',
    comments: 'TEXT',
    longitude: 'FLOAT',
    latitude: 'FLOAT',
    location_name: 'STRING',
    id_company: 'INTEGER',
    name_company : 'STRING',
    id_user : 'INTEGER',
    name_user: 'STRING',
    hour : 'DATETIME',
    status: 'INTEGER',
    // Timestamp is not supported but Time, Date, and DateTime are
    updated_at: 'DATETIME',
    created_at: 'DATETIME'
  },

};
module.exports = Liabilities;  
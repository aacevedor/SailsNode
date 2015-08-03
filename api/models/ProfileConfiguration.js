var ProfileConfiguration = {

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
    link: 'STRING',
    comments: 'TEXT',
    user_id: 'INTEGER',
    image_link: 'STRING',
    longitude: 'FLOAT',
    latitude: 'FLOAT',
    location_name: 'STRING',

    // Timestamp is not supported but Time, Date, and DateTime are
    updated_at: 'DATETIME',
    created_at: 'DATETIME'
  },

};

module.exports = ProfileConfiguration;     
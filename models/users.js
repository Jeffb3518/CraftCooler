// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
       
//         first_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             isAlpha: true
//         },
//         last_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             isAlpha: true
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             isEmail: true
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             len: [6, 15]
//         }
//     });
//     return User;
// };

// Requiring bcrypt for password hashing. Using the bcrypt version as the regular bcrypt module
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first: {
        type: DataTypes.STRING,
        allowNull: false
        },
    last: {
        type: DataTypes.STRING,
        allowNull: false
        },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return User
};
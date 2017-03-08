module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
       
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlpha: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            isAlpha: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [6, 15]
        }
    });
    return User;
};
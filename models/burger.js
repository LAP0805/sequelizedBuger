module.exports = function (sequelize, DataTypes) {
    const burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    });
    burger.associate = (models) => {
        burger.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return burger;
}
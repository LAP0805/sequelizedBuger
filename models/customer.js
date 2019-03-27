module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                len: [1]
            }
        }
    });
    Customer.associate = (models) =>{
        Customer.hasMany(models.burger, {
            onDelete: "cascade"
        });
    }
    return Customer;
}
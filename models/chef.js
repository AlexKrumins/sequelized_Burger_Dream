module.exports = function(sequelize, DataTypes) {
  var Chef = sequelize.define("Chef", {
    // Giving the Chef model a name of type STRING
    name: DataTypes.STRING
  });

  Chef.associate = function(models) {
    // Associating Chef with Burgers
    // When an Chef is deleted, also delete any associated Burgers
    Chef.hasMany(models.Burger, {
      onDelete: "cascade"
    });
  };

  return Chef;
};

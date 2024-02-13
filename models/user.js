module.exports = (sequelize, DataTypes) => {
    const User = Sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    User.associate = models => {
        User.hasMany(models.Post, {
            onDelete: "cascade"
        });
    }

    User.associate = models => {
        User.hasOne(models.Profile, {
            onDelete: "cascade"
        });
    }
    
    return User;
}
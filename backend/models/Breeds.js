module.exports = (sequelize, DataTypes) => {
    const Breeds = sequelize.define('Breeds', {
        weight_metric: { type: DataTypes.STRING, allowNull: true},
        height_metric: { type: DataTypes.STRING, allowNull: true},
        name: { type: DataTypes.STRING, allowNull: true},
        bred_for: { type: DataTypes.STRING, allowNull: true}, 
        breed_group: { type: DataTypes.STRING, allowNull: true}, 
        life_span: { type: DataTypes.STRING, allowNull: true},
        temperament: { type: DataTypes.STRING, allowNull: true},
        origin: { type: DataTypes.STRING, allowNull: true},
        image_url: { type: DataTypes.STRING, allowNull: true},
    },{
        tableName: 'breeds',
        timestamps: false
    })
    return Breeds
}
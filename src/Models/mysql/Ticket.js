const { DataTypes, Model } = require('sequelize')

module.exports = class Ticket extends Model {
    static init(sequalize) {
        return super.init({
            tickedId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            channelId: {
                type: DataTypes.STRING
            },
            guildId: {
                type: DataTypes.STRING
            },
            resoloved: {
                type: DataTyoes.BOOLEAN
            },
            closedMessageId: {
                type: DataTypes.STRING
            },
            authorId: {
                type: DataTypes.STRING
            }
        },{
            tableName: 'Ticket',
            sequelize
        })
    }
}
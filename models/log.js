'use strict';
module.exports = (sequelize, DataTypes)=> {
    var Log = sequelize.define('log', {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true
            },
            downloadedTimetables: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set: function (val) {
                    this.setDataValue('downloadedTimetables', val);
                    this.setDataValue('downloadedTimetablesAt', new Date());
                }
            },
            downloadedTimetablesAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            exceptionsExtracted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set: function(val) {
                    this.setDataValue('exceptionsExtracted', val);
                    this.setDataValue('exceptionsExtractedAt', new Date());
                }
            },
            exceptionsExtractedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            eventsExtracted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set:function (val) {
                    this.setDataValue('eventsExtracted', val);
                    this.setDataValue('eventsExtractedAt', new Date());
                }
            },
            eventsExtractedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            eventtempsInserted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set:function (val){
                    this.setDataValue('eventtempsInserted', val);
                    this.setDataValue('eventtempsInsertedAt', new Date());
                }
            },
            eventtempsInsertedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            eventsInserted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set: function(val) {
                    this.setDataValue('eventsInserted', val);
                    this.setDataValue('eventsInsertedAt', new Date());
                }
            },
            eventsInsertedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            eventsDeleted: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set:function (val) {
                    this.setDataValue('eventsDeleted', val);
                    this.setDataValue('eventsDeletedAt', new Date());
                }
            },
            eventsDeletedAt: {
                type: DataTypes.DATE,
                allowNull: true
            },
            eventsUpdated: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: true,
                set:function (val) {
                    this.setDataValue('eventsUpdated', val);
                    this.setDataValue('eventsUpdatedAt', new Date());
                }
            },
            eventsUpdatedAt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        },
        {
            timestamps: true
        });
    return Log;
};
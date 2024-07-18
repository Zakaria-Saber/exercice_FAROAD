import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

type ChargingPointAttributes = {
  id: string;
  name: string;
  location: 'bureaux' | 'domicile';
}

// Optional attributes for creation
type ChargingPointCreationAttributes = Optional<ChargingPointAttributes, 'id'> 

// Class definition
class ChargingPoint extends Model<ChargingPointAttributes, ChargingPointCreationAttributes> {
  declare id: string;
  declare name: string;
  declare location: 'bureaux' | 'domicile';
}

ChargingPoint.init({
  id: {
    type: DataTypes.STRING(5),
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  location: {
    type: DataTypes.ENUM('bureaux', 'domicile'),
    allowNull: false,
  },
}, {
    tableName: 'chargingpoint',
    sequelize,
});

export default ChargingPoint;

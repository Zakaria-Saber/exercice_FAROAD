import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';

// Interface for attributes
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.ENUM('bureaux', 'domicile'),
    allowNull: false,
  },
}, {
    tableName: 'ChargingPoint',
    sequelize,
});

export default ChargingPoint;

import { Model, Sequelize } from 'sequelize';
import { DataTypes } from "sequelize";
import Joi from "joi";

export interface IUsuario {
  id?: number;
  nombre: string;
  email: string;
  contraseña?: string;
}

export const registerSchema = Joi.object({
  email: Joi.string().email().required().email(),
  contraseña: Joi.string().required().min(6),
  nombre: Joi.string().required().min(3),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required().email(),
  contraseña: Joi.string().required().min(6),
});

class Usuario extends Model<IUsuario> { }

export const loadModel = (sequelize: Sequelize) => {

  Usuario.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'usuarios',
    },
  );

}

export default Usuario;
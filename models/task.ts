"use strict";

import * as sequelize from "sequelize";

interface Model extends sequelize.Model<Instance, Attributes> {}

interface Instance extends sequelize.Instance<Attributes> {}

interface Attributes {}

export default function(sequelize: sequelize.Sequelize, dataTypes: sequelize.DataTypes): Model {
  return sequelize.define<Instance, Attributes>("Task", {});
}

const { model } = require("mongoose");

const { HoldingsSchemas } = require("../schemas/HoldingsSchemas");

const HoldingsModel = model("holding", HoldingsSchemas);

module.exports = { HoldingsModel };
'use strict';

const draftAndPublish = require('./draft-publish');

module.exports = () => {
  siapi.db.migrations.register(draftAndPublish);
};

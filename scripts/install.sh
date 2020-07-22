#!/bin/bash

cd drupal
lando start
lando composer install
lando db-import seed.sql.gz
lando drush cr
lando drush cim sync --no-interaction
lando drush cr
cd ../vue-nes
npm install
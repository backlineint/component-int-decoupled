#!/bin/bash

cd drupal
lando start
lando composer install
lando drush cr
lando drush cim sync --no-interaction
lando drush cr
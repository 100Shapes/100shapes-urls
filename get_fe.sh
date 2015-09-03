#!/bin/bash
rm ./public/index.html
curl -L --retry 20 --retry-delay 2 -o public/index.html https://raw.githubusercontent.com/100Shapes/100shapes-urls-FE/master/build/index.html

rm ./public/bundle.js
curl -L --retry 20 --retry-delay 2 -o public/bundle.js https://raw.githubusercontent.com/100Shapes/100shapes-urls-FE/master/build/bundle.js

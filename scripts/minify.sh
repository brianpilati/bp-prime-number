#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Minify Script (http://coderaiser.github.io/minify/)"
echo "-------------------------------------------------------------------"

echo $BASE_DIR

$BASE_DIR/../node_modules/minify/bin/minify $BASE_DIR/../js/primeNumber.js $BASE_DIR/../js/bp-prime-number-min.js

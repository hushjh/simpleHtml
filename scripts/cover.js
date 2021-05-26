const { rm, cp, mkdir, echo, env } = require('shelljs')
const chalk = require('chalk')
const npm_package_version = env['npm_package_version']

console.log(chalk.green('1. remove old coverage reports...'))
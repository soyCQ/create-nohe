const { defineManifest } = require('@cq9dev/nohe')

module.exports = defineManifest({
    fx_version: 'cerulean',
    games: [ "gta5" ],
    shared: [
        "@cq_core/core.lua"
    ],
    client: [],
    server: [
        "@mysql-async/lib/MySQL.lua"
    ],
    exports: [],
    dependencies: [],
    escrow_ignore: [],
    lua54: "yes"
})
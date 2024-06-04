const { defineModule } = require('@cq9dev/nohe')

module.exports = defineModule({
    clients: {
        'Main': 'app/client/Main.lua',
    },

    servers: {
        'Main': 'app/server/Main.lua',
    },

    store: {
        'Main': 'store/Main.js',
    }
})
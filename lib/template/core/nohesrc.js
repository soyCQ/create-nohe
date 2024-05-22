const { defineModule } = require('@cq9dev/nohe')

module.exports = defineModule({
    clients: {
        'Main': 'app/client/Main.js',
    },
    servers: {
        'Main': 'app/server/Main.js',
    }
})
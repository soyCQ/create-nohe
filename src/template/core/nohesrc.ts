const { defineModule } = require('@cq9dev/nohe')

module.exports = defineModule({
    clients: {
        'Main': 'app/client/Main.ts',
    },
    servers: {
        'Main': 'app/server/Main.ts',
    }
})
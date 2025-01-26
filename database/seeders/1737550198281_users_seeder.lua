import { BaseSeeder } from '#Core/seeds'
import User from '#Model/User'

export default BaseSeeder('users', function()
    User.create({
        name = "Nohe",
        lastname = "JS",
        email = "name@nohejs.com"
    })
end)
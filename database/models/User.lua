import { BaseModel } from '#Core/model'

export default BaseModel(function(model)
    model.table('users')

    model.declare('id').number().primary()
    model.declare('name').string().nullable()
    model.declare('lastname').string().nullable()
    model.declare('email').string()
    model.declare('createdAt').datetime()
    model.declare('updatedAt').datetime()
end)
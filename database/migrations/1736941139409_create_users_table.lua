import { BaseSchema } from '#Core/schema'

BaseSchema(function(db)
    db.createTable("users", function(table)
      table.increments()

      table.string('name').nullable()
      table.string('lastname').nullable()
      table.string('email')

      table.timestamps()
    end)
end)
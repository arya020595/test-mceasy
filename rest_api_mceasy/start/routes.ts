/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

Route.post('/api/mceasy', async ({ request }: HttpContextContract) => {

  let num = 0
  let string = ""
  let string_final = ""

  request.body().arr.forEach(element => {
      if (element == "Mc") {
          string = element
      }

      if (string == "Mc" && element == "Easy") {
          string_final = `${string} ${element}`
          string = element
      }

      if (string_final == "Mc Easy") {
          num++
          string_final = ""
      }
  });

  let response = {
    "valid_pair": num
  }

  return response 
})

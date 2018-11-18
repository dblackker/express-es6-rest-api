import resource from "resource-router-middleware";
import pets from "../models/pets";
// import request from "superagent";
// import dogNames from "dog-names";

// var first = true;

export default ({ config, db }) =>
  resource({
    /** Property name to store preloaded entity on `request`. */
    id: "pet",

    /** For requests with an `id`, you can auto-load the entity.
     *  Errors terminate the request, success sets `req[id] = data`.
     */
    load(req, id, callback) {
      let pet = pets.find(pet => pet.id === id),
        err = pet ? null : "Not found";
      callback(err, pet);
    },

    /** GET / - List all entities */
    index({ params }, res) {
			// if (!first) {
				// return res.json(pets);
			// }

			// var i = 1;
			// pets.forEach(pet => {
			// 	pet.id = i;
			// 	pet.name = dogNames.allRandom();
			// 	request.get(`https://dog.ceo/api/breed/${pet.breed}/images`, (err, petRes) => {
			// 		if (err) {
			// 			console.log(err);
			// 		} else {
			// 			pet.image = petRes.body.message[0];
			// 		}
			// 	});
			// 	i++
			// });

			res.json(pets);
			// first = false;
    },

    /** POST / - Create a new entity */
    create({ body }, res) {
      body.id = pets.length.toString(36);
      pets.push(body);
      res.json(body);
    },

    /** GET /:id - Return a given entity */
    read({ pet }, res) {
      res.json(pet);
    },

    /** PUT /:id - Update a given entity */
    update({ pet, body }, res) {
      for (let key in body) {
        if (key !== "id") {
          pet[key] = body[key];
        }
      }
      res.sendStatus(204);
    },

    /** DELETE /:id - Delete a given entity */
    delete({ pet }, res) {
      pets.splice(pets.indexOf(pet), 1);
      res.sendStatus(204);
    }
  });

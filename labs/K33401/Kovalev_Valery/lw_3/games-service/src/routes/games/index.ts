import express from "express"
import UserController from "../../controllers/games/GamesController"

const router: express.Router = express.Router()

const controller: UserController = new UserController()

// router.route('/:id')
//     .get(controller.get)
//
// router.route('/register')
//     .post(controller.register)
//
// router.route('/')
//     .get(controller.getAll)

// router.route('/register')
//     .post(controller.getAll)

// router.route(('/jwt/create')).post(controller.createJWT)

// router.route("/games/me").get(controller.me)

export default router;
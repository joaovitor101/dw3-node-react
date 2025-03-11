import Game from "../models/Games.js"

class gameService {
    // Game.find().then(games => {
    // //sucesso
    // }).catch(error => {
    // // falha
    // })

    // async / await
    async getAll() {
        try {
            const games = await Game.find()
            return games
        } catch (error) {
            console.log(error)
        }
    }
}

export default new gameService()
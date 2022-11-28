import * as songDao from './songs-dao.js'


export const getSongs = () => songs;

const SongController = (app) => {

    const createSong   = async (req, res) => {
        const song = req.body
        const actualSong = await songDao.createSong(song)
        res.send(actualSong)
    }
    const findAllSongs = async (req, res) => {
        const songsInDatabase = await songDao.findAllSongs()
        res.send(songsInDatabase)
    }
    const updateSong   = (req, res) => {
        const mid = req.params['mid']
        const songUpdates = req.body
        const songIndex = songs.findIndex(
            (m) => m._id === mid)
        songs[songIndex] = {
            ...songs[songIndex],
            ...songUpdates
        }
        res.send(200)
    }
    const deleteSong   = async (req, res) => {
        const mid = req.params['mid']
        const status = await songDao.deleteSong(mid)
        res.send(status)
    }

    app.post  ('/songs', createSong)
    app.get   ('/songs', findAllSongs)
    app.put   ('/songs/:mid', updateSong)
    app.delete('/songs/:mid', deleteSong)
}

export default SongController;
import songsModel from "./songs-model.js";

export const findAllSongs = async () => {
    const songs = await songsModel.find()
    return songs
}
export const createSong = async (song) => {
    const actualInsertedSong = await songsModel.create(song)
    return actualInsertedSong
}
export const deleteSong = async (mid) => {
    const status = await songsModel.deleteOne({_id: mid})
    return status
}
export const updateSong = () => {}
const roomModel = require('../models/room.model');

exports.list = function (req, res) {
    try {
        roomModel.getRooms((rooms) => {
            res.status(200).send(rooms);
        });
    } catch (error) {
        console.log(error);
    }
};


exports.getRoom = function (req, res) {
    const id = req.query.id;
    try {
        roomModel.getRoom(id, (rooms) => {
            res.status(200).send(rooms);
        });
    } catch (error) {
        console.log(error);
    }
};


exports.updateRoom = function (req, res) {
    const id = req.body.id;
    const device = req.body.device;
    try {
        roomModel.updateRoom(id, device, (result) => {
            res.status(200).send(result);
        });
    } catch (error) {
        console.log(error);
    }
};

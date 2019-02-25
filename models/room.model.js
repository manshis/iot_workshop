var rooms = [
    { 
        id: 1,
        name: 'Living Room',
        devices: [
            {name: 'Light Bulb', value: 0},
            {name: 'Fan', value: 0},
            {name: 'AC', value: 0},
        ]
    },
    { 
        id: 2,
        name: 'Dinning Room',
        devices: [
            {name: 'Light Bulb', value: 0},
            {name: 'Fan', value: 0},
            {name: 'AC', value: 0},
        ]
    },
    { 
        id: 3,
        name: 'Bed Room',
        devices: [
            {name: 'Light Bulb', value: 0},
            {name: 'Fan', value: 0},
            {name: 'AC', value: 0},
        ]
    },
    { 
        id: 4,
        name: 'Kitchen',
        devices: [
            {name: 'Light Bulb', value: 0},
            {name: 'Fan', value: 0},
            {name: 'Microwave', value: 0},
        ]
    }
]

exports.getRooms = (handleResponse) => {
    handleResponse(rooms);
};

exports.getRoom = (id, handleResponse) => {
    console.log(typeof id);
    const room = rooms.find(roomdata => roomdata.id == id);
    handleResponse(room);
};

exports.updateRoom = (id, device, handleResponse) => {
    const room = rooms.find(roomdata => roomdata.id == id);
    roomDevice = room.devices.find(dev => dev.name == device.name);
    roomDevice.value = roomDevice.value ? 0 : 1
    handleResponse(roomDevice);
};


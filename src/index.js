import Five from 'johnny-five';
import Raspi from 'raspi-io';

const board = new Five.Board({
    io: new Raspi(),
});

board.on('ready', () => {

    console.log('Booting up');

    console.log('Ready!');

});
/**
 * Created by SoundGoddess (http://HathorsLove.com) on 8/20/2015.
 * Licensed under LGPLv3 - http://www.gnu.org/licenses/lgpl-3.0.txt
 */

var SPARKLE_KNOB_BIG = 19;
var SPARKLE_KNOB_BIG_CLICK = 90;
var SPARKLE_KNOB_TEMPO = 10;
var SPARKLE_KNOB_VOLUME = 7;
var SPARKLE_KNOB_DIVIDE = 12;
var SPARKLE_KNOB_MOVE = 13;
var SPARKLE_KNOB_MOVE_CLICK = 80;
var SPARKLE_KNOB_P1 = 16;
var SPARKLE_KNOB_P2 = 17;
var SPARKLE_KNOB_P3 = 18;

var SPARKLE_TRANSPORT_REC = 48;
var SPARKLE_TRANSPORT_STOP = 49;
var SPARKLE_TRANSPORT_PLAY = 50;
var SPARKLE_TRANSPORT_REWIND = 52;
var SPARKLE_TRANSPORT_FF = 53;

var SPARKLE_PAD_SELECT = 121;
var SPARKLE_PAD_MUTE = 120;
var SPARKLE_PAD_SOLO = 122;
var SPARKLE_PAD_GLOBAL_FILTER = 66;
var SPARKLE_PAD_SLICER = 67;
var SPARKLE_PAD_ROLLER = 68;
var SPARKLE_PAD_INSTRUMENT_FILTER = 69;
var SPARKLE_PAD_SEND12 = 70;
var SPARKLE_PAD_PAN = 71;
var SPARKLE_PAD_PROJ = 78;
var SPARKLE_PAD_KIT = 77;
var SPARKLE_PAD_INSTR = 76;
var SPARKLE_PAD_COPY = 24;
var SPARKLE_PAD_ERASE = 25;
var SPARKLE_PAD_LOOP_ON = 26;

var SPARKLE_PADSHIFT = 123;
var SPARKLE_PAD_1 = 0;
var SPARKLE_PAD_2 = 0;
var SPARKLE_PAD_3 = 0;
var SPARKLE_PAD_4 = 0;
var SPARKLE_PAD_5 = 0;
var SPARKLE_PAD_6 = 0;
var SPARKLE_PAD_7 = 0;
var SPARKLE_PAD_8 = 0;


var SPARKLE_PAD_SEQ_1 = 0;
var SPARKLE_PAD_SEQ_2 = 0;
var SPARKLE_PAD_SEQ_3 = 0;
var SPARKLE_PAD_SEQ_4 = 0;
var SPARKLE_PAD_SEQ_5 = 0;
var SPARKLE_PAD_SEQ_6 = 0;
var SPARKLE_PAD_SEQ_7 = 0;
var SPARKLE_PAD_SEQ_8 = 0;
var SPARKLE_PAD_SEQ_9 = 0;
var SPARKLE_PAD_SEQ_10 = 0;
var SPARKLE_PAD_SEQ_11 = 0;
var SPARKLE_PAD_SEQ_12 = 0;
var SPARKLE_PAD_SEQ_13 = 0;
var SPARKLE_PAD_SEQ_14 = 0;
var SPARKLE_PAD_SEQ_15 = 0;
var SPARKLE_PAD_SEQ_16 = 0;

var SPARKLE_BUTTONS_ALL = [];

function Sparkle (output, input) {
    AbstractControlSurface.call(this, output, input, SPARKLE_BUTTONS_ALL);
}

Sparkle.prototype = new AbstractControlSurface ();


Sparkle.prototype.sendMidiEvent = function (status, data1, data2)
{
    this.noteInput.sendRawMidiEvent (status, data1, data2);

};


Sparkle.prototype.handleNotes = function (index,pressed,note,velocity){

    println("Note:" + index + ":" + pressed + ":" + note + ":" + velocity);

};


Sparkle.prototype.handleEvent = function (cc, value){

    switch(cc){

        case SPARKLE_TRANSPORT_REC:
            Transport.record();
//            this.surface.transport.record();
            println("record");
            break;

        case SPARKLE_TRANSPORT_STOP:
//            this.surface.transport.stop();
            println("stop");
            break;

        case SPARKLE_TRANSPORT_PLAY:
//            this.surface.transport.togglePlay();
            println("toggle play");
            break;

        case SPARKLE_TRANSPORT_REWIND:
 //           Transport.rewind();
            println("rewind");
            break;

        case SPARKLE_TRANSPORT_FF:
 //           Transport.fastForward();
            println("ffwd");
            break;

        default:

            println("CC:" + cc + ":" + value);
            break;

    }



};

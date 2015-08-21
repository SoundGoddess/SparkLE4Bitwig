/**
 * Created by SoundGoddess (http://HathorsLove.com) on 8/20/2015.
 * Licensed under LGPLv3 - http://www.gnu.org/licenses/lgpl-3.0.txt
 */

loadAPI(1);

load ("framework/ClassLoader.js");
load ("Spark/midiinput.js");
load ("Spark/sparkle.js");
load ("Spark/Controller.js");

host.defineController ("Arturia", "SparkLE4Bitwig", "1.02", "B66809D0-479C-11E5-B970-0800200C9A66", "SoundGoddess");

host.defineMidiPorts (1, 1);


createDeviceDiscoveryPairs ("SparkLE");


function init () {
    controller = new Controller ();
    transport = host.createTransport();

// this works but is a hack
//    host.getMidiInPort(0).setMidiCallback(onMidi);

    println ("Initialized.");
}


// at least this prints stuff out
function onMidi(status, data1, data2){

    println("status:" + status + ":" + data1 + ":" + data2);

}


function exit () {

    if (controller)
        controller.shutdown ();

    println ("Shut Down.");
}

function flush () {

    if (controller)
        controller.flush ();

}

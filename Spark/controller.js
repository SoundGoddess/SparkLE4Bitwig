/**
 * Created by hathor on 8/20/2015.
 */


function Controller () {

    var output = new MidiOutput();
    var input = new SparkleMidiInput();

    this.surface = new Sparkle(output, input);

}

Controller.prototype = new AbstractController ();
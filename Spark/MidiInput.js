/**
 * Created by hathor on 8/20/2015.
 */

function SparkleMidiInput ()
{
    MidiInput.call (this);
}

SparkleMidiInput.prototype = new MidiInput ();

SparkleMidiInput.prototype.createNoteInput = function (){

    var noteInput = this.port.createNoteInput ("SparkLE",
        "80????",  // Note off
        "90????",  // Note on
        "A0????"); // Poly Aftertouch
    noteInput.setShouldConsumeEvents (false);
    return noteInput;

};

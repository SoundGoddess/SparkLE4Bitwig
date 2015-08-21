/**
 * Created by SoundGoddess (http://HathorsLove.com) on 8/20/2015.
 * Licensed under LGPLv3 - http://www.gnu.org/licenses/lgpl-3.0.txt
 */

loadAPI(1);

load ("Framework4Bitwig/ClassLoader.js");

host.defineController ("Arturia", "SparkLE4Bitwig", "1.02", "B66809D0-479C-11E5-B970-0800200C9A66", "SoundGoddess");

host.defineMidiPorts (1, 1);

createDeviceDiscoveryPairs ("SparkLE");


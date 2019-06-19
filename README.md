# JS-inheretence-example
This file, contains an example inheritance and composition in JS. As well as some tests.
Class descriptions are as follows:
<p><b> Page-</b> is meant to contain a single page of information, which can contain an unlimited amount of symbols.</p>
<p><b>SimpleNotepad-</b> is made of several pages and allows the user to call the methods for certain pages.</p>
<p><b>SecuredNotepad-</b> inherints SimpleNotepad (extends) and adds an extra password field, and all previous methods are now accecable by providing a correct password</p>
<p><b>ElectronicSecuredNotepad-</b> inherints SecuredNotepad (extends). This class represents a device, and expands the previous class by adding a state of the device: on and off. For an operation to succeed the device must be ON, and correct password must be provided.</p>

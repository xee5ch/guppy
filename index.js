$('document').ready(function() {
    $('#xml_btn').on('click', function() {
        createText('xml');
    });
    $('#text_btn').on('click', function() {
        createText('text');
    });
    $('#latex_btn').on('click', function() {
        createText('latex');
    });
    $('#clear_btn').on('click', function() {
        $('#stuff')[0].innerHTML = 'Press buttons to see text renderings of the editor content: ';
    });

    Guppy.guppy_init("src/transform.xsl", "src/symbols.json");
    var g1 = new Guppy("guppy1", {
        'right_callback': function() {},
        'left_callback': function() {},
        'done_callback': function() {
            createText('text');
        }
    });
});

function createText(texttype) {
    //clear screen
    $('#stuff')[0].innerHTML = texttype.toUpperCase() + ": ";
    //display text
    $('#stuff')[0].appendChild(document.createElement('br'));
    $('#stuff')[0].appendChild(document.createTextNode(Guppy.instances.guppy1.get_content(texttype)));
}

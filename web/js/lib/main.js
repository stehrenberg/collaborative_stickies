/**
 * Created by Steff on 18/02/16.
 */

$(window).on("load", function() {

    var stickiesBoard = $("#stickies-board");

    //registers event handler on element with respective id
    stickiesBoard.on("click", function(event) {

        var clickTarget = $(event.target);
        if(clickTarget.hasClass("sticky-note")) {
            event.stopPropagation();
            clickTarget.text("Been clicked - hello!");
            return;
        }

        // equals document.createElement() in plain JS... more or less:
        /*
        var newDiv = document.createElement("div");
        newDiv.className = "sticky-note";
         */
        var newSticky = $("<div class='sticky-note'>");
        newSticky.css("left", event.offsetX);
        newSticky.css("top", event.offsetY);
        stickiesBoard.append(newSticky);
    });
});

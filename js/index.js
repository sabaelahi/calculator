$(document).ready(function () {
    var result = "0";
    var current = "0";
    var opr = null;
    var history = "";
    var prevState;

    $(".screen2").text(result);
    $(".number").click(function (e) {
        var buttonclick = $(this).text();

        if (buttonclick === "0" && current === "0") {
            current = buttonclick
        } else if (buttonclick !== "0" && current === "0") {
            current = ''
            current = current + buttonclick;
            $(".screen2").text(current)
        } else {
            current = current + buttonclick;
            $(".screen2").text(current)
        }
    });

    $(".opr").click(function (e) {
        opr = $(this).text();
        prevState = current;
        console.log(prevState);
        history += prevState + opr;
        
            if (current = "" && opr === "=" || $(".screen1").text() === "" && opr === "=") {
                current = prevState;
                console.log("test1");
                history = ""
            } else if (opr === "=") {
                $(".screen1").text("");
                $(".screen2").text(eval(history.slice(0, -1)));
                current = eval(history.slice(0, -1));
                history = "";
            } else {
                $(".screen1").text(history);
                $(".screen2").text(eval(history.slice(0, -1)));
                current = "";
            }
        
    });
    $(".percent").click(function (e) { 
        current = current / 100;
        $(".screen2").text(current);
        
    });
    $(".neg").click(function (e) {
        current = current * -1;
        $(".screen2").text(current);
    });
    $(".C").click(function (e) {
        result = "0";
        current = "0";
        opr = null;

        $(".screen2").text("0");
        $(".screen1").text("");
    })
    $(".dot").click(function (e) {
        current += ".";
        $(".screen2").text(current);
    });

    $(".CE").click(function (e) {
        current = "0";
        $(".screen2").text(current);

    });
    $(".remove").click(function (e) {
        console.log(typeof(current));
        current = current.toString();
        if (current.length > 1) {
            current = current.substring(0, current.length - 1);
            $(".screen2").text(current);
        } else if(current.length = 1) {
            current = "0";
            $(".screen2").text(current);
        }else{
            return;
        }
    })
    $(".x").click(function (e) {
        current = 1 / current;
        $(".screen2").text(current);
    });


});
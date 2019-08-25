$(document).ready(function() {
  $("#add-skills").click(function() {
    $("#skills-window").toggle();
  });

  $(".skills__close, .skills__reset").click(function() {
    $("#skills-window").hide();
  });

  $(".list__item").click(function(e) {
    let attribute = $(this).attr("rel");
    $(".chat-window").hide();
    $("#chat-" + attribute).show();

    let className = "list__item--active";
    $(this)
      .toggleClass(className)
      .siblings()
      .removeClass(className);

    $(this).removeClass("list__item--bold");
    $(this)
      .find(".list__item--circle")
      .remove();

    e.preventDefault();
  });

  $("#demo").btnSwitch({
    Theme: "Light" // or iOS
  });

});

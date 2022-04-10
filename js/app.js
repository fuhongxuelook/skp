(function () {
  window.onload = () => {
    $(".app_menu li").click(function () {
      const index = $(this).attr("data");
      $(".app_menu li").removeClass("fold");
      $(this).addClass("fold");
    });
    let text = "Stake";
    let sText = 'stake';
    $(".box1_button button").click(function () {
      $(".box1_button button").removeClass("active");
      $(this).addClass("active");
      text = $(this).text();
      sText = $(this).text().toLowerCase()
      $(".dText").text(sText);
    });
    $(".submit_input input").focus(function () {
      $(".submit_input").css("border-color", "rgb(161, 149, 238)");
      $(".box1_money .l").css("color", "rgb(161, 149, 238)");
    });
    $(".submit_input input").blur(function () {
      $(".submit_input").css("border-color", "rgb(219, 140, 155)");
      $(".box1_money .l").css("color", "rgb(219, 140, 155)");
      $(".error").text(`Not AVAX enough.`);
    });

    $(".submit_input input").bind("input propertychange", function () {
      $(".submit_input").css("border-color", "rgb(219, 140, 155)");
      $(".box1_money .l").css("color", "rgb(219, 140, 155)");
      $(".error").text(`Not enough AVAX amount to ${sText}`);
    });
  };
})();

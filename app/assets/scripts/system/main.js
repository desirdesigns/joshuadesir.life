(function ($) {
  $("#tsparticles")
    .particles()
    .init({
      background: {
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
      fullScreen: {
        enable: true,
        zIndex: 1,
      },
      interactivity: {
        events: {
          onClick: {
            mode: "push",
          },
          onHover: {
            mode: "repulse",
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          grab: {
            distance: 400,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: {
            value: "#ffffff",
          },
          distance: 150,
          opacity: 0.4,
        },
        move: {
          attract: {
            rotate: {
              x: 600,
              y: 1200,
            },
          },
          enable: true,
          outModes: {
            default: "destroy",
            bottom: "destroy",
            left: "destroy",
            right: "destroy",
            top: "destroy",
          },
          speed: 5,
        },
        number: {
          density: {
            enable: true,
          },
          value: 0,
        },
        opacity: {
          animation: {
            speed: 3,
            minimumValue: 0.1,
          },
        },
        size: {
          value: {
            min: 0.1,
            max: 20,
          },
          animation: {
            enable: true,
            sync: true,
            destroy: "max",
            minimumValue: 0.1,
            startValue: "min",
          },
        },
      },
      emitters: {
        autoPlay: true,
        life: {},
        rate: {
          quantity: 2,
          delay: 0.1,
        },
        size: {
          mode: "percent",
          height: 0,
          width: 100,
        },
        direction: "top",
        position: {
          x: 50,
          y: 100,
        },
      },
    });

  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $banner = $("#banner");


  // Breakpoints.
  breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)",
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Header.
  if ($banner.length > 0 && $header.hasClass("alt")) {
    $window.on("resize", function () {
      $window.trigger("scroll");
    });

    $banner.scrollex({
      bottom: $header.outerHeight(),
      terminate: function () {
        $header.removeClass("alt");
      },
      enter: function () {
        $header.addClass("alt");
      },
      leave: function () {
        $header.removeClass("alt");
      },
    });
  }

  // Menu.
  var $menu = $("#menu");

  $menu._locked = false;

  $menu._lock = function () {
    if ($menu._locked) return false;

    $menu._locked = true;

    window.setTimeout(function () {
      $menu._locked = false;
    }, 350);

    return true;
  };

  $menu._show = function () {
    if ($menu._lock()) $body.addClass("is-menu-visible");
  };

  $menu._hide = function () {
    if ($menu._lock()) $body.removeClass("is-menu-visible");
  };

  $menu._toggle = function () {
    if ($menu._lock()) $body.toggleClass("is-menu-visible");
  };

  $menu
    .appendTo($body)
    .on("click", function (event) {
      event.stopPropagation();

      // Hide.
      $menu._hide();
    })
    .find(".inner")
    .on("click", ".close", function (event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();

      // Hide.
      $menu._hide();
    })
    .on("click", function (event) {
      event.stopPropagation();
    })
    .on("click", "a", function (event) {
      var href = $(this).attr("href");

      event.preventDefault();
      event.stopPropagation();

      // Hide.
      $menu._hide();

      // Redirect.
      window.setTimeout(function () {
        window.location.href = href;
      }, 350);
    });

  $body
    .on("click", 'a[href="#menu"]', function (event) {
      event.stopPropagation();
      event.preventDefault();

      // Toggle.
      $menu._toggle();
    })
    .on("keydown", function (event) {
      // Hide on escape.
      if (event.keyCode == 27) $menu._hide();
    });
})(jQuery);

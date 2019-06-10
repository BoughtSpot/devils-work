var Tabs = {

  init: function () {
    this.bindUIfunctions();
    this.pageLoadCorrectTab();
  },

  bindUIfunctions: function () {

    // Delegation
    $(document)
      .on("click", ".transformer-tabs a[href^='#']:not('.active')", function (event) {
        Tabs.changeTab(this.hash);
        event.preventDefault();
      })
      .on("click", ".transformer-tabs a.active", function (event) {
        Tabs.toggleMobileMenu(event, this);
        event.preventDefault();
      });

  },

  changeTab: function (hash) {

    var anchor = $("[href=" + hash + "]");
    var div = $(hash);

    anchor.addClass("active").parent().siblings().find("a").removeClass("active");

    div.addClass("active").siblings().removeClass("active");

    anchor.closest("ul").removeClass("open");

  },

  pageLoadCorrectTab: function () {
    this.changeTab(document.location.hash);
  },

  toggleMobileMenu: function (event, el) {
    $(el).closest("ul").toggleClass("open");
  }

}

Tabs.init();
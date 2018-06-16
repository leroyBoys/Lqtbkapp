module.exports = {

  sortNow: function (e) {
    if (this.data.shownavindex == e.currentTarget.dataset.nav) {
      return
    }

    this.setData({
      shownavindex: e.currentTarget.dataset.nav
    })

    if (e.currentTarget.dataset.nav == 4) {
      return
    }

  },

  hidebg: function () {
    this.setData({
      shownavindex: 0
    })
  },
  youhuiclick: function (e) {
    e.currentTarget.dataset.name;

  },
  priceChange: function (e) {-
    e.currentTarget.dataset.name;
    console.log(e.currentTarget.dataset);
  },
  formSubmit: function (e) {
    e.currentTarget.dataset.name;
    console.log(e.detail);
  }

}
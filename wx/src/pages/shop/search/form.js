module.exports = {

  sortNow: function (e) {
    let targetIndex = 0;
    if (this.data.shownavindex != e.currentTarget.dataset.nav) {
      targetIndex = e.currentTarget.dataset.nav;
    }

    this.setData({
      shownavindex: targetIndex
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
  bindscroll:function(e){
    console.log(e);
    if (e.detail.scrollTop>50){
      this.hideForm();
    }else{
      this.showForm();
    }
    if (this.data.shownavindex != 4){
      return
    }
    this.setData({
      shownavindex: 0
    })

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
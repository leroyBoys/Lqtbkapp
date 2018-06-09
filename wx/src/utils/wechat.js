function login (_suc,_fail) {
  return new Promise((resolve, reject) => {
    wx.login({ success: resolve, fail: reject })
  }).then(_suc).catch(_fail);
}

function getUserInfo () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject })
  })
}

module.exports = { login, getUserInfo }

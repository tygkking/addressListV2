//peoplePage.js
Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        //SearchBar
        inputShowed: false,
        inputVal: "",
        //navbar
        tabs: ["通讯录", "消息"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        peopleShow: 1,
        releaseFocus: false,
        messageVal:"",
        msgName:"Tom",
        msgCount: 0,
    },

//Search Bar
    showInput: function () {
        this.setData({
            inputShowed: true,
            //peopleShow: 0
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false,
            peopleShow: 1
        });
    },

    clearInput: function () {
        this.setData({
            inputVal: "",
            peopleShow:true,
        });
    },

    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value,
        });
        if(this.data.inputVal==""){
            this.setData({ peopleShow: 1 });
        }
        else{
            this.setData({ peopleShow: 0 });
        }
    },

//navbar
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id,
            releaseFocus:false,
        });
    },

    clickView: function (e) {
        if(this.data.releaseFocus==true){
            this.setData({
                releaseFocus:false,
                messageVal:""
            });
        }
    },

//Reply
    bindReply: function (e) {
        this.setData({
            releaseFocus: true,
            messageVal:""

        })
    },

    bindSend: function (e) {
        this.setData({
            releaseFocus: false,
            messageVal:"",
            msgCount:this.data.msgCount+1,
        })
    },

    bindCancel: function (e) {
        this.setData({
            releaseFocus: false,
            messageVal:""
        })
    },

    onPullDownRefresh: function () {
      wx.showNavigationBarLoading() //在标题栏中显示加载
      // wx.request({
      //     url: 'https://URL',
      //     data: {},
      //     method: 'GET',
      //     // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      //     // header: {}, // 设置请求的 header
      //     success: function (res) {
      //         // success
      //     },
      //     fail: function () {
      //         // fail
      //     },
      //     complete: function () {
      //         // complete
      //         wx.hideNavigationBarLoading() //完成停止加载
      //         wx.stopPullDownRefresh() //停止下拉刷新
      //     },
      // })
      //模拟加载
      setTimeout(function () {
        // complete
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
      }, 1500);
    },
  //sendMessage
    sendMessage: function() {
      wx.navigateTo({
        url: '/pages/sendMessage/sendMessage',
      })
    },
})
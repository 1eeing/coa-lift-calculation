// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    bjl: 100,
    bjsh: 200,
    sq: 300,
    shts: 0,
    jnsh: 0,
    boss: 0,
    kzyc: 0,

    bjlAfter: 100,
    bjshAfter: 200,
    sqAfter: 300,
    shtsAfter: 0,
    jnshAfter: 0,
    bossAfter: 0,
    kzycAfter: 0,

    res: '',
  },
  attached() {
    const _bjl = wx.getStorageSync('bjl')
    const _bjsh = wx.getStorageSync('bjsh')
    const _sq = wx.getStorageSync('sq')
    const _shts = wx.getStorageSync('shts')
    const _jnsh = wx.getStorageSync('jnsh')
    const _boss = wx.getStorageSync('boss')
    const _kzyc = wx.getStorageSync('kzyc')

    const params: any = {}

    if (_bjl) {
      params.bjl = Number(_bjl)
    }
    if (_bjsh) {
      params.bjsh = Number(_bjsh)
    }
    if (_sq) {
      params.sq = Number(_sq)
    }
    if (_shts) {
      params.shts = Number(_shts)
    }
    if (_jnsh) {
      params.jnsh = Number(_jnsh)
    }
    if (_boss) {
      params.boss = Number(_boss)
    }
    if (_kzyc) {
      params.kzyc = Number(_kzyc)
    }
    this.setData(params)
  },
  methods: {
    bindTopdown() {
      this.setData({
        bjlAfter: this.data.bjl,
        bjshAfter: this.data.bjsh,
        sqAfter: this.data.sq,
        shtsAfter: this.data.shts,
        jnshAfter: this.data.jnsh,
        bossAfter: this.data.boss,
        kzycAfter: this.data.kzyc,
      })
    },
    bindBottomup() {
      this.setData({
        bjl: this.data.bjlAfter,
        bjsh: this.data.bjshAfter,
        sq: this.data.sqAfter,
        shts: this.data.shtsAfter,
        jnsh: this.data.jnshAfter,
        boss: this.data.bossAfter,
        kzyc: this.data.kzycAfter,
      })
    },
    onOk() {
      const _bjl = (Number(this.data.bjlAfter) / 100 + 1) / (Number(this.data.bjl) / 100 + 1) - 1
      const _bjsh = (Number(this.data.bjshAfter) / 100 + 1) / (Number(this.data.bjsh) / 100 + 1) - 1
      const _sq = (Number(this.data.sqAfter) * 0.4555 / 100 + 1) / (Number(this.data.sq) * 0.4555 / 100 + 1) - 1
      const _shts = (Number(this.data.shtsAfter) / 100 + 1) / (Number(this.data.shts) / 100 + 1) -1
      const _jnsh = (Number(this.data.jnshAfter) / 100 + 1) / (Number(this.data.jnsh) / 100 + 1) -1
      const _boss = (Number(this.data.bossAfter) / 100 + 1) / (Number(this.data.boss) / 100 + 1) -1
      const _kzyc = (Number(this.data.kzycAfter) / 100 + 1) / (Number(this.data.kzyc) / 100 + 1) -1

      const res = ((_bjl + _bjsh + _sq + _shts + _jnsh + _boss + _kzyc) * 100).toFixed(2)
      this.setData({res: res})

      wx.setStorageSync('bjl', this.data.bjl)
      wx.setStorageSync('bjsh', this.data.bjsh)
      wx.setStorageSync('sq', this.data.sq)
      wx.setStorageSync('shts', this.data.shts)
      wx.setStorageSync('jnsh', this.data.jnsh)
      wx.setStorageSync('boss', this.data.boss)
      wx.setStorageSync('kzyc', this.data.kzyc)
    },
    onInputChange(e: any) {
      const key = e.target.id;
      this.setData({
        [key]: e.detail.value
      })
    },
  },
})

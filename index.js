const path                  = require('path')
    , AppChannel            = require('/Users/stas/Projects/node-mermaid/store/app-channel')()
    , AppTransportChannel   = require('/Users/stas/Projects/node-mermaid/store/app-transport-channel')()

AppChannel.on('connect', () => {
  AppTransportChannel.on('connect', () => {
    AppChannel.on('status', data => {
      AppTransportChannel.writeData({
        type: 'status',
        data
      })
    })

    AppChannel.on('reload', () => {
      AppTransportChannel.writeData({
        type: 'reload'
      })
    })
  })
})

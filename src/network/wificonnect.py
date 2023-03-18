import network


sta_if = network.WLAN(network.STA_IF)
if not sta_if.isconnected():
    print('connecting to network...')
    sta_if.active(True)
    sta_if.connect('MECAP-WPA2', '8b140b20e7')
    while not sta_if.isconnected():
        pass
print('network config:', sta_if.ifconfig())

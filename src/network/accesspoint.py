import network


ap_if = network.WLAN(network.AP_IF)
ap_if.active(True)
ap_if.config(essid='esp-ap', password='244466666')
print('network config:', ap_if.ifconfig())

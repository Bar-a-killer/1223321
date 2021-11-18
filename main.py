蚊香 = 0
def 無黑線():
    global 蚊香
    蚊香 = 0
    while mooncar.ultrasonic_sensor() != 5:
        mooncar.moon_car_lr(90, 蚊香)
        basic.pause(100)
        if 蚊香 > 12:
            蚊香 += 5
        else:
            蚊香 = 12

def on_forever():
    while mooncar.ultrasonic_sensor() < 5:
        無黑線()
basic.forever(on_forever)

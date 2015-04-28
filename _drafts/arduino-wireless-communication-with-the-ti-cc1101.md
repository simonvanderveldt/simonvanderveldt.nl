---
tags: iot, arduino
title: Arduino wireless communication with the TI CC1101
---

Using the awesome [panstamp CC1101 library](https://code.google.com/p/panstamp/wiki/ArduinoLibrary) created by [Daniel Berenguer](https://twitter.com/panstamp).
To connect the CC1101 with the Arduino the SPI Bus is used, the 4 SPI pins on the Arduino are pin 13 (SCK), 12 (MISO), 11 (MOSI) and 10 (SS). Furthermore the panstamp library uses Arduino pin 2 to connect to the GD00 pin of the CC1101. These pins are all detailed in the [spi.h](https://code.google.com/p/panstamp/source/browse/trunk/arduino/libraries/panstamp/spi.h) file of the panstamp library.

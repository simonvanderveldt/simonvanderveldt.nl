---
layout: post
title:  "Arduino wireless communication with the TI CC1101"
categories: arduino
tags: 
---

Using the awesome [panstamp CC1101 library](https://code.google.com/p/panstamp/wiki/ArduinoLibrary) created by [Daniel Berenguer](https://twitter.com/panstamp).
To connect the CC1101 with the Arduino the SPI Bus is used, the 4 SPI pins on the Arduino are pin 13 (SCK), 12 (MISO), 11 (MOSI) and 10 (SS). Furthermore the panstamp library uses Arduino pin 2 to connect to the GD00 pin of the CC1101. These pins are all detailed in the spi.h file of the panstamp library (https://code.google.com/p/panstamp/source/browse/trunk/arduino/libraries/panstamp/spi.h).

<--more-->

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum fermentum volutpat. Suspendisse hendrerit ullamcorper cursus. Nam at turpis mattis, bibendum mi sit amet, pulvinar elit. Aliquam quis ipsum vehicula, congue elit sed, fringilla dolor. Cras in eros tincidunt libero bibendum bibendum. In ultricies vitae elit sed rutrum. Integer tincidunt consequat leo, a faucibus elit sollicitudin non. Morbi sed ligula at mi vehicula eleifend vel id sem. Etiam iaculis aliquet feugiat.

Nam rutrum orci eros, dictum pharetra quam tincidunt quis. Donec euismod aliquet dolor sed lacinia. Donec sagittis, nisi ac aliquet facilisis, dui eros sagittis ante, eu aliquet arcu neque vehicula metus. Ut nec semper magna, sed faucibus elit. Sed lacinia congue laoreet. Ut dictum hendrerit est, eget volutpat ligula lobortis at. Integer iaculis felis et mi tempor tristique ac quis arcu. Sed vitae porta nisi. Nulla facilisi. Duis luctus nulla nec metus adipiscing, ut congue nibh molestie. Mauris cursus fringilla purus nec tempor. Ut non dapibus tellus, a scelerisque purus. Vestibulum dictum neque elit, ac convallis risus eleifend et. Donec gravida orci vitae congue cursus.

Donec congue, tortor non dapibus tincidunt, ligula enim egestas enim, a auctor lacus massa vel tortor. Mauris sodales, felis quis consectetur adipiscing, turpis arcu bibendum tellus, eget mollis purus eros vel mi. Nullam tempus dui sit amet ipsum feugiat sagittis. Sed ligula lorem, fermentum ut fermentum non, varius a tellus. Mauris blandit rhoncus lacus, et pharetra nulla pretium vel. Vestibulum tincidunt velit non iaculis tincidunt. In non neque in nibh aliquet vulputate. In a dolor dignissim, gravida nunc nec, vestibulum risus. Phasellus ut ante pharetra velit ultrices varius non eu leo. Nulla rhoncus vehicula pellentesque.

Nunc eleifend sem id gravida pharetra. Nulla eget tellus quis libero congue condimentum a quis dui. Proin sit amet sem vel neque imperdiet porta nec pellentesque enim. Nam vulputate id quam a elementum. Integer volutpat eu ante sed vulputate. Vestibulum fringilla elit sed tellus imperdiet, mattis iaculis tortor condimentum. Sed quis feugiat massa, quis molestie sem. Morbi tempor ultrices sapien, sed consectetur augue auctor eu. Praesent pretium ornare placerat. Pellentesque facilisis eu odio eget vulputate.

Ut sed pretium dolor, nec eleifend magna. Proin placerat, turpis vel eleifend accumsan, massa tortor fermentum tellus, ac tincidunt tortor ante a lorem. Sed condimentum magna ac bibendum consectetur. Duis bibendum erat a ligula pharetra aliquam. Praesent ac nisl sed augue interdum fermentum. Aliquam placerat, arcu eu faucibus vehicula, nisi dui commodo felis, a porta nisi magna mattis sem. Nam lacinia euismod ante, vitae accumsan purus tempus ac.

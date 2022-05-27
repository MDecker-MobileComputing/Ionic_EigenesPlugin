# Simple Capacitor plugin #

This repository contains the code for a simple Capacitor, see folder [helferlein](helferlein).
Further, the repository also contains a Ionic/Angular app that demonstrates the usage of this plugin, see folder [plugintest](plugintest).

The plugin contains two methods, see also [definitions.ts](helferlein/src/definitions.ts):
* `holeUptime()`: Gets value of current [uptime](https://en.wikipedia.org/wiki/Uptime) as string containing hours and minutes; only implemented for Android.
* `loggeNachricht()`: Writes log message, implemented for Android and Web. For Android different log levels (Debug till Error) are supported.

<br>

----
## License ##

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License)
for the files in this repository.


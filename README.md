# Simple Capacitor plugin #

This repository contains the code for a simple Capacitor plugin called "helferlein", see [this folder](helferlein).
Further, the repository also contains a Ionic/Angular app that demonstrates the usage of this plugin, see folder [plugintest](plugintest).

The plugin contains two methods, see also [definitions.ts](helferlein/src/definitions.ts):
* `holeUptime()`: Gets value of current [uptime](https://en.wikipedia.org/wiki/Uptime) as string containing hours and minutes; only implemented for platform "Android".
* `loggeNachricht()`: Writes log message, implemented for platforms "Web" and "Android", whereas for the latter different log levels (Debug till Error) are supported.

<br>

----
## Usage ##

In [the folder for the plugin](helferlein) the following commands have to be called:
* `npm install`
* `npm run build` 

The latter has also to be called after each change of the plugin implementation 

<br>

In [the folder for the Ionic app](plugintest) the following commands have to be called:
* `npm install`
* ...

<br>

----
## License ##

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License)
for the files in this repository.

<br>

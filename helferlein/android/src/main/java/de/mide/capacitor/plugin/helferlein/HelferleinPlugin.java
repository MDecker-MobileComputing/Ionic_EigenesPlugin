package de.mide.capacitor.plugin.helferlein;

import android.os.SystemClock;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Helferlein")
public class HelferleinPlugin extends Plugin {

    private Helferlein implementation = new Helferlein();

    @PluginMethod
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", implementation.echo(value));
        call.resolve(ret);
    }

    @PluginMethod
    public void holeUptime(PluginCall call) {

        long uptimeSekunden = SystemClock.uptimeMillis() / 1000;

        long minuten = uptimeSekunden / 60;
        long stunden = minuten / 60;
        long minutenRest = minuten - stunden*60;

        String ergebnisStr = stunden + "h " + minutenRest + "m";

        JSObject ret = new JSObject();
        ret.put("value", ergebnisStr);
        call.resolve(ret);
    }

    @PluginMethod
    public void loggeNachricht(PluginCall call) {

        final String tag4logging = "bsp-plugin";

        String level   = call.getString("loglevel");
        String message = call.getString("nachricht");

        String logString = "Log-Nachricht: " + message;

        switch (level) {

            case "VERBOSE": Log.v(tag4logging, logString ); break;
            case "DEBUG"  : Log.d(tag4logging, logString ); break;
            case "INFO"   : Log.i(tag4logging, logString ); break;
            case "WARN"   : Log.w(tag4logging, logString ); break;
            case "ERROR"  : Log.e(tag4logging, logString ); break;
            default:
                Log.w(tag4logging, "Nachricht für unbekanntes Log-Level \"" + level + "\": " + logString);
        }
    }    
}

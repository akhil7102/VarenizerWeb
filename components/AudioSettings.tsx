import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";
import { Mic, Volume2, MicOff, VolumeX } from "lucide-react";
import { useState } from "react";

export function AudioSettings() {
  const [micEnabled, setMicEnabled] = useState(true);
  const [systemAudioEnabled, setSystemAudioEnabled] = useState(true);
  const [micVolume, setMicVolume] = useState([75]);
  const [systemVolume, setSystemVolume] = useState([85]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Audio Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Microphone Settings */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="mic-enabled" className="flex items-center gap-2">
              {micEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              Microphone
            </Label>
            <Switch
              id="mic-enabled"
              checked={micEnabled}
              onCheckedChange={setMicEnabled}
            />
          </div>
          
          {micEnabled && (
            <div className="space-y-2 pl-6">
              <Select defaultValue="default">
                <SelectTrigger>
                  <SelectValue placeholder="Select microphone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default Microphone</SelectItem>
                  <SelectItem value="headset">Headset Microphone</SelectItem>
                  <SelectItem value="webcam">Webcam Microphone</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="space-y-2">
                <Label className="text-sm">Volume: {micVolume[0]}%</Label>
                <Slider
                  value={micVolume}
                  onValueChange={setMicVolume}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* System Audio Settings */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="system-audio" className="flex items-center gap-2">
              {systemAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              System Audio
            </Label>
            <Switch
              id="system-audio"
              checked={systemAudioEnabled}
              onCheckedChange={setSystemAudioEnabled}
            />
          </div>
          
          {systemAudioEnabled && (
            <div className="space-y-2 pl-6">
              <div className="space-y-2">
                <Label className="text-sm">Volume: {systemVolume[0]}%</Label>
                <Slider
                  value={systemVolume}
                  onValueChange={setSystemVolume}
                  max={100}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
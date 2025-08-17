import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Circle, Square, Pause, Plus, Volume2, VolumeX, Mic, MicOff, Trash2, Copy, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface BottomControlPanelProps {
  isRecording: boolean;
  isPaused: boolean;
  onStart: () => void;
  onStop: () => void;
  onPause: () => void;
  duration: string;
}

export function BottomControlPanel({
  isRecording,
  isPaused,
  onStart,
  onStop,
  onPause,
  duration
}: BottomControlPanelProps) {
  const [desktopVolume, setDesktopVolume] = useState([75]);
  const [micVolume, setMicVolume] = useState([50]);
  const [desktopMuted, setDesktopMuted] = useState(false);
  const [micMuted, setMicMuted] = useState(true);

  return (
    <div className="h-64 bg-slate-800 border-t border-slate-700 p-4">
      <div className="grid grid-cols-4 gap-4 h-full">
        {/* Controls */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-slate-200 mb-3">Controls</h3>
          <div className="space-y-2">
            {!isRecording ? (
              <>
                <Button 
                  onClick={onStart}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  size="sm"
                >
                  <Circle className="w-4 h-4 mr-2 fill-current" />
                  Start Recording
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    disabled
                    variant="outline"
                    className="bg-slate-800 border-slate-600 text-slate-500 cursor-not-allowed"
                    size="sm"
                  >
                    <Pause className="w-4 h-4 mr-1" />
                    Pause
                  </Button>
                  <Button
                    disabled
                    className="bg-slate-800 text-slate-500 cursor-not-allowed"
                    size="sm"
                  >
                    <Square className="w-4 h-4 mr-1" />
                    Stop
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm bg-slate-800 rounded p-2 border border-red-600/30">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="font-mono text-red-400">{duration}</span>
                  <span className="text-red-400">
                    {isPaused ? "PAUSED" : "RECORDING"}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    onClick={onPause}
                    variant="outline"
                    className="bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600"
                    size="sm"
                  >
                    {isPaused ? (
                      <>
                        <Circle className="w-4 h-4 mr-1 fill-current text-green-400" />
                        Resume
                      </>
                    ) : (
                      <>
                        <Pause className="w-4 h-4 mr-1 text-yellow-400" />
                        Pause
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={onStop}
                    className="bg-red-600 hover:bg-red-700 text-white border border-red-500"
                    size="sm"
                  >
                    <Square className="w-4 h-4 mr-1" />
                    Stop
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scenes */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-200">Scenes</h3>
          </div>
          <div className="bg-slate-900 rounded border border-slate-600 p-2 h-32">
            <div className="bg-slate-700 rounded p-2 text-sm text-slate-200 hover:bg-slate-600 cursor-pointer">
              Default Scene
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-1 bg-slate-700 rounded p-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                  <Plus className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Add Scene</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Remove Scene</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                  <Copy className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Duplicate Scene</TooltipContent>
            </Tooltip>
            
            <div className="flex flex-col">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-3 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                    <ChevronUp className="w-3 h-2" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Move Up</TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-3 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                    <ChevronDown className="w-3 h-2" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Move Down</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-200">Sources</h3>
          </div>
          <div className="bg-slate-900 rounded border border-slate-600 p-2 h-32">
            <div className="text-center text-slate-400 text-sm py-8">
              No sources added
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-1 bg-slate-700 rounded p-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                  <Plus className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Add Source</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Remove Source</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                  <Copy className="w-3 h-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Duplicate Source</TooltipContent>
            </Tooltip>
            
            <div className="flex flex-col">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-3 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                    <ChevronUp className="w-3 h-2" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Move Up</TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-3 w-7 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-600">
                    <ChevronDown className="w-3 h-2" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Move Down</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Audio Mixer */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-slate-200 mb-3">Audio Mixer</h3>
          <div className="space-y-4">
            {/* Desktop Audio */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-200">Desktop Audio</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDesktopMuted(!desktopMuted)}
                  className="text-slate-400 hover:text-slate-200 p-1"
                >
                  {desktopMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
              </div>
              
              {/* Volume Bars */}
              <div className="flex gap-1 h-16 items-end">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className={`w-1 ${
                      i < (desktopVolume[0] / 100) * 20
                        ? i < 14 ? 'bg-green-500' : i < 18 ? 'bg-yellow-500' : 'bg-red-500'
                        : 'bg-slate-700'
                    }`}
                    style={{ height: `${(i + 1) * 3}px` }}
                  />
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">-∞</span>
                <Slider
                  value={desktopVolume}
                  onValueChange={setDesktopVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <span className="text-xs text-slate-400">0</span>
              </div>
            </div>

            {/* Microphone */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Mic/Aux</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMicMuted(!micMuted)}
                  className="text-slate-400 hover:text-slate-200 p-1"
                >
                  {micMuted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">-∞</span>
                <Slider
                  value={micVolume}
                  onValueChange={setMicVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                  disabled={micMuted}
                />
                <span className="text-xs text-slate-400">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Button } from "./ui/button";
import { Play, Square, Pause, Circle } from "lucide-react";
import { useState } from "react";

interface RecordingControlsProps {
  isRecording: boolean;
  isPaused: boolean;
  onStart: () => void;
  onStop: () => void;
  onPause: () => void;
  duration: string;
}

export function RecordingControls({
  isRecording,
  isPaused,
  onStart,
  onStop,
  onPause,
  duration
}: RecordingControlsProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-card rounded-lg border">
      <div className="flex items-center gap-2">
        {!isRecording ? (
          <Button 
            onClick={onStart}
            className="bg-red-500 hover:bg-red-600 text-white"
            size="lg"
          >
            <Circle className="w-4 h-4 mr-2 fill-current" />
            Start Recording
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button
              onClick={onPause}
              variant="outline"
              size="lg"
            >
              {isPaused ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Resume
                </>
              ) : (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause
                </>
              )}
            </Button>
            <Button
              onClick={onStop}
              variant="destructive"
              size="lg"
            >
              <Square className="w-4 h-4 mr-2" />
              Stop
            </Button>
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        {isRecording && (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-500 font-mono">{duration}</span>
          </div>
        )}
      </div>
    </div>
  );
}
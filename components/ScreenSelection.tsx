import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Monitor, Square, MousePointer } from "lucide-react";
import { useState } from "react";

export function ScreenSelection() {
  const [selectedMode, setSelectedMode] = useState<'fullscreen' | 'window' | 'area'>('fullscreen');

  const modes = [
    {
      id: 'fullscreen' as const,
      title: 'Full Screen',
      description: 'Record entire screen',
      icon: Monitor
    },
    {
      id: 'window' as const,
      title: 'Window',
      description: 'Record specific window',
      icon: Square
    },
    {
      id: 'area' as const,
      title: 'Custom Area',
      description: 'Select area to record',
      icon: MousePointer
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Screen Selection</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <Button
                key={mode.id}
                variant={selectedMode === mode.id ? "default" : "outline"}
                onClick={() => setSelectedMode(mode.id)}
                className="flex items-center justify-start p-4 h-auto"
              >
                <Icon className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">{mode.title}</div>
                  <div className="text-sm text-muted-foreground">{mode.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
        
        {selectedMode === 'area' && (
          <Button className="w-full mt-3" variant="outline">
            Select Area
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FolderOpen } from "lucide-react";
import { useState } from "react";

export function OutputSettings() {
  const [outputPath, setOutputPath] = useState("C:\\Users\\Username\\Videos\\Recordings");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Output Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Format Selection */}
        <div className="space-y-2">
          <Label>Video Format</Label>
          <Select defaultValue="mp4">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mp4">MP4 (H.264)</SelectItem>
              <SelectItem value="webm">WebM</SelectItem>
              <SelectItem value="avi">AVI</SelectItem>
              <SelectItem value="mov">MOV</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quality Selection */}
        <div className="space-y-2">
          <Label>Quality</Label>
          <Select defaultValue="high">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low (480p)</SelectItem>
              <SelectItem value="medium">Medium (720p)</SelectItem>
              <SelectItem value="high">High (1080p)</SelectItem>
              <SelectItem value="ultra">Ultra (4K)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Frame Rate */}
        <div className="space-y-2">
          <Label>Frame Rate</Label>
          <Select defaultValue="30">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15 FPS</SelectItem>
              <SelectItem value="24">24 FPS</SelectItem>
              <SelectItem value="30">30 FPS</SelectItem>
              <SelectItem value="60">60 FPS</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Output Path */}
        <div className="space-y-2">
          <Label>Save Location</Label>
          <div className="flex gap-2">
            <Input 
              value={outputPath}
              onChange={(e) => setOutputPath(e.target.value)}
              readOnly
            />
            <Button variant="outline" size="icon">
              <FolderOpen className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
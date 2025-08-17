import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { OutputSettings } from "./OutputSettings";
import { AudioSettings } from "./AudioSettings";
import { Settings } from "lucide-react";

interface SettingsModalProps {
  children: React.ReactNode;
}

export function SettingsModal({ children }: SettingsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Settings
          </DialogTitle>
          <DialogDescription>
            Configure your recording settings, audio preferences, and output options.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="output" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="output">Output</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>
          
          <TabsContent value="output" className="mt-4">
            <OutputSettings />
          </TabsContent>
          
          <TabsContent value="audio" className="mt-4">
            <AudioSettings />
          </TabsContent>
          
          <TabsContent value="general" className="mt-4">
            <div className="space-y-4">
              <h3>General Settings</h3>
              <p className="text-muted-foreground">General application settings will be available here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
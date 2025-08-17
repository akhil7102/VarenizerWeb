import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Play, Download, Trash2, FolderOpen } from "lucide-react";

interface Recording {
  id: string;
  name: string;
  duration: string;
  size: string;
  date: string;
  thumbnail: string;
}

export function RecentRecordings() {
  const recordings: Recording[] = [
    {
      id: "1",
      name: "Screen Recording 2024-01-15",
      duration: "5:23",
      size: "45.2 MB",
      date: "2024-01-15",
      thumbnail: "/api/placeholder/150/84"
    },
    {
      id: "2", 
      name: "Tutorial Demo",
      duration: "12:45",
      size: "123.8 MB",
      date: "2024-01-14",
      thumbnail: "/api/placeholder/150/84"
    },
    {
      id: "3",
      name: "Meeting Recording",
      duration: "45:12",
      size: "512.3 MB", 
      date: "2024-01-13",
      thumbnail: "/api/placeholder/150/84"
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Recordings</CardTitle>
        <Button variant="outline" size="sm">
          <FolderOpen className="w-4 h-4 mr-2" />
          Open Folder
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recordings.map((recording) => (
            <div key={recording.id} className="flex items-center gap-3 p-3 rounded-lg border bg-muted/50">
              <div className="w-20 h-12 bg-muted rounded overflow-hidden flex-shrink-0">
                <img 
                  src={recording.thumbnail} 
                  alt={recording.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{recording.name}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>{recording.duration}</span>
                  <span>•</span>
                  <span>{recording.size}</span>
                  <span>•</span>
                  <span>{recording.date}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="sm">
                  <Play className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          
          {recordings.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No recordings yet. Start your first recording!
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Settings } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1 flex items-center">
          <Settings size={24} className="mr-2 text-mechitv-accent" />
          Preferences
        </h1>
        <p className="text-muted-foreground">
          Configure your MechiTV admin settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Configure general settings for the admin interface
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Site Title</label>
              <Input defaultValue="MechiTV Admin" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Site Description</label>
              <Textarea defaultValue="Sports management platform" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Enable Dark Mode</label>
              <Switch defaultChecked />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-mechitv-accent hover:bg-mechitv-accent/90">
              Save Changes
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Configure how and when you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Match Alerts</label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Score Updates</label>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Team Changes</label>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Email Notifications</label>
              <Switch defaultChecked />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="bg-mechitv-accent hover:bg-mechitv-accent/90">
              Save Preferences
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;

import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/layout/DashboardLayout";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Save,
} from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/settings")({
  component: DashboardSettings,
});

function DashboardSettings() {
  const [settings, setSettings] = useState({
    // Profile Settings
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Dashboard Dashboardistrator and content manager",

    // Notification Settings
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,

    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: "30",

    // Appearance Settings
    darkMode: false,
    compactMode: false,

    // System Settings
    autoBackup: true,
    backupFrequency: "daily",
    maintenanceMode: false,
  });

  const handleSave = () => {
    // Here you would typically save to your backend
    toast.success("Settings saved successfully!");
  };

  const updateSetting = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>

        <div className="grid gap-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Settings
              </CardTitle>
              <CardDescription>
                Update your personal information and profile details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={settings.name}
                    onChange={(e) => updateSetting("name", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={settings.email}
                    onChange={(e) => updateSetting("email", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={settings.bio}
                  onChange={(e) => updateSetting("bio", e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure how you receive notifications and updates
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) =>
                    updateSetting("emailNotifications", checked)
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications in your browser
                  </p>
                </div>
                <Switch
                  checked={settings.pushNotifications}
                  onCheckedChange={(checked) =>
                    updateSetting("pushNotifications", checked)
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">
                    Get weekly summary reports via email
                  </p>
                </div>
                <Switch
                  checked={settings.weeklyReports}
                  onCheckedChange={(checked) =>
                    updateSetting("weeklyReports", checked)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
              <CardDescription>
                Manage your account security and authentication
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch
                  checked={settings.twoFactorAuth}
                  onCheckedChange={(checked) =>
                    updateSetting("twoFactorAuth", checked)
                  }
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout">
                  Session Timeout (minutes)
                </Label>
                <Input
                  id="sessionTimeout"
                  type="number"
                  value={settings.sessionTimeout}
                  onChange={(e) =>
                    updateSetting("sessionTimeout", e.target.value)
                  }
                  className="w-32"
                />
              </div>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance Settings
              </CardTitle>
              <CardDescription>
                Customize the look and feel of your dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Switch to dark theme
                  </p>
                </div>
                <Switch
                  checked={settings.darkMode}
                  onCheckedChange={(checked) =>
                    updateSetting("darkMode", checked)
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Compact Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Use a more compact layout
                  </p>
                </div>
                <Switch
                  checked={settings.compactMode}
                  onCheckedChange={(checked) =>
                    updateSetting("compactMode", checked)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                System Settings
              </CardTitle>
              <CardDescription>
                Configure system-wide settings and maintenance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto Backup</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically backup your data
                  </p>
                </div>
                <Switch
                  checked={settings.autoBackup}
                  onCheckedChange={(checked) =>
                    updateSetting("autoBackup", checked)
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Put the system in maintenance mode
                  </p>
                </div>
                <Switch
                  checked={settings.maintenanceMode}
                  onCheckedChange={(checked) =>
                    updateSetting("maintenanceMode", checked)
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}

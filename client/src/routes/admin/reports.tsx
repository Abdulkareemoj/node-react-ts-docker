import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  Download,
  Calendar,
  FileText,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  MoreHorizontal,
  Search,
  Clock,
} from "lucide-react";
import { toast } from "sonner";
import AdminLayout from "@/components/layout/AdminLayout";

export const Route = createFileRoute("/admin/reports")({
  component: AdminReports,
});

function AdminReports() {
  interface Report {
    id: string;
    name: string;
    type: "analytics" | "sales" | "content" | "user";
    description: string;
    schedule: "daily" | "weekly" | "monthly" | "manual";
    lastGenerated: string;
    status: "completed" | "running" | "failed";
    recipients: string[];
    format: "pdf" | "csv" | "excel";
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newReport, setNewReport] = useState({
    name: "",
    type: "analytics" as const,
    description: "",
    schedule: "weekly" as const,
    recipients: "",
    format: "pdf" as const,
  });

  const [reports, setReports] = useState<Report[]>([
    {
      id: "1",
      name: "Weekly Analytics Summary",
      type: "analytics",
      description:
        "Comprehensive weekly analytics report including traffic, engagement, and conversion metrics",
      schedule: "weekly",
      lastGenerated: "2024-01-15T10:00:00Z",
      status: "completed",
      recipients: ["admin@example.com", "marketing@example.com"],
      format: "pdf",
    },
    {
      id: "2",
      name: "Monthly Sales Report",
      type: "sales",
      description: "Detailed monthly sales performance and revenue analysis",
      schedule: "monthly",
      lastGenerated: "2024-01-01T09:00:00Z",
      status: "completed",
      recipients: ["sales@example.com", "finance@example.com"],
      format: "excel",
    },
    {
      id: "3",
      name: "Content Performance Dashboard",
      type: "content",
      description:
        "Blog post performance, engagement metrics, and content insights",
      schedule: "weekly",
      lastGenerated: "2024-01-14T08:00:00Z",
      status: "running",
      recipients: ["content@example.com"],
      format: "pdf",
    },
    {
      id: "4",
      name: "User Engagement Report",
      type: "user",
      description: "User behavior analysis and engagement patterns",
      schedule: "daily",
      lastGenerated: "2024-01-16T06:00:00Z",
      status: "completed",
      recipients: ["product@example.com"],
      format: "csv",
    },
    {
      id: "5",
      name: "Link Performance Analysis",
      type: "analytics",
      description: "Short link click-through rates and performance metrics",
      schedule: "manual",
      lastGenerated: "2024-01-10T14:30:00Z",
      status: "failed",
      recipients: ["marketing@example.com"],
      format: "pdf",
    },
  ]);

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || report.type === filterType;
    return matchesSearch && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "running":
        return "bg-blue-100 text-blue-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "analytics":
        return <BarChart3 className="h-4 w-4" />;
      case "sales":
        return <DollarSign className="h-4 w-4" />;
      case "content":
        return <FileText className="h-4 w-4" />;
      case "user":
        return <Users className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const handleCreateReport = () => {
    const report: Report = {
      id: Date.now().toString(),
      name: newReport.name,
      type: newReport.type,
      description: newReport.description,
      schedule: newReport.schedule,
      lastGenerated: new Date().toISOString(),
      status: "completed",
      recipients: newReport.recipients.split(",").map((email) => email.trim()),
      format: newReport.format,
    };

    setReports([report, ...reports]);
    setNewReport({
      name: "",
      type: "analytics",
      description: "",
      schedule: "weekly",
      recipients: "",
      format: "pdf",
    });
    setIsCreateDialogOpen(false);
    toast.success("Report created successfully!");
  };

  const handleGenerateReport = (reportId: string) => {
    setReports(
      reports.map((report) =>
        report.id === reportId
          ? {
              ...report,
              status: "running" as const,
              lastGenerated: new Date().toISOString(),
            }
          : report
      )
    );
    toast.success("Report generation started!");

    // Simulate report completion after 3 seconds
    setTimeout(() => {
      setReports((prev) =>
        prev.map((report) =>
          report.id === reportId
            ? { ...report, status: "completed" as const }
            : report
        )
      );
      toast.success("Report generated successfully!");
    }, 3000);
  };

  const reportStats = {
    total: reports.length,
    completed: reports.filter((r) => r.status === "completed").length,
    running: reports.filter((r) => r.status === "running").length,
    failed: reports.filter((r) => r.status === "failed").length,
  };

  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
            <p className="text-muted-foreground">
              Generate and manage automated reports for your dashboard
            </p>
          </div>
          <Dialog
            open={isCreateDialogOpen}
            onOpenChange={setIsCreateDialogOpen}
          >
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Report
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create New Report</DialogTitle>
                <DialogDescription>
                  Set up a new automated report with custom parameters and
                  scheduling.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Report Name</Label>
                  <Input
                    id="name"
                    value={newReport.name}
                    onChange={(e) =>
                      setNewReport({ ...newReport, name: e.target.value })
                    }
                    placeholder="Enter report name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Report Type</Label>
                  <Select
                    value={newReport.type}
                    onValueChange={(value: any) =>
                      setNewReport({ ...newReport, type: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="analytics">Analytics</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="content">Content</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newReport.description}
                    onChange={(e) =>
                      setNewReport({
                        ...newReport,
                        description: e.target.value,
                      })
                    }
                    placeholder="Describe what this report includes"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="schedule">Schedule</Label>
                    <Select
                      value={newReport.schedule}
                      onValueChange={(value: any) =>
                        setNewReport({ ...newReport, schedule: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="format">Format</Label>
                    <Select
                      value={newReport.format}
                      onValueChange={(value: any) =>
                        setNewReport({ ...newReport, format: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="csv">CSV</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recipients">
                    Recipients (comma-separated emails)
                  </Label>
                  <Input
                    id="recipients"
                    value={newReport.recipients}
                    onChange={(e) =>
                      setNewReport({ ...newReport, recipients: e.target.value })
                    }
                    placeholder="admin@example.com, team@example.com"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={handleCreateReport}
                  disabled={!newReport.name}
                >
                  Create Report
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Reports
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reportStats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {reportStats.completed}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Running</CardTitle>
              <Clock className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {reportStats.running}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed</CardTitle>
              <Eye className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {reportStats.failed}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports Table */}
        <Card>
          <CardHeader>
            <CardTitle>Report Management</CardTitle>
            <CardDescription>
              Manage your automated reports and generate new ones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="analytics">Analytics</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="content">Content</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Schedule</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Generated</TableHead>
                  <TableHead>Recipients</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{report.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {report.description}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(report.type)}
                        <span className="capitalize">{report.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="capitalize">{report.schedule}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {new Date(report.lastGenerated).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(report.lastGenerated).toLocaleTimeString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {report.recipients.length} recipient
                        {report.recipients.length !== 1 ? "s" : ""}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem
                            onClick={() => handleGenerateReport(report.id)}
                          >
                            <TrendingUp className="mr-2 h-4 w-4" />
                            Generate Now
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download Latest
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Edit Settings</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Delete Report
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Report Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Report Templates</CardTitle>
            <CardDescription>
              Generate instant reports with pre-configured templates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Traffic Summary
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Last 30 days traffic overview with key metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Generate PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Revenue Report
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Monthly revenue breakdown and sales performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Generate Excel
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    Content Analysis
                  </CardTitle>
                  <CardDescription className="text-sm">
                    Blog performance and engagement metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Generate CSV
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

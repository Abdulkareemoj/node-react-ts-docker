"use client";

import { useState, useEffect } from "react";
import { CalendarIcon, CopyIcon, LinkIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "./Button";
import { Calendar } from "./Calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";
import { Input } from "./Input";
import { Label } from "./Label";
import { RadioGroup, RadioGroupItem } from "./Radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import { cn } from "@/utils/utils";
import QRCode from "./QrCode";

export function CreateLinkDialog() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [customPath, setCustomPath] = useState("");
  const [expirationType, setExpirationType] = useState("never");
  const [expirationDate, setExpirationDate] = useState<Date>();
  const [linkPreview, setLinkPreview] = useState<string | null>(null);
  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);
  const [shortLink, setShortLink] = useState("");

  // Generate a short link when URL and custom path change
  useEffect(() => {
    if (url) {
      const domain = "link.ly";
      const path = customPath || generateRandomString(8);
      setShortLink(`${domain}/${path}`);
    } else {
      setShortLink("");
    }
  }, [url, customPath]);

  // Simulate generating a link preview
  useEffect(() => {
    if (url && !isGeneratingPreview) {
      setIsGeneratingPreview(true);
      setLinkPreview(null);

      // Simulate API call to get preview
      const timeout = setTimeout(() => {
        setLinkPreview(url);
        setIsGeneratingPreview(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [url]);

  const generateRandomString = (length: number) => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleCreateLink = () => {
    // Here you would typically send the data to your backend
    console.log({
      originalUrl: url,
      shortLink,
      customPath,
      expirationType,
      expirationDate,
    });

    // Close the dialog and reset form
    setOpen(false);
    setUrl("");
    setCustomPath("");
    setExpirationType("never");
    setExpirationDate(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <LinkIcon className="h-4 w-4" />
          <span>New Link</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            CREATE NEW LINK
          </DialogTitle>
          <DialogDescription>
            Create, shorten, and manage your links
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="url">Destination URL</Label>
            <Input
              id="url"
              placeholder="https://example.com/your-long-url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <Tabs defaultValue="custom" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="custom">Custom Link</TabsTrigger>
              <TabsTrigger value="qrcode">QR Code</TabsTrigger>
            </TabsList>

            <TabsContent value="custom" className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="custom-path">Custom Path</Label>
                <div className="flex gap-2">
                  <div className="flex h-10 items-center rounded-md border border-input bg-background px-3 text-sm text-muted-foreground">
                    link.ly/
                  </div>
                  <Input
                    id="custom-path"
                    placeholder="your-custom-path"
                    value={customPath}
                    onChange={(e) => setCustomPath(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Expiration</Label>
                <RadioGroup
                  defaultValue="never"
                  onValueChange={setExpirationType}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="never" id="never" />
                    <Label htmlFor="never">Never</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="custom-date" />
                    <Label htmlFor="custom-date">Custom Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[180px] justify-start text-left font-normal",
                            !expirationDate && "text-muted-foreground"
                          )}
                          disabled={expirationType !== "custom"}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {expirationDate
                            ? format(expirationDate, "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={expirationDate}
                          onSelect={setExpirationDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </RadioGroup>
              </div>

              {shortLink && (
                <div className="mt-4 rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                      <LinkIcon className="h-4 w-4" />
                      {shortLink}
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <CopyIcon className="h-3.5 w-3.5" />
                      <span className="text-xs">Copy</span>
                    </Button>
                  </div>
                </div>
              )}

              {url && (
                <div className="mt-4 space-y-2">
                  <Label>Link Preview</Label>
                  <div className="overflow-hidden rounded-md border">
                    {isGeneratingPreview ? (
                      <div className="flex h-[200px] items-center justify-center bg-gray-50">
                        <div className="text-sm text-muted-foreground">
                          Loading preview...
                        </div>
                      </div>
                    ) : linkPreview ? (
                      <div className="bg-white p-4">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-red-500" />
                          <div className="h-2 w-2 rounded-full bg-yellow-500" />
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <div className="ml-2 h-4 w-full rounded-full bg-gray-100" />
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="h-6 w-3/4 rounded-md bg-gray-100" />
                          <div className="h-4 w-1/2 rounded-md bg-gray-100" />
                          <div className="mt-4 h-[100px] rounded-md bg-gray-200" />
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-[200px] items-center justify-center bg-gray-50">
                        <div className="text-sm text-muted-foreground">
                          Enter a URL to see preview
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="qrcode" className="space-y-4">
              {url ? (
                <div className="flex flex-col items-center justify-center space-y-4 p-4">
                  <div className="rounded-md border p-4 bg-white">
                    <QRCode value={url} size={200} />
                  </div>
                  <Button variant="outline" className="w-full">
                    Download PNG
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    {new Date().toLocaleDateString("en-US", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              ) : (
                <div className="flex h-[300px] items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    Enter a URL to generate QR code
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreateLink} disabled={!url} className="gap-2">
            <LinkIcon className="h-4 w-4" />
            Create Link
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

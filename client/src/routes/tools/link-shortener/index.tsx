import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
import { motion } from "motion/react";
import { LinkIcon, Copy, ExternalLink, BarChart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import RootLayout from "@/components/layout/RootLayout";

export const Route = createFileRoute("/tools/link-shortener/")({
  component: LinkShortenerPage,
});

function LinkShortenerPage() {
  interface ShortenedLink {
    id: string;
    originalUrl: string;
    shortUrl: string;
    clicks: number;
    createdAt: string;
  }

  const [url, setUrl] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([
    {
      id: "1",
      originalUrl: "https://example.com/very-long-url-that-needs-shortening",
      shortUrl: "https://saas.ly/abc123",
      clicks: 42,
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      originalUrl: "https://another-example.com/another-long-url",
      shortUrl: "https://saas.ly/def456",
      clicks: 18,
      createdAt: "2024-01-14",
    },
  ]);
  const { toast } = useToast();

  const handleShortenUrl = () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL to shorten",
        variant: "destructive",
      });
      return;
    }

    const newLink: ShortenedLink = {
      id: Date.now().toString(),
      originalUrl: url,
      shortUrl: `https://saas.ly/${
        customAlias || Math.random().toString(36).substr(2, 6)
      }`,
      clicks: 0,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setShortenedLinks([newLink, ...shortenedLinks]);
    setUrl("");
    setCustomAlias("");

    toast({
      title: "Success!",
      description: "Your link has been shortened successfully",
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Link copied to clipboard",
    });
  };

  const deleteLink = (id: string) => {
    setShortenedLinks(shortenedLinks.filter((link) => link.id !== id));
    toast({
      title: "Deleted",
      description: "Link has been deleted",
    });
  };

  return (
    <RootLayout>
      <div className="flex min-h-[100dvh] flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-20 md:py-32 overflow-hidden">
            <div className="container px-4 md:px-6 relative">
              <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-12"
              >
                <Badge
                  className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
                  variant="secondary"
                >
                  Free Tool
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Link Shortener
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Create short, memorable links that are easy to share. Track
                  clicks and manage all your links in one place.
                </p>
              </motion.div>

              {/* Link Shortener Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-2xl mx-auto"
              >
                <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LinkIcon className="size-5" />
                      Shorten Your Link
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="url">Enter your long URL</Label>
                      <Input
                        id="url"
                        placeholder="https://example.com/very-long-url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="rounded-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="alias">Custom alias (optional)</Label>
                      <Input
                        id="alias"
                        placeholder="my-custom-link"
                        value={customAlias}
                        onChange={(e) => setCustomAlias(e.target.value)}
                        className="rounded-full"
                      />
                    </div>
                    <Button
                      onClick={handleShortenUrl}
                      className="w-full rounded-full"
                    >
                      Shorten Link
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Shortened Links */}
          <section className="w-full py-20">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-center">
                  Your Shortened Links
                </h2>

                <div className="space-y-4">
                  {shortenedLinks.map((link, i) => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {link.clicks} clicks
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  Created{" "}
                                  {new Date(
                                    link.createdAt
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-primary">
                                    {link.shortUrl}
                                  </span>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      copyToClipboard(link.shortUrl)
                                    }
                                    className="h-6 w-6 p-0"
                                  >
                                    <Copy className="size-3" />
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                      window.open(link.shortUrl, "_blank")
                                    }
                                    className="h-6 w-6 p-0"
                                  >
                                    <ExternalLink className="size-3" />
                                  </Button>
                                </div>
                                <p className="text-sm text-muted-foreground truncate">
                                  {link.originalUrl}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-full bg-transparent"
                              >
                                <BarChart className="size-4 mr-2" />
                                Analytics
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => deleteLink(link.id)}
                                className="text-destructive hover:text-destructive"
                              >
                                <Trash2 className="size-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features */}
          <section className="w-full py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Why Use Our Link Shortener?
                </h2>
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                  More than just shortening links - get insights and manage your
                  links effectively.
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Click Analytics",
                    description:
                      "Track how many people click your links and when",
                    icon: <BarChart className="size-6" />,
                  },
                  {
                    title: "Custom Aliases",
                    description: "Create memorable, branded short links",
                    icon: <LinkIcon className="size-6" />,
                  },
                  {
                    title: "Easy Management",
                    description:
                      "Organize and manage all your links in one place",
                    icon: <Copy className="size-6" />,
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="h-full text-center p-6 border-border/40 bg-gradient-to-b from-background to-muted/10">
                      <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </RootLayout>
  );
}

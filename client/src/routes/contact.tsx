import { createFileRoute } from "@tanstack/react-router";

import type React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import RootLayout from "@/components/layout/RootLayout";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <RootLayout>
      <div className="flex min-h-[100dvh] flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-20 md:py-32 overflow-hidden">
            <div className=" px-4 md:px-6 relative">
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
                  Get in Touch
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  We'd Love to Hear From You
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Have questions about our products? Need help getting started?
                  Our team is here to help you succeed.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Form and Info */}
          <section className="w-full py-20">
            <div className=" px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                    <CardHeader>
                      <CardTitle>Send us a message</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name *</Label>
                            <Input
                              id="name"
                              placeholder="Your name"
                              value={formData.name}
                              onChange={(e) =>
                                handleInputChange("name", e.target.value)
                              }
                              required
                              className="rounded-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                              required
                              className="rounded-full"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={(e) =>
                              handleInputChange("company", e.target.value)
                            }
                            className="rounded-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Select
                            onValueChange={(value) =>
                              handleInputChange("subject", value)
                            }
                          >
                            <SelectTrigger className="rounded-full">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">
                                General Inquiry
                              </SelectItem>
                              <SelectItem value="sales">
                                Sales Question
                              </SelectItem>
                              <SelectItem value="support">
                                Technical Support
                              </SelectItem>
                              <SelectItem value="partnership">
                                Partnership
                              </SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            placeholder="Tell us how we can help you..."
                            value={formData.message}
                            onChange={(e) =>
                              handleInputChange("message", e.target.value)
                            }
                            required
                            rows={5}
                            className="resize-none"
                          />
                        </div>
                        <Button type="submit" className="w-full rounded-full">
                          Send Message
                          <Send className="ml-2 size-4" />
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                      Get in Touch
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      We're here to help and answer any question you might have.
                      We look forward to hearing from you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                            <Mail className="size-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Email Us</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                              Send us an email and we'll respond within 24
                              hours.
                            </p>
                            <p className="text-primary font-medium">
                              hello@saasify.com
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                            <Phone className="size-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Call Us</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                              Speak directly with our team during business
                              hours.
                            </p>
                            <p className="text-primary font-medium">
                              +1 (555) 123-4567
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Mon-Fri, 9am-6pm PST
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary">
                            <MapPin className="size-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">Visit Us</h3>
                            <p className="text-muted-foreground text-sm mb-2">
                              Come visit our office in the heart of San
                              Francisco.
                            </p>
                            <p className="text-primary font-medium">
                              123 Innovation Street
                              <br />
                              San Francisco, CA 94105
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="pt-8 border-t border-border/40">
                    <h3 className="font-semibold mb-4">
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-1">
                          How quickly do you respond?
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          We typically respond to all inquiries within 24 hours
                          during business days.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-1">
                          Do you offer phone support?
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Yes, phone support is available for Professional and
                          Enterprise customers.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-1">
                          Can I schedule a demo?
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          Select "Sales Question" in the form to request a
                          personalized demo.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </RootLayout>
  );
}

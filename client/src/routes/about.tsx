import { motion } from "motion/react";
import { Users, Target, Award, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Root } from "@radix-ui/react-slot";
import RootLayout from "@/components/layout/RootLayout";
export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300&text=Sarah+Johnson",
      bio: "Former VP of Engineering at TechCorp with 15+ years of experience building scalable SaaS platforms.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/placeholder.svg?height=300&width=300&text=Michael+Chen",
      bio: "Full-stack engineer and architect who has led development teams at multiple successful startups.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "/placeholder.svg?height=300&width=300&text=Emily+Rodriguez",
      bio: "Product strategist with a passion for user experience and data-driven product development.",
    },
    {
      name: "David Kim",
      role: "Head of Marketing",
      image: "/placeholder.svg?height=300&width=300&text=David+Kim",
      bio: "Growth marketing expert who has helped scale multiple B2B SaaS companies from startup to IPO.",
    },
  ];

  const values = [
    {
      icon: <Users className="size-6" />,
      title: "Customer First",
      description:
        "Every decision we make is guided by what's best for our customers and their success.",
    },
    {
      icon: <Target className="size-6" />,
      title: "Innovation",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that solve real problems.",
    },
    {
      icon: <Award className="size-6" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from code quality to customer support.",
    },
    {
      icon: <Heart className="size-6" />,
      title: "Transparency",
      description:
        "We believe in open communication, honest feedback, and building trust through transparency.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <RootLayout>
      <div className="flex min-h-[100dvh] flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full overflow-hidden">
            <div className=" px-4  py-20 md:py-32  md:px-6 relative">
              <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#  dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

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
                  About Us
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Building the Future of Work
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We're on a mission to help teams work smarter, not harder. Our
                  platform empowers businesses to streamline their workflows and
                  achieve extraordinary results.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Story Section */}
          <section className="w-full py-20 md:py-32">
            <div className=" px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      SaaSify was born out of frustration with the complexity of
                      modern business tools. Our founders, having worked at
                      various tech companies, witnessed firsthand how teams
                      struggled with disconnected systems, manual processes, and
                      inefficient workflows.
                    </p>
                    <p>
                      In 2020, we set out to build something different - a
                      platform that would bring simplicity back to business
                      operations while providing the power and flexibility that
                      growing companies need.
                    </p>
                    <p>
                      Today, we're proud to serve thousands of businesses
                      worldwide, helping them save time, reduce costs, and focus
                      on what matters most: growing their business and serving
                      their customers.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <img
                    src="/placeholder.svg?height=500&width=600&text=Our+Story"
                    alt="Our story"
                    width={600}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="w-full py-20 md:py-32 bg-muted/30">
            <div className=" px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Our Values
                </h2>
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                  These core values guide everything we do and shape the culture
                  we're building.
                </p>
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
              >
                {values.map((value, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full text-center p-6 border-border/40 bg-gradient-to-b from-background to-muted/10">
                      <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Team Section */}
          <section className="w-full py-20 md:py-32">
            <div className=" px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Meet Our Team
                </h2>
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                  The passionate people behind SaaSify who are dedicated to your
                  success.
                </p>
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              >
                {team.map((member, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6 text-center">
                        <h3 className="text-xl font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-3">
                          {member.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {member.bio}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="w-full py-20 md:py-32 bg-muted/30">
            <div className=" px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  By the Numbers
                </h2>
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                  Our impact in the business world speaks for itself.
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { number: "10,000+", label: "Active Users" },
                  { number: "500+", label: "Companies Served" },
                  { number: "99.9%", label: "Uptime" },
                  { number: "24/7", label: "Support Available" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
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

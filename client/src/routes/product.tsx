import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Check,
  ArrowRight,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import RootLayout from "@/components/layout/RootLayout";

export const Route = createFileRoute("/product")({
  component: ProductPage,
});

function ProductPage() {
  const products = [
    {
      name: "SaaSify Pro",
      description: "Our flagship product for growing businesses",
      image: "/placeholder.svg?height=400&width=600&text=SaaSify+Pro",
      features: [
        "Advanced Analytics",
        "Team Collaboration",
        "API Access",
        "Priority Support",
      ],
      price: "$79/month",
      category: "Business",
    },
    {
      name: "SaaSify Enterprise",
      description: "Comprehensive solution for large organizations",
      image: "/placeholder.svg?height=400&width=600&text=SaaSify+Enterprise",
      features: [
        "Custom Integrations",
        "Advanced Security",
        "Dedicated Support",
        "Unlimited Users",
      ],
      price: "$199/month",
      category: "Enterprise",
    },
    {
      name: "SaaSify Analytics",
      description: "Powerful analytics and reporting tools",
      image: "/placeholder.svg?height=400&width=600&text=SaaSify+Analytics",
      features: [
        "Real-time Dashboards",
        "Custom Reports",
        "Data Export",
        "Predictive Analytics",
      ],
      price: "$49/month",
      category: "Analytics",
    },
    {
      name: "SaaSify Automation",
      description: "Streamline workflows with intelligent automation",
      image: "/placeholder.svg?height=400&width=600&text=SaaSify+Automation",
      features: [
        "Workflow Builder",
        "Smart Triggers",
        "Integration Hub",
        "Performance Monitoring",
      ],
      price: "$39/month",
      category: "Automation",
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
                  Our Products
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Powerful Solutions for Every Business Need
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Discover our comprehensive suite of products designed to
                  streamline your workflow, boost productivity, and drive
                  growth.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="w-full py-20 md:py-32">
            <div className="px-4 md:px-6">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-8 md:grid-cols-2"
              >
                {products.map((product, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{product.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">
                              {product.name}
                            </h3>
                            <p className="text-muted-foreground mb-4">
                              {product.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              {product.price}
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {product.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 size-4 text-primary" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex gap-2">
                          <Button className="flex-1 rounded-full">
                            Get Started
                            <ArrowRight className="ml-2 size-4" />
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-full bg-transparent"
                          >
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Features Comparison */}
          <section className="w-full py-20 md:py-32 bg-muted/30">
            <div className="px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Why Choose Our Products?
                </h2>
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                  Built with cutting-edge technology and designed for
                  scalability, security, and ease of use.
                </p>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: <Zap className="size-6" />,
                    title: "Lightning Fast",
                    description:
                      "Optimized performance with sub-second response times",
                  },
                  {
                    icon: <Shield className="size-6" />,
                    title: "Enterprise Security",
                    description:
                      "Bank-level encryption and compliance certifications",
                  },
                  {
                    icon: <Users className="size-6" />,
                    title: "Team Collaboration",
                    description:
                      "Built-in tools for seamless team communication",
                  },
                  {
                    icon: <BarChart className="size-6" />,
                    title: "Advanced Analytics",
                    description: "Deep insights with customizable dashboards",
                  },
                  {
                    icon: <Layers className="size-6" />,
                    title: "Easy Integration",
                    description: "Connect with 100+ popular business tools",
                  },
                  {
                    icon: <Star className="size-6" />,
                    title: "24/7 Support",
                    description: "Expert support whenever you need assistance",
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

          {/* CTA Section */}
          <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <div className="px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-primary-foreground/80 md:text-lg mb-8 max-w-2xl mx-auto">
                  Choose the product that fits your needs and start your free
                  trial today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full h-12 px-8"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 px-8 bg-transparent border-white text-white hover:bg-white/10"
                  >
                    Contact Sales
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>{" "}
    </RootLayout>
  );
}

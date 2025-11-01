import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import RootLayout from "@/components/layout/RootLayout";

export const Route = createFileRoute("/blog/")({
  component: Blog,
});
function Blog() {
  const blogPosts = [
    {
      title: "10 Ways to Boost Your Team's Productivity",
      excerpt:
        "Discover proven strategies to enhance your team's efficiency and achieve better results with less effort.",
      image: "/placeholder.svg?height=300&width=500&text=Productivity+Tips",
      author: "Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Productivity",
      tags: ["productivity", "teamwork", "efficiency"],
    },
    {
      title: "The Future of Remote Work: Trends to Watch",
      excerpt:
        "Explore the latest trends shaping the future of remote work and how businesses can adapt to stay competitive.",
      image: "/placeholder.svg?height=300&width=500&text=Remote+Work",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Remote Work",
      tags: ["remote work", "trends", "future"],
    },
    {
      title: "Data Security Best Practices for SaaS Companies",
      excerpt:
        "Learn essential security measures every SaaS company should implement to protect customer data and maintain trust.",
      image: "/placeholder.svg?height=300&width=500&text=Data+Security",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Security",
      tags: ["security", "data protection", "compliance"],
    },
    {
      title: "Building Scalable APIs: A Developer's Guide",
      excerpt:
        "A comprehensive guide to designing and building APIs that can scale with your business growth.",
      image: "/placeholder.svg?height=300&width=500&text=API+Development",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Development",
      tags: ["api", "development", "scalability"],
    },
    {
      title: "Customer Success Stories: How SaaSify Transformed Businesses",
      excerpt:
        "Real stories from our customers about how SaaSify helped them streamline operations and grow their business.",
      image: "/placeholder.svg?height=300&width=500&text=Success+Stories",
      author: "Lisa Patel",
      date: "2024-01-05",
      readTime: "8 min read",
      category: "Case Studies",
      tags: ["success stories", "customers", "growth"],
    },
    {
      title: "The Art of Effective Project Management",
      excerpt:
        "Master the fundamentals of project management and learn how to deliver projects on time and within budget.",
      image: "/placeholder.svg?height=300&width=500&text=Project+Management",
      author: "James Wilson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Management",
      tags: ["project management", "leadership", "planning"],
    },
  ];

  const categories = [
    "All",
    "Productivity",
    "Remote Work",
    "Security",
    "Development",
    "Case Studies",
    "Management",
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
          <section className="w-full overflow-hidden  md:px-6">
            <div className=" px-4 md:px-6 relative py-20 md:py-32 ">
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
                  Our Blog
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Insights, Tips, and Industry News
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Stay updated with the latest trends, best practices, and
                  expert insights from the world of SaaS and business
                  productivity.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-10 rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Categories Filter */}
          <section className="w-full py-8 border-b">
            <div className=" px-4 md:px-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category, i) => (
                  <Button
                    key={i}
                    variant={i === 0 ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Post */}
          <section className="w-full py-12">
            <div className=" px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-video md:aspect-auto relative">
                      <img
                        src={blogPosts[0].image || "/placeholder.svg"}
                        alt={blogPosts[0].title}
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">Featured</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-4" variant="outline">
                        {blogPosts[0].category}
                      </Badge>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <User className="size-4" />
                          <span>{blogPosts[0].author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="size-4" />
                          <span>
                            {new Date(blogPosts[0].date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="size-4" />
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                      </div>
                      <Button className="w-fit rounded-full">
                        Read More
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="w-full py-20">
            <div className=" px-4 md:px-6">
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {blogPosts.slice(1).map((post, i) => (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="size-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="size-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag, j) => (
                            <Badge
                              key={j}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link to="#" className="mt-auto">
                          <Button
                            variant="ghost"
                            className="w-full rounded-full"
                          >
                            Read Article
                            <ArrowRight className="ml-2 size-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="w-full py-20 bg-muted/30">
            <div className=" px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-2xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Stay Updated
                </h2>
                <p className="text-muted-foreground mb-8">
                  Subscribe to our newsletter and never miss the latest
                  insights, tips, and industry news.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="rounded-full"
                  />
                  <Button className="rounded-full">Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, unsubscribe at any time.
                </p>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </RootLayout>
  );
}

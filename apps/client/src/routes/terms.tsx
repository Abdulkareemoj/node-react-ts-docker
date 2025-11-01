import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import RootLayout from "@/components/layout/RootLayout";
export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
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
                  Legal
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Terms of Service
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Last updated: January 15, 2024
                </p>
              </motion.div>
            </div>
          </section>

          {/* Terms Content */}
          <section className="w-full py-20">
            <div className=" px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto prose prose-gray dark:prose-invert"
              >
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      By accessing and using SaaSify ("the Service"), you accept
                      and agree to be bound by the terms and provision of this
                      agreement. If you do not agree to abide by the above,
                      please do not use this service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      2. Description of Service
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      SaaSify provides a comprehensive business automation and
                      productivity platform that includes but is not limited to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Workflow automation tools</li>
                      <li>Team collaboration features</li>
                      <li>Analytics and reporting capabilities</li>
                      <li>Integration with third-party services</li>
                      <li>Data storage and management</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      3. User Accounts
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      To access certain features of the Service, you must
                      register for an account. You agree to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>
                        Provide accurate, current, and complete information
                        during registration
                      </li>
                      <li>Maintain and update your account information</li>
                      <li>
                        Maintain the security of your password and account
                      </li>
                      <li>
                        Accept responsibility for all activities under your
                        account
                      </li>
                      <li>
                        Notify us immediately of any unauthorized use of your
                        account
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      4. Acceptable Use Policy
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      You agree not to use the Service to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe upon the rights of others</li>
                      <li>
                        Distribute spam, malware, or other harmful content
                      </li>
                      <li>
                        Attempt to gain unauthorized access to our systems
                      </li>
                      <li>Interfere with or disrupt the Service</li>
                      <li>
                        Use the Service for any illegal or unauthorized purpose
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      5. Payment Terms
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      For paid services, you agree to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Pay all fees associated with your chosen plan</li>
                      <li>
                        Provide current, complete, and accurate billing
                        information
                      </li>
                      <li>
                        Promptly update account information if payment
                        information changes
                      </li>
                      <li>
                        Pay charges in advance on a monthly or annual basis
                      </li>
                    </ul>
                    <p className="text-muted-foreground mb-4">
                      We reserve the right to suspend or terminate your account
                      for non-payment.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      6. Data and Privacy
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Your privacy is important to us. Our Privacy Policy
                      explains how we collect, use, and protect your information
                      when you use our Service. By using our Service, you agree
                      to the collection and use of information in accordance
                      with our Privacy Policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      7. Intellectual Property
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      The Service and its original content, features, and
                      functionality are and will remain the exclusive property
                      of SaaSify and its licensors. The Service is protected by
                      copyright, trademark, and other laws. You may not copy,
                      modify, distribute, sell, or lease any part of our
                      Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                    <p className="text-muted-foreground mb-4">
                      We may terminate or suspend your account and bar access to
                      the Service immediately, without prior notice or
                      liability, under our sole discretion, for any reason
                      whatsoever, including but not limited to a breach of the
                      Terms.
                    </p>
                    <p className="text-muted-foreground mb-4">
                      You may terminate your account at any time by contacting
                      us or through your account settings.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">9. Disclaimers</h2>
                    <p className="text-muted-foreground mb-4">
                      The information on this Service is provided on an "as is"
                      basis. To the fullest extent permitted by law, this
                      Company excludes all representations, warranties,
                      conditions and terms whether express or implied.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      10. Limitation of Liability
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      In no event shall SaaSify, nor its directors, employees,
                      partners, agents, suppliers, or affiliates, be liable for
                      any indirect, incidental, special, consequential, or
                      punitive damages, including without limitation, loss of
                      profits, data, use, goodwill, or other intangible losses,
                      resulting from your use of the Service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      11. Changes to Terms
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We reserve the right, at our sole discretion, to modify or
                      replace these Terms at any time. If a revision is
                      material, we will provide at least 30 days notice prior to
                      any new terms taking effect.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      12. Contact Information
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about these Terms of Service,
                      please contact us at:
                    </p>
                    <div className="text-muted-foreground">
                      <p>Email: legal@saasify.com</p>
                      <p>
                        Address: 123 Innovation Street, San Francisco, CA 94105
                      </p>
                      <p>Phone: +1 (555) 123-4567</p>
                    </div>
                  </section>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </RootLayout>
  );
}

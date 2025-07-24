import { createFileRoute } from "@tanstack/react-router";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import RootLayout from "@/components/layout/RootLayout";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
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
                  Legal
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Privacy Policy
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Last updated: January 15, 2024
                </p>
              </motion.div>
            </div>
          </section>

          {/* Privacy Content */}
          <section className="w-full py-20">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto prose prose-gray dark:prose-invert"
              >
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground mb-4">
                      SaaSify ("we," "our," or "us") is committed to protecting
                      your privacy. This Privacy Policy explains how we collect,
                      use, disclose, and safeguard your information when you use
                      our service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      2. Information We Collect
                    </h2>
                    <h3 className="text-xl font-semibold mb-3">
                      Personal Information
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We may collect personal information that you provide
                      directly to us, such as:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Name and contact information</li>
                      <li>Account credentials</li>
                      <li>Payment information</li>
                      <li>Company information</li>
                      <li>Communication preferences</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3">
                      Usage Information
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      We automatically collect certain information about your
                      use of our service:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Device information and identifiers</li>
                      <li>Log data and usage patterns</li>
                      <li>Location information</li>
                      <li>Cookies and similar technologies</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      3. How We Use Your Information
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Provide, maintain, and improve our service</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Monitor and analyze usage patterns</li>
                      <li>Detect and prevent fraud and abuse</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      4. Information Sharing and Disclosure
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We may share your information in the following
                      circumstances:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>With your consent</li>
                      <li>
                        With service providers who assist us in operating our
                        business
                      </li>
                      <li>For legal reasons or to protect rights and safety</li>
                      <li>In connection with a business transaction</li>
                      <li>In aggregated or de-identified form</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      5. Data Security
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We implement appropriate technical and organizational
                      measures to protect your personal information against
                      unauthorized access, alteration, disclosure, or
                      destruction. These measures include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security assessments and audits</li>
                      <li>Access controls and authentication measures</li>
                      <li>Employee training on data protection</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      6. Data Retention
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We retain your personal information for as long as
                      necessary to provide our services and fulfill the purposes
                      outlined in this Privacy Policy. We may also retain
                      information to comply with legal obligations, resolve
                      disputes, and enforce our agreements.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      7. Your Rights and Choices
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Depending on your location, you may have certain rights
                      regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      <li>Access to your personal information</li>
                      <li>Correction of inaccurate information</li>
                      <li>Deletion of your personal information</li>
                      <li>Portability of your data</li>
                      <li>Restriction of processing</li>
                      <li>Objection to processing</li>
                      <li>Withdrawal of consent</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      8. Cookies and Tracking Technologies
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We use cookies and similar tracking technologies to
                      collect and track information about your use of our
                      service. You can control cookies through your browser
                      settings, but disabling cookies may affect the
                      functionality of our service.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      9. Third-Party Services
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Our service may contain links to third-party websites or
                      integrate with third-party services. We are not
                      responsible for the privacy practices of these third
                      parties. We encourage you to review their privacy
                      policies.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      10. International Data Transfers
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Your information may be transferred to and processed in
                      countries other than your own. We ensure appropriate
                      safeguards are in place to protect your information in
                      accordance with this Privacy Policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      11. Children's Privacy
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Our service is not intended for children under 13 years of
                      age. We do not knowingly collect personal information from
                      children under 13. If we become aware that we have
                      collected such information, we will take steps to delete
                      it.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">
                      12. Changes to This Privacy Policy
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      We may update this Privacy Policy from time to time. We
                      will notify you of any material changes by posting the new
                      Privacy Policy on this page and updating the "Last
                      updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy,
                      please contact us at:
                    </p>
                    <div className="text-muted-foreground">
                      <p>Email: privacy@saasify.com</p>
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

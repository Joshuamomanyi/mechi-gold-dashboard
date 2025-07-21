import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-sm text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Information We Collect</h2>
          <p>
            At MechiTV, we collect information that you provide directly to us, such as when you create an account, 
            purchase tickets or merchandise, or contact us for support. This may include your name, email address, 
            phone number, and payment information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, process transactions, send you important 
            updates about your orders, and communicate with you about new features and content that may interest you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
            except as described in this policy. We may share your information with trusted service providers who assist 
            us in operating our platform and conducting our business.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, 
            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. You may also opt out of certain 
            communications from us. To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@mechitv.com or 
            through our contact page.
          </p>
        </section>

        <section>
          <p className="text-xs">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
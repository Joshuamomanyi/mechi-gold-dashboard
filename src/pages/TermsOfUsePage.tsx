import React from "react";

const TermsOfUsePage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
      
      <div className="space-y-6 text-sm text-muted-foreground">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
          <p>
            By accessing and using MechiTV, you accept and agree to be bound by the terms and provision of this agreement. 
            If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Use License</h2>
          <p>
            Permission is granted to temporarily access MechiTV for personal, non-commercial transitory viewing only. 
            This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>modify or copy the materials</li>
            <li>use the materials for any commercial purpose or for any public display</li>
            <li>attempt to reverse engineer any software contained on the website</li>
            <li>remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Ticket Purchases</h2>
          <p>
            All ticket sales are final. Tickets are non-refundable except in cases where an event is cancelled. 
            Ticket prices may vary based on availability and demand. You are responsible for ensuring the accuracy 
            of your ticket purchase information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">User Conduct</h2>
          <p>
            You agree not to use MechiTV to upload, post, or transmit any content that is unlawful, harmful, 
            threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Disclaimer</h2>
          <p>
            The materials on MechiTV are provided on an 'as is' basis. MechiTV makes no warranties, expressed or implied, 
            and hereby disclaims and negates all other warranties including without limitation, implied warranties or 
            conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4">Limitations</h2>
          <p>
            In no event shall MechiTV or its suppliers be liable for any damages (including, without limitation, 
            damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
            to use MechiTV, even if MechiTV or its authorized representative has been notified orally or in writing 
            of the possibility of such damage.
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

export default TermsOfUsePage;
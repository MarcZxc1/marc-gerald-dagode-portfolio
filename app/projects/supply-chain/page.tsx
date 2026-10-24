import type { Metadata } from "next";
import { ProjectBrief } from "@/components/site/project-brief";

export const metadata: Metadata = {
  title: "Supply Chain Portal · Project notes",
  description:
    "Replacing legacy SharePoint lists with a unified Supply Chain Portal during Marc's full-stack internship at Microgenesis.",
};

export default function SupplyChainPage() {
  return (
    <ProjectBrief
      slug="supply-chain"
      role="Full-stack Development Intern · Release coordination"
      contextTitle="From SharePoint lists to one portal."
      context="Legacy SharePoint lists kept operational tracking spread across separate records. The Supply Chain Portal brings deliveries, procurement, returns, collections, and sales orders into a shared application, with role-based access, enforced workflow states, and an audit trail from scheduling to field completion."
      contribution="During my internship at Microgenesis Business Systems, I contribute across the React client, Express API, and PostgreSQL data layer. I also coordinate development work and release checks across a four-developer team."
      decisions={[
        {
          title: "Permissions follow the workflow",
          description:
            "Role-based access and server-side checks control operational records and driver actions. Authentication supports password sign-in and Microsoft Entra ID.",
        },
        {
          title: "Keep operational changes consistent",
          description:
            "Transactional inventory updates and audit records help keep stock movements traceable. Server-side pagination keeps larger record sets manageable for the client.",
        },
        {
          title: "Make releases reviewable",
          description:
            "Automated API and browser checks, documented verification, and database preflights support staging releases and team handoffs.",
        },
      ]}
      status="Development and staging validation are ongoing. This overview describes my engineering contribution; the internal application and its operational data are not included in the portfolio."
    >
      <section
        aria-labelledby="stock-case-title"
        className="case-study__section"
        id="engineering-case"
      >
        <p className="case-study__label">03 / Engineering</p>
        <div className="case-study__copy">
          <h2 id="stock-case-title">Two requests. One stock balance.</h2>
          <p>
            Consider a synthetic SKU with 10 units available. Two requests
            arrive together, each deducting 7. If both read the original balance
            before either updates it, both can pass validation and the inventory
            record can disagree with the sales ledger.
          </p>
          <h3>Why a transaction alone was insufficient</h3>
          <p>
            Grouping stock, ledger, and audit writes makes each adjustment
            atomic. It does not, by itself, serialize a read-check-write
            sequence under the existing isolation level. Both requests can still
            validate against stale stock.
          </p>
          <h3>What I changed</h3>
          <p>
            I added per-product serialization in the application and database
            row locks before reading the current balance. The stock check and
            inventory, ledger, and audit writes stay within the same
            transaction.
          </p>
          <p>
            The application lock coordinates requests within one process. The
            database locks are the boundary for competing database transactions.
            I kept both in the fix; a real database test is still needed to
            verify behavior across separate application instances.
          </p>
          <h3>What the regression test checks</h3>
          <dl className="evidence-facts">
            <div>
              <dt>Starting stock</dt>
              <dd>10 units</dd>
            </div>
            <div>
              <dt>Concurrent requests</dt>
              <dd>Two deductions of 7 units</dd>
            </div>
            <div>
              <dt>Expected responses</dt>
              <dd>One succeeds; one is rejected for insufficient stock</dd>
            </div>
            <div>
              <dt>Final state</dt>
              <dd>3 units remain; one ledger entry is written</dd>
            </div>
          </dl>
          <p>
            The existing regression test passed when rerun on October 24, 2026.
            It also checks that the row-lock queries are issued and that the
            same-product transaction handlers do not overlap in the tested
            process.
          </p>
          <p className="evidence-note">
            Verification uses mocked database operations. It checks application
            behavior and query intent; it does not establish real PostgreSQL
            lock contention or multi-instance correctness. This example uses
            synthetic quantities and includes no customer data or internal
            application screenshots.
          </p>
          <h3>What I check in AI-assisted changes</h3>
          <p>
            I check the invariant the change must preserve: a rejected deduction
            must not change stock or create a ledger entry. Compiling
            successfully and adding a transaction are useful checks, but this
            case needs competing requests and final-state assertions as well.
          </p>
          <a
            className="text-link"
            href="/evidence/stock-concurrency-verification.json"
            download
          >
            Download verification summary
          </a>
        </div>
      </section>
    </ProjectBrief>
  );
}

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
    />
  );
}

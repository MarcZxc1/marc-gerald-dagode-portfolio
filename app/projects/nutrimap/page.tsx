import type { Metadata } from "next";
import { ProjectBrief } from "@/components/site/project-brief";

export const metadata: Metadata = {
  title: "Nutrimap · Project notes",
  description:
    "Architecture and DevOps work on Nutrimap, a university thesis prototype for digital nutrition surveillance.",
};

export default function NutrimapPage() {
  return (
    <ProjectBrief
      slug="nutrimap"
      role="Tech Lead · System Architect · DevOps Lead"
      context="Paper-based nutrition monitoring can make data entry, validation, and reporting slow and fragmented. Nutrimap is our university thesis prototype exploring how field data collection, a shared backend, and geospatial dashboards can support that workflow."
      contribution="I lead system architecture and DevOps within an eight-person thesis team. My work focuses on defining component boundaries, coordinating shared API contracts, and planning environments and deployment so mobile, web, and backend contributors can work together."
      decisions={[
        {
          title: "A focused architecture",
          description:
            "The proposed stack uses a Flutter field app, a React web dashboard, a modular FastAPI backend, and PostgreSQL with PostGIS. A shared API contract keeps the clients aligned.",
        },
        {
          title: "Field conditions shape the design",
          description:
            "Offline data collection, validation, and synchronization are central requirements. The design also accounts for scoped access and auditability when handling nutrition records.",
        },
        {
          title: "Repeatable development and delivery",
          description:
            "Docker-based local environments, shared contracts, and deployment and recovery planning give the team a common foundation for integration.",
        },
      ]}
      status="The project is in development, with architecture coordination and engineering foundations underway. Pilot deployment and evaluation are planned work; there are no completed pilot results to report yet."
    />
  );
}

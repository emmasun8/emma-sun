import { CaseStudyLayout, CSBlock } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PubMed AI Agent",
  description:
    "Demoed at AWS Startup Loft. Scalable data pipelines and structured data systems for AI-powered research workflows.",
};

export default function PubmedAIAgent() {
  return (
    <CaseStudyLayout
      num="02"
      title="PubMed AI Agent"
      subtitle="Demoed at AWS Startup Loft, 2025"
      teaser="Scalable data pipelines and structured data systems for AI-powered research workflows on top of the PubMed corpus."
      meta={[
        { label: "Role", value: "Data engineering & agent" },
        { label: "Venue", value: "AWS Startup Loft, SF" },
        { label: "Stack", value: "Python, RAG, vector store" },
        { label: "Surface", value: "Clinical-grade research" },
      ]}
      heroImage={{
        ratio: "4/3",
        alt: "PubMed AI Agent demo at AWS Startup Loft, SF",
        src: "/images/pubmed-aws-loft.jpg",
      }}
      prev={{ href: "/projects/lawxllm", label: "LAWxLLM" }}
      next={{ href: "/projects", label: "All projects" }}
    >
      <CSBlock label="Problem">
        <p>
          Clinical researchers rely on PubMed but its retrieval surface
          rewards exact-term searches over question-shaped queries. The
          gap between &ldquo;what a researcher asks&rdquo; and &ldquo;what
          the index returns&rdquo; eats hours per week.
        </p>
      </CSBlock>

      <CSBlock label="What I built">
        <p>
          Scalable ingestion and annotation pipelines for the PubMed corpus,
          plus the structured data schemas a RAG agent could actually reason
          over. The agent answers natural-language clinical questions with
          inline citations back to the source papers.
        </p>
      </CSBlock>

      <CSBlock label="Demo">
        <p>
          Showed live at the AWS Startup Loft in SF: typed an open-ended
          clinical question, the agent walked through retrieval, ranking,
          and synthesis with sources visible at every step.
        </p>
      </CSBlock>
    </CaseStudyLayout>
  );
}

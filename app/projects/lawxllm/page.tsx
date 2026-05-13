import { CaseStudyLayout, CSBlock, ImagePlaceholder } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice AI legal assistant",
  description:
    "36 hours, voice first, what we'd ship next. Stanford LAWxLLM Hackathon, 2nd place.",
};

export default function LawXLLM() {
  return (
    <CaseStudyLayout
      num="03"
      title="Voice AI legal assistant"
      subtitle="Stanford LAWxLLM Hackathon, 2nd place, 2025"
      teaser="36 hours, voice first, what we'd ship next."
      meta={[
        { label: "Role", value: "Product and GTM" },
        { label: "Event", value: "Stanford LAWxLLM 2025" },
        { label: "Outcome", value: "2nd place, jury award" },
        { label: "Modality", value: "Voice-first, chat fallback" },
      ]}
      heroImage={{
        ratio: "4/3",
        alt: "Emma with teammates on stage at Stanford LLMxLaw Hackathon, runner-up announcement on screen behind them",
        src: "/images/lawxllm-runner-up.jpg",
      }}
      result={{
        value: "2nd",
        context:
          "Out of 50+ teams. Jury feedback emphasized the user-flow and modality decisions over the underlying model choice, which is the right read. The product is the design.",
      }}
      prev={{ href: "/projects", label: "All projects" }}
      next={{ href: "/projects/pubmed-ai-agent", label: "PubMed AI Agent" }}
    >
      <CSBlock label="Problem">
        <p>
          Lorem ipsum placeholder. Personal-injury intake is broken at the
          human edge: a client calls a clinic in distress, often after an
          accident, sometimes with limited English, and the lawyer&rsquo;s
          capacity to take that first call is the binding constraint. Chatbots
          fail this user. Real copy to come.
        </p>
      </CSBlock>

      <CSBlock label="Hypothesis">
        <p>
          A voice-first assistant beats a chatbot for first-touch legal intake
          on three axes that matter: accessibility, emotional register, and
          completion rate. Voice isn&rsquo;t novelty here, it&rsquo;s the right
          modality for this user in this moment. Lorem ipsum continues.
        </p>
      </CSBlock>

      <CSBlock label="User flow">
        <p>
          Five phases: greeting, incident capture, witness and insurance,
          urgency triage, lawyer handoff. Each phase had an explicit voice
          script and a chat fallback. Lorem ipsum follows.
        </p>
        <div className="not-prose mt-4">
          <ImagePlaceholder ratio="16/9" alt="User flow diagram, five phases" />
        </div>
      </CSBlock>

      <CSBlock label="Voice vs chat: the decision">
        <p>
          Chat-first felt safer to build but failed our test users.
          Voice-first with a chat escape hatch let the distressed user
          complete intake without losing the user who hates voice. Asymmetric
          beat symmetric. Lorem ipsum continues.
        </p>
        <div className="not-prose mt-4">
          <ImagePlaceholder
            ratio="4/3"
            alt="Voice vs chat decision matrix, hand-drawn"
          />
        </div>
      </CSBlock>

      <CSBlock label="What I would ship next">
        <p>
          A clinic-ready beta with the structured-summary handoff as the core
          feature and voice as the entry point. The product is the brief; the
          voice is the invitation. Lorem ipsum closes the section.
        </p>
      </CSBlock>
    </CaseStudyLayout>
  );
}

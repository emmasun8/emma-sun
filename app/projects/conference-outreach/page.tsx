import { CaseStudyLayout, CSBlock } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Outreach Playbook",
  description:
    "Filling the funnel during conference week with no list and a sender domain no one had heard of.",
};

export default function ConferenceOutreach() {
  return (
    <CaseStudyLayout
      num="02"
      title="Conference Outreach Playbook"
      subtitle="Stripe Sessions, HumanX, 2026"
      teaser="Filling the funnel during conference week with no list and a sender domain no one had heard of."
      meta={[
        { label: "Role", value: "Marketing, Fengcha" },
        { label: "Conferences", value: "Stripe Sessions, HumanX" },
        { label: "Period", value: "2025 - 2026" },
        { label: "Output", value: "Reusable playbook" },
      ]}
      result={{
        value: "8x",
        context:
          "Warmer reply rate vs. cold LinkedIn during conference week, comparing message-for-message across channels in the same window. Side-event Luma channels delivered the highest qualified-conversation density.",
      }}
      artifact={{
        ratio: "16/9",
        alt: "Channel comparison sheet, message variants, conversion table",
      }}
      prev={{ href: "/projects/fengcha-orb", label: "Fengcha + Orb" }}
      next={{ href: "/projects/lawxllm", label: "Voice AI legal assistant" }}
    >
      <CSBlock label="Problem">
        <p>
          Real copy to come from Emma&rsquo;s existing draft. Conference week is
          five days of compressed demand, and outside that window the same
          buyers don&rsquo;t answer. The job: fill the funnel with no list, no
          budget, and a sender domain (a boba shop) no buyer had heard of.
          Lorem ipsum holds the spot.
        </p>
      </CSBlock>

      <CSBlock label="Hypothesis">
        <p>
          Cold LinkedIn loses to noise during conference week, exactly when
          every AE is doing the same thing. Permissioned audiences win:
          attendees on Luma, Eventbrite, and Meetup are voluntarily raising
          their hands. Lorem ipsum placeholder for the full hypothesis.
        </p>
      </CSBlock>

      <CSBlock label="What I tried">
        <ul>
          <li>
            <strong>A. LinkedIn cold to exhibitor AE/marketing roles.</strong>{" "}
            Verdict: sub-2% reply. Saturated channel.
          </li>
          <li>
            <strong>B. Luma side events, in person.</strong> Verdict: highest
            qualified-conversation density per hour.
          </li>
          <li>
            <strong>C. Eventbrite and Meetup hooks.</strong> Verdict: best for
            after-event traffic; turned the shop into the side-event spot.
          </li>
        </ul>
        <p>
          Lorem ipsum, expanded copy follows. The synthesis is a cost-ranked
          channel menu, not a single best channel.
        </p>
      </CSBlock>
    </CaseStudyLayout>
  );
}

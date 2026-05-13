import { CaseStudyLayout, CSBlock } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fengcha + Orb",
  description:
    "How Orb captured Stripe Sessions traffic from outside the venue.",
};

export default function FengchaOrb() {
  return (
    <CaseStudyLayout
      num="01"
      title="How Orb captured Stripe Sessions traffic from outside the venue"
      subtitle="Fengcha + Orb, 2026"
      teaser="An inbound enterprise sponsorship close from a sender domain no buyer had heard of."
      meta={[
        { label: "Role", value: "Marketing Manager, sole GTM" },
        { label: "Client", value: "Orb" },
        { label: "Channel", value: "Inbound, foot traffic" },
        { label: "Outcome", value: "Top-tier sponsor closed" },
      ]}
      heroImage={{
        ratio: "16/8",
        alt: "Fengcha LED at night, Moscone visible",
      }}
      result={{
        value: "1",
        context:
          "Enterprise sponsor closed from zero outbound. First sponsorship contract in the shop's history. Top-tier slot. Set a price floor for the next conference cycle.",
      }}
      artifact={{
        ratio: "16/9",
        alt: "Tier rate sheet, LED slot mock, signed contract",
      }}
      prev={{ href: "/projects", label: "All work" }}
      next={{ href: "/projects/conference-outreach", label: "Conference Playbook" }}
    >
      <CSBlock label="Problem">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Real copy to
          follow from Emma. Placeholder paragraph here describes the
          conference-week foot-traffic problem at a high level: thousands of
          buyers walk past the storefront every conference week, and the shop
          had been treating that surface as retail upside rather than media
          inventory. The miss was money on the table every quarter.
        </p>
      </CSBlock>

      <CSBlock label="Hypothesis">
        <p>
          Lorem ipsum hypothesis placeholder. If conference attendees physically
          walk past us, we can monetize that traffic the way an out-of-home
          media network does, provided we sell placement rather than
          &ldquo;promotion at a boba shop.&rdquo; Real copy to come.
        </p>
      </CSBlock>

      <CSBlock label="What I tried">
        <ul>
          <li>
            <strong>A. Cold outreach to event-marketing leads.</strong> Verdict:
            no closes. The asset wasn&rsquo;t legible from a deck.
          </li>
          <li>
            <strong>B. Inbound funnel inside the shop.</strong> Verdict:
            warm cards, three real conversations.
          </li>
          <li>
            <strong>C. Productized LED inventory + co-branded cup.</strong>{" "}
            Verdict: closed Orb at the top tier.
          </li>
        </ul>
        <p>
          Lorem ipsum, real expansion to follow. The honest summary is that
          inbound beat outbound the moment we wrote down the rate sheet.
        </p>
      </CSBlock>
    </CaseStudyLayout>
  );
}

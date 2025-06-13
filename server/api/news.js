
export default defineEventHandler(() => {
  return {
    featured: {
      title: "Global Climate Summit Addresses Urgent Climate Action",
      description:
        "World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.",
      category: "Environment",
      date: "October 12, 2023",
      author: "Jane Smith",
      comments: 45,
      views: 326,
      slug: "climate-summit",
      image: "/img/globalclimateImg.svg",
      content:'The Global Climate Summit 2023 in Paris brought together world leaders for critical discussions on climate action. Delegates from over 150 countries participated in intense negotiations to address the growing climate crisis. Scientists presented alarming data showing current policies would lead to dangerous warming levels, prompting urgent calls for stronger commitments. The summit resulted in several major agreements, including substantial emissions reduction targets and increased funding for developing nations vulnerable to climate impacts. A new global alliance was formed to accelerate renewable energy adoption, with ambitious goals to triple clean energy capacity. The final hours saw heated debates between industrialized nations and developing countries over responsibility and financing, but ultimately produced a historic consensus. Environmental advocates celebrated the progress while stressing the need for immediate implementation of these pledges to avoid the worst effects of climate change.',
    },
    articles: [
      {
        title: "A Decisive Victory for Progressive Policies",
        views: 123,
        comments: 48,
        slug: "progressive-policies",
        image: "/img/politics.svg",
        category: "Politics",
        content:'The recent national elections marked a dramatic political shift as progressive candidates swept to victory across multiple states. Campaigning on platforms of healthcare reform, education access, and economic equality, these candidates mobilized record numbers of young voters and minority communities. Their success reflects growing public demand for systemic change following years of political gridlock. The incoming legislators have promised swift action on long-stalled policy initiatives, though they face significant challenges in overcoming opposition from establishment figures. Political analysts note this wave represents the most significant leftward shift in decades, with potential to reshape the nations policy landscape for years to come.',
      },
      {
        title: "Tech Giants Unveil Cutting-Edge AI Innovations",
        views: 189,
        comments: 22,
        slug: "ai-innovations",
        image: "/img/technology.svg",
        category: "Technology",
        content:'Leading tech companies unveiled groundbreaking artificial intelligence advancements at this years premier industry conference. These innovations include AI systems capable of complex problem-solving, natural language processing indistinguishable from human interaction, and predictive algorithms with unprecedented accuracy. Demonstrations showed practical applications ranging from medical diagnostics to urban planning, promising to transform how we work and live. While excitement about these technological leaps dominated the event, parallel discussions addressed growing concerns about ethical implications, data privacy, and potential job market disruptions. Industry leaders pledged to develop responsible AI frameworks alongside these technological developments.',
      },
      {
        title: "COVID-19 Variants",
        views: 154,
        comments: 30,
        slug: "covid-variants",
        image: "/img/health.svg",
        category: "Health",
        content:'Health authorities worldwide are intensifying surveillance of emerging COVID-19 variants showing increased transmissibility and potential resistance to existing immunity. Epidemiologists report these new strains are driving infection surges in several regions, though vaccination continues to provide strong protection against severe outcomes. Hospitals are preparing for possible winter waves by expanding critical care capacity and stockpiling treatments. Public health officials emphasize the importance of booster shots, particularly for vulnerable populations, while researchers accelerate development of next-generation vaccines targeting multiple variants. The situation remains fluid as scientists work to understand the full implications of these viral mutations on pandemic trajectory and long-term management strategies.',
      },
    ],
  };
});



export default defineEventHandler(() => {
  return [
    {
      id: 1,
      author: "John Techson",
      avatar: "/img/EbooksImg.svg",
      title: "The Quantum Leap in Computing: Breaking the Binary Barrier",
      category: "Quantum Computing",
      date: "October 15, 2023",
      summary: "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
      content: `
The world stands on the brink of a computational revolution unlike anything since the invention of the silicon chip. Quantum computing whispers promises of solving problems that would make today's supercomputers weep with frustration. Imagine molecular simulations revealing new drug compounds in hours rather than decades, or optimization algorithms untangling global supply chain knots with elegant ease. The magic lies in those temperamental qubits - quantum bits that flirt with superposition, dancing between states in ways that would give Schrödinger's cat whiplash.

Yet for all their potential, quantum computers remain divas of the lab environment. They demand temperatures colder than interstellar space, throw tantrums when decoherence interrupts their quantum states, and currently exist in sizes better measured in dozens of qubits rather than the millions we'll need. The path forward winds through cryogenic engineering breakthroughs, error-correction algorithms, and materials science innovations. But make no mistake - when these quantum prima donnas finally take center stage, they'll perform calculations that reshape everything from cryptography to climate modeling, turning impossibilities into Tuesday afternoon routines.
      `,
      likes: 2436,
      comments: 59,
      shares: 20
    },
    {
      id: 2,
      author: "Sarah Ethicist",
      avatar: "/img/EbooksImg.svg",
      title: "The Silent Bias in Machine Judgment",
      category: "AI Ethics",
      date: "November 5, 2023",
      summary: "How our algorithms inherit and amplify society's hidden prejudices, and what we can do about it.",
      content: `
Artificial intelligence holds up a mirror to society, and the reflection often reveals uncomfortable truths. These systems, trained on oceans of human-generated data, have developed an uncanny ability to uncover and amplify biases we didn't know we had. Facial recognition stumbles over darker skin tones not because the math discriminates, but because the training data underrepresented minority groups. Loan approval algorithms penalize certain zip codes not out of malice, but because they discovered statistical patterns humans baked into the system through decades of unequal access to capital.

The solutions won't come from better math alone. We need diverse teams building these systems, auditing processes that go beyond technical metrics, and perhaps most importantly, a willingness to confront how historical inequities persist in digital form. The European Union's risk-based regulations, America's sector-specific guidelines, and China's state-controlled approach represent different cultural responses to the same fundamental question: how do we harness AI's power without cementing our past mistakes into algorithmic concrete? The answer may lie in viewing AI not as objective oracles, but as collaborators that require constant supervision and course-correction.
      `,
      likes: 3200,
      comments: 72,
      shares: 18
    },  
    {
      id: 3,
      author: "Astronomer X",
      avatar: "/img/EbooksImg.svg",
      title: "The Red Planet's Siren Call",
      category: "Space Exploration",
      date: "December 10, 2023",
      summary: "Why Mars colonization represents humanity's greatest test of ingenuity and perseverance.",
      content: `
Mars beckons with its rusty allure, a world close enough to tantalize yet hostile enough to humble. The journey itself is a gauntlet - six months adrift in the cosmic void, exposed to radiation that would make a Geiger counter dizzy, all while crammed into a tin can with the same people you'll need to depend on for survival once you arrive. And arrival brings no respite. The thin Martian atmosphere offers little protection from solar radiation, while temperatures routinely plunge low enough to freeze carbon dioxide out of the air. Every breath will come from machines extracting oxygen from carbon dioxide, every sip of water painstakingly liberated from hydrated minerals or recycled from yesterday's coffee.

Yet for all these challenges, solutions are taking shape in laboratories and prototype habitats here on Earth. We're learning to grow food in simulated regolith, developing 3D printing techniques that could turn Martian dust into shelters, and testing closed-loop life support systems that recycle everything with near-perfect efficiency. The greatest obstacle may not be technological but psychological - how humans cope with isolation, confinement, and the knowledge that rescue is impossible when you're the rescue party. Mars won't care about our dreams, but it will test whether we're truly ready to become a multi-planet species.
      `,
      likes: 3000,
      comments: 61,
      shares: 12
    },
    {
      id: 4,
      author: "Dr. Elena Biogen",
      avatar: "/img/EbooksImg.svg",
      title: "The Scissors That Could Rewrite Destiny",
      category: "Quantum Computing",
      date: "January 22, 2024",
      summary: "How CRISPR gene editing is evolving from a blunt tool to a precision instrument of miraculous potential.",
      content: `
The original CRISPR system revolutionized biology by giving researchers molecular scissors that could snip DNA at precise locations. But the true marvel lies in how these scissors are evolving into an entire surgical suite for the genome. We now have base editors that function like pencils to rewrite single genetic letters without cutting, prime editors that work as word processors with search-and-replace functionality, and epigenetic editors that adjust gene volume knobs without altering the underlying code. These tools are already curing genetic disorders that were death sentences just a decade ago - sickle cell patients walking out of hospitals cured, beta thalassemia sufferers no longer needing monthly blood transfusions.

Yet as our power grows, so do the ethical quandaries. The same technology that might eliminate malaria by editing mosquito populations could accidentally rewrite ecosystems. Treatments that correct genetic diseases in embryos venture into fraught territory where the line between therapy and enhancement blurs. And looming over everything is the question of access - will these miracle cures be available only to those who can pay premium prices? The science is advancing at breakneck speed, but society's ability to grapple with its implications moves at a more measured pace. We hold in our hands tools that could end suffering on an unprecedented scale, if we can wield them wisely.
      `,
      likes: 2780,
      comments: 84,
      shares: 32
    },
    {
      id: 5,
      author: "Neural Nate",
      avatar: "/img/EbooksImg.svg",
      title: "When Thought Becomes Command",
      category: "Space Exploration",
      date: "February 18, 2024",
      summary: "The astonishing progress of brain-computer interfaces and what it means for human capability.",
      content: `
The most intimate human-machine interfaces are shedding their keyboards and touchscreens, opting instead for a direct line to our neurons. Paralyzed patients who haven't moved their limbs in years are now feeding themselves with robotic arms controlled by thought alone. Stroke survivors unable to speak are composing messages simply by imagining writing them. These aren't science fiction scenarios - they're happening today in clinical trials across the world. The technology ranges from hair-thin electrodes implanted in motor cortex to non-invasive caps that read brain activity through the skull.

But the implications extend far beyond medical miracles. As these interfaces become more sophisticated, they challenge fundamental assumptions about human autonomy and privacy. What happens when our thoughts can control devices? Could they someday be intercepted or, more chillingly, influenced? The military sees potential for pilots controlling drones with their minds, while educators wonder if neural interfaces could accelerate learning. And philosophers grapple with questions that were previously hypothetical - if I control a robot arm with my thoughts, is that arm part of me? The boundary between mind and machine grows more porous by the day, promising extraordinary capabilities while demanding new ethical frameworks to govern them.
      `,
      likes: 3450,
      comments: 127,
      shares: 45
    },
    
    {
      id: 6,
      author: "Captain Green",
      avatar: "/img/EbooksImg.svg",
      title: "Sucking Carbon From the Sky",
      category: "AI Ethics",
      date: "March 5, 2024",
      summary: "The audacious technologies attempting to reverse centuries of emissions by pulling CO₂ straight from the atmosphere.",
      content: `
The Icelandic facility looks like something from a sci-fi novel - shipping container-sized modules humming as they pull carbon dioxide from thin air, mix it with water, and pump it deep underground where it mineralizes into stone. This is direct air capture in action, one of several radical approaches to undo what the Industrial Revolution wrought. Elsewhere, researchers are spreading crushed basalt on farmland, accelerating natural weathering processes that lock away CO₂. Others cultivate massive seaweed farms destined for the ocean depths, creating biological carbon sinks. Even concrete, that most mundane of materials, is being reinvented as a carbon storage medium.

The challenges are as immense as the stakes. Current carbon removal costs could bankrupt nations if scaled globally, though prices are falling faster than solar panels did. Energy requirements are substantial, demanding clean power sources to avoid paradoxical emissions. And verification remains tricky - how do you certify a ton of CO₂ removed won't return for centuries? Yet despite these hurdles, the field is progressing from boutique demonstrations to industrial-scale deployments. The coming decade will reveal whether these technologies can transition from promising experiments to meaningful climate solutions, whether we can indeed teach the sky to forget our fossil fuel follies.
      `,
      likes: 4120,
      comments: 156,
      shares: 89
    }
  ];
});
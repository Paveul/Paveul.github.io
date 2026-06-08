const classesData = [
  {
    id: 'class-posets',
    title: 'Posets & Galois Connections',
    summary: `
    All around mathematics there are examples of partial orders.
    We study these structures and the basic tools used to analyze them,
    with small excursions to lattices, poset dimension, ordinals, and Möbius inversion,
    culminating with Galois connections as a unifying framework for dualities.`,
    links: [
      { text: 'Course notes with solutions', link: 'https://drive.google.com/file/d/18Ke5TXPhm7jdGAs6NZMZas3dEFT39jjx/view?usp=sharing' },
      { text: 'Course notes without solutions', link: 'https://drive.google.com/file/d/1SORilowl8OL_-pJWlkmvxMZUv3oEmIhC/view?usp=sharing' }
    ],
    tags: [
      { text: 'MBL 2025', link: 'https://mathsbeyondlimits.eu/poland/mbl-2025/' }
    ],
    image: {
      src: 'assets/standalone_posets_size_4.svg',
      alt: '16 posets of size 4'
    },
    genesis: [
      `My favourite type of mathematical objects are those which are <b>easy to define</b>, yet they give rise to <b>rich complexity</b>. Groups, which I ended up specialising in during my academic life, definitely full into this category and so do posets—which this class is about.`,
      `Besides their elegance, posets are also <b>everywhere</b>. Every time there is any sort of hierarchy, or comparison between your objects of interest, or between their elements, posets will come handy as a language to talk about it. The second part of the class title—<i>Galois connections</i>—is a prime example of this naturality.`,
      `There was another reason for my motivation to include Galois connections: whenever I had to learn Galois Theory, I was confused about which parts of the proof of the Fundamental Theorem are simple consequences of certain poset-theoretic inclusions and which ones <i>actually prove something</i>. So the connections, beyond serving as good examples of posets, also serve as a great tool when learning Galois Theory.`,
      `Finally, what I think makes the topic suitable for a class for talented high-school aged maths enthusiasts is that there are lots of fun problems to think about.`
    ],
    teachingNotes: [
      `The class was planned for the 3-day $\\times$ 80 min format of <a href="https://mathsbeyondlimits.eu/" target="_blank" rel="noopener noreferrer">MBL</a>, but there is much more material in the notes.`,
      `The rough plan was as follows: at first the students are guided into coming up with the basic definitions and examples. Next they choose one or two extension topics to dive deeper in, according to their natural preferences. Finally, we all meet together for the <i>Grand Finale</i>, which is examples and the theory of Galois connections.`,
    ]
  },
  {
    id: 'class-exotic-cousins',
    title: 'Exotic Cousins of Integers',
    summary: `
    Ever got angry that there is no way to factorize $x^2+y^2$?
    Come to the dark side, where we treat $i = \\sqrt{-1}$ as if it were an integer.
    This class introduces the algebraic language of rings needed to explore these
    exotic 'cousins' of integers and understand unique factorization.`,
    links: [
      { text: 'Course notes without solutions', link: 'https://drive.google.com/open?id=1hmlYe6J9nJiTjtzPgluYAQsZ_-jnxUc4&usp=drive_fs' },
      { text: 'Course notes with solutions', link: 'https://drive.google.com/open?id=1WkSNjiq7hxgOJLY6cZiL8OoFSUmRJ-D1&usp=drive_fs' }
    ],
    tags: [
      { text: 'MBL 2024', link: 'https://mathsbeyondlimits.eu/poland/mbl-2024/' }
    ],
    image: null,
    genesis: [
      `Placeholder text for the genesis of the Exotic Cousins of Integers class. This section will describe the motivation and origin of the course.`
    ],
    teachingNotes: [
      `This class aims to arm you with the algebraic language of rings needed to explore these exotic 'cousins' of integers. Discover which primes can be expressed as $x^2 + 2y^2$, and learn about an 1847 failed attempt to prove Fermat's Last Theorem—and how it actually works for $x^3 + y^3 = z^3$.`
    ]
  },
  {
    id: 'class-symmetry',
    title: 'What is Symmetry, Actually?',
    summary: `
    An exploration of symmetry from a mathematical perspective,
    understanding the foundational concepts of groups and their actions
    through geometric examples like the tetrahedron and solving the cubic equation.`,
    links: [
      { text: 'Course notes without solutions', link: 'https://drive.google.com/open?id=1nvTRSYz_5nsUUdmaB4u43dxrBclzC70W&usp=drive_fs' },
      { text: 'Course notes with solutions', link: 'https://drive.google.com/open?id=12YNjy5Qqzl82l7FYus_s6dSJP4pXkPph&usp=drive_fs' },
    ],
    tags: [
      { text: 'MBL 2020', link: 'https://mathsbeyondlimits.eu/poland/mbl-2020/' },
      { text: 'MBL Balkans 2026', link: 'https://mathsbeyondlimits.eu/balkans/' }
    ],
    image: null,
    genesis: [
      `Placeholder text for the genesis of the Symmetry class. This section will describe the motivation and origin of the course.`
    ],
    teachingNotes: [
      `The purpose of this class is gaining intuition for 'how symmetry works' and later structuring the understanding in terms of the very basic definitions of group theory. In fact, this can be regarded as an introduction to group theory via studying group actions. We aim to build intuition and give motivation for them via 'playing' with concrete examples such as platonic solids, permutation puzzles and symmetric polynomials.`
    ]
  },
  {
    id: 'class-markov-chains',
    title: '(PL) Łańcuchy Markowa',
    summary: `
    Które pole w Monopoly jest odwiedzane najczęściej?
    Dlaczego po losowym spacerze w 1D i 2D zawsze wrócimy do domu —
    ale w 3D możemy błąkać się wiecznie? Wprowadzenie do łańcuchów Markowa
    od podstaw aż do algorytmu PageRank.`,
    links: [
      { text: 'Notatki bez rozwiązań', link: 'https://drive.google.com/open?id=1Tl0ZQj5T0PUug8ytdzP0auPdCXRrg1kF&usp=drive_fs' },
      { text: 'Notatki z rozwiązaniami', link: 'https://drive.google.com/open?id=1lBo7Ho_b13kb7iIDTDfpdtUEGxdM_s-3&usp=drive_fs' }
    ],
    tags: [
      { text: 'Falenty 2026', link: 'https://fundusz.org/fundusz-zdolni-rekrutacja/obozy/' }
    ],
    image: null,
    genesis: [
      `Placeholder text for the genesis of the Markov Chains class. This section will describe the motivation and origin of the course.`
    ],
    teachingNotes: [
      `Na zajęciach zrozumiemy, co to znaczy formalnie i zobaczymy kilka zaskakujących własności tych łańcuchów, a po drodze zahaczymy, chcąc nie chcąc, o podstawy algebry liniowej.`
    ]
  }
];

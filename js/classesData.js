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
    image1: {
      src: 'assets/standalone_posets_size_4.svg',
      alt: '16 posets of size 4'
    },
    image2: {
      src: 'assets/standalone_poset_partitions_4.svg',
      alt: 'Lattice of partitions of a set of size 4'
    },
    genesis: [
      `My favourite type of mathematical objects are those
      which are <b>easy to define</b>,
      yet they give rise to <b>rich complexity</b>.
      Groups, which I ended up specialising in
      during my academic life, definitely full into this category
      and so do posets—which this class is about.`,

      `Besides their elegance, posets are also <b>everywhere</b>.
      Every time there is any sort of hierarchy,
      or comparison between your objects of interest,
      or between their elements,
      posets will come handy as a language to talk about it.
      The second part of the class title—<i>Galois connections</i>—
      is a prime example of this naturality.`,

      `There was another reason for my motivation to include Galois connections:
      whenever I had to learn Galois Theory, I was confused about which parts
      of the proof of the Fundamental Theorem are simple consequences of
      certain poset-theoretic inclusions
      and which ones <i>actually prove something</i>.
      So the connections, beyond serving as good examples of posets,
      also serve as a great tool when learning Galois Theory.`,

      `Finally, what I think makes the topic suitable for a class
      for talented high-school aged maths enthusiasts is that
      there are lots of fun problems to think about.`
    ],
    teachingNotes: [
      `The class was planned for the 3-day $\\times$ 80 min format of
      <a href="https://mathsbeyondlimits.eu/" target="_blank" rel="noopener noreferrer">MBL</a>,
      but there is much more material in the notes.`,

      `The rough plan was as follows:
      at first the students are guided into coming up with the basic definitions and examples.
      Next they choose one or two extension topics to dive deeper in,
      according to their natural preferences.
      Finally, we all meet together for the <i>Grand Finale</i>,
      which is examples and the theory of Galois connections.`
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
    image2: {
      src: 'assets/standalone_ramification.svg',
      alt: 'Ramification of primes'
    },
    image1: {
      src: 'assets/standalone_Eisenstein_1.svg',
      alt: 'Eisenstein integers grid'
    },
    genesis: [
      `I really really like algebra and I can't miss an opportunity to indoctrinate the young with it.
      The problem is that when algebra is taught from an <b>abstract / axiomatic perspective</b>,
      it inevitably ends up <b>dry and boring</b>.
      Dry and boring isn't what can capture young mathematicians;
      instead the key is hooking them up with fun problems,
      challenging their understanding of what they thought was obvious
      and making them come up with the right notions themselves, 
      or at least making them appreciate that they are introduced for something.`,

      `This class is really a gentle introduction to <i>algebraic number theory</i>,
      done from a perspective full of <b>motivating examples</b> and <b>geometric intuition</b>.`
    ],
    teachingNotes: [
      `The class was planned for a 3-day $\\times$ 80 min format of
      <a href="https://mathsbeyondlimits.eu/" target="_blank" rel="noopener noreferrer">MBL</a>
      and it roughly fitted this timeframe, though while the first two days were done in an <i>'explore it yourself'</i> format,
      the second half of the last day (where we proved $x^3 + y^3 = z^3$ has no non-trivial solutions in the integers)
      was done more as a <i>standard lecture</i>.`,

      `The first day was a close examination of the Fundamental Theorem of Arithmetic 
      and thinking what it is that we actually need to prove it.
      This was followed by learning the <i>adult</i> definitions of ring theory,
      with many examples and easy problems, leading to the introduction of rings of the form $\\mathbb{Z}[\\alpha]$.
      We then discussed units, irreducibles, primes and norms,
      culminating in the re-statement of the Fundamental Theorem of Arithmetic 
      in the definitions of a UFD and a PID.`,

      `In the second day we used a little geometry generalising the Euclidean Algorithm 
      to give examples of rings which are PIDs and also to understand why 
      $6 = 2 \\cdot 3 = (1+\\sqrt{-5})\\cdot(1-\\sqrt{-5})$ is problematic.
      We then used the uniqueness of factorisation in some of these rings 
      to study Pythagorean triples, primes of form $x^2 + 2y^2$ and 
      how primes split in general.`,

      `The last bit was using the uniqueness of factorisation in Eisenstein integers 
      to prove Fermat's Last Theorem for $n=3$.`,

      `If I had more time, I'd dive deeper into Pell's equation, the units of real quadratic fields
      and maybe do a little <i>campfire talk</i> about prime ideals factorisation and the class group.`
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
    image1: {
      src: 'assets/standalone_cube_symmetries.svg',
      alt: 'Cube symmetries'
    },
    image2: {
      src: 'assets/standalone_15_puzzle.svg',
      alt: '15 puzzle'
    },
    genesis: [

    ],
    teachingNotes: [

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
    image1: {
      src: 'assets/standalone_hht_hth_cube.svg',
      alt: 'HHT and HTH game state cube'
    },
    image2: {
      src: 'assets/standalone_communication_classes_solution.svg',
      alt: 'Markov chain communication classes'
    },
    genesis: [

    ],
    teachingNotes: [

    ]
  }
];

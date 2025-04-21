
// Sample lessons data for the Five-Minute Brainboost app
export interface Lesson {
  id: string;
  category: 'history' | 'science' | 'coding';
  title: string;
  content: string[];
  imageUrl: string;
}

export const lessons: Lesson[] = [
  // History lessons
  {
    id: 'history-1',
    category: 'history',
    title: 'The Renaissance Period',
    content: [
      "The Renaissance was a period of European cultural, artistic, political, and scientific 'rebirth' that spanned from the 14th to the 17th century.",
      "It began in Florence, Italy, and later spread to the rest of Europe. The Renaissance promoted the rediscovery of classical philosophy, literature, and art.",
      "Key figures included Leonardo da Vinci, Michelangelo, and Raphael, who created works that demonstrated a renewed interest in nature, anatomy, and perspective.",
      "The invention of the printing press by Johannes Gutenberg around 1440 helped spread knowledge quickly across Europe.",
      "The Renaissance marked the transition from the Middle Ages to modernity, with shifts toward individualism, humanism, and scientific inquiry."
    ],
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'history-2',
    category: 'history',
    title: 'The Industrial Revolution',
    content: [
      "The Industrial Revolution was the transition to new manufacturing processes in Great Britain, continental Europe, and the United States, in the period from about a760 to 1820-1840.",
      "It marked a major turning point in history, as hand production methods shifted to machines, new chemical manufacturing processes were introduced, and iron production increased.",
      "The textile industry was at the forefront of the revolution, with inventions like the spinning jenny and power loom increasing productivity dramatically.",
      "The development of steam power was crucial, with James Watt's improvements to the steam engine powering factories and later transportation.",
      "While it improved living standards over time, the early Industrial Revolution often featured difficult working conditions, child labor, and environmental pollution."
    ],
    imageUrl: '/placeholder.svg'
  },
  
  // Science lessons
  {
    id: 'science-1',
    category: 'science',
    title: 'The Structure of DNA',
    content: [
      "DNA (deoxyribonucleic acid) is the hereditary material in humans and almost all other organisms. Nearly every cell in a person's body has the same DNA.",
      "The DNA molecule consists of two strands that wind around each other like a twisted ladder - this shape is known as a double helix.",
      "Each strand has a backbone made of alternating sugar (deoxyribose) and phosphate groups. Attached to each sugar is one of four bases: adenine (A), cytosine (C), guanine (G), or thymine (T).",
      "The two strands are held together by bonds between the bases: adenine bonds with thymine, and cytosine bonds with guanine.",
      "James Watson and Francis Crick, along with the often-overlooked Rosalind Franklin and Maurice Wilkins, helped discover the structure of DNA in 1953."
    ],
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'science-2',
    category: 'science',
    title: 'The Theory of Relativity',
    content: [
      "Albert Einstein's Theory of Relativity revolutionized our understanding of space, time, and gravity.",
      "The Special Theory of Relativity (1905) established that the laws of physics are the same for all non-accelerating observers and showed that the speed of light within a vacuum is the same regardless of the motion of the light source or observer.",
      "It introduced the famous equation E=mc², demonstrating that energy (E) and mass (m) are interchangeable, with c representing the speed of light.",
      "The General Theory of Relativity (1915) expanded the theory to include gravity, which Einstein described as a warping of spacetime caused by mass and energy.",
      "This theory predicted several phenomena later confirmed by observations, including the bending of light around massive objects and the existence of black holes."
    ],
    imageUrl: '/placeholder.svg'
  },
  
  // Coding lessons
  {
    id: 'coding-1',
    category: 'coding',
    title: 'Introduction to JavaScript Functions',
    content: [
      "Functions are one of the fundamental building blocks in JavaScript. A function is a set of statements that performs a task or calculates a value.",
      "Functions are defined using the 'function' keyword, followed by a name, parentheses (), and curly braces {}. The code to be executed goes inside the curly braces.",
      "Example: function greet(name) { return `Hello, ${name}!`; }",
      "Functions can take parameters (inputs) and return values using the 'return' statement. If no return statement is specified, the function returns 'undefined'.",
      "JavaScript also supports arrow functions (introduced in ES6), providing a more concise syntax. Example: const greet = (name) => `Hello, ${name}!`;"
    ],
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'coding-2',
    category: 'coding',
    title: 'Understanding CSS Flexbox',
    content: [
      "CSS Flexbox (Flexible Box Module) is a one-dimensional layout model designed to arrange items in rows or columns.",
      "To create a flex container, set the display property to 'flex' or 'inline-flex'. Example: .container { display: flex; }",
      "The main axis is defined by the 'flex-direction' property (row, row-reverse, column, or column-reverse), while the cross axis runs perpendicular to it.",
      "Key properties for the container include justify-content (aligns items along the main axis), align-items (aligns items along the cross axis), and flex-wrap (controls whether items wrap to new lines).",
      "For flex items, properties like flex-grow, flex-shrink, and flex-basis control how items grow, shrink, and their initial size. These can be combined in the shorthand 'flex' property."
    ],
    imageUrl: '/placeholder.svg'
  }
];

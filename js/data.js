// Academic Data Structure with GitHub Repository Links
const academicData = {
    semesters: [
        {
            id: 'semester-1',
            name: 'Semester 1',
            year: '2022',
            season: 'Fall',
            courses: [
                {
                    code: 'NS1001',
                    name: 'Applied Physics',
                    type: 'theory',
                    description: 'Physics principles and their applications in computing and engineering.',
                    learningOutcomes: [
                        'Understand fundamental physics concepts',
                        'Apply physics principles to real-world problems',
                        'Learn about electricity and magnetism'
                    ],
                    tools: ['Lab Equipment', 'Simulation Software'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/PF/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/PF/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/PF/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/PF/Past-Papers'
                    }
                },
                {
                    code: 'MT1003',
                    name: 'Calculus and Analytical Geometry',
                    type: 'theory',
                    description: 'Mathematical foundations including limits, derivatives, and integrals.',
                    learningOutcomes: [
                        'Master calculus concepts and techniques',
                        'Solve analytical geometry problems',
                        'Apply mathematical reasoning'
                    ],
                    tools: ['MATLAB', 'Graphing Calculators'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/ICT/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/ICT/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/ICT/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/ICT/Past-Papers'
                    }
                },
                {
                    code: 'SS1004',
                    name: 'English Composition and Comprehension',
                    type: 'theory',
                    description: 'Advanced English language skills for academic and professional contexts.',
                    learningOutcomes: [
                        'Master academic writing',
                        'Develop critical reading skills',
                        'Enhance verbal communication'
                    ],
                    tools: [],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Calculus/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Calculus/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Calculus/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Calculus/Past-Papers'
                    }
                },
                {
                    code: 'CL1000',
                    name: 'Introduction to Information and Communication Technology',
                    type: 'theory',
                    description: 'Introduction to fundamental ICT concepts, computer systems, and digital literacy.',
                    learningOutcomes: [
                        'Understand basic computer architecture and components',
                        'Learn fundamental ICT concepts and terminology',
                        'Develop digital literacy skills'
                    ],
                    tools: ['Microsoft Office', 'Windows OS', 'Internet Tools'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/English/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/English/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/English/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/English/Past-Papers'
                    }
                },
                {
                    code: 'SS1003',
                    name: 'Pakistan Studies',
                    type: 'theory',
                    description: 'Study of Pakistan\'s history, culture, and socio-political development.',
                    learningOutcomes: [
                        'Understand Pakistan\'s historical context',
                        'Learn about cultural heritage',
                        'Analyze socio-political developments'
                    ],
                    tools: [],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Pakistan-Studies/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Pakistan-Studies/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Pakistan-Studies/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Pakistan-Studies/Past-Papers'
                    }
                },
                {
                    code: 'CS1002',
                    name: 'Programming Fundamentals',
                    type: 'theory',
                    description: 'Introduction to programming concepts, algorithms, and problem-solving techniques.',
                    learningOutcomes: [
                        'Understand programming logic and control structures',
                        'Learn data types, variables, and operators',
                        'Develop algorithmic thinking'
                    ],
                    tools: ['C/C++', 'Flowcharts', 'Pseudocode'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Pakistan-Studies/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Pakistan-Studies/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Pakistan-Studies/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Course/Pakistan-Studies/Past-Papers'
                    }
                }
            ],
            labs: [
                {
                    code: 'PF-LAB',
                    name: 'PF Lab',
                    description: 'Programming Fundamentals Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Lab/PF-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Lab/PF-Lab/Lab-Project'
                    }
                },
                {
                    code: 'ICT-LAB',
                    name: 'ICT Lab',
                    description: 'Information and Communication Technology Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Lab/ICT-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-1/Lab/ICT-Lab/Lab-Project'
                    }
                }
            ]
        },
        {
            id: 'semester-2',
            name: 'Semester 2',
            year: '2023',
            season: 'Spring',
            courses: [
                {
                    code: 'SS1008',
                    name: 'Communication and Presentation Skills',
                    type: 'theory',
                    description: 'Theory and practice of effective communication in professional settings.',
                    learningOutcomes: [
                        'Master communication theories',
                        'Develop presentation strategies',
                        'Enhance interpersonal skills'
                    ],
                    tools: [],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/OOP/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/OOP/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/OOP/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/OOP/Past-Papers'
                    }
                },
                {
                    code: 'MT1006',
                    name: 'Differential Equations',
                    type: 'theory',
                    description: 'Ordinary and partial differential equations with applications.',
                    learningOutcomes: [
                        'Solve differential equations',
                        'Apply to real-world problems',
                        'Understand mathematical modeling'
                    ],
                    tools: ['MATLAB', 'Mathematica'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/DLD/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/DLD/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/DLD/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/DLD/Past-Papers'
                    }
                },
                {
                    code: 'EE1005',
                    name: 'Digital Logic Design',
                    type: 'theory',
                    description: 'Fundamentals of digital circuits and logic design.',
                    learningOutcomes: [
                        'Understand Boolean algebra',
                        'Design combinational and sequential circuits',
                        'Analyze digital systems'
                    ],
                    tools: ['Logisim', 'Proteus'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Linear-Algebra/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Linear-Algebra/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Linear-Algebra/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Linear-Algebra/Past-Papers'
                    }
                },
                {
                    code: 'SS1002',
                    name: 'Islamic Studies/Ethics',
                    type: 'theory',
                    description: 'Study of Islamic principles and ethical frameworks.',
                    learningOutcomes: [
                        'Understand Islamic teachings',
                        'Learn ethical principles',
                        'Apply moral reasoning'
                    ],
                    tools: [],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Communication-Skills/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Communication-Skills/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Communication-Skills/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Communication-Skills/Past-Papers'
                    }
                },
                {
                    code: 'CS1004',
                    name: 'Object Oriented Programming',
                    type: 'theory',
                    description: 'Core concepts of object-oriented programming paradigm.',
                    learningOutcomes: [
                        'Understand OOP principles',
                        'Learn encapsulation, inheritance, and polymorphism',
                        'Design object-oriented solutions'
                    ],
                    tools: ['C++', 'Java', 'UML'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Probability/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Probability/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Probability/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Course/Probability/Past-Papers'
                    }
                }
            ],
            labs: [
                {
                    code: 'OOP-LAB',
                    name: 'OOP Lab',
                    description: 'Object Oriented Programming Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Lab/OOP-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Lab/OOP-Lab/Lab-Project'
                    }
                },
                {
                    code: 'DLD-LAB',
                    name: 'DLD Lab',
                    description: 'Digital Logic Design Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Lab/DLD-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-2/Lab/DLD-Lab/Lab-Project'
                    }
                }
            ]
        },
        {
            id: 'semester-3',
            name: 'Semester 3',
            year: '2023',
            season: 'Fall',
            courses: [
                {
                    code: 'EE2003',
                    name: 'Computer Organization and Assembly Language',
                    type: 'theory',
                    description: 'Computer architecture and low-level programming.',
                    learningOutcomes: [
                        'Understand computer architecture',
                        'Learn assembly language programming',
                        'Study CPU organization'
                    ],
                    tools: ['MASM', 'NASM', 'EMU8086'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/DS/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/DS/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/DS/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/DS/Past-Papers'
                    }
                },
                {
                    code: 'CS2001',
                    name: 'Data Structures',
                    type: 'theory',
                    description: 'Study of fundamental data structures and their applications.',
                    learningOutcomes: [
                        'Understand arrays, linked lists, stacks, queues',
                        'Learn trees and graphs',
                        'Analyze algorithm efficiency'
                    ],
                    tools: ['C++', 'Java'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/DBMS/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/DBMS/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/DBMS/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/DBMS/Past-Papers'
                    }
                },
                {
                    code: 'CS1005',
                    name: 'Discrete Structures',
                    type: 'theory',
                    description: 'Mathematical structures for computer science including logic, sets, and graphs.',
                    learningOutcomes: [
                        'Master discrete mathematics',
                        'Understand graph theory',
                        'Apply mathematical logic'
                    ],
                    tools: ['Mathematical Software'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/COAL/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/COAL/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/COAL/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/COAL/Past-Papers'
                    }
                },
                {
                    code: 'MT1004',
                    name: 'Linear Algebra',
                    type: 'theory',
                    description: 'Vector spaces, matrices, and linear transformations.',
                    learningOutcomes: [
                        'Master matrix operations',
                        'Understand vector spaces',
                        'Solve linear systems'
                    ],
                    tools: ['MATLAB', 'NumPy'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/Discrete-Math/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/Discrete-Math/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/Discrete-Math/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/Discrete-Math/Past-Papers'
                    }
                },
                {
                    code: 'SS2003',
                    name: 'Psychology',
                    type: 'theory',
                    description: 'Introduction to psychological principles and human behavior.',
                    learningOutcomes: [
                        'Understand psychological concepts',
                        'Learn about human behavior',
                        'Apply psychological principles'
                    ],
                    tools: [],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/Statistics/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/Statistics/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/Statistics/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Course/Statistics/Past-Papers'
                    }
                }
            ],
            labs: [
                {
                    code: 'DS-LAB',
                    name: 'DS Lab',
                    description: 'Data Structures Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Lab/DS-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Lab/DS-Lab/Lab-Project'
                    }
                },
                {
                    code: 'DBMS-LAB',
                    name: 'DBMS Lab',
                    description: 'Database Management Systems Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Lab/DBMS-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-3/Lab/DBMS-Lab/Lab-Project'
                    }
                }
            ]
        },
        {
            id: 'semester-4',
            name: 'Semester 4',
            year: '2024',
            season: 'Spring',
            courses: [
                {
                    code: 'CS2005',
                    name: 'Database Systems',
                    type: 'theory',
                    description: 'Database design, SQL, and database management systems.',
                    learningOutcomes: [
                        'Understand database concepts',
                        'Learn normalization and ER modeling',
                        'Master SQL and transactions'
                    ],
                    tools: ['SQL', 'Database Management Systems'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/Algorithms/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/Algorithms/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/Algorithms/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/Algorithms/Past-Papers'
                    }
                },
                {
                    code: 'CS2009',
                    name: 'Design and Analysis of Algorithms',
                    type: 'theory',
                    description: 'Algorithm design techniques and complexity analysis.',
                    learningOutcomes: [
                        'Master algorithm design paradigms',
                        'Analyze algorithm complexity',
                        'Solve optimization problems'
                    ],
                    tools: ['Python', 'C++'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/OS/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/OS/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/OS/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/OS/Past-Papers'
                    }
                },
                {
                    code: 'CS2006',
                    name: 'Operating Systems',
                    type: 'theory',
                    description: 'Operating system concepts including processes, memory, and file systems.',
                    learningOutcomes: [
                        'Understand OS architecture',
                        'Learn process management',
                        'Study memory and file systems'
                    ],
                    tools: ['Linux', 'Windows'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/SE/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/SE/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/SE/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/SE/Past-Papers'
                    }
                },
                {
                    code: 'MT2005',
                    name: 'Probability and Statistics',
                    type: 'theory',
                    description: 'Probability theory and statistical methods for data analysis.',
                    learningOutcomes: [
                        'Master probability concepts',
                        'Learn statistical inference',
                        'Apply data analysis techniques'
                    ],
                    tools: ['R', 'Python', 'SPSS'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/CN/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/CN/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/CN/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/CN/Past-Papers'
                    }
                },
                {
                    code: 'MG1002',
                    name: 'Marketing Management',
                    type: 'theory',
                    description: 'Principles of marketing and business management.',
                    learningOutcomes: [
                        'Understand marketing concepts',
                        'Learn business strategies',
                        'Develop management skills'
                    ],
                    tools: [],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/Linear-Algebra-II/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/Linear-Algebra-II/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/Linear-Algebra-II/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Course/Linear-Algebra-II/Past-Papers'
                    }
                }
            ],
            labs: [
                {
                    code: 'OS-LAB',
                    name: 'OS Lab',
                    description: 'Operating Systems Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Lab/OS-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Lab/OS-Lab/Lab-Project'
                    }
                },
                {
                    code: 'CN-LAB',
                    name: 'CN Lab',
                    description: 'Computer Networks Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Lab/CN-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-4/Lab/CN-Lab/Lab-Project'
                    }
                }
            ]
        },
        {
            id: 'semester-5',
            name: 'Semester 5',
            year: '2024',
            season: 'Fall',
            courses: [
                {
                    code: 'CS3001',
                    name: 'Computer Networks',
                    type: 'theory',
                    description: 'Network protocols, architectures, and communication systems.',
                    learningOutcomes: [
                        'Understand network layers',
                        'Learn TCP/IP protocols',
                        'Study network security'
                    ],
                    tools: ['Networking Tools', 'Simulators'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/AI/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/AI/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/AI/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/AI/Past-Papers'
                    }
                },
                {
                    code: 'CS2008',
                    name: 'Numerical Computing',
                    type: 'theory',
                    description: 'Numerical methods for solving mathematical problems.',
                    learningOutcomes: [
                        'Implement numerical algorithms',
                        'Solve equations numerically',
                        'Understand error analysis'
                    ],
                    tools: ['MATLAB', 'Python', 'NumPy'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/Compiler/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/Compiler/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/Compiler/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/Compiler/Past-Papers'
                    }
                },
                {
                    code: 'CS3004',
                    name: 'Software Design and Analysis',
                    type: 'theory',
                    description: 'Software engineering principles, design patterns, and system analysis.',
                    learningOutcomes: [
                        'Master software design patterns',
                        'Learn system analysis techniques',
                        'Apply software engineering principles'
                    ],
                    tools: ['UML', 'Design Tools', 'Java'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/Web/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/Web/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/Web/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/Web/Past-Papers'
                    }
                },
                {
                    code: 'SS2007',
                    name: 'Technical and Business Writing',
                    type: 'theory',
                    description: 'Professional writing for technical and business contexts.',
                    learningOutcomes: [
                        'Write technical documentation',
                        'Create business reports',
                        'Develop professional writing skills'
                    ],
                    tools: ['LaTeX', 'Microsoft Word'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/SD/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/SD/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/SD/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/SD/Past-Papers'
                    }
                },
                {
                    code: 'CS3005',
                    name: 'Theory of Automata',
                    type: 'theory',
                    description: 'Formal languages, automata theory, and computational models.',
                    learningOutcomes: [
                        'Understand finite automata',
                        'Learn context-free grammars',
                        'Study Turing machines'
                    ],
                    tools: ['JFLAP', 'Theoretical Tools'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/DB2/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/DB2/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/DB2/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Course/DB2/Past-Papers'
                    }
                }
            ],
            labs: [
                {
                    code: 'AI-LAB',
                    name: 'AI Lab',
                    description: 'Artificial Intelligence Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Lab/AI-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Lab/AI-Lab/Lab-Project'
                    }
                },
                {
                    code: 'COMPILER-LAB',
                    name: 'Compiler Lab',
                    description: 'Compiler Construction Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Lab/Compiler-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-5/Lab/Compiler-Lab/Lab-Project'
                    }
                }
            ]
        },
        {
            id: 'semester-6',
            name: 'Semester 6',
            year: '2025',
            season: 'Spring',
            courses: [
                {
                    code: 'AI2002',
                    name: 'Artificial Intelligence',
                    type: 'theory',
                    description: 'Fundamentals of AI including search algorithms, knowledge representation, and machine learning.',
                    learningOutcomes: [
                        'Understand AI concepts and techniques',
                        'Implement search algorithms',
                        'Learn machine learning basics'
                    ],
                    tools: ['Python', 'TensorFlow', 'scikit-learn'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester%206/AI2002-Artificial%20Intelligence/COURSE/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester%206/AI2002-Artificial%20Intelligence/COURSE/Quizez',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester%206/AI2002-Artificial%20Intelligence/COURSE/ASSIGNMENTS',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester%206/AI2002-Artificial%20Intelligence/COURSE/PastPapers'
                    }
                },
                {
                    code: 'CS4031',
                    name: 'Compiler Construction',
                    type: 'theory',
                    description: 'Design and implementation of compilers and interpreters.',
                    learningOutcomes: [
                        'Understand compiler phases',
                        'Implement lexical and syntax analysis',
                        'Learn code generation'
                    ],
                    tools: ['Flex', 'Bison', 'LLVM'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/Mobile/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/Mobile/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/Mobile/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/Mobile/Past-Papers'
                    }
                },
                {
                    code: 'CS3006',
                    name: 'Parallel and Distributed Computing',
                    type: 'theory',
                    description: 'Parallel algorithms, distributed systems, and concurrent programming.',
                    learningOutcomes: [
                        'Understand parallel computing',
                        'Learn distributed systems',
                        'Implement concurrent algorithms'
                    ],
                    tools: ['MPI', 'OpenMP', 'Hadoop'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/Parallel/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/Parallel/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/Parallel/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/Parallel/Past-Papers'
                    }
                },
                {
                    code: 'CS3009',
                    name: 'Software Engineering',
                    type: 'theory',
                    description: 'Software development lifecycle, methodologies, and project management.',
                    learningOutcomes: [
                        'Understand SDLC phases',
                        'Learn Agile and Scrum',
                        'Apply software engineering practices'
                    ],
                    tools: ['Git', 'JIRA', 'Project Management Tools'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/InfoSec/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/InfoSec/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/InfoSec/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/InfoSec/Past-Papers'
                    }
                },
                {
                    code: 'CS4032',
                    name: 'Web Programming',
                    type: 'theory',
                    description: 'Modern web development technologies and frameworks.',
                    learningOutcomes: [
                        'Master HTML, CSS, JavaScript',
                        'Learn web frameworks',
                        'Build full-stack applications'
                    ],
                    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/BigData/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/BigData/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/BigData/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Course/BigData/Past-Papers'
                    }
                }
            ],
            labs: [
                {
                    code: 'ML-LAB',
                    name: 'ML Lab',
                    description: 'Machine Learning Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Lab/ML-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Lab/ML-Lab/Lab-Project'
                    }
                },
                {
                    code: 'WEB-LAB',
                    name: 'Web Lab',
                    description: 'Web Programming Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Lab/Web-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-6/Lab/Web-Lab/Lab-Project'
                    }
                }
            ]
        },
        {
            id: 'semester-7',
            name: 'Semester 7',
            year: '2025',
            season: 'Fall',
            courses: [
                {
                    code: 'CS4001',
                    name: 'Professional Practices in IT',
                    type: 'theory',
                    description: 'Professional ethics, practices, and career development in IT.',
                    learningOutcomes: [
                        'Understand professional ethics',
                        'Learn industry best practices',
                        'Develop career skills'
                    ],
                    tools: [],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/Cloud/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/Cloud/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/Cloud/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/Cloud/Past-Papers'
                    }
                },
                {
                    code: 'CS3002',
                    name: 'Information Security',
                    type: 'theory',
                    description: 'Cybersecurity principles, cryptography, and security protocols.',
                    learningOutcomes: [
                        'Understand security concepts',
                        'Learn cryptographic techniques',
                        'Implement security measures'
                    ],
                    tools: ['Cryptography Tools', 'Security Software'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/DL/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/DL/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/DL/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/DL/Past-Papers'
                    }
                },
                {
                    code: 'CS4063',
                    name: 'Natural Language Processing',
                    type: 'theory',
                    description: 'NLP techniques for text processing and language understanding.',
                    learningOutcomes: [
                        'Understand NLP fundamentals',
                        'Implement text processing',
                        'Build language models'
                    ],
                    tools: ['NLTK', 'spaCy', 'Transformers', 'Hugging Face'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/NLP/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/NLP/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/NLP/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/NLP/Past-Papers'
                    }
                },
                {
                    code: 'CS4091',
                    name: 'Final Year Project – I',
                    type: 'project',
                    description: 'First phase of capstone project development.',
                    learningOutcomes: [
                        'Define project scope',
                        'Conduct research',
                        'Develop project proposal'
                    ],
                    tools: ['Various based on project'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/HCI/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/HCI/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/HCI/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/HCI/Past-Papers'
                    }
                },
                {
                    code: 'CS4055',
                    name: 'Data Mining',
                    type: 'theory',
                    description: 'Data mining techniques and knowledge discovery in databases.',
                    learningOutcomes: [
                        'Understand data mining concepts',
                        'Learn classification and clustering',
                        'Apply data mining tools'
                    ],
                    tools: ['Weka', 'RapidMiner', 'Python'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/DataMining/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/DataMining/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/DataMining/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Course/DataMining/Past-Papers'
                    }
                }
            ],
            labs: [
                {
                    code: 'CLOUD-LAB',
                    name: 'Cloud Lab',
                    description: 'Cloud Computing Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Lab/Cloud-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Lab/Cloud-Lab/Lab-Project'
                    }
                },
                {
                    code: 'DATAMINING-LAB',
                    name: 'Data Mining Lab',
                    description: 'Data Mining Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Lab/DataMining-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-7/Lab/DataMining-Lab/Lab-Project'
                    }
                }
            ]
        },
        {
            id: 'semester-8',
            name: 'Semester 8',
            year: '2026',
            season: 'Spring',
            courses: [
                {
                    code: 'CS4092',
                    name: 'Final Year Project – II',
                    type: 'project',
                    description: 'Second phase of capstone project development and completion.',
                    learningOutcomes: [
                        'Complete project implementation',
                        'Present final results',
                        'Demonstrate project outcomes'
                    ],
                    tools: ['Various based on project'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/FYP/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/FYP/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/FYP/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/FYP/Past-Papers'
                    }
                },
                {
                    code: 'CS4002',
                    name: 'Professional Practices',
                    type: 'theory',
                    description: 'Advanced professional practices and industry preparation.',
                    learningOutcomes: [
                        'Prepare for professional career',
                        'Understand industry standards',
                        'Develop soft skills'
                    ],
                    tools: [],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/PP/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/PP/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/PP/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/PP/Past-Papers'
                    }
                },
                {
                    code: 'ELECTIVE-1',
                    name: 'Elective 1',
                    type: 'theory',
                    description: 'Specialized elective course based on student interest.',
                    learningOutcomes: [
                        'Gain specialized knowledge',
                        'Explore advanced topics',
                        'Apply domain-specific skills'
                    ],
                    tools: ['Varies by elective'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective1/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective1/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective1/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective1/Past-Papers'
                    }
                },
                {
                    code: 'ELECTIVE-2',
                    name: 'Elective 2',
                    type: 'theory',
                    description: 'Specialized elective course based on student interest.',
                    learningOutcomes: [
                        'Gain specialized knowledge',
                        'Explore advanced topics',
                        'Apply domain-specific skills'
                    ],
                    tools: ['Varies by elective'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective2/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective2/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective2/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective2/Past-Papers'
                    }
                },
                {
                    code: 'ELECTIVE-3',
                    name: 'Elective 3',
                    type: 'theory',
                    description: 'Specialized elective course based on student interest.',
                    learningOutcomes: [
                        'Gain specialized knowledge',
                        'Explore advanced topics',
                        'Apply domain-specific skills'
                    ],
                    tools: ['Varies by elective'],
                    materials: {
                        slides: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective3/Slides',
                        quizzes: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective3/Quizzes',
                        assignments: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective3/Assignments',
                        pastPapers: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Course/Elective3/Past-Papers'
                    }
                }
            ],
            labs: [
                {
                    code: 'FYP-LAB',
                    name: 'FYP Lab',
                    description: 'Final Year Project Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Lab/FYP-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Lab/FYP-Lab/Lab-Project'
                    }
                },
                {
                    code: 'RESEARCH-LAB',
                    name: 'Research Lab',
                    description: 'Research Methodology Laboratory',
                    materials: {
                        labManuals: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Lab/Research-Lab/Lab-Manuals',
                        labProject: 'https://github.com/deviljerry/FAST-NUCES-work/tree/main/Semester-8/Lab/Research-Lab/Lab-Project'
                    }
                }
            ]
        }
    ]
};

// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: 'GPT-2 for Pseudo-code to Python Code Generation',
        description: 'Exploring how GPT-2 can be fine-tuned to generate Python code from pseudo-code, demonstrating the power of transformer models in code generation tasks.',
        link: 'https://qasimblog.medium.com/gpt-2-for-pseudo-code-to-python-code-generation-2e7bdb5c917d',
        date: '2024',
        readTime: '8 min read',
        tags: ['GPT-2', 'Code Generation', 'NLP', 'Transformers'],
        featured: true
    },
    {
        id: 2,
        title: 'Fine-Tuning BERT for Sentiment Classification',
        description: 'A comprehensive guide on fine-tuning BERT models for sentiment analysis tasks, covering preprocessing, training, and evaluation techniques.',
        link: 'https://qasimblog.medium.com/fine-tuning-bert-for-sentiment-classification-0728cc086997',
        date: '2024',
        readTime: '10 min read',
        tags: ['BERT', 'Sentiment Analysis', 'NLP', 'Deep Learning'],
        featured: true
    },
    {
        id: 3,
        title: 'Urdu Conversational Chatbot — Transformer with Multi-Head Attention',
        description: 'Building an Urdu language chatbot using transformer architecture with multi-head attention mechanism, addressing challenges in low-resource language processing.',
        link: 'https://qasimblog.medium.com/urdu-conversational-chatbot-transformer-with-multi-head-attention-16c2f57aad68',
        date: '2024',
        readTime: '12 min read',
        tags: ['Chatbot', 'Transformers', 'Urdu NLP', 'Multi-Head Attention'],
        featured: true
    },
    {
        id: 4,
        title: 'Visualizing Feature Maps and Filters in Convolutional Neural Networks (CNNs)',
        description: 'Deep dive into understanding CNNs through visualization of feature maps and filters, helping to interpret what neural networks learn at different layers.',
        link: 'https://qasimblog.medium.com/visualizing-feature-maps-and-filters-in-convolutional-neural-networks-cnns-c0320168990a',
        date: '2024',
        readTime: '9 min read',
        tags: ['CNN', 'Computer Vision', 'Visualization', 'Deep Learning'],
        featured: true
    }
];

// Typing animation texts - Motivational & Inspiring
const typingTexts = [
    'Computer Scientist 🎓',
    'FAST NUCES Graduate 🇵🇰',
    'AI Enthusiast 🤖',
    'Deep Learning Expert 🧠',
    'Full Stack Developer 💻',
    'Machine Learning Engineer 📊',
    'Problem Solver 🎯',
    'Tech Innovator 💡',
    'Technical Writer ✍️',
    'Future Builder 🚀',
    'Code Craftsman 👨‍💻',
    'Dream Chaser ⭐'
];

// Export data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { academicData, typingTexts, blogPosts };
}

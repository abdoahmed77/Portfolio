// Central project data. Homepage cards and case-study pages both read from
// here so numbers, tags, and links can't drift between the two.

export const projects = [
  {
    id: 'smarttraffic',
    title: 'Vision-Driven MARL Traffic Control',
    category: 'AI / ML',
    categoryFull: 'AI, Computer Vision, Multi-Agent Reinforcement Learning, Traffic Simulation',
    filterTags: ['ai-ml', 'computer-vision'],
    description:
      'An intelligent traffic management system combining computer vision, traffic simulation, and multi-agent reinforcement learning for adaptive signal control.',
    github: 'https://github.com/abdoahmed77/Vision-Driven-MARL-Traffic-Control',
    tech: ['Python', 'MAPPO / PPO', 'Graph Attention Networks', 'SUMO', 'PyTorch', 'YOLOv8', 'BoT-SORT', 'FastAPI', 'PyQt5'],
    stats: [
      { value: '80%', label: 'reduction in queue & wait time vs. fixed-time control', numeric: 80, suffix: '%' },
      { value: '5th', label: 'Place, IC-ESI\u20192026', numeric: 5, suffix: 'th' },
    ],
    contribution: 'Computer vision pipeline, system integration, and the deployment/operator platform.',
    page: '/pages/smarttraffic.html',
    imageLabel: 'SmartTraffic Project Image',
  },
  {
    id: 'sentiment',
    title: 'Twitter Sentiment Analysis',
    category: 'NLP',
    categoryFull: 'NLP, Deep Learning, Text Classification',
    filterTags: ['nlp', 'data'],
    description:
      'A neural sentiment classification system comparing four neural network architectures under consistent training conditions.',
    github: 'https://github.com/abdoahmed77/Neural-Sentiment-Classifier',
    tech: ['Python', 'PyTorch', 'NLP', 'GloVe', 'NLTK', 'RNN', 'LSTM', 'GRU', 'FFNN'],
    stats: [
      { value: '78.5%', label: 'Accuracy \u2014 best model (GRU)', numeric: 78.5, suffix: '%' },
      { value: '0.782', label: 'F1 score \u2014 best model (GRU)', numeric: 0.782, suffix: '' },
    ],
    contribution: null,
    page: '/pages/sentiment.html',
    imageLabel: 'Twitter Sentiment Project Image',
    models: [
      { id: 'ffnn', name: 'FFNN', accuracy: 0.768, f1: 0.766 },
      { id: 'rnn', name: 'RNN', accuracy: 0.775, f1: 0.776 },
      { id: 'lstm', name: 'LSTM', accuracy: 0.783, f1: 0.781 },
      { id: 'gru', name: 'GRU', accuracy: 0.785, f1: 0.782 },
    ],
  },
  {
    id: 'hotel-price',
    title: 'Egypt Hotel Price Analysis & Prediction',
    category: 'Data',
    categoryFull: 'Data Analysis, Web Scraping, Machine Learning',
    filterTags: ['data', 'ai-ml'],
    description:
      'An end-to-end data science project collecting hotel listings from Booking.com, analyzing the data, engineering features, and comparing regression models for price prediction.',
    github: 'https://github.com/abdoahmed77/Egypt-Hotel-Price-Analysis-Prediction-booking.com-',
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'SQLite', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    stats: [
      { value: '1,040+', label: 'hotel listings collected', numeric: 1040, suffix: '+' },
      { value: '17', label: 'Egyptian cities covered', numeric: 17, suffix: '' },
    ],
    contribution: null,
    page: '/pages/hotel-price.html',
    imageLabel: 'Hotel Price Project Image',
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);

import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Docker } from "@/components/ui/svgs/docker";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import type { Localized } from "@/contexts/locale-context";

const L = <T,>(en: T, ko: T): Localized<T> => ({ en, ko });

export const DATA = {
  name: L("MyeongSeok Oh", "오명석"),
  initials: "MO",
  tagline: L("AI Research Engineer", "AI Research Engineer"),
  url: "https://maisonop.github.io",
  location: L("Seoul, South Korea", "대한민국 서울"),
  locationLink: "https://www.google.com/maps/place/seoul",
  description: L(
    "AI Research Engineer working on data-centric ML, evaluation, and alignment.",
    "data-centric ML, evaluation, alignment에 관심을 둔 AI Research Engineer."
  ),
  summary: L(
    "I am an AI Research Engineer interested in building and evaluating AI models under the **data-centric ML** paradigm. My work spans dataset and benchmark design, evaluation methodology, and alignment — with a focus on how the data pipeline itself shapes model behavior. I am concurrently pursuing a Ph.D. at Soongsil University.",
    "**data-centric ML** 패러다임 하에서 AI 모델을 개발하고 평가하는 일에 관심을 둔 AI Research Engineer입니다. 데이터셋·벤치마크 설계, evaluation 방법론, alignment에 걸쳐 연구하며, 데이터 파이프라인 자체가 모델의 행동을 어떻게 형성하는지에 주목합니다. 동시에 숭실대학교에서 박사 과정을 진행 중입니다."
  ),
  avatarUrl: "/profile.jpg",

  skills: [
    { name: "Python", icon: Python },
    { name: "PyTorch", icon: null },
    { name: "Transformers", icon: null },
    { name: "LLMs", icon: null },
    { name: "Diffusion", icon: null },
    { name: "LangChain", icon: null },
    { name: "TypeScript", icon: Typescript },
    { name: "Docker", icon: Docker },
    { name: "PostgreSQL", icon: Postgresql },
  ],

  navbar: [{ href: "/", icon: HomeIcon, label: L("Home", "홈") }],

  contact: {
    email: "opro12266@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/maisonOP",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ms-o-539948253/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:opro12266@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: L("T-Scientific", "㈜티사이언티픽"),
      href: "https://www.tscientific.co.kr",
      location: L("Seoul, South Korea", "서울"),
      title: L("AI Research Engineer, AI Lab", "AI Research Engineer, AI Lab"),
      logoUrl: "",
      start: L("Apr 2023", "2023.04"),
      end: L("Present", "현재"),
      description: L(
        "Research on privacy-preserving NLP and multimodal PII detection.",
        "프라이버시 보존 NLP 및 멀티모달 개인정보 탐지 연구."
      ),
    },
    {
      company: L("IT Nomads", "㈜아이티노매즈"),
      href: "",
      location: L("Seoul, South Korea", "서울"),
      title: L("AI Engineer, R&D Center", "AI Engineer, R&D Center"),
      logoUrl: "",
      start: L("Jun 2022", "2022.06"),
      end: L("Apr 2023", "2023.04"),
      description: L(
        "AI-based PII detection and de-identification for conversational text.",
        "대화형 텍스트 대상 AI 기반 개인정보 탐지·비식별화 모델 개발."
      ),
    },
  ],

  education: [
    {
      school: L("Soongsil University", "숭실대학교"),
      href: "https://www.ssu.ac.kr",
      degree: L(
        "Ph.D. in Computer Engineering",
        "박사 · 컴퓨터 공학"
      ),
      logoUrl: "",
      start: L("Mar 2024", "2024.03"),
      end: L("Present", "재학"),
    },
    {
      school: L("Soongsil University", "숭실대학교"),
      href: "https://www.ssu.ac.kr",
      degree: L(
        "M.S. in Computer Engineering",
        "석사 · 컴퓨터 공학"
      ),
      logoUrl: "",
      start: L("Mar 2020", "2020.03"),
      end: L("Feb 2022", "2022.02"),
    },
    {
      school: L("Soongsil University", "숭실대학교"),
      href: "https://www.ssu.ac.kr",
      degree: L(
        "B.B.A. in Business Administration",
        "학사 · 경영학부"
      ),
      logoUrl: "",
      start: L("Mar 2014", "2014.03"),
      end: L("Feb 2020", "2020.02"),
    },
  ],

  projects: [
    {
      title: L(
        "Time-Series Anomaly Detection & Failure Prediction",
        "시계열 이상 탐지 및 장애 예측"
      ),
      dates: L("Mar 2026 – Present", "2026.03 – 진행 중"),
      description: L(
        "AI modeling for multivariate time-series server metrics as part of an agentic security/observability solution. Responsible for modeling, benchmark design, and data analysis.",
        "Agentic 보안·관제 솔루션의 일환으로 다변량 시계열 서버 메트릭 이상 탐지·장애 예측 AI 개발. 모델링, 벤치마크 설계, 데이터 분석 담당."
      ),
      technologies: ["Time-series", "PyTorch", "LLMs"],
    },
    {
      title: L(
        "Scene Text Editing for Image Anonymization",
        "이미지 비식별화를 위한 Scene Text Editing"
      ),
      dates: L("Jan 2026 – Present", "2026.01 – 진행 중"),
      description: L(
        "Diffusion-based image editing model and benchmark for PII-bearing scene text in Korean. Built synthetic data generation pipelines and ran benchmark experiments.",
        "한국어 장면 텍스트 내 개인정보를 대상으로 한 Diffusion 기반 이미지 편집 모델 및 벤치마크 개발. 합성 데이터 생성 파이프라인 구축 및 벤치마크 실험 수행."
      ),
      technologies: ["Vision", "Diffusion", "Scene Text", "Synthetic Data"],
    },
    {
      title: L(
        "Face Swap for Image Anonymization",
        "이미지 비식별화를 위한 Face Swap"
      ),
      dates: L("Sep 2025 – Jan 2026", "2025.09 – 2026.01"),
      description: L(
        "Diffusion-based face replacement pipeline for image anonymization — swapping real faces with reference faces while preserving pose and expression. Built a ReferenceNet-based swap module as a higher-utility alternative to blur/mosaic.",
        "이미지 비식별화를 위한 Diffusion 기반 얼굴 교체 파이프라인 개발. 포즈·표정을 유지한 채 참조 얼굴로 대체하며, ReferenceNet 기반 스왑 모듈로 블러·모자이크 대비 이미지 활용도를 높임."
      ),
      technologies: ["Vision", "Diffusion", "Face Swap"],
    },
    {
      title: L(
        "Agentic Multimodal PII Detection & De-identification",
        "Agentic 멀티모달 개인정보 탐지·비식별화"
      ),
      dates: L("Apr 2025 – Present", "2025.04 – 진행 중"),
      description: L(
        "Multimodal AI for privacy-preserving PII detection, tracking, and de-identification across modalities. Leading research design and modeling.",
        "멀티모달 전반의 개인정보 탐지·추적·비식별화 AI 연구. 연구 설계 및 모델링 주도."
      ),
      technologies: ["Agentic system", "Multimodal", "Privacy", "De-identification"],
    },
    {
      title: L(
        "Text PII Detection & De-identification",
        "텍스트 개인정보 탐지·비식별화"
      ),
      dates: L("Jan 2023 – Dec 2024", "2023.01 – 2024.12"),
      description: L(
        "AI-based PII detection and de-identification for conversational text. Built the modeling stack and a practitioner-facing web application.",
        "대화형 텍스트 대상 AI 기반 개인정보 탐지·비식별화 기술 개발. 모델링 스택 및 실무용 웹 애플리케이션 구축."
      ),
      technologies: ["NLP", "Transformers", "Web App"],
    },
  ],

  publications: [
    {
      title: L(
        "Subject-level inference for realistic text anonymization evaluation",
        "Subject-level inference for realistic text anonymization evaluation"
      ),
      authors: [
        { name: "Myeong Seok Oh", self: true },
        { name: "Dong-Yun Kim" },
        { name: "Hanseok Oh" },
        { name: "Chaean Kang" },
        { name: "Joeun Kang" },
        { name: "Xiaonan Wang" },
        { name: "Hyunjung Park" },
        { name: "Young Cheol Jung" },
        { name: "Hansaem Kim" },
      ],
      venue: L("ACL 2026 (Main Conference)", "ACL 2026 (Main Conference)"),
      date: L("Jul 2026 (to appear)", "2026.07 (발행예정)"),
    },
    {
      title: L(
        "EEG-Based Emotion Recognition: A Review and Emerging Paths",
        "EEG-Based Emotion Recognition: A Review and Emerging Paths"
      ),
      authors: [
        { name: "Huy-Tung Phuong" },
        { name: "Eun-Tack Im" },
        { name: "Myeong Seok Oh", self: true },
        { name: "Gwang-Yong Gim" },
      ],
      venue: L("IEEE Access", "IEEE Access"),
      date: L("Nov 2025", "2025.11"),
    },
    {
      title: L(
        "EEGEmotions-27: A Large-Scale EEG Dataset Annotated With 27 Fine-Grained Emotion Labels",
        "EEGEmotions-27: A Large-Scale EEG Dataset Annotated With 27 Fine-Grained Emotion Labels"
      ),
      authors: [
        { name: "Huy-Tung Phuong" },
        { name: "Eun-Tack Im" },
        { name: "Myeong Seok Oh", self: true },
        { name: "Gwang-Yong Gim" },
      ],
      venue: L("IEEE Access", "IEEE Access"),
      date: L("Nov 2025", "2025.11"),
    },
  ],

  socialSciencePublications: [
    {
      title: L(
        "The Relationship between Social Media Use and K-Content Brand Power: U&G and COBRAs based platform comparison",
        "한류 영향력 확대를 위한 소셜미디어 이용과 K-Content 브랜드 파워의 관계 연구: U&G 및 COBRAs 기반 플랫폼 비교"
      ),
      authors: [
        { name: "Duk-Jin Kim" },
        { name: "Myeong Seok Oh", self: true },
        { name: "Kyung-Hyun Lee" },
        { name: "Gwang-Yong Gim" },
      ],
      venue: L(
        "Journal of Korea Service Management Society",
        "한국서비스경영학회지"
      ),
      date: L("Dec 2021", "2021.12"),
    },
    {
      title: L(
        "The Effects of Product's Visual Preview and Customer Review on Sale Performance in Mobile Commerce",
        "The Effects of Product's Visual Preview and Customer Review on Sale Performance in Mobile Commerce"
      ),
      authors: [
        { name: "Eun-Tack Im" },
        { name: "Huy-Tung Phuong" },
        { name: "Myeong Seok Oh", self: true },
        { name: "Jun-Yeob Lee" },
        { name: "Simon Gim" },
      ],
      venue: L(
        "Studies in Computational Intelligence",
        "Studies in Computational Intelligence"
      ),
      date: L("Feb 2021", "2021.02"),
    },
    {
      title: L(
        "The Effects of Product's Visual Preview on Customer Attention and Sales Using Convolution Neural Networks",
        "The Effects of Product's Visual Preview on Customer Attention and Sales Using Convolution Neural Networks"
      ),
      authors: [
        { name: "Eun-Tack Im" },
        { name: "Huy-Tung Phuong" },
        { name: "Myeong Seok Oh", self: true },
        { name: "Jun-Yeob Lee" },
        { name: "Simon Gim" },
      ],
      venue: L(
        "Studies in Computational Intelligence",
        "Studies in Computational Intelligence"
      ),
      date: L("Dec 2020", "2020.12"),
    },
    {
      title: L(
        "A Study on the Intention to Use Smart Healthcare",
        "스마트 헬스케어 사용의도에 관한 연구"
      ),
      authors: [
        { name: "Eun-Tack Im" },
        { name: "Gwang-Yong Gim" },
        { name: "Na-Yeon Kang" },
        { name: "Yun-Hee Choi" },
        { name: "Myeong Seok Oh", self: true },
      ],
      venue: L(
        "Journal of Global Business Society",
        "글로벌경영학회지"
      ),
      date: L("Aug 2020", "2020.08"),
    },
  ],

  news: [
    {
      date: L("Apr 2026", "2026.04"),
      text: L(
        "Our paper *Subject-level inference for realistic text anonymization evaluation* has been accepted to **ACL 2026 (Main Conference)**.",
        "저희 논문 *Subject-level inference for realistic text anonymization evaluation* 이 **ACL 2026 (Main Conference)** 에 게재 승인되었습니다."
      ),
    },
    {
      date: L("Nov 2025", "2025.11"),
      text: L(
        "Our EEG emotion recognition review and *EEGEmotions-27* dataset papers were published in IEEE Access.",
        "EEG 감정 인식 리뷰 논문과 *EEGEmotions-27* 데이터셋 논문이 IEEE Access에 게재되었습니다."
      ),
    },
    {
      date: L("Mar 2024", "2024.03"),
      text: L(
        "Started Ph.D. at Soongsil University (Computer Engineering).",
        "숭실대학교 박사 과정 시작 (컴퓨터 공학)."
      ),
    },
    {
      date: L("Apr 2023", "2023.04"),
      text: L(
        "Joined T-Scientific as AI Research Engineer following the IT Nomads acquisition.",
        "㈜아이티노매즈 인수합병으로 ㈜티사이언티픽 AI Research Engineer로 합류."
      ),
    },
    {
      date: L("Jun 2022", "2022.06"),
      text: L(
        "Joined IT Nomads as AI Engineer.",
        "㈜아이티노매즈에 AI Engineer로 합류."
      ),
    },
    {
      date: L("Feb 2022", "2022.02"),
      text: L(
        "Completed M.S. at Soongsil University (Computer Engineering).",
        "숭실대학교 석사 과정 졸업 (컴퓨터 공학)."
      ),
    },
    {
      date: L("Mar 2020", "2020.03"),
      text: L(
        "Started M.S. at Soongsil University (Computer Engineering).",
        "숭실대학교 석사 과정 시작 (컴퓨터 공학)."
      ),
    },
  ],

  sections: {
    about: L("About", "소개"),
    news: L("News", "News"),
    vitae: L("Vitæ", "Vitæ"),
    vitaeWork: L("Experience", "경력"),
    vitaeEducation: L("Education", "학력"),
    skills: L("Skills", "기술"),
    projects: L("Projects", "프로젝트"),
    projectsOverline: L("Projects", "참여 프로젝트"),
    projectsHeadline: L(
      "Projects I've worked on",
      "제가 참여한 프로젝트"
    ),
    publications: L("Research", "Research"),
    publicationsHeadline: L(
      "Research in artificial intelligence and machine learning",
      "Research in artificial intelligence and machine learning"
    ),
    socialSciencePublications: L("Research", "Research"),
    socialSciencePublicationsHeadline: L(
      "Research in information systems and social science",
      "Research in information systems and social science"
    ),
    language: L("Language", "언어"),
    theme: L("Theme", "테마"),
    showMore: L("Show more", "더 보기"),
    showLess: L("Show less", "접기"),
    contact: L("Contact", "연락"),
    contactHeadline: L("Get in touch", "연락하기"),
    contactBody: L(
      "Reach out by email or LinkedIn for research, collaboration, or hiring discussions.",
      "연구·협업·채용 관련 문의는 이메일이나 LinkedIn으로 부탁드립니다."
    ),
    present: L("Present", "현재"),
  },
} as const;

// Single source of truth for the content shown across the site.
// Add new articles / talks here and every page that lists them updates.

export const CONTACT = {
    email: 'amynalawal@gmail.com',
    linkedin: 'https://www.linkedin.com/in/aminalawalofficial/',
    x: 'https://x.com/amiynarh',
    github: 'https://github.com/Amiynarh',
    youtube: 'https://youtube.com/@aminalawal3999',
    instagram: 'https://www.instagram.com/miynaarh/',
    sessionize: 'https://sessionize.com/aminalawal/',
    freecodecamp: 'https://www.freecodecamp.org/news/author/Bronze/',
    g3women: 'https://g3women.org',
}

export const MENTORSHIP = {
    name: 'Learn Cloud with Amina',
    url: 'https://learncloud.aminalawal.com/',
    waitlist: 'https://forms.gle/AaaJyXBVJymasynU8',
    tagline: 'A 4-month, hands-on mentorship in Cloud, DevOps and Platform Engineering.',
    principles: [
        {
            title: 'Why before how',
            body: 'Before running any command, you understand the problem it solves and the trade-off it makes. Context first, syntax second.',
        },
        {
            title: 'Break things on purpose',
            body: 'You will break containers, misconfigure IAM and corrupt state, so you learn how systems actually recover.',
        },
        {
            title: 'Document everything',
            body: 'Every module ships a postmortem, a diagram or a runbook alongside the code. Engineers who can explain their work can improve it.',
        },
        {
            title: 'Real infrastructure only',
            body: 'No simulations, no toy sandboxes. You deploy to real cloud accounts and operate real workloads from day one.',
        },
    ],
    // 8 modules, 2 weeks each: 16 weeks, roughly 4 months. Cohort 1 found 1 week per module too fast.
    modules: [
        { n: '01', weeks: '1–2', month: 1, title: 'Linux, Networking & Git', tags: ['bash', 'tcp/ip', 'git'], summary: 'The mental models underneath every abstraction: processes, systemd, CIDR, DNS, SSH and Git internals.' },
        { n: '02', weeks: '3–4', month: 1, title: 'Cloud Fundamentals & IAM', tags: ['gcp', 'iam', 'least-privilege'], summary: 'Regions and zones, IAM policy evaluation, least privilege, Workload Identity Federation and audit logs.' },
        { n: '03', weeks: '5–6', month: 2, title: 'Compute, Storage & Networking', tags: ['vpc', 'gce', 'gcs'], summary: 'VPC design, Compute Engine, Cloud Storage, L4 vs L7 load balancing, Cloud DNS and Shared VPC.' },
        { n: '04', weeks: '7–8', month: 2, title: 'Docker & Container Security', tags: ['docker', 'oci', 'artifact-registry'], summary: 'Namespaces and cgroups, image layers, multi-stage builds, runtime hardening and image scanning.' },
        { n: '05', weeks: '9–10', month: 3, title: 'Kubernetes', tags: ['k8s', 'workloads'], summary: 'Run a real workload on Kubernetes and understand what the control plane is doing for you.' },
        { n: '06', weeks: '11–12', month: 3, title: 'Infrastructure as Code', tags: ['terraform', 'state'], summary: 'Describe your infrastructure in code, review it like code, and recover when state goes wrong.' },
        { n: '07', weeks: '13–14', month: 4, title: 'CI/CD Pipelines', tags: ['ci', 'cd', 'automation'], summary: 'Build a pipeline that tests, builds and ships your workload on every push.' },
        { n: '08', weeks: '15–16', month: 4, title: 'Observability', tags: ['metrics', 'logs', 'dashboards'], summary: 'Dashboards and alerts that prove it all works, and tell you quickly when it does not.' },
    ],
    months: [
        { n: 1, name: 'Foundations' },
        { n: 2, name: 'Cloud infrastructure' },
        { n: 3, name: 'Platforms' },
        { n: 4, name: 'Production' },
    ],
}

export type Article = {
    title: string
    publication: 'FreeCodeCamp' | 'Google Cloud'
    date: string
    url: string
    description: string
    tags: string[]
}

// Newest first.
export const ARTICLES: Article[] = [
    {
        title: 'How to Build and Deploy Multi-Architecture Docker Apps on Google Cloud Using ARM Nodes (Without QEMU)',
        publication: 'FreeCodeCamp',
        date: '2026-04-13',
        url: 'https://www.freecodecamp.org/news/build-and-deploy-multi-architecture-docker-apps-on-google-cloud-using-arm-nodes/',
        description: 'Build Docker images that run natively on both ARM and x86 with Docker Buildx, then deploy them to a GKE cluster with mixed CPU architectures to cut costs.',
        tags: ['Docker', 'Kubernetes', 'GKE', 'ARM'],
    },
    {
        title: 'GCP Network Reliability: Going Beyond the Basics with Cloud Armor and Private Service Connect',
        publication: 'Google Cloud',
        date: '2026-01-28',
        url: 'https://medium.com/google-cloud/gcp-network-reliability-going-beyond-the-basics-with-cloud-armor-and-private-service-connect-af2637d8aa72',
        description: 'A zero-trust network on GCP: Cloud Armor for DDoS and WAF protection at the edge, Private Service Connect for internal APIs, and no public IPs or legacy VPC peering.',
        tags: ['Networking', 'Security', 'Cloud Armor'],
    },
    {
        title: 'How to Reduce Latency in Your Generative AI Apps with Gemini and Cloud Run',
        publication: 'FreeCodeCamp',
        date: '2025-12-10',
        url: 'https://www.freecodecamp.org/news/how-to-reduce-latency-in-your-generative-ai-apps-with-gemini-and-cloud-run/',
        description: 'Deploy one service to Cloud Run in three continents and stitch the regions together with a global load balancer so every user hits the nearest copy.',
        tags: ['Cloud Run', 'Load Balancing', 'Multi-region'],
    },
    {
        title: 'Cloud-Native Reliability: Building an Auto-Healing Web App on GCP with MIGs and a Global Load Balancer',
        publication: 'Google Cloud',
        date: '2025-11-17',
        url: 'https://medium.com/google-cloud/cloud-native-reliability-101-building-an-auto-healing-web-app-on-gcp-with-migs-and-a-global-load-f71fa2c21d6c',
        description: 'A highly available web app on Managed Instance Groups behind a Global External Application Load Balancer, with automatic recovery across zones.',
        tags: ['Reliability', 'MIGs', 'High Availability'],
    },
]

export type TalkType = 'talk' | 'workshop' | 'panel' | 'judge'

export type Talk = {
    title: string
    event: string
    date: string
    year: number
    location: string
    type: TalkType
    url?: string
    recording?: string
    description: string
}

// Newest first.
export const TALKS: Talk[] = [
    {
        title: 'Beyond the Region: Scaling Intelligent Features with Cloud Run and Gemini\'s Global Network',
        event: 'DevFest Abuja 2025',
        date: 'Dec 2025',
        year: 2025,
        location: 'Abuja, Nigeria',
        type: 'talk',
        url: 'https://www.devfestabuja.com/agenda',
        description: 'Running one service across several Cloud Run regions behind a global load balancer, so the experience stays fast wherever users are.',
    },
    {
        title: 'Beyond the Region: Scaling Intelligent Features with Cloud Run and Gemini\'s Global Network',
        event: 'DevFest Kano 2025',
        date: 'Dec 2025',
        year: 2025,
        location: 'Kano, Nigeria',
        type: 'talk',
        description: 'The same multi-region architecture talk, delivered to the developer community at home in Kano.',
    },
    {
        title: 'Contribute to Hacktoberfest with Layer5',
        event: 'Hacktoberfest × Layer5',
        date: 'Oct 2025',
        year: 2025,
        location: 'Online',
        type: 'workshop',
        description: 'Co-hosted with Ijeoma Eti (Backend Engineer, Layer5), walking first-time contributors through real pull requests to Meshery, a CNCF project.',
    },
    {
        title: 'Scaling Modern Applications with Infrastructure as Code and CI/CD on Google Cloud',
        event: 'GDG Ilorin',
        date: '2025',
        year: 2025,
        location: 'Ilorin, Nigeria',
        type: 'talk',
        url: 'https://gdg.community.dev/gdg-ilorin/',
        recording: 'https://www.youtube.com/watch?v=yux4QBvjKJI',
        description: 'Managing Google Cloud with Terraform, shipping through CI/CD pipelines, and scaling applications without heroics.',
    },
    {
        title: 'Building a Strong Foundation: Choosing the Right Tech Stack',
        event: '3 Million Tech Talents (3MTT), FMCIDE / NITDA',
        date: '2024',
        year: 2024,
        location: 'Online',
        type: 'talk',
        recording: 'https://www.youtube.com/watch?v=KpYNOyahMhI&list=PLydIEN1yMMVLpThlOmlV3uIpVRhzU84Aa&index=7',
        description: 'Named speaker on the My Career in Tech series of Nigeria\'s largest government-backed tech skills programme.',
    },
    {
        title: 'Policy Dialogue on the Nigeria Data Protection Act',
        event: 'GIZ / Digital Transformation Center Nigeria',
        date: 'Feb 2024',
        year: 2024,
        location: 'Abuja, Nigeria',
        type: 'panel',
        description: 'Argued that NDPA compliance belongs in the infrastructure (access controls, data residency, encryption, audit trails), not in a policy PDF. Fed into GIZ/DTC Policy Brief PB/004.',
    },
    {
        title: 'Technical Judge, NASA Space Apps Challenge',
        event: 'NASA Space Apps, Kano',
        date: '2023',
        year: 2023,
        location: 'Kano, Nigeria',
        type: 'judge',
        url: 'https://www.spaceappschallenge.org/',
        description: 'Judged the Kano edition of one of the world\'s largest hackathons.',
    },
    {
        title: 'Policy Dialogue on the Nigerian Startup Act',
        event: 'GIZ / Digital Transformation Center Nigeria',
        date: 'Jul 2023',
        year: 2023,
        location: 'Abuja, Nigeria',
        type: 'panel',
        description: 'The only practising DevOps engineer on the panel. Flagged three gaps: affordable cloud infrastructure outside Lagos, a university-to-startup talent pipeline, and enforceable cybersecurity provisions. Covered by Techpoint Africa.',
    },
    {
        title: 'Kano State Digital Access Programme',
        event: 'UK Foreign, Commonwealth & Development Office',
        date: 'Dec 2022',
        year: 2022,
        location: 'Kano, Nigeria',
        type: 'panel',
        description: 'Led the infrastructure workstream among 65 delegates: connectivity beyond Lagos, workable PPP policy, and skills programmes that end in jobs rather than certificates.',
    },
]

export const TALK_TYPES: Record<TalkType, string> = {
    talk: 'Talk',
    workshop: 'Workshop',
    panel: 'Panel',
    judge: 'Judge',
}

export const IMPACT = [
    { value: 385, suffix: '+', label: 'people at the IWD summit in Kano', note: 'grown from 45 virtual attendees' },
    { value: 250, suffix: '+', label: 'applications to WomenWhoAutomate', note: 'G3Women\'s first cohort' },
    { value: 100, suffix: '+', label: 'women trained across 6+ tech paths', note: 'four years of WTM Kano' },
    { value: 10, suffix: '', label: 'live websites in one day', note: 'HerSite, IWD 2026' },
]

export type Org = {
    id: string
    name: string
    role: string
    period: string
    url?: string
    description: string
    highlights: string[]
    stats: { value: string, label: string }[]
}

export const ORGS: Org[] = [
    {
        id: 'cncf',
        name: 'CNCF Kaduna',
        role: 'Co-founder & Organiser',
        period: '2025 to now',
        url: 'https://community.cncf.io/cloud-native-kaduna/',
        description: 'The seventh cloud-native community chapter in Nigeria, formally approved by the Cloud Native Computing Foundation, home of Kubernetes, Prometheus and Envoy.',
        highlights: [
            'Listed in the official CNCF chapter directory',
            '3 merged pull requests to Meshery (Datadog, Kafka and Microsoft Graph Worker designs)',
        ],
        stats: [{ value: '7th', label: 'chapter in Nigeria' }, { value: '3', label: 'merged PRs to Meshery' }],
    },
    {
        id: 'wtm',
        name: 'Women Techmakers Kano',
        role: 'Ambassador',
        period: '2021 to now',
        url: 'https://www.womentechmakers.com/',
        description: 'Google\'s global programme for women in technology. The WTM Kano programme I built has run without a break for four years.',
        highlights: [
            'Annual IWD summits, grown from 45 virtual participants to 385 in person',
            'Build with AI Kano 2025: hands-on workshop on Google\'s developer tools',
            '100+ women trained across 6+ technical paths',
        ],
        stats: [{ value: '385', label: 'peak IWD attendance' }, { value: '100+', label: 'women trained' }],
    },
    {
        id: 'gdg',
        name: 'GDG Cloud Kano',
        role: 'Co-organiser & DevFest Lead',
        period: '2022 to 2024',
        description: 'Brought developers across northern Nigeria together for Google\'s flagship community events, plus workshops all year round.',
        highlights: [
            'Led DevFest Kano two years running',
            'Organised Google I/O Extended locally',
            '1,000+ cumulative event participants',
        ],
        stats: [{ value: '1,000+', label: 'participants' }, { value: '2', label: 'DevFests led' }],
    },
    {
        id: 'shapers',
        name: 'Global Shapers, Kano Hub',
        role: 'Vice Curator · Impact Officer',
        period: '2021 to 2024',
        url: 'https://www.weforum.org/people/amina-lawal/',
        description: 'A World Economic Forum community of young leaders in 400+ cities. Elected by peers to two leadership roles, both confirmed by the Geneva headquarters.',
        highlights: [
            'Girl-Up youth empowerment project',
            'Soft Skills Series community training',
            'HPV vaccine awareness campaign',
        ],
        stats: [{ value: '2×', label: 'elected to hub leadership' }, { value: '400+', label: 'cities worldwide' }],
    },
    {
        id: 'gdsc',
        name: 'Google Developer Student Club, BUK',
        role: 'Lead',
        period: '2020 to 2022',
        description: 'Built the campus developer community at Bayero University Kano and helped students move into software and cloud engineering.',
        highlights: ['1,000+ student members', '13+ technical workshops', '4+ industry partnerships'],
        stats: [{ value: '1,000+', label: 'members' }, { value: '13+', label: 'workshops' }],
    },
    {
        id: 'tedx',
        name: 'TEDxBayeroUniversity',
        role: 'Co-curator',
        period: '2020 to 2021',
        description: 'Found, vetted and coached speakers for two independently organised TEDx events.',
        highlights: ['2 events', '15+ speakers curated', '300+ attendees'],
        stats: [{ value: '15+', label: 'speakers' }, { value: '300+', label: 'attendees' }],
    },
]

export const RECOGNITION = [
    { title: 'Professional Cloud Architect', by: 'Google Cloud certification' },
    { title: 'GDE Academy, EMEA', by: '1 of 57 selected from 1,452 applicants · 2025' },
    { title: 'Generation Google Scholarship', by: 'EMEA · €7,000 competitive grant · 2023' },
]

export const STACK = [
    'Google Cloud', 'Kubernetes', 'Terraform', 'Docker', 'Helm', 'GitOps', 'Cloud Run', 'GKE',
    'Prometheus', 'Grafana', 'ELK', 'GitHub Actions', 'Cloud Build', 'Python', 'Bash', 'FastAPI', 'AWS',
]

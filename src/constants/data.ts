import {
  Anchor,
  Binary,
  Compass,
  Coffee,
  Globe,
  Heart,
  Map,
  Rocket,
  School,
  Shield,
  Ship,
  Target,
  Users,
  Waves,
  Zap,
} from 'lucide-react';

export interface Question {
  id: number;
  scenario: string;
  question: string;
  options: {
    text: string;
    dimension: 'D' | 'M' | 'U' | 'I' | 'T' | 'S' | 'E' | 'A';
    label: string;
  }[];
}

export const DMU_QUESTIONS: Question[] = [
  {
    id: 1,
    scenario: '清晨的西山操场，海风和闹钟一起开会。',
    question: '早八前的集合突然提前十分钟，你的第一反应是？',
    options: [
      { text: '迅速起床整理队列感，心里默念：海大人不能输给被窝。', dimension: 'D', label: '纪律 D' },
      { text: '先判断这十分钟是否真的必要，再用最快路径完成最低损耗起床。', dimension: 'M', label: '动机 M' },
    ],
  },
  {
    id: 2,
    scenario: '凌水湾边，远处的船和城市天际线同时入镜。',
    question: '想到未来，你更容易被哪种画面点燃？',
    options: [
      { text: '世界港口、远洋航线、国际组织，一张地图越看越大。', dimension: 'U', label: '远洋 U' },
      { text: '一个实验室、一间自习室、一段稳定关系，把小世界打磨得很亮。', dimension: 'I', label: '内港 I' },
    ],
  },
  {
    id: 3,
    scenario: '图书馆门口刚好遇见社团招新、班委通知和朋友约饭。',
    question: '面对校园活动的“多线程并发”，你通常会？',
    options: [
      { text: '加入局中，帮大家把人、时间、场地都协调顺。', dimension: 'T', label: '同航 T' },
      { text: '保留自己的节奏，能独立完成就不制造额外沟通成本。', dimension: 'S', label: '独航 S' },
    ],
  },
  {
    id: 4,
    scenario: '中远图书馆的深夜，论文、代码或航海学公式都开始变得抽象。',
    question: '当一个难题卡住你很久，你更像哪一种？',
    options: [
      { text: '继续啃，哪怕只推进一小步，也要把航线画出来。', dimension: 'E', label: '续航 E' },
      { text: '换工具、问同学、找老师，先绕过暗礁再说。', dimension: 'A', label: '变舵 A' },
    ],
  },
  {
    id: 5,
    scenario: '宿舍内务检查来临，桌面、床铺和充电线都进入审判时刻。',
    question: '你会怎样处理这场“方寸甲板大整理”？',
    options: [
      { text: '按标准逐项清理，豆腐块可以没有灵魂，但必须有棱角。', dimension: 'D', label: '纪律 D' },
      { text: '抓重点、保底线，把省下来的精力留给真正想做的事。', dimension: 'M', label: '动机 M' },
    ],
  },
  {
    id: 6,
    scenario: '你站在校门或主楼前，被问起“海大到底特别在哪”。',
    question: '你最想向别人介绍的是？',
    options: [
      { text: '百年航运底色、港口城市气质、和世界相连的专业想象。', dimension: 'U', label: '远洋 U' },
      { text: '日常里的细节：食堂窗口、图书馆座位、宿舍夜聊和熟悉的路。', dimension: 'I', label: '内港 I' },
    ],
  },
  {
    id: 7,
    scenario: '课程小组要做展示，大家都在等第一个人开口。',
    question: '你最可能承担的角色是？',
    options: [
      { text: '把分工、时间线、汇报逻辑拉起来，让整组像一支船队。', dimension: 'T', label: '同航 T' },
      { text: '默默接下关键模块，少开会，多交付。', dimension: 'S', label: '独航 S' },
    ],
  },
  {
    id: 8,
    scenario: '选课没抢到、实验数据翻车、天气突然变脸，校园生活开始加浪。',
    question: '计划被打乱时，你更接近？',
    options: [
      { text: '稳住原航线，先把能做的部分做扎实。', dimension: 'E', label: '续航 E' },
      { text: '立刻改方案，能换港就换港，能转向就转向。', dimension: 'A', label: '变舵 A' },
    ],
  },
];

export interface PersonalityResult {
  code: string;
  title: string;
  portrait: string;
  advice: string;
  career: string;
  icon: any;
}

export const DMU_RESULTS: Record<string, PersonalityResult> = {
  DUTE: {
    code: 'DUTE',
    title: '远洋领航员',
    portrait: '你有很强的秩序感和集体感，眼光又不止停在校园里。你像一艘准备出港的训练船：路线清楚，船员可靠，目标在更远的海面。',
    advice: '保持你的稳定和担当，也给自己留一点临时靠岸的自由。',
    career: '国际航运管理、海事监管、船舶运营、港航公共事务',
    icon: Ship,
  },
  DUTA: {
    code: 'DUTA',
    title: '蓝色协调官',
    portrait: '你既懂规则，也会转弯。你适合把复杂的人和事串起来，在班级、社团或项目里做那个让系统重新顺滑的人。',
    advice: '会协调是优势，但别总把自己的需求排在最后。',
    career: '项目管理、公共关系、港口运营、国际商务',
    icon: Users,
  },
  DUSE: {
    code: 'DUSE',
    title: '深海开拓者',
    portrait: '你外表稳，内核硬，喜欢把自己放到更大的坐标里检验。你不一定话多，但一旦认定方向，就能独自把航线推进很远。',
    advice: '独立很酷，偶尔也让别人看见你的航迹。',
    career: '海洋技术、航运金融、科研工程、国际法务',
    icon: Target,
  },
  DUSA: {
    code: 'DUSA',
    title: '机动船长',
    portrait: '你有纪律底盘，也有临场反应。别人还在讨论风向时，你已经开始调整帆面和航速。',
    advice: '快决策之前，给团队三十秒同步你的判断。',
    career: '供应链管理、风险控制、物流调度、产品运营',
    icon: Anchor,
  },
  DITE: {
    code: 'DITE',
    title: '西山守望者',
    portrait: '你更关注内在秩序和长期积累。校园越吵，你越能在图书馆、实验室或一条熟悉的小路上找到自己的稳定频率。',
    advice: '你的专注很珍贵，也可以偶尔把成果拿出来晒晒太阳。',
    career: '高校科研、通信工程、数据分析、档案与知识管理',
    icon: School,
  },
  DITA: {
    code: 'DITA',
    title: '凌水湾智囊',
    portrait: '你能在规则里玩出方法，在团队里看见隐藏路径。你不靠蛮力赢，而是靠判断、节奏和一点点幽默感。',
    advice: '灵活不是绕开责任，而是找到更聪明的承担方式。',
    career: '咨询顾问、校园活动策划、运营管理、教育科技',
    icon: Map,
  },
  DISE: {
    code: 'DISE',
    title: '铁纪学问家',
    portrait: '你相信长期主义，也愿意为一个问题坐得住。你像图书馆里一盏稳定的灯，安静，但很有能量。',
    advice: '别只追求满分答案，也允许自己写一点草稿。',
    career: '算法工程、精算、学术研究、系统架构',
    icon: Shield,
  },
  DISA: {
    code: 'DISA',
    title: '规则解构师',
    portrait: '你尊重规则，但不会被规则困住。你擅长看见系统背后的逻辑，然后用最小动作改变局面。',
    advice: '锋利的判断配上一点温度，会更有说服力。',
    career: '战略规划、风控、数据产品、法律科技',
    icon: Binary,
  },
  MUTE: {
    code: 'MUTE',
    title: '全球游侠',
    portrait: '你的驱动力来自远方。你喜欢把校园当作出发点，而不是边界，愿意去更大的世界里验证自己。',
    advice: '向外走的时候，记得给自己留一个稳定的补给港。',
    career: '海外市场、国际贸易、跨境物流、国际传播',
    icon: Globe,
  },
  MUTA: {
    code: 'MUTA',
    title: '海大造浪者',
    portrait: '你很会把传统环境变得有趣。无论是活动、作品还是一次展示，你都能让大家觉得：原来海大也可以这么玩。',
    advice: '创意需要落地，记得把灵感变成可执行清单。',
    career: '品牌策划、新媒体运营、产品经理、活动制作',
    icon: Rocket,
  },
  MUSE: {
    code: 'MUSE',
    title: '远洋独行侠',
    portrait: '你不太按常规航线走，但很能坚持自己的判断。你适合探索新问题，也能承受一个人走远路的安静。',
    advice: '保持勇气，也保留求助按钮。',
    career: '独立开发、极地科考、创新研究、自由职业',
    icon: Compass,
  },
  MUSA: {
    code: 'MUSA',
    title: '航运探索家',
    portrait: '你反应快、兴趣广，面对变化反而更兴奋。你能在新规则、新城市、新机会里迅速找到切入点。',
    advice: '速度是优势，复盘会让优势更稳。',
    career: '商业分析、供应链创新、创业、市场拓展',
    icon: Waves,
  },
  MITE: {
    code: 'MITE',
    title: '精神园丁',
    portrait: '你有柔软的内核，也有持续照料一件事的能力。你能在高压环境里保留体面、善意和自己的节奏。',
    advice: '温柔不是退让，你也可以明确表达边界。',
    career: '教育、心理支持、公益运营、内容编辑',
    icon: Heart,
  },
  MITA: {
    code: 'MITA',
    title: '校园策展人',
    portrait: '你会生活、会观察、会把普通日常重新编排。海大在你眼里不只是课表和通知，也是可以被策展的故事现场。',
    advice: '别让灵感只停在聊天里，做一个能被别人看见的成品。',
    career: '策展、新媒体、用户运营、文旅项目',
    icon: Coffee,
  },
  MISE: {
    code: 'MISE',
    title: '心海诗人',
    portrait: '你敏感、专注，也很会从校园细节里读出情绪。你可能不是最吵的那个人，但常常是最能记住瞬间的人。',
    advice: '把你的观察写下来，它们比你想象得更有力量。',
    career: '写作、设计、研究助理、影像创作',
    icon: Zap,
  },
  MISA: {
    code: 'MISA',
    title: '凌水湾奇客',
    portrait: '你有独特的脑回路，喜欢从边角处发现新入口。你不满足于“大家都这样”，更想问一句：还有没有更妙的做法？',
    advice: '保持好奇，也给想法配上执行节奏。',
    career: '全栈开发、游戏设计、创新咨询、硬科技创业',
    icon: Binary,
  },
  DEFAULT: {
    code: 'DMUTI',
    title: '海大复合型选手',
    portrait: '你在纪律与自由、远方与内心、团队与独立之间保持动态平衡。你不一定容易被单一标签定义，这正是你的弹性。',
    advice: '继续保留多面性，关键时刻选择最适合当下的那一面。',
    career: '港航、科技、教育、传播等多方向复合路径',
    icon: Compass,
  },
};

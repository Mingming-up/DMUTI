/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Anchor,
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Compass,
  ImageIcon,
  RotateCcw,
  Share2,
  Ship,
} from 'lucide-react';
import { DMU_QUESTIONS, DMU_RESULTS } from './constants/data.ts';

const campusImages = [
  {
    src: '/dmu-images/campus-aerial.png',
    label: '西山校区',
    caption: '红砖楼宇与山海城市',
  },
  {
    src: '/dmu-images/library-reflection.png',
    label: '中远图书馆',
    caption: '水面倒影里的自习宇宙',
  },
  {
    src: '/dmu-images/yupeng-ship.png',
    label: '育鹏轮',
    caption: '把课堂延伸到海上',
  },
  {
    src: '/dmu-images/main-gate.png',
    label: '校门',
    caption: '从凌水湾走向世界',
  },
];

function CampusImage({ image, className = '' }: { image: (typeof campusImages)[number]; className?: string }) {
  const [loaded, setLoaded] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-white/8 ${className}`}>
      {loaded ? (
        <img
          src={image.src}
          alt={image.label}
          className="h-full w-full object-cover"
          onError={() => setLoaded(false)}
        />
      ) : (
        <div className="flex h-full min-h-48 flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#123d63,#8d2f2f_55%,#f2b84b)] p-6 text-center">
          <ImageIcon className="text-white/70" size={34} />
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">{image.label}</span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="text-xs font-bold tracking-[0.18em] text-dmu-gold">{image.label}</div>
        <div className="mt-1 text-sm text-white/90">{image.caption}</div>
      </div>
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({
    D: 0,
    M: 0,
    U: 0,
    I: 0,
    T: 0,
    S: 0,
    E: 0,
    A: 0,
  });

  const handleStart = () => setStep('quiz');

  const handleAnswer = (dimension: 'D' | 'M' | 'U' | 'I' | 'T' | 'S' | 'E' | 'A') => {
    setAnswers((prev) => ({ ...prev, [dimension]: prev[dimension] + 1 }));
    if (currentQuestionIndex < DMU_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setStep('result');
    }
  };

  const finalResult = useMemo(() => {
    if (step !== 'result') return null;

    const code = [
      answers.D >= answers.M ? 'D' : 'M',
      answers.U >= answers.I ? 'U' : 'I',
      answers.T >= answers.S ? 'T' : 'S',
      answers.E >= answers.A ? 'E' : 'A',
    ].join('');

    return DMU_RESULTS[code] || DMU_RESULTS.DEFAULT;
  }, [step, answers]);

  const reset = () => {
    setStep('start');
    setCurrentQuestionIndex(0);
    setAnswers({ D: 0, M: 0, U: 0, I: 0, T: 0, S: 0, E: 0, A: 0 });
  };

  const shareResult = async () => {
    const text = finalResult
      ? `我的 DMUTI 是 ${finalResult.code}：${finalResult.title}`
      : '来测测你的 DMUTI 大连海事人格类型';
    await navigator.clipboard?.writeText(`${text} ${window.location.href}`);
  };

  return (
    <div className="min-h-screen bg-dmu-ink text-white selection:bg-dmu-gold selection:text-dmu-ink">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-dmu-ink/88 px-5 py-4 backdrop-blur-md md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-black tracking-tight md:text-3xl">DMUTI</div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
              Dalian Maritime University Type Indicator
            </div>
          </div>
          <div className="hidden items-center gap-2 text-[11px] font-bold md:flex">
            {['首页', '答题', '结果'].map((label, index) => {
              const active = (step === 'start' && index === 0) || (step === 'quiz' && index === 1) || (step === 'result' && index === 2);
              return (
                <span
                  key={label}
                  className={`rounded-full px-4 py-2 transition-colors ${active ? 'bg-dmu-gold text-dmu-ink' : 'bg-white/6 text-white/45'}`}
                >
                  {String(index + 1).padStart(2, '0')} {label}
                </span>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-7xl">
        <AnimatePresence mode="wait">
          {step === 'start' && (
            <motion.section
              key="start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              className="px-5 py-8 md:px-10 md:py-12"
            >
              <div className="grid min-h-[calc(100vh-112px)] gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-dmu-gold/35 bg-dmu-gold/12 px-4 py-2 text-xs font-bold tracking-[0.2em] text-dmu-gold">
                    <Compass size={16} />
                    海大专属人格航线图
                  </div>

                  <div className="space-y-5">
                    <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                      你是哪一种
                      <span className="block text-dmu-gold">海大人？</span>
                    </h1>
                    <p className="max-w-2xl border-l-4 border-dmu-red pl-5 text-lg leading-8 text-white/78">
                      从西山早八、凌水湾海风、中远图书馆到育鹏轮，把大连海事大学的日常做成一套有梗但不敷衍的 DMUTI 测试。
                    </p>
                  </div>

                  <div className="grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      ['D/M', '纪律 vs 动机'],
                      ['U/I', '远洋 vs 内港'],
                      ['T/S', '同航 vs 独航'],
                      ['E/A', '续航 vs 变舵'],
                    ].map(([code, text]) => (
                      <div key={code} className="border border-white/10 bg-white/6 p-4">
                        <div className="text-xl font-black text-dmu-gold">{code}</div>
                        <div className="mt-2 text-xs text-white/58">{text}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handleStart}
                      className="inline-flex items-center gap-3 bg-white px-7 py-4 text-sm font-black text-dmu-ink transition-colors hover:bg-dmu-gold"
                    >
                      开始测试
                      <ArrowRight size={18} />
                    </button>
                    <a
                      href="https://www.dlmu.edu.cn/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 border border-white/18 px-7 py-4 text-sm font-bold text-white/82 transition-colors hover:bg-white/8"
                    >
                      大连海事大学
                      <BadgeCheck size={18} />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-6 gap-3 lg:gap-4">
                  <CampusImage image={campusImages[0]} className="col-span-6 h-64 md:h-80" />
                  <CampusImage image={campusImages[1]} className="col-span-3 h-44" />
                  <CampusImage image={campusImages[2]} className="col-span-3 h-44" />
                  <div className="col-span-6 grid grid-cols-[1fr_auto] items-center gap-4 border border-white/10 bg-white/6 p-5">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.24em] text-dmu-gold">DMU Culture Mix</div>
                      <div className="mt-2 text-sm leading-6 text-white/68">红砖、海风、队列、图书馆、船舶与一点点大学生式灵魂吐槽。</div>
                    </div>
                    <Ship className="text-dmu-gold" size={46} strokeWidth={1.4} />
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {step === 'quiz' && (
            <motion.section
              key="quiz"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              className="grid min-h-[calc(100vh-88px)] gap-0 px-5 py-8 md:px-10 lg:grid-cols-12 lg:py-12"
            >
              <aside className="border-white/10 pb-8 lg:col-span-4 lg:border-r lg:pr-10">
                <div className="text-xs font-black uppercase tracking-[0.3em] text-dmu-gold">Question {currentQuestionIndex + 1}</div>
                <h2 className="mt-3 text-4xl font-black tracking-tight">海大场景题</h2>
                <div className="mt-8 border border-white/10 bg-white/6 p-6">
                  <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/42">Scenario</div>
                  <p className="mt-3 text-base leading-7 text-white/76">{DMU_QUESTIONS[currentQuestionIndex].scenario}</p>
                </div>
                <div className="mt-8">
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-dmu-gold"
                      animate={{ width: `${((currentQuestionIndex + 1) / DMU_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                  <div className="mt-3 flex justify-between text-xs font-bold text-white/45">
                    <span>{currentQuestionIndex + 1} / {DMU_QUESTIONS.length}</span>
                    <span>DMUTI</span>
                  </div>
                </div>
              </aside>

              <div className="flex flex-col justify-center lg:col-span-8 lg:pl-12">
                <h3 className="max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
                  {DMU_QUESTIONS[currentQuestionIndex].question}
                </h3>
                <div className="mt-10 space-y-4">
                  {DMU_QUESTIONS[currentQuestionIndex].options.map((option, index) => (
                    <button
                      key={option.label}
                      onClick={() => handleAnswer(option.dimension)}
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 border border-white/12 bg-white/5 p-5 text-left transition-colors hover:border-dmu-gold hover:bg-white/9 md:p-7"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-sm font-black text-dmu-gold group-hover:bg-dmu-gold group-hover:text-dmu-ink">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block text-xs font-bold tracking-[0.16em] text-white/38">{option.label}</span>
                        <span className="mt-2 block text-lg leading-7 text-white md:text-xl">{option.text}</span>
                      </span>
                      <ChevronRight className="text-dmu-gold opacity-55 transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {step === 'result' && finalResult && (
            <motion.section
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid min-h-[calc(100vh-88px)] lg:grid-cols-12"
            >
              <div className="border-white/10 p-6 md:p-12 lg:col-span-7 lg:border-r">
                <div className="inline-flex items-center gap-2 rounded-full bg-dmu-gold/14 px-4 py-2 text-xs font-bold tracking-[0.18em] text-dmu-gold">
                  <Anchor size={15} />
                  测试结果
                </div>
                <h1 className="mt-8 text-7xl font-black leading-none tracking-tight text-dmu-gold md:text-9xl">{finalResult.code}</h1>
                <h2 className="mt-5 text-4xl font-black md:text-6xl">{finalResult.title}</h2>
                <p className="mt-8 max-w-2xl text-xl leading-9 text-white/76">{finalResult.portrait}</p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 bg-white px-6 py-4 text-sm font-black text-dmu-ink transition-colors hover:bg-dmu-gold"
                  >
                    <RotateCcw size={17} />
                    重新测试
                  </button>
                  <button
                    onClick={shareResult}
                    className="inline-flex items-center gap-2 border border-white/18 px-6 py-4 text-sm font-bold text-white/84 transition-colors hover:bg-white/8"
                  >
                    <Share2 size={17} />
                    复制分享文案
                  </button>
                </div>
              </div>

              <div className="bg-white/5 p-6 md:p-12 lg:col-span-5">
                <div className="border border-white/10 bg-dmu-ink p-7">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.24em] text-dmu-gold">Growth Advice</div>
                      <p className="mt-4 text-xl leading-8 text-white/86">{finalResult.advice}</p>
                    </div>
                    <finalResult.icon className="shrink-0 text-dmu-gold" size={50} strokeWidth={1.3} />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xs font-black uppercase tracking-[0.24em] text-white/42">适合探索</h3>
                  <div className="mt-5 grid gap-3">
                    {finalResult.career.split('、').map((item) => (
                      <div key={item} className="flex items-center gap-3 border border-white/8 bg-white/5 px-4 py-3">
                        <span className="h-2 w-2 rounded-full bg-dmu-gold" />
                        <span className="text-white/82">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <CampusImage image={campusImages[3]} className="mt-8 h-56" />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

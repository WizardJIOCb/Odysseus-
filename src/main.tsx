import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrainCircuit,
  CheckCircle2,
  CircleDot,
  Code2,
  DatabaseZap,
  FileText,
  Github,
  Globe2,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  PlayCircle,
  Radar,
  Route,
  ServerCog,
  Sparkles,
  TerminalSquare
} from "lucide-react";
import "./styles.css";

type Agent = {
  name: string;
  role: string;
  signal: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
};

type Scenario = {
  title: string;
  detail: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
};

const agents: Agent[] = [
  {
    name: "Scout",
    role: "research + brief",
    signal: "ищет источники, сжимает шум, приносит выжимку",
    icon: Radar
  },
  {
    name: "Archivist",
    role: "docs + memory",
    signal: "держит контекст проектов, файлов и решений",
    icon: DatabaseZap
  },
  {
    name: "Builder",
    role: "code + deploy",
    signal: "собирает прототипы, пишет инструкции, готовит релиз",
    icon: TerminalSquare
  }
];

const scenarios: Scenario[] = [
  {
    title: "Личный AI-штаб",
    detail: "чат, заметки, файлы, история решений и быстрые агенты для ежедневной работы.",
    icon: BrainCircuit
  },
  {
    title: "Проектная память",
    detail: "репозитории, документы, промпты, исследования и артефакты в одном маршруте.",
    icon: Layers3
  },
  {
    title: "Self-hosted контур",
    detail: "развернуть на своем сервере, подключить модели и не размазывать данные по сервисам.",
    icon: ServerCog
  },
  {
    title: "Публичная лаборатория",
    detail: "витрина экспериментов: какие агенты полезны, что уже работает, что стоит собрать дальше.",
    icon: Globe2
  }
];

const roadmap = [
  "Поставить базовый Odysseus / Open WebUI-подобный контур и сравнить UX",
  "Подключить локальные модели, облачные модели и приватную память",
  "Собрать агента для ресерча видео, репозиториев и заметок",
  "Сделать русскую документацию: установка, сценарии, ограничения",
  "Вынести удачные шаблоны агентов на odysseus.xedoc.ru"
];

function App() {
  return (
    <main>
      <section className="hero" aria-label="Odysseus command deck">
        <img
          className="heroImage"
          src="/assets/odysseus-command-deck.png"
          alt="Футуристичная панель управления AI-агентами Odysseus"
        />
        <div className="heroOverlay" />
        <header className="topbar">
          <a className="brand" href="/">
            <span className="brandMark">
              <Route size={18} />
            </span>
            <span>Odysseus</span>
          </a>
          <nav aria-label="Основные ссылки">
            <a href="https://github.com/WizardJIOCb/Odysseus-" target="_blank" rel="noreferrer">
              <Github size={17} />
              GitHub
            </a>
            <a href="https://www.youtube.com/watch?v=7cmBOj_PZGI" target="_blank" rel="noreferrer">
              <PlayCircle size={17} />
              Обзор
            </a>
          </nav>
        </header>

        <div className="heroContent">
          <p className="eyebrow">
            <Sparkles size={16} />
            AI workspace для своих агентов, памяти и исследований
          </p>
          <h1>Odysseus как личная лаборатория мышления и автоматизации</h1>
          <p className="lead">
            Идея из ролика: не просто чат с моделью, а рабочее место, где агенты читают,
            помнят, планируют, пишут и помогают доводить проекты до результата.
          </p>
          <div className="heroActions">
            <a className="primaryAction" href="#deck">
              <CircleDot size={18} />
              Открыть деку
            </a>
            <a className="secondaryAction" href="#roadmap">
              <CheckCircle2 size={18} />
              План запуска
            </a>
          </div>
        </div>

        <aside className="signalPanel" aria-label="Статус идеи">
          <div className="signalHeader">
            <span>prototype</span>
            <strong>xedoc.ru</strong>
          </div>
          <div className="signalRows">
            <span>video</span>
            <b>reviewed</b>
            <span>repo</span>
            <b>ready</b>
            <span>domain</span>
            <b>mapped</b>
          </div>
        </aside>
      </section>

      <section className="deck" id="deck">
        <div className="sectionHead">
          <p>Что можно придумать</p>
          <h2>Собрать вокруг Odysseus не продукт-муляж, а полезный AI-контур</h2>
        </div>
        <div className="scenarioGrid">
          {scenarios.map((scenario) => {
            const Icon = scenario.icon;
            return (
              <article className="scenarioCard" key={scenario.title}>
                <Icon size={24} />
                <h3>{scenario.title}</h3>
                <p>{scenario.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="agents" aria-label="Agent roster">
        <div className="agentConsole">
          <div className="consoleHeader">
            <span />
            <span />
            <span />
            <strong>agent roster</strong>
          </div>
          <div className="agentList">
            {agents.map((agent) => {
              const Icon = agent.icon;
              return (
                <article className="agentRow" key={agent.name}>
                  <div className="agentIcon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{agent.name}</h3>
                    <p>{agent.signal}</p>
                  </div>
                  <span>{agent.role}</span>
                </article>
              );
            })}
          </div>
        </div>

        <div className="notes">
          <p>Зачем это поднимать</p>
          <h2>У Odysseus интересна сама форма: агентное рабочее место, а не очередная вкладка с чатом</h2>
          <div className="noteGrid">
            <div>
              <MessageSquareText size={21} />
              <span>диалоги становятся задачами</span>
            </div>
            <div>
              <FileText size={21} />
              <span>файлы становятся памятью</span>
            </div>
            <div>
              <Code2 size={21} />
              <span>идеи становятся прототипами</span>
            </div>
            <div>
              <LockKeyhole size={21} />
              <span>данные остаются под контролем</span>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="sectionHead compact">
          <p>План</p>
          <h2>Следующий шаг после витрины</h2>
        </div>
        <ol>
          {roadmap.map((item) => (
            <li key={item}>
              <CheckCircle2 size={20} />
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

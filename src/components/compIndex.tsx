import {
  createEffect,
  createMemo,
  createSignal,
  For,
  onMount,
  Show,
} from "solid-js";
import { createElementBounds, UpdateGuard } from "@solid-primitives/bounds";
import { throttle } from "@solid-primitives/scheduled";
import "../styles/compIndex.css";
import { A } from "@solidjs/router";

interface titleProp {
  zh?: string | null;
  en?: string | null;
}
export function Title1(props: titleProp) {
  return (
    <div class="title1 ">
      <div>
        <div class="zh t9 gradient-text">{props.zh ?? "新闻"}</div>
      </div>
      <div>
        <div class="en t11 gradient-text">{props.en ?? "NEWS & EVENTS"}</div>
      </div>
    </div>
  );
}
export function Title2(props: titleProp) {
  return (
    <div class="title2  sm:block flex justify-between">
      <div>
        <div class="zh t6 font-bold gradient-text">{props.zh ?? "新闻"}</div>
      </div>
      <div>
        <div class="en t4 gradient-text">{props.en ?? "NEWS & EVENTS"}</div>
      </div>
    </div>
  );
}
export function NewsCardIndex() {
  return (
    <div class="NewsCardIndex ulHover">
      <div class="newImg">
        <img src="/tmp/2.png" />
      </div>

      <div class="newsInfo">
        <div class="time t2 font-thin">2022-10-20 15:00 PM</div>
        <div class="title t5 ">
          <span class="ul">引领数字智能制造行业发展</span>
        </div>
        <div class="info t1">
          用人单位多数通过实习实训等方式提前锁定毕业生到企业就业，普遍评价学生基础扎实、业务过硬。2019年浙江省教育评估院调查数据显示，毕业生在实践动手能力、创新能力、团队协作能力、人际沟通能力和专业水平等各方面的企业评价得分均为93.33，领先于全省平均水平。
        </div>
      </div>
    </div>
  );
}
export function NewsCardMore() {
  return (
    <div class="NewsCardMore flex flex-col justify-between py-[2rem] flex-1 cursor-pointer">
      <div class="title text-black t2 ">
        【学习二十大】浙江理工大学党委书记吴锋民将党的二十大精神带进形势与政策课堂
      </div>
      <div class="time t2 text-gray-400 text-right font-thin">
        2022-10-20 15:00 PM
      </div>
    </div>
  );
}

interface DropDownProps {
  title?: string;
  info?: string;
  active?: boolean;
}
export function DropDown(props: DropDownProps) {
  const [toggle, setToggle] = createSignal(props.active ?? false);
  return (
    <div class="DropDown text-black">
      <div
        class="title cursor-pointer"
        onClick={() => {
          setToggle(!toggle());
        }}
      >
        <span class={`icon mr-5 ${toggle() ? "active" : ""}`}>
          <img src="/tri.svg" class="h-3 sm:h-5" />
        </span>
        <span class={`text t3 ${toggle() ? "active" : ""}`}>就业质量高</span>
      </div>
      <div class={`content ${toggle() ? "active" : ""} t1 font-thin`}>
        近三年就业率达100%，离职率低，除了顾家、九阳等传统制造行业及设计公司，毕业生也就职于阿里巴巴、网易等知名互联网企业，实现了以设计为核心的跨行业多领域就业。
      </div>
    </div>
  );
}

export function IndexCard() {
  let img: HTMLImageElement | undefined;
  const throttleUpdate: UpdateGuard = (fn) => throttle(fn, 500);
  const bounds = createElementBounds(() => img, {
    trackMutation: throttleUpdate,
    trackScroll: throttleUpdate,
  });
  return (
    <div class="IndexCard ulHover hoverCard">
      <a href="/">
        <div
          class="cover gradient-main"
          style={{ "--w": `${bounds.width}px`, "--h": `${bounds.height}px` }}
        >
          <img src="/tmp/4.png" ref={(e) => (img = e)} />
        </div>
        <div class="tag t3 gradient-text">
          <span>{"# " + "工业设计系"}</span>
        </div>
        <div class="title t5 ">
          工业设计系学子在2022年浙江省大学生工业设计大赛中喜获佳绩
        </div>
        <div class="info t1">
          浙江省大学生工业设计竞赛是由浙江省教育厅、浙江省经济和信息化厅两厅共同指导。
        </div>
        <div class="more t2 ">
          <span class="ul">查看更多</span>
        </div>
      </a>
    </div>
  );
}
interface SubBannerNavItem {
  title: string;
  url: string;
  active?: boolean;
}
export interface SubBannerProps {
  items?: SubBannerNavItem[];
  titles?: titleProp;
}

export function SubBannerTitle(props: titleProp) {
  return (
    <div class="subBannerTitle">
      <div>
        <div class="zh t8 ">{props.zh ?? "新闻"}</div>
      </div>
      <div>
        <div class="en t12 ">{props.en ?? "NEWS & EVENTS"}</div>
      </div>
    </div>
  );
}
export function SubBanner(props: SubBannerProps) {
  const defaultItems: SubBannerNavItem[] = [
    { title: "首页", url: "/" },
    { title: "团队", url: "/team", active: true },
  ];
  return (
    <div class="subBanner con gradient-line text-white leading-normal">
      <div class="nav hidden sm:block">
        <For each={props.items ?? defaultItems}>
          {(item) => (
            <A
              href={item.url}
              class={`navItem t2 ${item.active ? "current" : ""}`}
            >
              <span>{item.title}</span>
            </A>
          )}
        </For>
      </div>
      <SubBannerTitle zh={props.titles?.zh} en={props.titles?.en} />
    </div>
  );
}
export interface ResearchItemProps {
  cover?: string;
  title?: string;
  titleEn?: string;
  info?: string;
}
export function ResearchItem({
  cover,
  title,
  titleEn,
  info,
}: ResearchItemProps) {
  const defaultCover = "/tmp/1.png";
  const defaultTitle =
    "工业设计系学子在2022年浙江省大学生工业设计大赛中喜获佳绩";
  const defaultTitleEn = "Intelligent Manufacturing And System";
  const defaultInfo =
    "教学围绕“智能产品”、“硬件交互”、“服务创新”展开，致力于实现工业设计的文化赋能、科技赋能、产业赋能、商业赋能以及社会赋能。";
  let img: HTMLImageElement | undefined;
  const throttleUpdate: UpdateGuard = (fn) => throttle(fn, 500);
  const bounds = createElementBounds(() => img, {
    trackMutation: throttleUpdate,
    trackScroll: throttleUpdate,
  });
  createEffect(() => {
    console.log(bounds.width, bounds.height);
  });
  return (
    <div class="ResearchItemCard hoverCard">
      <div
        class="cover "
        style={{ "--w": `${bounds.width}px`, "--h": `${bounds.height}px` }}
      >
        <img src={cover ?? defaultCover} ref={(e) => (img = e)} />{" "}
      </div>
      <div class="title t5 mt-[2rem] mr-[3rem] sm:mr-0">
        {title ?? defaultTitle}
      </div>
      <div class="titleEn t2 font-thin mt-[2rem]">
        {titleEn ?? defaultTitleEn}
      </div>
      <div class="info mt- t1 font-thin mt-[2rem]">{info ?? defaultInfo}</div>
      <div class="arrow mt-[4rem] sm:ml-[1rem]">
        <img src="/arrow.svg" class="w-4" />
      </div>
    </div>
  );
}
export function PeopleCard() {
  return (
    <div class="PeopleCard">
      <div class="cover">
        <img src="/peotmp/1.png" />
      </div>
      <div class="info flex flex-col justify-between gradient-line">
        <div>
          <div class="name mt-3 t5">李晓明</div>
          <div class="title t1 font-thin">
            工业设系主任、教授
            <br />
            博士生导师
          </div>
        </div>
        <div class="desc t1 hidden sm:block font-thin">
          浙江省工业设计竞赛专家委员会2020至今 浙江省工业设计领域专家库成员
          澳洲莫纳什大学访学： 赴建筑与设计学院（MADA)开展服务设计 专题研究
        </div>
      </div>
    </div>
  );
}
export interface ResultItemProps {
  cover?: string;
  title?: string;
  time?: string;
  info?: string;
  className?: string;
}
export function Resultcard({ cover, title, time, info }: ResultItemProps) {
  const defaultCover = "/tmp/1.png";
  const defaultTitle =
    "工业设计系学子在2022年浙江省大学生工业设计大赛中喜获佳绩";
  const defaultTime = "2023年7月20日";
  const defaultInfo =
    "教学围绕“智能产品”、“硬件交互”、“服务创新”展开，致力于实现工业设计的文化赋能、科技赋能、产业赋能、商业赋能以及社会赋能。";
  let img: HTMLImageElement | undefined;
  const throttleUpdate: UpdateGuard = (fn) => throttle(fn, 500);
  const bounds = createElementBounds(() => img, {
    trackMutation: throttleUpdate,
    trackScroll: throttleUpdate,
  });
  createEffect(() => {
    console.log(bounds.width, bounds.height);
  });
  return (
    <div class={`ResultCard`}>
      <div
        class="cover "
        style={{ "--w": `${bounds.width}px`, "--h": `${bounds.height}px` }}
      >
        <img src={cover ?? defaultCover} ref={(e) => (img = e)} />{" "}
      </div>
      <div class="time t2 font-thin mt-[2rem]">{time ?? defaultTime}</div>
      <div class="title t5 sm:mt-[1rem] mr-[3rem] sm:mr-0">
        {title ?? defaultTitle}
      </div>
      <div class="info mt- t1 font-thin mt-[2rem]">{info ?? defaultInfo}</div>
      <div class="arrow mt-[4rem] sm:ml-[1rem]">
        <img src="/arrow.svg" class="w-4" />
      </div>
    </div>
  );
}
export function ResultcardSM({ cover, title, time, info }: ResultItemProps) {
  const defaultCover = "/tmp/1.png";
  const defaultTitle =
    "工业设计系学子在2022年浙江省大学生工业设计大赛中喜获佳绩";
  const defaultTime = "2023年7月20日";
  const defaultInfo =
    "教学围绕“智能产品”、“硬件交互”、“服务创新”展开，致力于实现工业设计的文化赋能、科技赋能、产业赋能、商业赋能以及社会赋能。";
  let img: HTMLImageElement | undefined;
  const throttleUpdate: UpdateGuard = (fn) => throttle(fn, 500);
  const bounds = createElementBounds(() => img, {
    trackMutation: throttleUpdate,
    trackScroll: throttleUpdate,
  });
  createEffect(() => {
    console.log(bounds.width, bounds.height);
  });
  return (
    <div class={`ResultCardSM`}>
      <div
        class="cover "
        style={{ "--w": `${bounds.width}px`, "--h": `${bounds.height}px` }}
      >
        <img src={cover ?? defaultCover} ref={(e) => (img = e)} />{" "}
      </div>
      <div class="text ml-10">
        <div class="title t3 ">{title ?? defaultTitle}</div>
        <div class="time t2 font-thin mt-[2rem]">{time ?? defaultTime}</div>
      </div>
    </div>
  );
}
export function CourseResultCard() {
  let img: HTMLImageElement | undefined;
  const throttleUpdate: UpdateGuard = (fn) => throttle(fn, 500);
  const bounds = createElementBounds(() => img, {
    trackMutation: throttleUpdate,
    trackScroll: throttleUpdate,
  });
  createEffect(() => {
    console.log(bounds.width, bounds.height);
  });
  return (
    <div>
      <div class="CourseResultCard hoverCard cursor-pointer ulHover mt-10  ">
        <div
          class="cover"
          style={{ "--w": `${bounds.width}px`, "--h": `${bounds.height}px` }}
        >
          <img src="/tmp/3.png" ref={(e) => (img = e)} />
        </div>
        <div class="title mt-[2rem]">
          <div class="text">
            <div
              class="mainTitle t5 font-bold "
              style={"--underlinecolor:var(--highlight-color-2)"}
            >
              <span class="sm:ul">原型控制与交互</span>
            </div>
            <div class="titleEn t2 text-gray-400 font-thin">
              Prototype control and interaction
            </div>
          </div>
          <img src="/arrow.svg" class="w-4 hidden sm:block" />
        </div>
      </div>
    </div>
  );
}
export function CourseWorksCard() {
  let img: HTMLImageElement | undefined;
  const throttleUpdate: UpdateGuard = (fn) => throttle(fn, 500);
  const bounds = createElementBounds(() => img, {
    trackMutation: throttleUpdate,
    trackScroll: throttleUpdate,
  });
  return (
    <div class="courseWorksCard select-none cursor-pointer hoverCard">
      <div
        class="cover"
        style={{ "--w": `${bounds.width}px`, "--h": `${bounds.height}px` }}
      >
        <img
          src="/tmp/2.png"
          ref={(e) => {
            img = e;
          }}
        />
      </div>
      <div class="title mt-[2rem]">
        <div class="text">
          <div class="author t2 font-bold gradient-text ">张三</div>
          <div
            class="mainTitle t5 my-[0.8rem] font-medium "
            style="--underlinecolor:var(--highlight-color-2)"
          >
            <span class="sm:ul ]">原型控制与交互</span>
          </div>
          <div class="description t1  text-gray-400 font-thin">
            Prototype control and interaction
          </div>
        </div>
      </div>
    </div>
  );
}
export function NewsCard() {
  return (
    <div class="cursor-pointer NewsCard pt-[3rem]">
      <div class="bg gradient-line -translate-y-[3rem] hidden sm:block"></div>
      <div class="newsItem">
        <div class="left">
          <div class="cover">
            <img src="/tmp/1.png" />
          </div>
        </div>

        <div class="right">
          <div class="time">
            <div class="text t2 font-thin">2023年7月20日</div>
          </div>
          <div class="title">
            <div class="text t5">
              工业设计系学子在2022年浙江省大学生工业设计大赛中喜获佳绩
            </div>
          </div>
          <div class="info">
            <div class="text t1 font-thin mt-[2rem]">
              教学围绕“智能产品”、“硬件交互”、“服务创新”展开，致力于实现工业设计的文化赋能、科技赋能、产业赋能、商业赋能以及社会赋能。
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-[3rem]" />
    </div>
  );
}
export function GraWorkCard() {
  let img: HTMLImageElement | undefined;
  const throttleUpdate: UpdateGuard = (fn) => throttle(fn, 500);
  const bounds = createElementBounds(() => img, {
    trackMutation: throttleUpdate,
    trackScroll: throttleUpdate,
  });
  return (
    <div class="courseWorksCard select-none cursor-pointer hoverCard mb-[3rem] ">
      <div
        class="cover"
        style={{ "--w": `${bounds.width}px`, "--h": `${bounds.height}px` }}
      >
        <img
          src="/tmp/2.png"
          ref={(e) => {
            img = e;
          }}
        />
      </div>
      <div class="title mt-[2rem]">
        <div class="text">
          <div class="author t2 font-bold gradient-text ">张三</div>
          <div
            class="mainTitle t5 my-[0.8rem] font-medium "
            style="--underlinecolor:var(--highlight-color-2)"
          >
            <span class="sm:ul ]">原型控制与交互</span>
          </div>
          <div class="description t1 hidden sm:block text-gray-400 font-thin">
            Prototype control and interaction
          </div>
          <div
            class="gradient-text t2 mt-[0.5rem] ulHover"
            style={"--underlinecolor:var(--gradient-to)"}
          >
            <span class="ul">在线上展中观看&gt </span>
          </div>
        </div>
      </div>
    </div>
  );
}

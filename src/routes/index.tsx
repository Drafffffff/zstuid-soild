import { A } from "solid-start";
import "../styles/index.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMount, createSignal, createEffect } from "solid-js";
import { map } from "~/utils/util";

import {
  Title1,
  NewsCardIndex,
  NewsCardMore,
  DropDown,
  IndexCard,
} from "~/components/compIndex";
// gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = createSignal(0);
  onMount(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  });

  function handleMouseMove(event: MouseEvent) {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  }

  return (
    <main class="mx-auto text-white " onMouseMove={handleMouseMove}>
      <div class="graContainer  gradient-main">
        <div class="floatTitle sm:hidden">
          <img src="/title/m-bold.svg" />
          <img src="/title/m-stroke.svg" />
        </div>
        <div
          class="floatTitleL sm:block hidden "
          style={{
            "--x": `${map(pos().x, 0, windowWidth(), -1, 1)}%`,
            "--y": `${map(pos().y, 0, windowWidth(), -1, 1)}%`,
          }}
        >
          <img src="/title/bold.svg" />
          <img src="/title/stroke.svg" />
        </div>
        <div class="scrollContent">
          <div class="img1">
            <img
              src="/tmp/1.png"
              class="floatImg"
              style={{
                "--x": `${map(pos().x, 0, window.innerWidth, -7, 7)}%`,
                "--y": `${map(pos().y, 0, window.innerHeight, -7, 7)}%`,
              }}
            />
          </div>
          <div class="introTitle t5 font-bold">学院介绍</div>
          <div class="introContent t1">
            于1996年开始本科招生，2000年获硕士点，现为国家一流本科专业建设点、省“十三五”、“十二五”特色专业、教育部卓越工程师计划试点专业、省大学生工业设计竞赛秘书处单位，所在学科入选浙江省一流学科（A类）。2018专业排名全国25名/245（武书连2018大学本科专业排行榜），2019专业排名全国10名/223（2019中国大学本科教育分专业竞争力排行榜），专业评估为五星专业。
          </div>
          <div class="img2">
            <img src="/tmp/1.png" class="floatImg" />
          </div>
        </div>
      </div>
      <div class="newsCon con  ">
        <Title1 />
        <div class="newsContainer mt-[3rem]">
          <div class="newsLeft">
            <hr />
            <NewsCardIndex />
            <hr />
            <NewsCardIndex />
            <hr />
            <NewsCardIndex />
            <hr />
          </div>
          <div class="hidden newsRight">
            <div class="title mb-[2rem]">
              <span class="gradient-text t4">更多资讯</span>
            </div>
            <div>
              <div class="moreInfo">
                <hr />
                <NewsCardMore />
                <hr />
                <NewsCardMore />
                <hr />
                <NewsCardMore />
                <hr />
                <NewsCardMore />
                <hr />
              </div>
            </div>
            <div class="more mt-[4rem]">
              <span class="cursor-pointer gradient-text t2 underline decoration-[#55bdde] underline-offset-2">
                查看更多
              </span>
            </div>
          </div>

          <div class="more mt-[2rem] text-right sm:hidden">
            <span class="cursor-pointer gradient-text t2 underline decoration-[#55bdde] underline-offset-2">
              查看更多
            </span>
          </div>
        </div>
      </div>

      <div class="talent con ">
        <Title1 zh={"人才培养"} en={"TALENT"} />
        <div class="talentContent">
          <div class="left">
            <div class="desc text-black t1">
              用人单位多数通过实习实训等方式提前锁定毕业生到企业就业，普遍评价学生基础扎实、业务过硬。2019年浙江省教育评估院调查数据显示，毕业生在实践动手能力、创新能力、团队协作能力、人际沟通能力和专业水平等各方面的企业评价得分均为93.33，领先于全省平均水平。
            </div>
            <div class="dp">
              <DropDown active={true} />
              <DropDown active={true} />
              <DropDown active={true} />
            </div>
          </div>
          <div class="right">
            <img src="/tmp/3.png" />
          </div>
        </div>
      </div>
      <div class="honors con">
        <Title1 zh={"荣誉成果"} en={"Honors  &  achievements"} />
        <div class="cards">
          <div class="row1 row">
            <IndexCard />
            <IndexCard />
            <IndexCard />
          </div>
          <div class="row2 row">
            <IndexCard />
            <IndexCard />
            <IndexCard />
          </div>
        </div>
      </div>
    </main>
  );
}

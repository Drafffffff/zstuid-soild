import { A } from "solid-start";
import "../styles/index.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMount, createSignal, createEffect } from "solid-js";
import { map } from "~/utils/util";

import { Title1, NewsCardIndex } from "~/components/compIndex";
// gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  function handleMouseMove(event: MouseEvent) {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  }
  createEffect(() => {
    console.log(pos());
  });
  onMount(() => {
    // let st = ScrollTrigger.create({
    //   trigger: ".floatTitle",
    //   start: "top center",
    //   pin: ".floatTitle",
    //   markers: true,
    // });
  });
  return (
    <main class="mx-auto text-white " onMouseMove={handleMouseMove}>
      <div class="graContainer  gradient-main">
        <div class="floatTitle sm:hidden">
          <img src="title/m-bold.svg" />
          <img src="title/m-stroke.svg" />
        </div>
        <div
          class="floatTitleL sm:block hidden "
          style={{
            "--x": `${map(pos().x, 0, window.innerWidth, -1, 1)}%`,
            "--y": `${map(pos().y, 0, window.innerHeight, -1, 1)}%`,
          }}
        >
          <img src="title/bold.svg" />
          <img src="title/stroke.svg" />
        </div>
        <div class="scrollContent">
          <div class="img1">
            <img
              src="tmp/1.png"
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
            <img src="tmp/1.png" class="floatImg" />
          </div>
        </div>
      </div>
      <div class="newsCon con h-[500px] ">
        <Title1 />
        <div class="newsContainer">
          <div class="newsLeft">
            <hr />
            <NewsCardIndex />

            <hr />
            <NewsCardIndex />
            <hr />
            <NewsCardIndex />
            <hr />
          </div>
          <div class="newsRight">
            <NewsCardIndex />
          </div>
        </div>
      </div>
    </main>
  );
}

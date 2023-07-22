import { createSignal, Show } from "solid-js";
import { A, useLocation } from "solid-start";
import "../styles/nav.css";
export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "text-[#0080db]" : "";

  const activeDrop = (path: string) =>
    location.pathname.indexOf(path) !== -1
      ? "from-[#0683DC] to-[#7DDADF] bg-gradient-to-r text-white font-bold"
      : "";
  const [isMenu, setMenu] = createSignal(false);

  return (
    <nav class="bg-white select-none">
      <ul class="flex md:px-20 px-8 items-center  py-8 text-black w-full  justify-between ">
        <li class="md:mr-64 sm:mr-48 lg:mr-100">
          <A href="/">
            <img src="/logo.svg" class="h-18 sm:h-20" />
          </A>
        </li>
        <li class="flex-1 max-w-[1200px] ">
          <ul class="container hidden items-center t3 justify-between md:flex">
            <li class={` ${active("/")} `}>
              <A href="/">学院介绍</A>
            </li>
            <li class={`dropDownCon ${active("/teams")} `}>
              <A href="/teams">团队建设</A>
              <div class="dropDown text-black absolute bg-white opacity-75 -translate-x-1/4">
                <div class="title cursor-pointer p-[3rem] py-[1rem]">
                  <span
                    onClick={() => (window.location.href = "/teams/1")}
                    class="text t2"
                  >
                    智能交互与服务
                  </span>
                </div>
                <div class="title cursor-pointer p-[3rem] py-[1rem]">
                  <span
                    onClick={() => (window.location.href = "/teams/2")}
                    class="text t2"
                  >
                    智能智造与系统
                  </span>
                </div>
                <div class="title cursor-pointer p-[3rem] py-[1rem]">
                  <span
                    onClick={() => (window.location.href = "/teams/3")}
                    class="text t2"
                  >
                    数字文化与体验
                  </span>
                </div>
              </div>
            </li>
            <li class={`dropDownCon ${active("/course")} `}>
              <A href="/course">教学课程</A>

              <div class="dropDown text-black absolute bg-white opacity-75 -translate-x-1/4">
                <div class="title cursor-pointer p-[3rem] py-[1rem]">
                  <span
                    onClick={() => (window.location.href = "/course/1")}
                    class="text t2"
                  >
                    原型控制与交互
                  </span>
                </div>
                <div class="title cursor-pointer p-[3rem] py-[1rem]">
                  <span
                    onClick={() => (window.location.href = "/course/2")}
                    class="text t2"
                  >
                    智能智造与系统
                  </span>
                </div>
                <div class="title cursor-pointer p-[3rem] py-[1rem]">
                  <span
                    onClick={() => (window.location.href = "/course/3")}
                    class="text t2"
                  >
                    数字文化与体验
                  </span>
                </div>
                <div class="title cursor-pointer p-[3rem] py-[1rem]">
                  <span
                    onClick={() => (window.location.href = "/course/3")}
                    class="text t2"
                  >
                    数字文化与体验
                  </span>
                </div>
                <div class="title cursor-pointer p-[3rem] py-[1rem]">
                  <span
                    onClick={() => (window.location.href = "/course/3")}
                    class="text t2"
                  >
                    数字文化与体验
                  </span>
                </div>
                <div class="title cursor-pointer p-[3rem] py-[1rem]">
                  <span
                    onClick={() => (window.location.href = "/course/3")}
                    class="text t2"
                  >
                    数字文化与体验
                  </span>
                </div>
              </div>
            </li>
            <li class={`  ${active("/news")} `}>
              <A href="/news">新闻中心</A>
            </li>
            <li class={` ${active("/graduation")} `}>
              <A href="/graduation">毕业展</A>
            </li>
            <li>
              <img src="/search.svg" class="w-10 cursor-pointer" />
            </li>
          </ul>
        </li>
        <li
          class="md:hidden"
          onClick={() => {
            setMenu(!isMenu());
          }}
        >
          <img src={isMenu() ? "/close.svg" : "/menu.svg"} />
        </li>
      </ul>
      <Show when={isMenu()}>
        <div class="z-50 text-white font-bold t6 backdrop-filter backdrop-blur-md  py-20 w-full bg-black/30  sm:hidden absolute">
          <p class="px-10">浙江理工大学工业设计系</p>
          <p class="px-10">
            DEPARTMENT OF <br />
            INDUSTRIAL
            <br /> DESIGN
          </p>
          <ul class=" font-normal t5 mt-20 ">
            <li class={` ${activeDrop("/")} px-16 py-10`}>
              <A href="/">学院介绍</A>
            </li>
            <li class={` ${activeDrop("/team")} px-16 py-10 `}>
              <A href="/team">团队建设</A>
            </li>
            <li class={` ${activeDrop("/course")} px-16 py-10`}>
              <A href="/course">教学课程</A>
            </li>
            <li class={`  ${activeDrop("/news")} px-16 py-10`}>
              <A href="/news">新闻中心</A>
            </li>
            <li class={` ${activeDrop("/graduation")} px-16 py-10`}>
              <A href="/graduation">毕业展</A>
            </li>
          </ul>
        </div>
      </Show>
    </nav>
  );
}

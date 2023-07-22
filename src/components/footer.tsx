import { onMount } from "solid-js";
import "../styles/footer.css";
export default function Footer() {
  return (
    <div class="footer con w-full">
      <div class="mb sm:hidden">
        <div class="logo text-center ">
          <img src={"/footerlogo.svg"} />
        </div>
        <div class="contact text-center">
          <div class="addr text-white mb-3">
            杭州市钱塘区下沙高教园区2号大街928号
          </div>
          <div class="tel ">电话: +86 2165983432</div>
          <div class="email ">邮箱: industrialdesign@zstu.edu.com</div>
        </div>
        <div class="links text-center">
          <div class="title">链接 Links</div>
          <div class="link">
            <a href="https://baidu.com">浙江理工大学</a>
          </div>
        </div>
        <div class="info">
          <div class="copyright">
            版权所有 2019-2023
            <br /> 浙江理工大学 <br /> Copyright@2019-2023
            <br /> ZHEJIANG SCI-TECH UNI.
            <br /> All Rights Reserved.
          </div>
          <div class="beian text-right">
            浙 ICP 备 00000000 号<br /> 技术支持:
          </div>
        </div>
      </div>
      <div class="desktop hidden sm:flex">
        <div class="logo child">
          <img src="/footerlogoB.svg" />
          <div class="text1 t3">浙江理工大学工业设计系</div>
          <div class="text2 t1 font-thin mt-2">
            杭州市钱塘区下沙高教园区2号大街928号
          </div>
        </div>
        <div class="links child">
          <div class="title">链接 Links</div>
          <div class="link">浙江理工大学</div>
          <div class="link">浙江理工大学产品设计系</div>
        </div>
        <div class="contact child">
          <div class="title">联系我们 Contact</div>
          <div class="text font-thin">
            111123123123@qq.com
            <br />
            电话： +86 2165983432
            <br />
            传真： +86 2165983432
          </div>
        </div>
        <div class="copyright child font-thin">
          <div class="text">
            版权所有 2019-2023 浙江理工大学 <br />
            Copyright@2019-2023 ZHEJIANG SCI-YECH UNI. <br />
            All Rights Reserved.
            <br /> 浙 ICP 备 00000000 号<br /> 技术支持：
          </div>
        </div>
      </div>
    </div>
  );
}

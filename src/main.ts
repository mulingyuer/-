import "./styles/style.scss";

/** read函数 */
function ready(fn: Function) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", () => fn());
  }
}

/** 单个灯笼模板 */
function lanternTemplate(name: string) {
  return `<div class="lantern-container">
          <div class="lantern-top-rope"></div>
          <div class="lantern-top"></div>
          <div class="lantern-center">
            <div class="lantern-line">
              <div class="lantern-text-wrap">
                <div class="lantern-text">${name}</div>
              </div>
            </div>
          </div>
          <div class="lantern-bottom"></div>
          <div class="lantern-bottom-rope"></div>
        </div>`;
}

/** 生成灯笼 */
function generateLanterns() {
  const left = document.createElement("div");
  left.className = "lantern-left";
  const right = document.createElement("div");
  right.className = "lantern-right";

  left.innerHTML = lanternTemplate("新年");
  right.innerHTML = lanternTemplate("快乐");

  //创建总容器
  const container = document.createElement("div");
  container.className = "lantern";
  container.appendChild(left);
  container.appendChild(right);

  //插入body
  document.body.appendChild(container);
}

/** 执行 */
ready(generateLanterns);


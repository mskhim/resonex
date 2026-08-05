import { onMounted, onBeforeUnmount } from 'vue';

/**
 * 스크롤 리빌 애니메이션.
 *
 * 템플릿에서 `data-reveal="up|down|left|right|scale|fade"` 속성만 붙이면
 * 화면에 들어올 때 `.is-revealed`가 추가된다. 순차 등장이 필요하면
 * `data-reveal-delay="150"` (ms)을 함께 지정한다.
 *
 * 각 뷰마다 IntersectionObserver를 직접 만들고 ref를 일일이 비교하던
 * 코드를 대체한다.
 */
export function useReveal(options = {}) {
  const { root = null, threshold = 0.12, rootMargin = '0px 0px -8% 0px' } =
    options;

  let observer = null;
  let mutationObserver = null;

  const reveal = (el) => {
    const delay = el.dataset.revealDelay;
    if (delay) {
      el.style.setProperty('--reveal-delay', `${delay}ms`);
    }
    el.classList.add('is-revealed');
  };

  const observeAll = (scope) => {
    if (!observer) return;
    scope
      .querySelectorAll('[data-reveal]:not(.is-revealed)')
      .forEach((el) => observer.observe(el));
  };

  onMounted(() => {
    const scope = root?.value ?? document;

    // 모션 최소화 설정이면 관찰 없이 즉시 표시
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      scope
        .querySelectorAll('[data-reveal]')
        .forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          reveal(entry.target);
          // 한 번 나타난 요소는 더 이상 관찰하지 않는다
          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin }
    );

    observeAll(scope);

    // v-if / v-for로 나중에 추가되는 요소도 자동으로 잡아준다
    const mutationRoot = scope === document ? document.body : scope;
    mutationObserver = new MutationObserver(() => observeAll(scope));
    mutationObserver.observe(mutationRoot, {
      childList: true,
      subtree: true,
    });
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    mutationObserver?.disconnect();
    observer = null;
    mutationObserver = null;
  });
}

/**
 * 숫자 카운트업 애니메이션.
 * requestAnimationFrame 기반이라 setInterval + $forceUpdate 조합보다
 * 부드럽고, 프레임 드롭 시에도 목표값에 정확히 도달한다.
 */
export function animateCount(target, duration = 1800, onUpdate) {
  const start = performance.now();
  // easeOutExpo — 처음엔 빠르게, 끝에서 부드럽게 멈춘다
  const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

  let frameId = null;

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    onUpdate(target * ease(progress));
    if (progress < 1) {
      frameId = requestAnimationFrame(step);
    }
  };

  frameId = requestAnimationFrame(step);

  return () => frameId && cancelAnimationFrame(frameId);
}

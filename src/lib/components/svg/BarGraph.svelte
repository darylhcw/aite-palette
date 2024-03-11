<script lang="ts">
  export let fillHigh = "#E2E8F0";
  export let fillMid = "#94A3B8";
  export let fillLow = "#64748B";
</script>

<svg role="img"
     class="w-full h-full"
     xmlns="http://www.w3.org/2000/svg"
     width="409px" height="278px" viewBox="0 0 409 278" fill="none">
  <text class="visually-hidden" font-size="0">Bar Graph</text>
  <path d="M4.35355 0.646454C4.15829 0.451172 3.84171 0.451172 3.64645 0.646454L0.464466 3.82843C0.269204 4.02368 0.269204 4.34027 0.464466 4.53552C0.659728 4.7308 0.976311 4.7308 1.17157 4.53552L4 1.70709L6.82843 4.53552C7.02369 4.7308 7.34027 4.7308 7.53553 4.53552C7.7308 4.34027 7.7308 4.02368 7.53553 3.82843L4.35355 0.646454ZM4.5 277L4.5 1H3.5L3.5 277H4.5Z" fill="black"/>
  <rect x="23" y="33" width="80" height="244" fill={fillHigh}/>
  <rect x="302" y="131" width="80" height="145" fill={fillMid}/>
  <rect x="162" y="91" width="80" height="185" fill={fillLow}/>
  <path d="M4 277L408 276.071" stroke="black"/>
</svg>

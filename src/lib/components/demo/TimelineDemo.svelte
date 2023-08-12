<script lang="ts">
  import ideaImg from "$assets/images/stepIdea.png";
  import researchImg from "$assets/images/stepResearch.png";
  import prototypeImg from "$assets/images/stepPrototype.png";
  import testingImg from "$assets/images/stepTesting.png";
  import launchImg from "$assets/images/stepLaunch.png";

  interface Step {
    name: string;
    src: string;
  }

  const steps : Step[] = [
    {
      name: "Idea",
      src: ideaImg,
    },
    {
      name: "Research",
      src: researchImg,
    },
    {
      name: "Prototype",
      src: prototypeImg,
    },
    {
      name: "Testing",
      src: testingImg,
    },
    {
      name: "Launch",
      src: launchImg,
    }
  ]
  let currentStep : Step = steps[0];

  function setCurrentStep(step: Step) {
    currentStep = step;
  }
  function prevStep() {
    const index = steps.indexOf(currentStep);
    const prev = index !== undefined ? index - 1 : 0;
    currentStep = steps[Math.max(0, prev)];
  }
  function nextStep() {
    const index = steps.indexOf(currentStep);
    const next = index !== undefined ? index + 1 : 0;
    currentStep = steps[Math.min(steps.length - 1, next)];
  }

</script>

<div class="py-2 flex flex-col items-center justify-center bg-slate-800">
  <ol class="steps z-20">
    {#each steps as step}
      <button class="step custom-step { step.name === currentStep.name ? "step-current" : "step-normal" }
                     before:border-2 before:border-slate-300 after:border-2 after:border-slate-300"
              data-content=""
              on:click={() => setCurrentStep(step)}/>
    {/each}
  </ol>
  <div class="relative -mt-5">
    <div class="relative max-w-md
                rounded-full overflow-hidden
                after:absolute after:w-full after:h-full after:top-0 after:rounded-full
                after:shadow-[inset_0_8px_16px_8px_rgba(0,0,0,0)] after:shadow-slate-800">
      <img src={currentStep.src}
          alt={currentStep.name}
          class="w-full h-full rounded-full border-2 border-slate-800"/>
    </div>
    <button class="absolute top-1/2 -left-10 -mt-2 w-11 h-11
                   font-mono text-slate-300 text-4xl
                   rounded-full bg-slate-800 border-2 border-slate-300
                   shadow-md shadow-black
                   focus-visible:bg-slate-500 hover:bg-slate-500 focus:outline-none"
            on:click={prevStep}>
      {"<"}
    </button>
    <button class="absolute top-1/2 -right-10 -mt-2 w-11 h-11
                   font-mono text-slate-300 text-4xl
                   rounded-full bg-slate-800 border-2 border-slate-300
                   shadow-md shadow-black
                   focus-visible:bg-slate-500 hover:bg-slate-500 focus:outline-none"
            on:click={nextStep}>
      {">"}
    </button>
  </div>
  <div class="py-2 px-10 -mt-5 max-w-[20rem] w-full z-10
              text-center text-4xl bg-white rounded-2xl
              shadow-lg shadow-black">
    <h3 class="">
      {currentStep.name}
    </h3>
  </div>
</div>

<style>
  .custom-step::before {
    background: transparent
  }
  .custom-step::after {
    box-shadow: 0 2px 4px #000000;
  }
  .step-normal::after {
    /* slate-800 */
    background: #1e293b;
  }
  .custom-step:hover, .custom-step:focus {
    outline: none;
  }
  .step-normal:hover:after, .step-normal:focus:after {
    /* slate-500 */
    background: #64748b;
  }
  .step-current::after {
    /* slate-50 */
    background:#f8fafc;
  }
</style>

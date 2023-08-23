<script lang="ts">
  import { onMount } from 'svelte';
  import BarGraph from '$lib/components/svg/BarGraph.svelte';

  let currentTime = new Date();
  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  }
  let date: string
  let time: string
  $: {
    date = currentTime.toLocaleDateString(undefined, dateOptions);
    date = date.slice(date.indexOf(',') + 2) // cutoff weekday
  }
  $: {
    time = currentTime.toLocaleTimeString(undefined, timeOptions);
  }

  onMount(() => {
    const timeInt = setInterval(() => {
      currentTime = new Date();
    }, 500)

    return () => { clearInterval(timeInt) }
  })

  let stats = [
    {
      title: "Palettes Generated",
      text: "5253",
      sub: "196 this month"
    },
    {
      title: "Designs Created",
      text: "108",
      sub: "4 this month"
    },
    {
      title: "Sales Total",
      text: "$12434.55",
      sub: "$1672 this month"
    },
  ]

  let pieBorder = "border-slate-200";
  let graphColors = [
    {
      name: "bg-slate-200",
      code: "#E2E8F0"
    },
    {
      name: "bg-slate-400",
      code: "#94A3B8",
    },
    {
      name: "bg-slate-600",
      code: "#334155",
    }
  ];

  let tableTabs = ["Garnet Inc.", "Zircon Ltd", "Lazuli Corp."];
  let tableCols = ["NAME", "PALETTE", "COST", "PROFIT"]
  let tableRows = [
    {
      name: "Roselle Brushwelle",
      title: "Marketing Specialist",
      palette: "Pristine and Beautiful",
      colors: ["bg-slate-200", "bg-slate-300", "bg-slate-400", "bg-slate-500", "bg-slate-600"],
      cost: "$1578",
      profit: "$295",
    },
    {
      name: "Risa Romano",
      title: "Marketing Specialist",
      palette: "Pristine and Beautiful",
      colors: ["bg-slate-200", "bg-slate-300", "bg-slate-400", "bg-slate-500", "bg-slate-600"],
      cost: "$1578",
      profit: "$295",
    },
    {
      name: "Stella Artiste",
      title: "Marketing Specialist",
      palette: "Pristine and Beautiful",
      colors: ["bg-slate-200", "bg-slate-300", "bg-slate-400", "bg-slate-500", "bg-slate-600"],
      cost: "$1578",
      profit: "$295",
    },
  ]

  let currentTab = tableTabs[0];
  let tableRow = tableRows[0]
  function tabSelected(tab: string) {
    currentTab = tab;
    tableRow = tableRows[tableTabs.indexOf(tab)]
  }

</script>

<div class="sm:px-8 px-4">
  <div class="max-w-5xl mx-auto flex flex-col justify-center">
    <header class="w-full mb-8 flex justify-between items-baseline flex-wrap">
      <h2 class="lg:text-2xl sm:text-xl text-lg text-slate-800">
        Summary
      </h2>
      <time class="lg:text-xl sm:text-lg text-sm text-slate-600">
        {date}, {time}
      </time>
    </header>

    <div class="stats sm:stats-horizontal stats-vertical
                sm:w-full mb-9 mx-auto
                font-roboto bg-slate-600 divide-x-2
                shadow-lg shadow-black-1/4">
      {#each stats as stat}
        <div class="stat border-slate-400 ">
          <div class="stat-title lg:text-2xl md:text-xl sm:text-base
                      text-slate-300">
            {stat.title}
          </div>
          <div class="stat-value lg:text-5xl md:text-4xl sm:text-2xl
                      text-semibold text-slate-100">
            {stat.text}
          </div>
          <div class="stat-desc lg:text-xl md:text-lg sm:text-sm
                      text-slate-300">
            {stat.sub}
          </div>
        </div>
      {/each}
    </div>

    <div class="flex sm:gap-x-6 gap-y-6 sm:flex-row flex-col">
      <div class="sm:w-1/2 w-full md:p-8 sm:p-6 p-4 bg-white rounded-2xl shadow-lg">
          <h3 class="sm:mb-5 mb-3 font-semibold lg:text-2xl md:text-xl sm:text-lg text-xl">
            Palette
          </h3>
          <div class="relative mx-auto sm:mb-8 mb-5 md:w-2/3 w-3/4 aspect-square">
            <div class="absolute w-[100%] h-full rounded-full {graphColors[0].name}"/>
            <div class="absolute w-1/2 h-full ml-[50%]
                        rounded-e-full
                        {graphColors[1].name}"/>
            <div class="absolute w-1/2 h-full ml-[50%]
                        rounded-e-full {pieBorder} border-2
                        -rotate-[120deg] origin-left
                        {graphColors[2].name}"/>
            <div class="absolute w-1/2 h-full ml-[50%]
                        rounded-e-full
                        -rotate-[200deg] origin-left
                        {graphColors[0].name}"/>
          </div>
          <ol class="flex justify-center lg:gap-x-7 md:gap-x-4 gap-x-2">
            {#each graphColors as color}
            <li class="flex items-center text-neutral-800 lg:text-xl md:text-base sm:text-sm text-xs">
              <div class="{color.name} md:w-5 md:h-5 sm:w-4 sm:h-4 w-3 h-3 sm:mr-1 mr-[0.125rem] rounded-full"/>
              {color.code}
            </li>
            {/each}
          </ol>
      </div>

      <div class="sm:w-1/2 w-full md:p-8 sm:p-6 p-4 flex flex-col
                  bg-white rounded-2xl shadow-lg">
        <h3 class="sm:mb-5 mb-3 font-semibold lg:text-2xl md:text-xl sm:text-lg text-xl">
          Sales
        </h3>
          <div class="mx-auto sm:mb-8 mb-5 w-full flex flex-grow">
            <small class="self-center -rotate-90 md:text-xl sm:text-base text-xs">
              USD
            </small>
            <BarGraph/>
          </div>
        <ol class="flex justify-center lg:gap-x-7 md:gap-x-4 gap-x-2">
          {#each graphColors as color}
          <li class="flex items-center text-neutral-800 lg:text-xl md:text-base sm:text-sm text-xs">
            <div class="{color.name} md:w-5 md:h-5 sm:w-4 sm:h-4 w-3 h-3 sm:mr-1 mr-[0.125rem] rounded-full"/>
            {color.code}
          </li>
          {/each}
        </ol>
      </div>
    </div>

    <div class="w-full sm:mt-8 mt-5 sm:p-8 p-4 bg-white rounded-2xl shadow-lg
                overflow-x-auto">
      <div class="tabs flex-nowrap sm:mb-8 mb-5">
        {#each tableTabs as tableTab}
          <button class="tab sm:tab-lg tab-xs tab-bordered {tableTab === currentTab ? "tab-active" : ""}
                         shrink-0 flex-nowrap text-base font-roboto"
                  on:click={() => tabSelected(tableTab)}>
            {tableTab}
          </button>
        {/each}
      </div>
      <table class="table font-roboto">
        <thead class="sm:text-sm text-xs text-black">
          <tr class="border-none">
            <th class="sm:w-12 w-6 bg-slate-200 rounded-l-lg border-r-2 border-white"/>
            {#each tableCols as col, index}
              <th class="font-normal {index >= 2 ? "text-right" : ""} bg-slate-200
                        {index === tableCols.length - 1 ? "rounded-r-lg" : ""} border-r-2 border-white">
                {col}
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="sm:text-base text-sm text-black font-roboto whitespace-nowrap">
          {#each [1, 2, 3, 4] as row}
            <tr>
              <th class="font-normal">{row}</th>
              <td>
                <p>{tableRow.name}</p>
                <p class="text-neutral-400">{tableRow.title}</p>
              </td>
              <td>
                <p>{tableRow.palette}</p>
                <div class="flex">
                  {#each tableRow.colors as color}
                    <div class="sm:w-5 sm:h-5 w-4 h-4 {color}"/>
                  {/each}
                </div>
              </td>
              <td class={"text-right"}>{tableRow.profit}</td>
              <td class={"text-right"}>{tableRow.cost}</td>
            </tr>
          {/each}
          <tr/>
        </tbody>
      </table>
    </div>
  </div>
</div>
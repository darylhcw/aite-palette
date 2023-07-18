<script lang="ts">
  import elegantPic from '$assets/images/blogElegant.png';
  import typographyPic from '$assets/images/blogTypography.png';
  import colorPic from '$assets/images/blogColor.png';
  import themesPic from '$assets/images/blogThemes.png';

  import SearchBar from '$components/demo/SearchBar.svelte';
  import Tag from '$components/demo/Tag.svelte';
  import NotFound from '$components/demo/NotFound.svelte';
  import { mediaQuery } from '$stores/MediaQuery.svelte';

  export let query = "";

  let blogPosts = [
    {
      src: elegantPic,
      title: "Elegant Design",
      content: "Uncover the allure of Elegant Design for Web UI as we explore the principles and elements that create visually captivating and user-friendly interfaces. From harmonious layouts and thoughtful typography to intuitive navigation and delicate color schemes, we'll guide you through the art of crafting elegant web experiences that leave a lasting impact. Join us as we dive into the secrets behind designing web UIs that seamlessly blend aesthetics and functionality for an enchanting user journey.",
      tags: ["Design", "Typography", "Color"],
    },
    {
      src: typographyPic,
      title: "Mastering Typography",
      content: "In this article, we delve into the art and science of typography, exploring its crucial role in web design and user experience. From choosing the right fonts to creating readable and visually appealing text, we provide practical tips and best practices to help you enhance your web UI/UX designs. Discover various typographic techniques, such as hierarchy, spacing, and color, and unlock the potential of well-executed typography to make your websites stand out and engage users. Explore how typography can effectively communicate your brand message, evoke emotions, and guide users through seamless navigation. Elevate your web designs today with the power of thoughtful typography.",
      tags: ["Design", "Typography"],
    },
    {
      src: colorPic,
      title: "Harnessing the Power of Colors",
      content: "In this post, we delve into the fascinating world of color and its transformative impact on web design. Gain insights into color theory and psychology, helping understand how different hues evoke emotions and influence user behavior. Learn the art of creating harmonious color palettes, balancing vibrant and muted tones to enhance readability and visual appeal. Discover practical techniques to use color effectively in UI elements, such as buttons, links, and backgrounds, to guide user interactions and improve user experience. Unleash the potential of colors to communicate your brand identity, establish visual hierarchy, and evoke desired responses from your users. Uncover the secrets of successful color usage and create impactful web designs that leave a lasting impression.",
      tags: ["Design", "Color"],
    },
    {
      src: themesPic,
      title: "The Power of Impeccable Themes",
      content: "In this article, we explore the significance of choosing the right theme for your web design projects. From the visual aesthetics to the underlying structure, a well-crafted theme can elevate your website to new heights. We delve into the elements of an exceptional theme, covering aspects such as typography, color schemes, layout, and responsiveness. Discover expert tips on selecting appropriate themes for different industries and target audiences, ensuring your design aligns with the intended message and user expectations. We also address the importance of customization and provide resources for finding and adapting themes to create unique, memorable experiences. With the power of impeccable themes, you can captivate users, foster engagement, and establish a strong online presence. Elevate your web design endeavors by harnessing the potential of well-executed themes.",
      tags: ["Design"],
    },
  ]
  let tags = [
    {
      name: "Design",
      selected: true,
    },
    {
      name: "Color",
      selected: false,
    },
    {
      name: "Typography",
      selected: false,
    },
  ]

  $:filteredPosts = blogPosts.filter((post) => {
                                const allDeselected = tags.reduce((accum, tag) => accum && !tag.selected, true);
                                for (const tag of tags) {
                                  if (!allDeselected && !tag.selected) continue;
                                  if (post.tags.includes(tag.name)) return true;
                                }
                                return false;
                              })
                             .filter((post) => post.title.includes(query));

  function tagClicked(clicked: string) {
    tags = tags.map((tag) => tag.name == clicked ? {...tag, selected:!tag.selected} : tag)
  }

</script>

<div class="max-w-5xl mx-auto px-4">
  <div class="mb-2">
    <SearchBar bind:query={query}/>
  </div>

  <div class="mb-10 flex flex-wrap gap-1">
    {#each tags as tag}
      <Tag tag={tag.name} size={$mediaQuery?.md ? "normal" : "small"} selectable={true} selected={tag.selected}
          on:click={() => tagClicked(tag.name)}/>
    {/each}
  </div>

  <!-- Latest/top post, shown only for a wide-enough screen -->
  {#if filteredPosts.length > 0}
  {@const post = filteredPosts[0]}
    <article class="sm:flex hidden card card-side h-80 mb-10 bg-white shadow-lg ">
      <figure class="md:w-80 w-64 shrink-0">
        <img class="h-full" src={post.src} alt={post.title}>
      </figure>
      <div class="px-10 pt-8 pb-3 flex flex-col">
        <header class="mb-4">
          <h3 class="inline font-semibold text-lg md:text-xl">
            {post.title}
          </h3>
          <span class="rounded-badge  ml-1 px-4 bg-pink-500 text-md  md:text-lg text-white">
            New
          </span>
        </header>
        <!-- Div here needed because flex-grow doesn't play well with line-clamp" -->
        <div class="grow">
          <p class="md:text-base text-md leading-snug line-clamp-[7]">
            {post.content}
          </p>
        </div>
        <div class="relative -mr-6 w-fit flex gap-x-[0.125rem] self-end">
          {#each post.tags as tag}
            <Tag tag={tag} size={ $mediaQuery?.md ? "normal" : "small"}/>
          {/each}
        </div>
      </div>
    </article>
  {/if}

  <div class="grid md:grid-cols-3 min-[510px]:grid-cols-2 justify-center gap-8">
    <!-- First post hidden (see above) unless mobile -->
    {#each filteredPosts as post, index}
      <article class="{index === 0 ? "hidden": ""} card max-w-xs min-w-0 min-[300px]:h-[30rem] h-[25rem] text-black bg-white shadow-md">
        <figure>
          <img class="w-full max-h-72 object-fill" src={post.src} alt={post.title}>
        </figure>
        <div class="px-5 pt-4 pb-2 grow flex flex-col">
          <header class="mb-3">
            <h3 class="font-semibold ellipsis-line">
              {post.title}
            </h3>
          </header>
          <!-- Div here needed because flex-grow doesn't play well with line-clamp" -->
          <div class="grow">
            <p class=" mb-6 text-sm leading-snug line-clamp-5">
              {post.content}
            </p>
          </div>
          <div class="relative -mr-2 w-fit flex flex-wrap gap-[0.06rem] self-end">
            {#each post.tags as tag}
              <Tag tag={tag} size="small"/>
            {/each}
          </div>
        </div>
      </article>
    {/each}
  </div>

  {#if filteredPosts.length <= 0}
    <NotFound/>
  {/if}
</div>
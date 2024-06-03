<div
      onClick={() => onClick(visibility)}
      style={{
        width: "300px",
      }}
      tabIndex={0}
    >
      <div class="my- p-2">
        <article class="overflow-hidden rounded-lg shadow-lg">
          <a>
            <img
              alt="Placeholder"
              class="block h-auto w-full"
              src={banner}
            />
          </a>

          <header class="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 class="text-lg">
              <a class="no-underline hover:underline text-black" href="#">
                {title}
              </a>
            </h1>
            <p class="text-grey-darker text-sm">11/1/19</p>
          </header>

          <footer class="flex items-center justify-between leading-none p-2 md:p-4">
            <a
              class="flex items-center no-underline hover:underline text-black"
              href="#"
            >
              <img
                alt="Placeholder"
                class="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <p class="ml-2 text-sm">Author Name</p>
            </a>
          </footer>
        </article>
      </div>
    </div>
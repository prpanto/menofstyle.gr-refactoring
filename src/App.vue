<template>
  <div class="overflow-auto h-full bg-white">
    <div class="sticky top-0 z-10 shadow-md">
      <div class="relative bg-lover-900">
        <div class="max-w-full py-3 px-3 sm:px-6 lg:px-8">
          <p class="font-medium text-white">
            <span class="font-sans">“Digital Academy” γνώρισε την online πλατφόρμα εκμάθησης του Men Of Style</span>
            <span class="block sm:ml-2 sm:inline-block">
              <a href="#" class="font-bold text-white underline">
                ΠΑΤΑ ΕΔΩ
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </span>
          </p>
        </div>
      </div>

      <nav>
        <Popover class="relative bg-white">
          <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div class="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img class="h-8 w-auto sm:h-10" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/imageedit_2_5267928954.png" alt="" />
              </a>
            </div>
            <div class="-my-2 -mr-2 md:hidden">
              <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lover-500">
                <span class="sr-only">Open menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
            <PopoverGroup as="nav" class="hidden space-x-10 md:flex">
              <Popover class="relative" v-slot="{ open }">
                <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-lover-500 focus:ring-offset-2']">
                  <span>Solutions</span>
                  <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
                </PopoverButton>

                <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                  <PopoverPanel class="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                    <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
                          <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-lover-600 text-white sm:h-12 sm:w-12">
                            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div class="ml-4">
                            <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                            <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>

              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</a>
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Partners</a>
              <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Company</a>
            </PopoverGroup>

            <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
              <a href="#" class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-lover-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">Sign up</a>
            </div>
          </div>

          <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
              <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div class="px-5 pt-5 pb-6">
                  <div class="flex items-center justify-between">
                    <div>
                      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg" alt="Your Company" />
                    </div>
                    <div class="-mr-2">
                      <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lover-500">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                      </PopoverButton>
                    </div>
                  </div>
                  <div class="mt-6">
                    <nav class="grid grid-cols-1 gap-7">
                      <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                        <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-lover-600 text-white">
                          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div class="ml-4 text-base font-medium text-gray-900">{{ item.name }}</div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div class="py-6 px-5">
                  <div class="grid grid-cols-2 gap-4">
                    <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>
                    <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Partners</a>
                    <a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">Company</a>
                  </div>
                  <div class="mt-6">
                    <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-lover-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">Sign up</a>
                    <p class="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?
                      <a href="#" class="text-gray-900">Sign in</a>
                    </p>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </nav>
    </div>

    <header class="relative overflow-hidden bg-neutral-900">
      <div class="mx-auto max-w-7xl">
        <main class="mx-auto my-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:my-16 lg:my-20 lg:px-8 xl:my-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline text-neutral-100">Men Of Styler</span><br>
              <span class="block text-lover-600 xl:inline text-2xl md:text-5xl">Οι Άντρες Επέστρεψαν!</span>
            </h1>
            <p class="mt-3 text-base text-neutral-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Το Men Of Style δημιουργήθηκε για εσένα που θέλεις να γίνεις η καλύτερη εκδοχή του εαυτού σου και όχι μόνο. Καλωσόρισες στην μεγαλύτερη παρέα αυτοβελτίωσης στην Ελλάδα!</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="flex w-full items-center justify-center rounded-md bg-lover-600 px-8 py-3 text-base font-medium text-white hover:bg-lover-700 md:py-4 md:px-10 md:text-lg border-2 border-lover-100">ΟΛΕΣ ΟΙ ΥΠΗΡΕΣΙΕΣ</a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full" src="https://www.menofstyle.gr/wp-content/uploads/2021/10/aples-kouventes-bgv2.jpg" alt="" />
      </div>
    </header>

    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 py-10">
      <dl class="grid grid-cols-4 gap-x-4">
        <div class="border-t-2 border-neutral-100">
          <dt class=" text-xl font-medium text-neutral-500">Subscribers</dt>
          <dd class="text-4xl font-bold tracking-tight text-neutral-900">141658</dd>
        </div>
        <div class="border-t-2 border-neutral-100">
          <dt class=" text-xl font-medium text-neutral-500">ΑΡΘΡΑ</dt>
          <dd class="text-4xl font-bold tracking-tight text-neutral-900">3140</dd>
        </div>
        <div class="border-t-2 border-neutral-100">
          <dt class=" text-xl font-medium text-neutral-500">VIDEOS</dt>
          <dd class="text-4xl font-bold tracking-tight text-neutral-900">14000</dd>
        </div>
        <div class="border-t-2 border-neutral-100">
          <dt class=" text-xl font-medium text-neutral-500">Subscribers</dt>
          <dd class="text-4xl font-bold tracking-tight text-neutral-900">956</dd>
        </div>
        
      </dl>
    </div>

    <section class="flex flex-col justify-center items-center pt-10 pb-20 px-20">
      <h1 class="text-5xl text-neutral-900 font-semibold">Μάθε τα πάντα για την επικοινωνία και τις ανθρώπινες σχέσεις!</h1>
      <span class="mt-8 h-1 w-[500px] bg-neutral-900 rounded-full" />

      <div class="mt-20 flex justify-center items-center space-x-6">
        <div class="flex-shrink flex-grow px-6 py-4 rounded-md shadow-xl hover:shadow-2xl" v-for="(item, index) in learnMore" :key="index">
          <a href="#" class="flex flex-col items-center">
            <img class="w-auto h-32" :src="item.image" alt="">
            <h1 class="mt-6 text-xl font-semibold text-neutral-900">{{ item.title }}</h1>
            <p class="mt-2 text-md text-neutral-600 font-medium">{{ item.content }}</p>
          </a>
        </div>
      </div>
    </section>

    <section class="h-screen bg-[url('https://www.menofstyle.gr/wp-content/uploads/2021/10/aples-kouventes-bgv2.jpg')] bg-cover">
      <div class="h-full flex flex-col justify-center items-center py-10 bg-neutral-900/50">
        <a href="#" class="text-8xl text-neutral-100 font-semibold hover:text-neutral-300">Απλές Κουβέντες</a>
        <span class="mt-8 h-1 w-[500px] bg-neutral-100 rounded-full" />
        <a href="#" class="mt-8 text-5xl text-neutral-100 font-semibold hover:text-neutral-300">Κάθε Δευτέρα μισή ώρα μετά τα μεσάνυχτα στο OPEN BEYOND</a>
        <img class="mt-20 w-auto h-80" src="https://www.menofstyle.gr/wp-content/uploads/2021/10/aples-kouventes-logo-1024x576.png">
        <a href="#" class="px-5 py-3 bg-lover-600 border-2 border-neutral-100 rounded-md flex items-center">
          <span class="text-2xl text-neutral-100 font-semibold mr-2">ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ ΕΔΩ</span>
          <ArrowRightIcon class="w-6 h-6 text-neutral-100" />
        </a>
      </div>
    </section>

    <section class="flex flex-col justify-center items-center bg-neutral-900 py-20">
      <h1 class="text-5xl text-neutral-100 font-semibold">ΝΕΟ Βιβλίο από τους ιδρυτές του Men Of Style</h1>
      <span class="mt-8 h-1 w-[500px] bg-neutral-100 rounded-full" />
      <h2 class="mt-16 text-4xl text-neutral-100 font-semibold">Άνδρας Αξίας</h2>
      <p class="mt-4 text-2xl text-neutral-300 font-medium">Το νέο βιβλίο από τους Ιδρυτές του Men Of Style και τις Θρυλικές Εκδόσεις Εσοπτρον. Βάλε Τάξη στο Χάος του Σύγχρονου Φλερτ.</p>

      <div class="flex justify-center items-center mt-20">
        <div class="mr-20">
          <h2 class="text-2xl text-neutral-100 font-semibold">ΚΑΝΕ ΤΟ ΔΙΚΟ ΣΟΥ ΤΩΡΑ</h2>
          <a href="#" class="max-w-fit mt-6 px-5 py-3 bg-lover-600 border-2 border-neutral-100 rounded-md flex items-center">
            <span class="text-2xl text-neutral-100 font-semibold mr-2">ΔΕΣ ΠΕΡΙΣΣΟΤΕΡΑ</span>
            <ArrowRightIcon class="w-6 h-6 text-neutral-100" />
          </a>
        </div>
        <img class="bg-cover w-auto h-[350px]" src="https://www.menofstyle.gr/wp-content/uploads/2019/07/andras_axias_subscription.png">
      </div>
    </section>

    <section class="flex flex-col justify-center items-center bg-lover-700 py-20">
      <h1 class="text-5xl text-neutral-100 font-semibold">5 Λόγοι για να Έρθεις στο Men Of Style</h1>
      <span class="mt-8 h-1 w-[500px] bg-neutral-100 rounded-full" />

      <div class="mt-10 grid grid-cols-3 gap-6 justify-center justify-items-center">
        <div class="max-w-md py-2 px-4" v-for="(item, index) in fineReason" :key="index">
          <h3 class="text-2xl font-semibold text-neutral-100">{{ item.title }}</h3>
          <p class="mt-2 text-lg font-medium text-neutral-300">{{ item.content }}</p>
        </div>
      </div>
    </section>

    <section class="flex flex-col justify-center items-center bg-lover-700 py-20">
      <h1 class="text-5xl text-neutral-100 font-semibold">Δες τον Εαυτό σου να Αλλάζει σε 5 Βήματα!</h1>
      <span class="mt-8 h-1 w-[500px] bg-neutral-100 rounded-full" />

      <TabGroup>
        <TabList class="mt-10 flex space-x-4">
          <Tab
            as="div"
            v-for="(item, index) in fiveSteps"
            :key="index"
            v-slot="{ selected }"
            class="flex space-x-2 focus:outline-none focus:ring-0"
          >
            <button
              :class="[
                'w-full rounded-full py-2 px-4 text-sm font-medium leading-5 hover:bg-neutral-100 hover:text-lover-700',
                'focus:outline-none focus:ring-0 flex flex-col transition duration-300',
                !selected
                  ? 'bg-neutral-900 text-neutral-100'
                  : 'bg-neutral-100 text-lover-700',
              ]"
            >
              <span class="text-lg font-medium">{{ index + 1 }}</span>
              <span class="text-lg font-medium">Step</span>
            </button>

            <div class="flex justify-center items-center" v-if="(index + 1) !== fiveSteps.length">
              <ArrowLongRightIcon class="ml-1.5 w-5 h-5 text-neutral-100" />
            </div>
          </Tab>
        </TabList>

        <TabPanels class="mt-6">
          <TabPanel
            as="div"
            v-for="(item, index) in fiveSteps"
            :key="index"
            class="mt-6 max-w-2xl flex flex-col justify-center items-center focus:outline-none focus:ring-0"
          >
            <h3 class="text-2xl text-neutral-100 text-center">{{ item.title }}</h3>
            <p class="mt-2 text-lg text-neutral-100 text-center">{{ item.content }}</p>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </section>

    <section class="flex flex-col justify-center items-center bg-neutral-900 py-20">
      <h1 class="text-5xl text-neutral-100 font-semibold">Πάρε πρόσβαση στην μεγαλύτερη πλατφόρμα αυτοβελτίωσης</h1>
      <span class="mt-8 h-1 w-[500px] bg-neutral-100 rounded-full" />

      <div class="flex justify-center items-center mt-10">
        <div class="mr-20">
          <h2 class="text-2xl text-neutral-100 font-semibold">Δες όλα τα σεμινάρια του Digital Academy</h2>
          <a href="#" class="max-w-fit mt-10 px-5 py-3 bg-lover-600 border-2 border-neutral-100 rounded-md flex items-center">
            <span class="text-2xl text-neutral-100 font-semibold mr-2">ΔΕΣ ΤΑ ΟΛΑ ΕΔΩ</span>
            <ArrowRightIcon class="w-6 h-6 text-neutral-100" />
          </a>
        </div>
        <img class="bg-cover w-auto h-[350px]" src="https://www.menofstyle.gr/wp-content/uploads/2021/10/digital-academy-logo_white-1024x860.png">
      </div>
    </section>

    <section class="h-screen bg-[url('https://www.menofstyle.gr/wp-content/uploads/2019/06/aa-homepage-1.jpg')] bg-cover bg-center">
      <div class="h-full flex flex-col justify-center items-center py-10 bg-neutral-900/50">
        <a href="#" class="text-8xl text-neutral-100 font-semibold hover:text-neutral-300">APLA + ANDRIKA</a>
        <span class="mt-8 h-1 w-[500px] bg-neutral-100 rounded-full" />
        <a href="#" class="mt-8 text-5xl text-neutral-100 font-semibold hover:text-neutral-300">Η Νο 1 Εκπομπή Αυτοβελτίωσης στην Ελλάδα, από το Men Of Style!</a>
        
        <div class="flex justify-center items-center space-x-32">
          <img class="mt-20 w-auto h-20" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/yt_logo_rgb_dark-300x67-300x67.png">
          <img class="mt-20 w-auto h-20" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/spotify_logo_rgb_green-300x90-300x90.png">
          <img class="mt-20 w-auto h-20" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/apple_podcastspng-300x73-300x73.png">
        </div>
        
        <a href="#" class="mt-16 px-5 py-3 bg-lover-600 border-2 border-neutral-100 rounded-md flex items-center">
          <span class="text-2xl text-neutral-100 font-semibold mr-2">ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ</span>
          <ArrowRightIcon class="w-6 h-6 text-neutral-100" />
        </a>
      </div>
    </section>

    <section class="flex flex-col justify-center items-center py-20 bg-white">
      <div class="flex flex-col justify-center items-center">
        <div class="flex justify-center items-center">
          <svg class="w-24 h-24 fill-lover-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
          <span class="text-6xl text-neutral-900 font-bold">YouTube</span>
        </div>
        <h2 href="#" class="mt-8 text-3xl text-neutral-900 font-semibold hover:text-neutral-800">Το Νο 1 Αντρικό κανάλι στο Υoutube! Κάνε ΤΩΡΑ την εγγραφή σου, πατώντας το κουμπί Men Of Style κάτω από το λογότυπο.</h2>
      </div>

      <div class="mt-16 flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-center">
          <img class="rounded-full" src="https://yt3.ggpht.com/ytc/AL5GRJX0jRHcgGUOVq98SML-71ZLLNeXjL-uPuwIRG3w=s88-c-k-c0x00ffffff-no-rj">
          <a href="#" class="mt-4 text-2xl text-neutral-900 font-semibold">Men Of Style</a>
          <div class="mt-2 flex justify-center items-center space-x-4 text-neutral-900">
            <span>141K Subscribers</span>
            <span>•</span>
            <span>1.1K Videos</span>
            <span>•</span>
            <span>48M Views</span>
          </div>
          <a href="#" class="flex items-center mt-6 rounded-md bg-lover-600 border border-neutral-900">
            <div class="mr-2 py-0.5 pl-2">
              <svg class="w-6 h-6 fill-neutral-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </div>
            <span class="py-0.5 pr-2 text-neutral-100 font-semibold mr-2">YouTube</span>
            <span class="px-1 py-0.5 bg-neutral-100 font-semibold rounded-tr-md rounded-br-md">141K</span>
          </a>
        </div>

        <div class="mt-10 w-full flex flex-col justify-between items-center">
          <div class="grid grid-cols-3 gap-6 justify-center justify-items-center">
            <div class="flex justify-center items-center h-80 w-96 py-2 px-4 bg-lover-600 rounded-md" v-for="(n, index) in 6" :key="index">
              <svg class="w-10 h-10 fill-neutral-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </div>
          </div>

          <div class="mt-16 flex justify-center items-center">
            <a href="#" class="max-w-fit px-5 py-3 bg-lover-600 rounded-md flex items-center">
              <span class="text-2xl text-neutral-100 font-semibold mr-2">ΔΕΣ ΟΛΑ ΤΑ VIDEO</span>
              <ArrowRightIcon class="w-6 h-6 text-neutral-100" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col justify-center items-center p-20 bg-neutral-900">
      <h1 class="text-5xl text-neutral-100 font-semibold">Διάβασε όλα μας τα άρθρα</h1>
      <span class="mt-8 h-1 w-[500px] bg-neutral-100 rounded-full" />

      <div class="mt-20 grid grid-cols-3 gap-6 justify-center justify-items-center">
        <div class="max-w-md px-6 py-4 rounded-md bg-white" v-for="(item, index) in articles" :key="index">
          <a href="#" class="flex flex-col items-center">
            <div class="flex justify-center items-center bg-lover-600 rounded-md w-96 h-60">
              <PhotoIcon class="w-10 h-10 text-neutral-100" />
            </div>
            <h3 class="mt-6 text-xl font-semibold text-neutral-900">{{ item.title }}</h3>
            <p class="mt-2 text-md text-neutral-600 font-medium">{{ item.content }}</p>
          </a>
        </div>
      </div>

      <div class="mt-16 flex justify-center items-center">
        <a href="#" class="max-w-fit px-5 py-3 bg-lover-600 border-2 border-neutral-100 rounded-md flex items-center">
          <span class="text-2xl text-neutral-100 font-semibold mr-2">ΔΕΣ ΟΛΑ ΤΑ ΑΡΘΡΑ</span>
          <ArrowRightIcon class="w-6 h-6 text-neutral-100" />
        </a>
      </div>
    </section>

    <div class="py-10">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-md grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/star-black-homepage.png" alt="" width="158" height="48">
          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/193x34xathens-voice-black-homepage.png.pagespeed.ic.QlTOHdT0j5.png" alt="" width="158" height="48">
          <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/ert-black-homepage-10px-e1559128143703.png" alt="" width="158" height="48">
          <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/193x28xnewsbeast-black-homepage.png.pagespeed.ic.-hSUBQC7Go.png" alt="" width="158" height="48">
          <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/ant1-black-homepage.png" alt="" width="158" height="48">
          <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/193x77xskai-black-homepage.png.pagespeed.ic.LODazwgc81.png" alt="" width="158" height="48">
          <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/eleutheros-typos-black-homepage.png" alt="" width="158" height="48">
          <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://www.menofstyle.gr/wp-content/uploads/2019/06/193x24xhuffingtonpost-black-homepage-1.png.pagespeed.ic.8nsue0Ev4o.png" alt="" width="158" height="48">
        </div>
      </div>
    </div>

    <footer class="bg-neutral-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-6 xl:col-span-1">
            <img class="h-10" src="https://www.menofstyle.gr/wp-content/uploads/2019/05/imageedit_2_5267928954.png" alt="Company name" />
            <div class="flex flex-col justify-center space-y-4">
              <a href="#" class="group flex items-center text-base text-neutral-300 hover:text-neutral-100">
                <EnvelopeIcon class="w-5 h-5 mr-2" />
                <span>Στείλε Μας Μήνυμα</span>
              </a>
              <a href="#" class="group flex items-center text-base text-neutral-300 hover:text-neutral-100">
                <BuildingOfficeIcon class="w-5 h-5 mr-2" />
                <span>Δες Τα Γραφεία Μας</span>
              </a>
              <a href="#" class="group flex items-center text-base text-neutral-300 hover:text-neutral-100">
                <MapIcon class="w-5 h-5 mr-2" />
                <span>Βρες Μας Στο Χάρτη</span>
              </a>
              <a href="#" class="group flex items-center text-base text-neutral-300 hover:text-neutral-100">
                <PhoneIcon class="w-5 h-5 mr-2" />
                <span>+ 30 210 25 25 900</span>
              </a>
            </div>
            <div class="flex space-x-6">
              <a v-for="item in footer_navigation.social" :key="item.name" :href="item.href" class="text-neutral-400 hover:text-neutral-500">
                <span class="sr-only">{{ item.name }}</span>
                <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-8 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-base font-medium text-white">Solutions</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in footer_navigation.solutions" :key="item.name">
                    <a :href="item.href" class="text-base text-neutral-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-base font-medium text-white">Support</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in footer_navigation.support" :key="item.name">
                    <a :href="item.href" class="text-base text-neutral-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-base font-medium text-white">Company</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in footer_navigation.company" :key="item.name">
                    <a :href="item.href" class="text-base text-neutral-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="mt-12 md:mt-0">
                <h3 class="text-base font-medium text-white">Legal</h3>
                <ul role="list" class="mt-4 space-y-4">
                  <li v-for="item in footer_navigation.legal" :key="item.name">
                    <a :href="item.href" class="text-base text-neutral-300 hover:text-white">{{ item.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-neutral-700 pt-8 md:flex md:items-center md:justify-center">
          <p class="mt-8 text-base text-neutral-400 md:order-1 md:mt-0">&copy; 2023 Your Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, defineComponent, h } from 'vue'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  PhotoIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapIcon,
  BuildingOfficeIcon,
  ArrowUturnLeftIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleLeftRightIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  ShoppingCartIcon,
  ArrowLongRightIcon,
} from '@heroicons/vue/24/outline'
import {
  ChevronDownIcon,
} from '@heroicons/vue/20/solid'

const solutions = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]

const fiveSteps = [
  { title: 'Επικοινώνησε με το Men Of Style', content: '"Η αρχή είναι το ήμισυ του παντός". Κάνε το πρώτο βήμα ΤΩΡΑ. Πάρε την απόφαση να αλλάξεις και να φτάσεις στο μέγιστο των δυνατοτήτων σου, επικοινωνώντας μαζί μας. Έλα κι εσύ στην παρέα μας και δες τη ζωή σου και τα αποτελέσματά σου στις προσωπικές σου σχέσεις να αλλάζουν. Σε περιμένουμε.' },
  { title: 'Συνάντηση στα Γραφεία του Men Of Style', content: 'Αφού επικοινωνήσεις μαζί μας, τα υπόλοιπα τα αναλαμβάνουμε εμείς. Ερχόμαστε σε επαφή μαζί σου άμεσα, ώστε να κλείσουμε ένα ραντεβού στα γραφεία μας ή μέσω υπολογιστή, για να γνωριστούμε και να τα πούμε.' },
  { title: 'Διαλέγουμε Μαζί το Καλύτερο για Σένα', content: 'Στο ραντεβού μας θα συζητήσουμε για ΕΣΕΝΑ. Σκοπός μας είναι να διαλέξουμε μαζί την υπηρεσία που σου ταιριάζει, ώστε να δεις την μεγαλύτερη δυνατή αλλαγή όσο πιο άμεσα γίνεται και να εκτοξεύσεις τα αποτελέσματά σου στην επικοινωνία με το αντίθετο φύλο. Πίνοντας καφέ, θα συζητήσουμε για όλα τα θέματα που σε απασχολούν πάνω στη συνολική σου αυτοβελτίωση. Σκοπός μας είναι να δεις την αλλαγή που πάντα ονειρευόσουν.' },
  { title: 'Γίνεσαι Μέρος των Μαθημάτων του Men Of Style', content: 'Τα μαθήματα ξεκινάνε! Μέσα από μια εξειδικευμένη σειρά θεωρητικών και πρακτικών μαθημάτων από τους εκπαιδευμένους Coaches μας ανακαλύπτεις όλα τα μυστικά της επικοινωνίας και των ανθρώπινων σχέσεων και γίνεσαι μέρος της παρέας μας. Μαθαίνεις πώς να επικοινωνείς αποτελεσματικότερα με τις γυναίκες, πώς λειτουργεί μια υγιής σχέση και πώς μπορείς να φλερτάρεις αποτελεσματικά. Ξεκίνα σήμερα!' },
  { title: 'Ζήσε την Απόλυτη Εμπειρία Φλερτ στο Men Of Style', content: 'Έχοντας αποκομίσει όλη την γνώση από τα προγράμματα μας, μπορείς πλέον να αποκτήσεις μια πραγματικότητα στην οποία θα έχεις σε καθημερινή βάση τα αποτελέσματα που θέλεις. Τόσο στην επικοινωνία, στο φλερτ, όσο και σε κάθε τομέα της ζωής σου. Οι γνώσεις που θα έχεις πλέον, σε συνδυασμό με την εμπειρία πάνω στις σχέσεις των δύο φύλων θα σε ωθήσουν να πιστέψεις στον εαυτό σου!' },
]

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]

const fineReason = [
  { title: 'Επειδή Εξελίσσουμε την Ανδρική Κοινότητα', content: 'Η εταιρεία μας δημιουργήθηκε με σκοπό την εξέλιξη κάθε άντρα σε όλα τα επίπεδα. Θεωρούμε ότι η επικοινωνία είναι η βάση κάθε σχέσης με το αντίθετο φύλο και ότι είναι μόνο η αρχή της εξέλιξής σου. Δεν μένουμε μόνο εκεί. Σε κάθε μας μάθημα, άρθρο και βίντεο επιδιώκουμε να προχωράμε την αντρική κοινότητα ένα βήμα μπροστά.' },
  { title: 'Για Αυτά που σου Προσφέρουμε στο Men Of Style', content: 'Η πιο εξελιγμένη εκπαίδευση για την αντρική αυτοβελτίωση είναι εδώ! Μαζί θα αναπτύξουμε στο μέγιστο τις επικοινωνιακές σου δεξιότητες με το αντίθετο φύλο, θα μάθεις καλύτερα τον εαυτό σου και κυρίως θα απολαύσεις στο μέγιστο την διαδικασία. Πλέον, μπορείς να αναπτύξεις την αυτοπεποίθηση που χρειάζεσαι προκειμένου να έχεις επιτυχίες με τις γυναίκες αλλά και στους υπόλοιπους τομείς της ζωής σου.' },
  { title: 'Για αυτά που Έχουμε Πετύχει στο Men Of Style', content: 'Από το 2014 έως και σήμερα αναλύουμε, με καθημερινή αρθρογραφία και δεκάδες βίντεο, την επιστήμη γύρω από το φλερτ και την ανθρώπινη συμπεριφορά. Η αφοσίωση, η πίστη μας και η βαθιά γνώση του αντικειμένου έχει ως αποτέλεσμα να βοηθάμε εκατοντάδες άντρες να ζήσουν την αλλαγή που πάντα επιδίωκαν. Μέσα από δεκάδες συνεντεύξεις στα ΜΜΕ αποδείξαμε πως το φλερτ είναι μια ευχάριστη διαδικασία έκφρασης και διεκδίκησης. Αποδείξαμε επίσης ότι μπορεί ο οποιοσδήποτε να καλλιεργήσει τις απαραίτητες δεξιότητες, ώστε να έχει δίπλα του την γυναίκα που του αξίζει.' },
  { title: 'Επειδή δεν Είσαι ο Μόνος', content: 'Έχοντας περάσει από την θέση σου μπορούμε να κατανοήσουμε πλήρως το τι νιώθεις. Μετά από χρόνια θεωρίας και πρακτικής εξάσκησης, δημιουργήσαμε την πρώτη αντρική παρέα στην Ελλάδα που ασχολείται με την αυτοβελτίωση και τις ανθρώπινες σχέσεις, ώστε όλοι οι άντρες να έχουν πρόσβαση στις απαραίτητες γνώσεις μέσα από μια μοναδική εμπειρία! Στο Men Of Style θα βρεις ακριβώς αυτό που χρειάζεσαι: Μια παρέα που θα σε βοηθήσει να εξελιχθείς όχι μόνο στην επικοινωνία, αλλά και σε όλους τους τομείς.' },
  { title: 'Επειδή σε Θέλουμε στην Παρέα του Men Of Style', content: 'Θέλουμε να γίνεις μέρος του οράματός μας! Πιστεύουμε ακράδαντα ότι οι ραγδαίες θετικές αλλαγές στην ζωή σου και η παράλληλη βελτίωση όλων μας μπορούν να δημιουργήσουν τις κοινωνικές συνθήκες ώστε οι σχέσεις των δύο φύλων να γίνουν αυτές που θα έπρεπε να είναι. Γίνε μέλος της παρέας μας και συνέβαλε κι εσύ στην εξέλιξη των αντρών και των ανθρώπινων σχέσεων.' },
]

const learnMore = [
  { image: 'https://www.menofstyle.gr/wp-content/uploads/2019/05/apo-th-thewria-sthn-praksh-icon.jpg', title: 'ΑΠΟ ΤΗ ΘΕΩΡΙΑ ΣΤΗΝ ΠΡΑΞΗ', content: 'Στο Men Of Style μαθαίνουμε τα πάντα πάνω στην επικοινωνία, την αυτοβελτίωση,  το στυλ και τη συμπεριφορά. Μάθε πώς μπορείς να αναπτύξεις τις επικοινωνιακές σου δεξιότητες, ώστε να γίνεις αποτελεσματικότερος στις σχέσεις σου με το αντίθετο φύλο.' },
  { image: 'https://www.menofstyle.gr/wp-content/uploads/2019/05/mathimata-e-learning-icon.jpg', title: 'Digital Academy', content: 'Κάνε την εγγραφή σου τώρα στην πλατφόρμα του Digital Academy και παρακολούθησε όλα τα Μαθήματα με την άνεση σου! Η νέα πλατφόρμα εκμάθησης σού δίνει τη δυνατότητα να αναπτύξεις τις επικοινωνιακές σου δεξιότητες και όχι μόνο, στον χώρο και τον χρόνο που εσύ επιλέγεις.' },
  { image: 'https://www.menofstyle.gr/wp-content/uploads/2019/05/video-icon.jpg', title: 'VIDEO', content: 'Στηρίζουμε το σύγχρονο άντρα με χρήσιμα βίντεο στο κανάλι μας στο YouTube, με θεματολογίες όπως η αυτοβελτίωση, η επικοινωνία, το φλερτ, οι σχέσεις και πολλά άλλα. Το Νο1 κανάλι Αυτοβελτίωσης στο YouTube είναι εδώ.' },
  { image: 'https://www.menofstyle.gr/wp-content/uploads/2019/05/arthra-icon.png', title: 'ΑΡΘΡΑ', content: 'Το Menofstyle.gr, από την πρώτη μέρα λειτουργίας του, ενημερώνει τον σύγχρονο άντρα με καθημερινή αρθρογραφία για κάθε θέμα που τον απασχολεί. Η θεματολογία μας καλύπτει μια ευρεία γκάμα αποριών, προβλημάτων και λύσεων πάνω στις ανθρώπινες σχέσεις, την αυτοβελτίωση, το φλερτ και το στυλ. Διάβαζε καθημερινά για το πώς να γίνεις η καλύτερη εκδοχή του εαυτού σου.' },
]

const articles = [
  { title: 'ΕΜΕΙΣ – Apla + Andrika', content: 'Μετά απο μία σεζόν γεμάτη με πολλούς ξεχωριστούς καλεσμένους, κλείνουμε την φετινή χρονιά με την παρέα του Απλά και Ανδρικά και κάνουμε έναν απολογισμό της χρονιάς που μας πέρασε. Σε ευχαριστούμε που ήσουν μαζί μας και τα λέμε από την νέα σεζόν!' },
  { title: 'Οικογενειακές Ιστορίες ft Στέλιος Κρητικός', content: 'Μην χάσεις ένα ακόμη Απλά και Ανδρικά με ξεχωριστούς καλεσμένους μας τον Στέλιο Κρητικό και τους γιους του, Μιχαήλ Άγγελο και Άρη! Συζητάμε για την δύναμη της οικογένειας, τις σχέσεις των γονιών με τα παιδιά τους καθώς και έννοιες όπως ο σεβασμός, η κατανόηση και οι αξίες. Συντονίσου για την πρεμιέρα του επεισοδίου στο κανάλι…' },
  { title: 'Ευτυχώς με Απέλυσαν ft Αρσένης Πασχόπουλος', content: 'Στο νέο Απλά και Ανδρικά έχουμε καλεσμένο μας τον Αρσένη Πασχόπουλο, συγγραφέα του βιβλίου "Ευτυχώς με απέλυσαν" και έναν από τους πρώτους marketers του διαδικτύου. Μιλήσαμε για την επιτυχία του στον digital τομέα που ξεκίνησε την μέρα που απολύθηκε καθώς και για το πώς μπορεί ο καθένας να στρέψει υπέρ του ένα αρνητικό περιστατικό.' },
  { title: 'Μην είσαι ΤΡΟΜΠΕΤΑ ft Chris Kogias', content: 'Στο νέο Απλά και Ανδρικά έχουμε καλεσμένο τον Χρήστο Κόγια (Chris Kogias), YouTuber, Tik Toker και αθλητή της Καλλισθενικής γυμναστικής! Με τον καλεσμένο μας συζητάμε για θέματα διατροφής, γυμναστικής, τρόπου σκέψης αλλά και για το κανάλι του στο YouTube. Τα θέματα που συζητήθηκαν: Πώς ξεκίνησε με τα social media;' },
  { title: 'Κωνσταντίνος Λοΐζου – Αφού Μπορώ Εγώ Μπορείς κι Εσύ', content: 'Κριτική βιβλίου: Κωνσταντίνος Λοΐζου - «Αφού Μπορώ Εγώ Μπορείς κι Εσύ» Ένα εξαιρετικό βιβλίο από τις εκδόσεις Έσοπτρον. Μια προσωπική ιστορία αυτογνωσίας, τόλμης και υψηλού ήθους που διαβάζεται ξανά και ξανά. Ένας συνεχής αγώνας ισχυρής θέλησης και μόνιμης αναζήτησης. Όλα τα παραπάνω στοιχεία παρέχονται από τον Κωνσταντίνο Λοΐζου στο πρώτο δημιούργημα του, ο οποίος μας…' },
  { title: 'Πώς να Συνδεθείς με το Κοινό', content: 'Η μεγαλύτερη πρόκληση, όταν δίνεις μια ομιλία, είναι να κάνεις κάπως το κοινό να συνδεθεί και να συμμετέχει. Το Σάββατο έδωσα μια ομιλία στα Ιωάννινα, καλεσμένος της Green & Grey, του πιο innovative Μεσιτικού Γραφείου στην Θεσσαλονίκη, σχετικά με τεχνικές και τρόπο σκέψης για καλύτερη σύνδεση με το κοινό που η εταιρεία απευθύνεται. Η ομιλία…' },
]

const footer_navigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
      }),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}
</script>
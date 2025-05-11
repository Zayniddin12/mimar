<template>
    <section>
        <div class="container">
            <h2 class="3xl:mb-[48px] 2xl:mb-[36px] lg:mb-[30px] mb-[24px]">Services</h2>


            <div class="grid grid-cols-3 grid-rows-2 gap-2 w-full 3xl:h-[772px] 2xl:h-[720px] xl:h-[660px]">
                <!-- 1: Commissioning (vertical large) -->
                <div class="row-span-2 col-span-1 bg-custom relative">
                    <div class="absolute top-0 left-0 w-full h-full z-0">
                        <img src="/images/comissioning.png" alt="ESG" class="w-full h-full object-cover">
                    </div>
                    <div class="h-full w-full absolute top-0 left-0 z-10" style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%);" />
                    <div class="z-20 w-full h-full 3xl:p-8 2xl:p-7 xl:p-6 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative group">
                        <div class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto group-hover:bg-[#0A5B54] bg-white duration-300">
                            <img src="/icons/Arrow-Right-black.png" alt="Right icon" class="group-hover:hidden">
                            <img src="/icons/Arrow-Right-white.png" alt="Right icon" class="group-hover:block hidden">
                        </div>

                        <div class="transform translate-y-[calc(100%-40px)] group-hover:translate-y-0 transition-transform duration-300">
                            <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">Commissioning</h2>
                            <div class="2xl:mt-[30px] lg:mt-[20px] mt-[18px] flex flex-col gap-4">
                                <p class="text-white">Mimar ensures that construction work is carried out in strict accordance with international standards and customer requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row-span-2 col-span-2 grid grid-cols-5 grid-rows-2 gap-2">

                    <!-- 3: O&M -->
                    <div class="col-span-3 row-span-1 bg-green-500 relative">
                        <div class="absolute top-0 left-0 w-full h-full z-0">
                            <img src="/images/enginering.png" alt="ESG" class="w-full h-full object-cover">
                        </div>
                        <div class="h-full w-full absolute top-0 left-0 z-10" style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%);" />
                        <div class="z-20 w-full h-full 3xl:p-8 2xl:p-7 xl:p-6 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative group">
                            <div class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto group-hover:bg-[#0A5B54] bg-white duration-300">
                                <img src="/icons/Arrow-Right-black.png" alt="Right icon" class="group-hover:hidden">
                                <img src="/icons/Arrow-Right-white.png" alt="Right icon" class="group-hover:block hidden">
                            </div>

                            <div class="transform translate-y-[calc(100%-40px)] group-hover:translate-y-0 transition-transform duration-300">
                                <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">Enginering</h2>
                                <div class="2xl:mt-[30px] lg:mt-[20px] mt-[18px] flex flex-col gap-4">
                                    <p class="text-white">Mimar ensures that construction work is carried out in strict accordance with international standards and customer requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 2: Engineering -->
                    <div class="col-span-2 row-span-1 bg-custom">
                        <div class="z-20 w-full h-full 3xl:p-8 2xl:p-7 xl:p-6 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative group">
                            <div class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto group-hover:bg-[#0A5B54] bg-white duration-300">
                                <img src="/icons/Arrow-Right-black.png" alt="Right icon" class="group-hover:hidden">
                                <img src="/icons/Arrow-Right-white.png" alt="Right icon" class="group-hover:block hidden">
                            </div>

                            <div class="transform translate-y-[calc(100%-40px)] group-hover:translate-y-0 transition-transform duration-300">
                                <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">O&M</h2>
                                <div class="2xl:mt-[30px] lg:mt-[20px] mt-[18px] flex flex-col gap-4">
                                    <p class="text-white">Mimar ensures that construction work is carried out in strict accordance with international standards and customer requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <!-- 4: Procurement -->
                    <div class="col-span-2 row-span-1 bg-custom">
                        <div class="z-20 w-full h-full 3xl:p-8 2xl:p-7 xl:p-6 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative group">
                            <div class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto group-hover:bg-[#0A5B54] bg-white duration-300">
                                <img src="/icons/Arrow-Right-black.png" alt="Right icon" class="group-hover:hidden">
                                <img src="/icons/Arrow-Right-white.png" alt="Right icon" class="group-hover:block hidden">
                            </div>

                            <div class="transform translate-y-[calc(100%-40px)] group-hover:translate-y-0 transition-transform duration-300">
                                <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">Procurement</h2>
                                <div class="2xl:mt-[30px] lg:mt-[20px] mt-[18px] flex flex-col gap-4">
                                    <p class="text-white">Mimar ensures that construction work is carried out in strict accordance with international standards and customer requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!-- 5: Construction -->
                    <div class="col-span-3 row-span-1 bg-custom relative">
                        <div class="absolute top-0 left-0 w-full h-full z-0">
                            <img src="/images/construction.png" alt="ESG" class="w-full h-full object-cover">
                        </div>
                        <div class="h-full w-full absolute top-0 left-0 z-10" style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%);" />
                        <div class="z-20 w-full h-full 3xl:p-8 2xl:p-7 xl:p-6 lg:p-5 p-4 flex flex-col justify-between overflow-hidden relative group">
                            <div class="w-[48px] h-[48px] flex justify-center items-center rounded-full ml-auto group-hover:bg-[#0A5B54] bg-white duration-300">
                                <img src="/icons/Arrow-Right-black.png" alt="Right icon" class="group-hover:hidden">
                                <img src="/icons/Arrow-Right-white.png" alt="Right icon" class="group-hover:block hidden">
                            </div>

                            <div class="transform translate-y-[calc(100%-40px)] group-hover:translate-y-0 transition-transform duration-300">
                                <h2 class="2xl:text-[40px] lg:text-[32px] text-[28px] leading-[130%] font-golos text-white">Construction</h2>
                                <div class="2xl:mt-[30px] lg:mt-[20px] mt-[18px] flex flex-col gap-4">
                                    <p class="text-white">Mimar ensures that construction work is carried out in strict accordance with international standards and customer requirements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
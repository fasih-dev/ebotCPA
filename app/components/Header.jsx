'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const tax = [
    { name: 'What is Tax Planning ', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Tax Planning Strategies', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },

]

const products = [
    { name: 'The Corvee PlatForm ', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Top Features', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },

]
const resources = [
    { name: 'The Corvee Blog ', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Glossary', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },

]

const about = [
    { name: 'Who We Are ', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Glossary', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },

]
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-6xl items-center justify-between p-6 py-8 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img alt="" src="/logo.svg" className="h-8 w-auto" />
                    </a>
                </div>

                <div className="flex lg:hidden">
                    <p className='text-black pr-8 font-bold'>Sign In</p>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-10">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Tax Planning
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="mt-14 absolute -left-96 top-full z-50 w-screen max-w-5xl overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="flex p-4 space-x-4">
                                <div className="group relative flex-none w-full sm:w-auto rounded-lg p-4 text-sm leading-6 border-l-4 border-main">
                                    <p className='text-black text-lg font-bold pb-4'>Text Planning And Hub</p>
                                    <div className="flex items-center gap-x-4 p-4 py-6  hover:shadow-lg hover:border hover:border-main rounded-lg transition duration-200 ease-in-out">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900 ">
                                                sdasdas
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600 ">Get a better understanding of your traffic</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                Analytics
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding of your traffic</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="group relative flex-none w-full sm:w-auto rounded-lg p-4 text-sm leading-6 border-l-4 border-main ">
                                    <p className='text-black text-lg font-bold pb-4'>Text Planning And Hub</p>
                                    <div className='flex space-x-4'>
                                        <div className='hover:shadow-lg  bg-gray-50 rounded-lg'>
                                            <div className="flex items-center gap-x-4 p-4 py-6    transition duration-200 ease-in-out">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href="#" className="block font-semibold text-gray-900  hover:font-bold">
                                                        Analytics
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                </div>

                                            </div>
                                            <p className="mt-1 px-4 text-gray-600  hover:font-bold">Get a better understanding of your traffic</p>
                                            <p className="mt-1 px-4 pb-4 text-gray-600  hover:font-bold underline">Read More</p>

                                        </div>
                                        <div className=' bg-gray-50 rounded-lg'>
                                            <div className="flex items-center gap-x-4 p-4 py-6    transition duration-200 ease-in-out">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href="#" className="block font-semibold text-gray-900 ">
                                                        Analytics
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                </div>

                                            </div>
                                            <p className="mt-1 px-4 text-gray-600 hover:font-bold">Get a better understanding of your traffic</p>
                                            <p className="mt-1 px-4 pb-4 text-gray-600  hover:font-bold underline">Read More</p>

                                        </div>

                                    </div>
                                </div>



                            </div>
                        </PopoverPanel>

                    </Popover>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Products
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>


                        <PopoverPanel
                            transition
                            className="mt-14 absolute -left-96 top-full z-50 w-screen max-w-6xl overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="flex p-4 space-x-4">
                                <div className="group relative flex-none w-full sm:w-auto rounded-lg p-4 text-sm leading-6 border-l-4 border-main">
                                    <p className='text-black text-lg font-bold pb-4'>Text Planning And Hub</p>
                                    <div className="flex items-center gap-x-4 p-4 py-6  hover:shadow-lg hover:border hover:border-main rounded-lg transition duration-200 ease-in-out">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900 ">
                                                sdasdas
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600 ">Get a better understanding of your traffic</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                Analytics
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding of your traffic</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="group relative flex-none w-full sm:w-auto rounded-lg p-4 text-sm leading-6 border-l-4 border-main ">
                                    <p className='text-black text-lg font-bold pb-4'>Text Planning And Hub</p>
                                    <div className='flex space-x-2'>
                                        <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                    Analytics
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding of your traffic</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                    Analytics
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding of your traffic</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                    Analytics
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding of your traffic</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                    Analytics
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding of your traffic</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </PopoverPanel>

                    </Popover>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            About
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>


                        <PopoverPanel
                            transition
                            className="mt-14 absolute -left-96 top-full z-50 w-screen max-w-5xl overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="flex p-4 space-x-4">
                                <div className="group relative flex-none w-full sm:w-auto rounded-lg p-4 text-sm leading-6 border-l-4 border-main">
                                    <p className='text-black text-lg font-bold pb-4'>Text Planning And Hub</p>
                                    <div>
                                        <div className="flex items-center gap-x-4 p-4 py-6  hover:shadow-lg hover:border hover:border-main rounded-lg transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 ">
                                                    sdasdas
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600 ">Get a better understanding of your traffic</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                    Analytics
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding of your traffic</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="group relative flex-none w-full sm:w-auto rounded-lg p-4 text-sm leading-6 border-l-4 border-main ">
                                    <p className='text-black text-lg font-bold pb-4'>Text Planning And Hub</p>
                                    <div className='flex space-x-2'>
                                        <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                    Analytics
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                    Analytics
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex space-x-2'>
                                        <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                    Analytics
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-4 p-4 py-6   transition duration-200 ease-in-out">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 " />
                                            </div>
                                            <div className="flex-auto">
                                                <a href="#" className="block font-semibold text-gray-900 hover:font-bold">
                                                    Analytics
                                                    <span className="absolute inset-0" />
                                                </a>
                                                <p className="mt-1 text-gray-600  hover:font-bold">Get a better understanding</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </PopoverPanel>

                    </Popover>
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                            Resources
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="mt-14 absolute -left-96 top-full z-50 w-screen max-w-4xl overflow-hidden bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="flex p-4 space-x-4">
                                <div className="group relative flex-none w-full sm:w-auto rounded-lg p-4 text-sm leading-6 border-l-4 border-main">
                                    <p className='text-black text-lg font-bold pb-4'>Text Planning And Hub</p>
                                    <div className="flex items-center gap-x-4 p-4 py-6   hover:shadow-lg hover:border hover:border-main rounded-lg transition duration-200 ease-in-out">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900 hover:text-main hover:font-bold">
                                                Analytics
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600 hover:text-main hover:font-bold">Get a better understanding of your traffic</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-x-4 p-4 py-6   hover:shadow-lg hover:border hover:border-main rounded-lg transition duration-200 ease-in-out">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href="#" className="block font-semibold text-gray-900 hover:text-main hover:font-bold">
                                                Analytics
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600 hover:text-main hover:font-bold">Get a better understanding of your traffic</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="group relative flex-none w-full sm:w-auto rounded-lg p-4 text-sm leading-6 border-l-4 border-main ">
                                    <p className='text-black text-lg font-bold pb-4'>Text Planning And Hub</p>
                                    <div className='flex space-x-4'>
                                        <div className='hover:shadow-lg hover:border hover:border-main bg-gray-50 rounded-lg'>
                                            <div className="flex items-center gap-x-4 p-4 py-6    transition duration-200 ease-in-out">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <ChartPieIcon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href="#" className="block font-semibold text-gray-900 hover:text-main hover:font-bold">
                                                        Analytics
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                </div>

                                            </div>
                                            <p className="mt-1 px-4 text-gray-600 hover:text-main hover:font-bold">Get a better understanding of your traffic</p>
                                            <p className="mt-1 px-4 pb-4 text-gray-600 hover:text-main hover:font-bold underline">Read More</p>

                                        </div>


                                    </div>
                                </div>



                            </div>

                        </PopoverPanel>

                    </Popover>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
                    <div className='bg-main py-2 px-6 rounded-lg'>
                        <a href="#" className="text-lg font-semibold leading-6 text-white">
                            Get a Demo
                        </a>
                    </div>
                    <a href="#" className="text-sm font-bold leading-6 py-6 px-4 text-black">
                        Sign In
                    </a>
                </div>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            {/* <span className="sr-only">Your Company</span> */}
                            <img
                                alt=""
                                src="/logo.svg"
                                className="h-8 w-auto"
                            />
                        </a>

                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Tax Planning
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...tax].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Products
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Resources
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...resources].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        About
                                        <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...about].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                            </div>
                            <div className="py-6 flex mx-auto">

                                <button className=" text-white font-bold bg-main  max-w-2xl -mx-3 block rounded-lg px-2 py-2.5 text-base leading-7  hover:bg-gray-50"
                                >
                                    Get a Demo</button>

                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

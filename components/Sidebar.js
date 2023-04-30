import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"

import {HomeIcon,HashtagIcon, DocumentPlusIcon,} from "@heroicons/react/24/solid"
import {BellIcon,InboxIcon,BookmarkIcon, ClipboardIcon, UserIcon,HomeModernIcon} from "@heroicons/react/24/outline"


export default function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">

            {/*-------------- Twiiter Logo -----------*/}
            <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
                <Image src="/logo.png" width="50" height="50">

                </Image>
            </div>

            {/*---------------- Menu -----------------*/}

            <div className="mt-4 mb-2.5 xl:items-start">

                <SidebarMenuItem
                    text="Home"
                    Icon={HomeIcon}
                    active
                />
                <SidebarMenuItem
                     text="Explore" 
                     Icon={HashtagIcon} 
                />
                <SidebarMenuItem 
                    text="Notifications" 
                    Icon={BellIcon} 
                />
                <SidebarMenuItem
                     text="Messages" 
                     Icon={InboxIcon} 
                />
                <SidebarMenuItem
                     text="Bookmarks" 
                     Icon={BookmarkIcon} 
                />
                <SidebarMenuItem
                     text="Lists" 
                     Icon={ClipboardIcon} 
                />
                <SidebarMenuItem
                     text="Profile" 
                     Icon={UserIcon} 
                />
                <SidebarMenuItem
                     text="More" 
                     Icon={DocumentPlusIcon} 
                />
            </div>

            {/*---------------- Button---------------- */}

            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>

            {/*---------------- Mini Profile---------------- */}

            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
               <img 
                src="/user.jpg"
                alt="user image"
                className="w-10 rounded-full xl:mr-2"
                />

               <div className="flex leading-5 hidden xl:inline">
                <div>
                <h4 className="font-bold">Mohammad</h4>
                <p className="text-gray-500">@moesmilzadeh</p>
                </div>
                <p className="text-2xl font-bold xl:ml-8 hidden xl:inline">...</p>
               </div>
            </div>
        </div >
    )
}

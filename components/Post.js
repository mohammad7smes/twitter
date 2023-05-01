import { ChartBarIcon, ChatBubbleLeftIcon, ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/24/outline"

const Post = ({ post }) => {
    return (
        <div className="flex p-3 cursor-pointer border-b border-gray-200">

            {/* --------- user image --------- */}
            <img
             src={post.userImage}
             alt="user-image"
             className="h-11 rounded-full mr-4"
            />

            {/* --------- right side ----- */}

            <div>
                {/* Header */}
                <div className="flex items-center justify-between">
                    {/* post User info */}
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                        <span className="text-sm sm:text-[15px]">@{post.userName} - </span>
                        <span className="text-sm sm:text-[15px] hover:underline">{post.timeStamp}</span>
                    </div>

                    {/* dot icon */}
                    <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
                </div>

                {/* Post text */}

                <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2" >{post.title}</p>

                {/* Post Image */}

                <img
                 src={post.img} 
                 alt=""
                 className="rounded-2xl mr-2 " 
                />

                {/* icons */}

                <div className="flex justify-between text-gray-500 p-2">
                    <ChatBubbleOvalLeftIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                    <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                    <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
                    <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                    <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
                </div>

            </div>

        </div>
    )
}

export default Post
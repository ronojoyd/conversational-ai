import { ragChat } from "@/lib/rag-chat"

interface PageProps {
    params: {
        url: string | string[] | undefined
    }
}

function reconstructUrl({url}: {url: string[]}) {
    return (url.map((component) => decodeURIComponent(component))).join("/")
}

const Page = async ({params}: PageProps) => {
    
    await ragChat.context.add({
        type: "html",
        source: reconstructUrl({url: params.url as string[]}), 
        config: {
            chunkOverlap: 50,
            chunkSize: 200
        }
    })

}

export default Page
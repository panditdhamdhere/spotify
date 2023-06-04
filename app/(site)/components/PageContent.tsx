"use client";

import { Song } from "@/types";

interface PageContentProps {
    songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({songs}) => {
  return (
    <div>
      page content
    </div>
  )
}

export default PageContent

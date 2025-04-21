import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={260}
        height={500}
        viewBox="0 0 260 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="133" cy="137" r="123" />
        <rect x="7" y="280" rx="10" ry="10" width="264" height="33" />
        <rect x="6" y="333" rx="10" ry="10" width="259" height="79" />
        <rect x="120" y="434" rx="25" ry="25" width="137" height="41" />
        <rect x="10" y="446" rx="4" ry="4" width="96" height="21" />
    </ContentLoader>
)

export default Skeleton
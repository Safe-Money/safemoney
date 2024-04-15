import Skeleton from "react-loading-skeleton"

const HomeSkeleton = () => {
    return (
        <div className="conta-skeleton">
            <div>
                <Skeleton circle width={20} height={40} />
                
            </div>
        </div>
    )
}

export default HomeSkeleton
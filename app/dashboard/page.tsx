import LeftMenu from "@/components/dashboard/LeftMenu";
import MiddlePosts from "@/components/dashboard/MiddlePosts";
import RightActions from "@/components/dashboard/RightActions";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto p-4">
                {/* Left Menu */}
                <div className="col-span-3 bg-gray-800 rounded-lg p-4">
                    <LeftMenu />
                </div>

                {/* Middle Posts */}
                <div className="col-span-6 bg-gray-800 rounded-lg p-4">
                    <MiddlePosts />
                </div>

                {/* Right Actions */}
                <div className="col-span-3 bg-gray-800 rounded-lg p-4">
                    <RightActions />
                </div>
            </div>
        </div>
    );
}
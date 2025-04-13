"use client";

import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ActionButtonProps {
    icon: ReactNode;
    label: string;
    onClick: () => void;
}

export default function ActionButton({ icon, label, onClick }: ActionButtonProps) {
    return (
        <Button
            variant="ghost"
            className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700"
            onClick={onClick}
        >
            {icon}
            <span className="text-gray-300 hover:text-white">{label}</span>
        </Button>
    );
}
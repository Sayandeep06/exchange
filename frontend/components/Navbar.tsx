"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { SuccessButton, PrimaryButton } from "./Button";

export const Navbar = () => {
    const route = usePathname();
    const router = useRouter();

    const navLinks = [
        { name: "Markets", href: "/markets" },
        { name: "Trade", href: "/trade/SOL_USDC" }
    ];

    return (
        <div className="sticky top-0 z-50 bg-[#0e0f11]/60 backdrop-blur-md shadow-md">
            <div className="flex items-center justify-between px-6 py-3 h-16">
                <div className="flex items-center space-x-10">
                    <div
                        onClick={() => router.push("/")}
                        className="text-xl font-semibold text-white cursor-pointer tracking-wide"
                    >
                        Quantex
                    </div>
                    {navLinks.map((link) => {
                        const isActive = route.startsWith(link.href);
                        return (
                            <div
                                key={link.name}
                                onClick={() => router.push(link.href)}
                                className={`text-sm font-medium cursor-pointer transition duration-200 ${
                                    isActive
                                        ? "text-white"
                                        : "text-slate-400 hover:text-white"
                                }`}
                            >
                                {link.name}
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center gap-3">
                    <SuccessButton >Deposit</SuccessButton>
                    <PrimaryButton >Withdraw</PrimaryButton>
                </div>
            </div>
        </div>
    );
};
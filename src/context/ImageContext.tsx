"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";

type ImageContextValue = {
    logo: string | null
    name: string | null
    logo_small: string | null
    name_small: string | null
}

const ImageContext = createContext<ImageContextValue | undefined>(undefined)

const export function ImageContextProvider({children}: {children:React.ReactNode}) {
    const 
}
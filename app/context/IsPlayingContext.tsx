"use client";
import { ReactNode, createContext, useState } from "react";

interface AppContextType {
	isPlaying: boolean;
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}
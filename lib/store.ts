// lib/store.ts

import { create } from 'zustand';

export interface WorkspaceItem {
  id: string;
  type: 'desk' | 'chair' | 'monitor' | 'lamp' | 'plant' | 'accessory';
  name: string;
  price: number;
  image: string;
  position?: { x: number; y: number; z: number };
}

export interface WorkspaceState {
  desk: WorkspaceItem | null;
  chair: WorkspaceItem | null;
  accessories: WorkspaceItem[];
  rentalDays: number;
  
  setDesk: (desk: WorkspaceItem) => void;
  setChair: (chair: WorkspaceItem) => void;
  addAccessory: (accessory: WorkspaceItem) => void;
  removeAccessory: (id: string) => void;
  setRentalDays: (days: number) => void;
  getTotalPrice: () => number;
  reset: () => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set, get) => ({
  desk: null,
  chair: null,
  accessories: [],
  rentalDays: 7,
  
  setDesk: (desk) => set({ desk }),
  setChair: (chair) => set({ chair }),
  addAccessory: (accessory) => set((state) => ({
    accessories: [...state.accessories, accessory]
  })),
  removeAccessory: (id) => set((state) => ({
    accessories: state.accessories.filter(item => item.id !== id)
  })),
  setRentalDays: (days) => set({ rentalDays: days }),
  getTotalPrice: () => {
    const state = get();
    let total = 0;
    if (state.desk) total += state.desk.price;
    if (state.chair) total += state.chair.price;
    state.accessories.forEach(acc => total += acc.price);
    return total * state.rentalDays;
  },
  reset: () => set({ desk: null, chair: null, accessories: [], rentalDays: 7 })
}));
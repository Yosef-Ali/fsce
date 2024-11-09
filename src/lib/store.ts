import { create } from 'zustand'

interface PostStore {
  status: 'draft' | 'published' | 'archived'
  imageUrl: string
  category: string
  setStatus: (status: PostStore['status']) => void
  setImageUrl: (url: string) => void
  setCategory: (category: string) => void
  reset: () => void
}

// Renamed from usePostStore to useEditPostStore to match existing usage
export const useEditPostStore = create<PostStore>((set) => ({
  status: 'draft',
  imageUrl: '',
  category: '',
  setStatus: (status) => set({ status }),
  setImageUrl: (imageUrl) => set({ imageUrl }),
  setCategory: (category) => set({ category }),
  reset: () => set({ status: 'draft', imageUrl: '', category: '' })
}))
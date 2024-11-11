import { create } from 'zustand';

type ImageState = {
  uploadedImages: string[];
  setUploadedImages: (images: string[]) => void;
  addImage: (image: string) => void;
  removeImage: (index: number) => void;
};

export const useImageStore = create<ImageState>()((set) => ({
  uploadedImages: [],
  setUploadedImages: (images) => set({ uploadedImages: images }),
  addImage: (image) =>
    set((state) => ({
      uploadedImages: [...state.uploadedImages, image],
    })),
  removeImage: (index) =>
    set((state) => ({
      uploadedImages: state.uploadedImages.filter((_, i) => i !== index),
    })),
}));
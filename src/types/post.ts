
export interface PostFormData {
  title: string;
  content: string;
  slug: string;
}

export interface PostData extends PostFormData {
  status: 'draft' | 'published' | 'archived';
  image?: string;
}
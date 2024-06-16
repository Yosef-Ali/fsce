"use client";

import { Editor } from 'novel';
import type { Editor as TipTapEditor } from '@tiptap/core';

const NovelEditor = ({ onContentChange }: { onContentChange: (content: string) => void }) => {
  return (
    <Editor
      className='novel-min-h-[500px] novel-w-full novel-max-w-screen-lg  novel-bg-white  sm:novel-rounded-lg sm:novel-border mb-8 max-h-96 overflow-y-auto'
      disableLocalStorage={true}
      defaultValue={{
        "type": "doc",
        "content": []
      }}
      onDebouncedUpdate={(editor?: TipTapEditor) => {
        const newContent = editor?.getHTML() || '';
        onContentChange(newContent);
      }}
    />
  );
};

export default NovelEditor;

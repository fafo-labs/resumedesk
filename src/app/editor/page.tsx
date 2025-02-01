import { Resume } from '@/components/resume/Resume';

export default function EditorPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-8 bg-white editor-page">
      <div className="editor-content">
        <Resume />
      </div>
    </main>
  );
}

import { Lesson } from '@/types'

interface Props {
  lesson: Lesson
  onComplete: () => void
}

export default function TransliterationLesson({ lesson, onComplete }: Props) {
  return (
    <div className="lesson-placeholder">
      <p>🔡 {lesson.content.intro || 'Transliteration task'}</p>
      <p style={{ color: '#999', fontSize: '14px' }}>
        {lesson.taskCount || 4} transliteration tasks (Malayalam to ISO 15919)
      </p>
      <button className="btn-primary" onClick={onComplete} style={{ marginTop: '16px' }}>
        Skip & Continue →
      </button>
    </div>
  )
}

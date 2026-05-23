import { Lesson } from '@/types'

interface Props {
  lesson: Lesson
  onComplete: () => void
}

export default function DiscriminationLesson({ lesson, onComplete }: Props) {
  return (
    <div className="lesson-placeholder">
      <p>📢 {lesson.content.intro || 'Discrimination task'}</p>
      <p style={{ color: '#999', fontSize: '14px' }}>
        {lesson.taskCount || 6} audio discrimination tasks
      </p>
      <button className="btn-primary" onClick={onComplete} style={{ marginTop: '16px' }}>
        Skip & Continue →
      </button>
    </div>
  )
}

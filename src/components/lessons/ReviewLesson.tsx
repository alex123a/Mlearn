import { Lesson } from '@/types'

interface Props {
  lesson: Lesson
  onComplete: () => void
}

export default function ReviewLesson({ lesson, onComplete }: Props) {
  return (
    <div className="lesson-placeholder">
      <p>🎓 {lesson.content.intro || 'Module Review'}</p>
      <p style={{ color: '#999', fontSize: '14px' }}>
        {lesson.content.totalTasks || 10} mixed tasks combining all learned content
      </p>
      <div style={{
        background: '#f0f9ff',
        padding: '16px',
        borderRadius: '8px',
        margin: '16px 0',
        borderLeft: '4px solid #0099ff'
      }}>
        <p style={{ margin: 0, color: '#0066cc', fontSize: '14px' }}>
          ✓ This review mixes all content from this module.<br />
          Task types will rotate: discrimination, identification, transliteration, handwriting
        </p>
      </div>
      <button className="btn-primary" onClick={onComplete} style={{ marginTop: '16px' }}>
        Skip & Continue →
      </button>
    </div>
  )
}

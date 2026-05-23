import { Lesson } from '@/types'

interface Props {
  lesson: Lesson
  onComplete: () => void
}

export default function HandwritingLesson({ lesson, onComplete }: Props) {
  const guidanceText = {
    1: 'Full ghost letter to trace',
    2: 'Left half shown',
    3: 'Dot guides only',
    4: 'Hint appears on 2nd failure',
    5: 'No guidance',
  }

  const guidanceLevel = lesson.guidanceLevel || 1

  return (
    <div className="lesson-placeholder">
      <p>✏️ {lesson.content.intro || 'Handwriting practice'}</p>
      <p style={{ color: '#999', fontSize: '14px' }}>
        {lesson.taskCount || 4} handwriting tasks (Guidance level: {guidanceText[guidanceLevel as keyof typeof guidanceText]})
      </p>
      <div style={{
        background: '#f5f5f5',
        padding: '40px',
        borderRadius: '8px',
        textAlign: 'center',
        margin: '16px 0',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#999'
      }}>
        [Canvas for handwriting practice would appear here]
      </div>
      <button className="btn-primary" onClick={onComplete} style={{ marginTop: '16px' }}>
        Skip & Continue →
      </button>
    </div>
  )
}

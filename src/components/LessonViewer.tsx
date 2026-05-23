import { useState } from 'react'
import { Lesson, TaskType } from '@/types'
import IntroductionLesson from './lessons/IntroductionLesson'
import DiscriminationLesson from './lessons/DiscriminationLesson'
import IdentificationLesson from './lessons/IdentificationLesson'
import TransliterationLesson from './lessons/TransliterationLesson'
import HandwritingLesson from './lessons/HandwritingLesson'
import ReviewLesson from './lessons/ReviewLesson'
import './LessonViewer.css'

interface Props {
  lesson: Lesson
  onComplete: () => void
  onPrevious: () => void
  canGoPrevious: boolean
}

export default function LessonViewer({ lesson, onComplete, onPrevious, canGoPrevious }: Props) {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleComplete = () => {
    setIsCompleted(true)
    setTimeout(() => {
      onComplete()
      setIsCompleted(false)
    }, 500)
  }

  const renderLessonContent = () => {
    switch (lesson.type) {
      case 'introduction':
        return <IntroductionLesson lesson={lesson} onComplete={handleComplete} />
      case 'lesson':
        return (
          <>
            {lesson.taskType === 'discrimination' && (
              <DiscriminationLesson lesson={lesson} onComplete={handleComplete} />
            )}
            {lesson.taskType === 'identification' && (
              <IdentificationLesson lesson={lesson} onComplete={handleComplete} />
            )}
            {lesson.taskType === 'transliteration' && (
              <TransliterationLesson lesson={lesson} onComplete={handleComplete} />
            )}
            {lesson.taskType === 'handwriting' && (
              <HandwritingLesson lesson={lesson} onComplete={handleComplete} />
            )}
          </>
        )
      case 'review':
        return <ReviewLesson lesson={lesson} onComplete={handleComplete} />
      default:
        return <div>Unknown lesson type</div>
    }
  }

  return (
    <div className={`lesson-viewer ${isCompleted ? 'completed' : ''}`}>
      <div className="lesson-header">
        <h2>{lesson.title}</h2>
        <div className="lesson-meta">
          {lesson.taskType && <span className="task-type">{lesson.taskType}</span>}
          {lesson.taskCount && <span className="task-count">{lesson.taskCount} tasks</span>}
        </div>
      </div>

      <div className="lesson-content">
        {renderLessonContent()}
      </div>

      <div className="lesson-controls">
        {canGoPrevious && (
          <button className="btn-secondary" onClick={onPrevious}>
            ← Previous
          </button>
        )}
        <div className="spacer"></div>
        {isCompleted && (
          <span className="completion-message">✓ Lesson Complete!</span>
        )}
      </div>
    </div>
  )
}

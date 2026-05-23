import { useState, useEffect } from 'react'
import LessonViewer from './components/LessonViewer'
import ProgressTracker from './components/ProgressTracker'
import type { Module, Lesson } from './types'
import module1Data from '../data/module1-lessons.json'
import './App.css'

function App() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  const module = module1Data as Module
  const currentLesson = module.lessonSequence[currentLessonIndex] as Lesson

  const handleLessonComplete = () => {
    setCompletedLessons([...completedLessons, currentLesson.lessonId])
    if (currentLessonIndex < module.lessonSequence.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
    }
  }

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Learn Malayalam Script</h1>
        <ProgressTracker
          current={currentLessonIndex + 1}
          total={module.lessonSequence.length}
          completedCount={completedLessons.length}
        />
      </header>

      <main className="app-main">
        {currentLesson && (
          <LessonViewer
            lesson={currentLesson}
            onComplete={handleLessonComplete}
            onPrevious={handlePreviousLesson}
            canGoPrevious={currentLessonIndex > 0}
          />
        )}
      </main>
    </div>
  )
}

export default App

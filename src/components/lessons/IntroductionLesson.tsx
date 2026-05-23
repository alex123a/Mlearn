import { Lesson } from '@/types'
import './IntroductionLesson.css'

interface Props {
  lesson: Lesson
  onComplete: () => void
}

export default function IntroductionLesson({ lesson, onComplete }: Props) {
  const content = lesson.content

  return (
    <div className="introduction-lesson">
      {content.intro && (
        <p className="intro-text">{content.intro}</p>
      )}

      {content.characters && content.characters.length > 0 && (
        <div className="characters-showcase">
          {content.characters.map((char) => (
            <div key={char.iso15919} className="character-card">
              <div className="character-display">
                <span className="character-large">{char.malayalam}</span>
                <span className="character-iso">{char.iso15919}</span>
              </div>
              <div className="character-info">
                {char.audioPath && (
                  <button
                    className="audio-button"
                    onClick={() => {
                      const audio = new Audio(char.audioPath)
                      audio.play()
                    }}
                  >
                    🔊 Listen
                  </button>
                )}
                {char.description && (
                  <p className="character-description">{char.description}</p>
                )}
              </div>
              {char.isNew && <span className="new-badge">NEW</span>}
            </div>
          ))}
        </div>
      )}

      {content.insight && (
        <div className="insight-box">
          <h3>💡 Key Insight</h3>
          <p>{content.insight}</p>
        </div>
      )}

      {content.animation && (
        <div className="animation-placeholder">
          <p>📽️ Animation: {content.animation}</p>
        </div>
      )}

      <button className="btn-primary" onClick={onComplete}>
        Continue →
      </button>
    </div>
  )
}

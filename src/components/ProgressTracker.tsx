import './ProgressTracker.css'

interface Props {
  current: number
  total: number
  completedCount: number
}

export default function ProgressTracker({ current, total, completedCount }: Props) {
  const percentage = Math.round((completedCount / total) * 100)

  return (
    <div className="progress-tracker">
      <div className="progress-info">
        <span className="lesson-counter">
          Lesson {current} of {total}
        </span>
        <span className="completion-rate">
          {completedCount}/{total} completed
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="progress-percentage">{percentage}%</div>
    </div>
  )
}

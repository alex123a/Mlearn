export type LessonType = 'introduction' | 'lesson' | 'review' | 'special'
export type TaskType = 'discrimination' | 'identification' | 'transliteration' | 'handwriting' | 'recognition'
export type GuidanceLevel = 1 | 2 | 3 | 4 | 5

export interface Character {
  malayalam: string
  iso15919: string
  audioPath?: string
  description?: string
  isNew?: boolean
}

export interface DiscriminationTask {
  taskId: string
  sound1: string
  sound2: string
  correctAnswer: 'same' | 'different'
  hint?: string
}

export interface IdentificationTask {
  taskId: string
  sound: string
  options: Array<{
    text: string
    iso: string
    correct: boolean
  }>
}

export interface TransliterationTask {
  taskId: string
  character: string
  correctIso: string
  inputMethod: 'diacriticButtons' | 'keyboard'
}

export interface HandwritingTask {
  taskId: string
  character: string
  iso15919: string
  guidanceLevel: GuidanceLevel
  guidanceDescription?: string
}

export type Task = DiscriminationTask | IdentificationTask | TransliterationTask | HandwritingTask

export interface LessonContent {
  intro?: string
  characters?: Character[]
  insight?: string
  animation?: string
  visualPattern?: string
  tasks?: Task[]
  totalTasks?: number
  taskMix?: Array<{
    taskType: TaskType
    count: number
    itemPool?: string[]
    guidanceLevel?: GuidanceLevel
  }>
}

export interface Lesson {
  lessonId: string
  title: string
  type: LessonType
  taskType?: TaskType
  taskCount?: number
  guidanceLevel?: GuidanceLevel
  content: LessonContent
}

export interface Module {
  module: number
  title: string
  description: string
  vowelsMixedIn: string[]
  lessonSequence: Lesson[]
}

export interface UserProgress {
  completedLessons: string[]
  accuracy: Record<string, number>
  revision: string[]
}

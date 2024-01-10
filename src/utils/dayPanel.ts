interface dayName {
    color: string
    label: string
}

export const DayPanel: dayName[] = [
    { color: '#6699CC', label: '星期一' },
    { color: '#CC6699', label: '星期二' },
    { color: '#FF9966', label: '星期三' },
    { color: '#6699CC', label: '星期四' },
    { color: '#CC6699', label: '星期五' },
    { color: '#FF9966', label: '星期六' },
    { color: '#6699CC', label: '星期日' },
]

// 当前任务框的各种模式
export enum Status {
    Preview = 1, // 预览模式
    Drag = 2, // 拖拽模式
    Edit = 3 // 编辑模式
}
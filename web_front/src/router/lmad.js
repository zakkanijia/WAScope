const subRouter = [
    {
        path: '/lmad',
        name: 'lmad',
        redirect: '/lmad/analysis_list',
        children: [
            {
                path: 'analysis_list',
                name: 'analysis_list',
                component: () => import('@/views/lmad/AnalysisList.vue')
            },
            {
                path: 'analysis_result',
                name: 'analysis_result',
                component: () => import('@/views/lmad/AnalysisResult.vue')
            },
            {
                path: 'detection',
                name: 'detection',
                component: () => import('@/views/lmad/Detection.vue')
            }
        ]
    }
]
export default subRouter

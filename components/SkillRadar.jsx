import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts'

export default function SkillRadar({ data }){
  return (
    <div className="flex justify-center">
      <RadarChart cx={150} cy={120} outerRadius={80} width={260} height={260} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Proficiency" dataKey="A" stroke="#1f2937" fill="#1f2937" fillOpacity={0.6} />
      </RadarChart>
    </div>
  )
}

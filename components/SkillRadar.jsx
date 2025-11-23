import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from 'recharts'

export default function SkillRadar({ data }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-sm h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />

            {/* Tooltip added here */}
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                color: '#111827',
                padding: '8px',
                fontSize: '12px'
              }}
            />

            <Radar
              name="Proficiency"
              dataKey="A"
              stroke="#1f2937"
              fill="#1f2937"
              fillOpacity={0.6}
              isAnimationActive={true}
              animationBegin={0}
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

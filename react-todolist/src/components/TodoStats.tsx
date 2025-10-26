interface TodoStatsProps {
  total: number;
}

const TodoStats: React.FC<TodoStatsProps> = ({ total }) => {
  return (
    <div className='todo-stats'>
      <p>Total num is: {total}</p>
    </div>
  )
}

export default TodoStats;
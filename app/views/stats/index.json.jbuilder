json.array!(@stats) do |stat|
  json.extract! stat, :id, :metric, :value
  json.url stat_url(stat, format: :json)
end

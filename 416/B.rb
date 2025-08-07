require 'stringio'

input_data = <<~INPUT
  #..#.
INPUT

$stdin = StringIO.new(input_data)

s = gets.chomp
result = s.chars

i = 0
while i < s.length
  if s[i] == '.'

    result[i] = 'o'

    i += 1
    i += 1 while i < s.length && s[i] == '.'
  else
    i += 1
  end
end

puts result.join

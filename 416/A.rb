require 'stringio'

input_data = <<~INPUT
    9 6 8
  xoxxoxoox


INPUT

$stdin = StringIO.new(input_data)
_, l, r = gets.split.map(&:to_i)
s = gets

slice_str = s[l - 1...r]

message = if slice_str.chars.all? { |str| str == 'o' }
            'Yes'
          else
            'No'
          end

puts message
